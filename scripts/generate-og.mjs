// Generates the branded Open Graph template and the raster favicons from the
// design system: navy field, paper wordmark, cobalt accent, tagline, and phone.
// Run with: npm run generate:og

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0E2A47"/>
  <rect x="28" y="28" width="1144" height="574" fill="none" stroke="#1D5FC2" stroke-opacity="0.55" stroke-width="2" rx="24"/>
  <text x="80" y="150" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="26" font-weight="bold" letter-spacing="6" fill="#D7E3F4" fill-opacity="0.9">YOUR CARE IS OUR CONCERN</text>
  <text x="76" y="330" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="118" font-weight="bold" letter-spacing="-2" fill="#FBFAF7">BRISTOL FAMILY</text>
  <text x="76" y="452" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="118" font-weight="bold" letter-spacing="-2" fill="#FBFAF7">DENTAL CENTER</text>
  <text x="80" y="556" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="30" font-weight="bold" fill="#D7E3F4" fill-opacity="0.95">Santa Ana, CA</text>
  <text x="1120" y="556" text-anchor="end" font-family="Liberation Sans, DejaVu Sans, sans-serif" font-size="30" font-weight="bold" fill="#D7E3F4" fill-opacity="0.95">(714) 540-7101</text>
</svg>
`;

await mkdir(path.join(root, "public/og"), { recursive: true });

await sharp(Buffer.from(ogSvg)).png().toFile(path.join(root, "public/og/og-default.png"));
console.log("Wrote public/og/og-default.png");

const faviconSvg = await readFile(path.join(root, "public/favicon.svg"));

await sharp(faviconSvg, { density: 288 })
  .resize(32, 32)
  .png()
  .toFile(path.join(root, "public/favicon-32.png"));
console.log("Wrote public/favicon-32.png");

await sharp(faviconSvg, { density: 288 })
  .resize(180, 180)
  .png()
  .toFile(path.join(root, "public/apple-touch-icon.png"));
console.log("Wrote public/apple-touch-icon.png");

await writeFile(
  path.join(root, "public/og/.gitkeep"),
  ""
);
