// Quality gates for the built site. Run `npm run build` first, then
// `npm run audit`. The script serves dist/ with Astro's preview server and
// checks every page:
//
//   - axe-core (WCAG 2.0/2.1/2.2 A and AA plus best practice rules) at
//     360, 768, 1024, 1440, and 1920 wide, with motion reduced
//   - horizontal overflow at each width
//   - internal links and anchors resolve
//   - one h1, a title, a description under 156 characters, a canonical, an
//     html lang attribute, and hreflang alternates on every page
//   - every image has alt text, width, and height, and its file exists
//   - every JSON-LD block parses
//   - integrity greps: dashes, booking paths, superlatives, price language,
//     and the words the client asked to keep off the site
//   - full page screenshots at 360 and 1440 into scripts/audit-out/ (ignored)
//
// Exit code 1 when anything fails, so it can run in CI.

import { chromium } from "playwright";
import { createRequire } from "node:module";
import { readFileSync, readdirSync, statSync, mkdirSync, existsSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const out = join(root, "scripts", "audit-out");
const port = 4399;
const base = `http://localhost:${port}`;
const require = createRequire(import.meta.url);
const axeSource = readFileSync(require.resolve("axe-core/axe.min.js"), "utf8");

if (!existsSync(join(dist, "index.html"))) {
  console.error("dist/ is missing. Run `npm run build` first.");
  process.exit(1);
}
mkdirSync(out, { recursive: true });

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (name.endsWith(".html")) acc.push(p);
  }
  return acc;
}

const files = walk(dist);
const isStub = (r) => /^\/(book|es\/book|espanol)(\/|$)/.test(r);
const routeOf = (f) =>
  f.slice(dist.length).replace(/\\/g, "/").replace(/index\.html$/, "").replace(/\.html$/, "").replace(/\/$/, "") || "/";
const routes = files.map(routeOf).filter((r) => !isStub(r) && r !== "/404");

const findings = [];
const note = (kind, route, msg) => findings.push({ kind, route, msg });

// Words that must not appear in visible text. "best" and "free" are checked
// as superlative or price claims by hand; the two phrases allowed today
// ("do our best", "works best for you", "error-free") are excluded below.
const banned = [
  { re: /\u2013|\u2014/u, why: "em or en dash" },
  { re: /(?<!do our |works )\bbest\b/i, why: "superlative" },
  { re: /top rated|painless|guaranteed|\binstant\b|\bpermanent\b|safest|#1\b|\bleading\b/i, why: "superlative or outcome claim" },
  { re: /(?<!error-)\bfree\b|\$\d|discount/i, why: "price language" },
  { re: /denti-?cal|medi-cal\b/i, why: "Denti-Cal is not shown until the office is cleared" },
  { re: /x-ray|radiograf/i, why: "X-ray wording removed at client request" },
  { re: /\bimplant/i, why: "implants are not offered" },
  { re: /begino/i, why: "former dentist" },
  { re: /\bClaude\b|ChatGPT|Midjourney|Higgsfield|Copilot/i, why: "tool name" },
];

for (const f of files) {
  const route = routeOf(f);
  if (isStub(route)) continue;
  const html = readFileSync(f, "utf8");
  const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  for (const { re, why } of banned) {
    const m = text.match(re);
    if (m) note("grep", route, `${why}: "${text.slice(Math.max(0, m.index - 40), m.index + 40).replace(/\s+/g, " ").trim()}"`);
  }
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) note("headings", route, `${h1s} h1 elements`);
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  if (!title) note("seo", route, "missing title");
  if (title.length > 65) note("seo", route, `title is ${title.length} characters`);
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  if (!desc) note("seo", route, "missing description");
  if (desc.length > 155) note("seo", route, `description is ${desc.length} characters`);
  if (route !== "/404" && !/<link rel="canonical"/.test(html)) note("seo", route, "missing canonical");
  if (!/<html lang="(en|es)"/.test(html)) note("seo", route, "missing html lang");
  if (route !== "/404" && !/hreflang="es"/.test(html)) note("seo", route, "no hreflang alternates");
  for (const img of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\balt=/.test(img)) note("images", route, `img without alt: ${img.slice(0, 80)}`);
    if (!/\bwidth=/.test(img) || !/\bheight=/.test(img)) note("images", route, `img without width and height: ${img.slice(0, 80)}`);
    const src = (img.match(/\bsrc="([^"]+)"/) || [])[1];
    if (src && src.startsWith("/") && !existsSync(join(dist, src.split("?")[0]))) note("images", route, `missing image file ${src}`);
  }
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      note("jsonld", route, `invalid JSON-LD: ${e.message}`);
    }
  }
  for (const m of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = m[1];
    if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
    const [path, hash] = href.split("#");
    const clean = path.replace(/\/$/, "") || "/";
    const candidates = [clean === "/" ? join(dist, "index.html") : join(dist, clean, "index.html"), join(dist, clean), join(dist, clean + ".html")];
    const target = candidates.find((c) => existsSync(c) && statSync(c).isFile());
    if (!target) {
      note("links", route, `broken link ${href}`);
      continue;
    }
    if (hash && !new RegExp(`id="${hash}"`).test(readFileSync(target, "utf8"))) note("links", route, `missing anchor ${href}`);
  }
}

// Serve dist/ the way production does (no trailing slashes, real 404 page).
const server = spawn(process.platform === "win32" ? "npx.cmd" : "npx", ["astro", "preview", "--port", String(port), "--host", "127.0.0.1"], {
  cwd: root,
  stdio: "ignore",
  shell: process.platform === "win32",
});
const started = Date.now();
while (Date.now() - started < 20000) {
  try {
    const res = await fetch(base + "/");
    if (res.ok) break;
  } catch {}
  await new Promise((r) => setTimeout(r, 300));
}

const widths = [360, 768, 1024, 1440, 1920];
let axeRuns = 0;
let axeViolations = 0;
const browser = await chromium.launch();
try {
  for (const route of [...routes, "/404"]) {
    for (const width of widths) {
      const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (e) => errors.push(e.message));
      page.on("console", (m) => {
        // The 404 page itself answers with a 404 status, which the console reports.
        if (m.type() === "error" && !(route === "/404" && /status of 404/.test(m.text()))) errors.push(m.text());
      });
      await page.goto(base + (route === "/404" ? "/this-page-does-not-exist" : route), { waitUntil: "networkidle" });
      await page.waitForTimeout(300);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (overflow > 1) note("overflow", route, `${width}px: horizontal overflow of ${overflow}px`);
      await page.addScriptTag({ content: axeSource });
      const result = await page.evaluate(
        async () =>
          await window.axe.run(document, {
            runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] },
          })
      );
      axeRuns += 1;
      axeViolations += result.violations.length;
      for (const v of result.violations) note("axe", route, `${width}px: ${v.id} (${v.impact}) x${v.nodes.length}: ${v.nodes[0].target.join(" ")}`);
      for (const e of errors) note("console", route, `${width}px: ${e}`);
      if (width === 360 || width === 1440) {
        const name = (route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "-")) + `-${width}.png`;
        await page.screenshot({ path: join(out, name), fullPage: true });
      }
      await context.close();
    }
  }
} finally {
  await browser.close();
  server.kill();
}

console.log(`Pages: ${routes.length + 1}. axe runs: ${axeRuns}. axe violations: ${axeViolations}.`);
console.log(`Screenshots: ${out}`);
if (findings.length === 0) {
  console.log("All gates passed.");
  process.exit(0);
}
console.log(`Findings: ${findings.length}`);
for (const f of findings) console.log(`- [${f.kind}] ${f.route}: ${f.msg}`);
process.exit(1);
