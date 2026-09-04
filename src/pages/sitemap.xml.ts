import type { APIRoute } from "astro";

// Built at deploy time. Every English page has a Spanish counterpart under
// /es/, and each pair carries reciprocal hreflang alternates.

const pages = ["", "services", "about", "new-patients", "insurance", "book", "contact", "privacy", "accessibility"];

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL("https://bristol-family-dental.vercel.app"))
    .toString()
    .replace(/\/$/, "");
  const today = new Date().toISOString().split("T")[0];

  const entry = (loc: string, enHref: string, esHref: string) =>
    `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <xhtml:link rel="alternate" hreflang="en" href="${enHref}" />\n    <xhtml:link rel="alternate" hreflang="es" href="${esHref}" />\n    <xhtml:link rel="alternate" hreflang="x-default" href="${enHref}" />\n  </url>`;

  const urls = pages
    .flatMap((page) => {
      const enLoc = page ? `${base}/${page}/` : `${base}/`;
      const esLoc = page ? `${base}/es/${page}/` : `${base}/es/`;
      return [entry(enLoc, enLoc, esLoc), entry(esLoc, enLoc, esLoc)];
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
