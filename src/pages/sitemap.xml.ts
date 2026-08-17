import type { APIRoute } from "astro";

// Built at deploy time from the page list below. The home page and the Spanish
// essentials page carry reciprocal hreflang alternates.

const pages = ["", "services", "about", "new-patients", "insurance", "book", "contact", "espanol"];

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL("https://bristol-family-dental.vercel.app"))
    .toString()
    .replace(/\/$/, "");
  const today = new Date().toISOString().split("T")[0];

  const urls = pages
    .map((page) => {
      const loc = page ? `${base}/${page}` : `${base}/`;
      const alternates =
        page === "" || page === "espanol"
          ? `\n    <xhtml:link rel="alternate" hreflang="en" href="${base}/" />\n    <xhtml:link rel="alternate" hreflang="es" href="${base}/espanol" />`
          : "";
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>${alternates}\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
