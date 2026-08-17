import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL("https://bristol-family-dental.vercel.app"))
    .toString()
    .replace(/\/$/, "");

  const body = `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
