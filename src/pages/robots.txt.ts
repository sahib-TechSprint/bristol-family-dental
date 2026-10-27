import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const url = site ?? new URL("https://bristol-family-dental.vercel.app");
  const base = url.toString().replace(/\/$/, "");

  // While PUBLIC_SITE_URL is unset or points at a vercel.app host the site is
  // in review: robots.txt disallows everything and every page carries a
  // noindex tag. Set PUBLIC_SITE_URL to the practice domain and redeploy to
  // open the site to search engines (see LAUNCH-GUIDE.md).
  const staging = url.hostname.endsWith(".vercel.app") || url.hostname === "localhost";
  const body = staging
    ? `User-agent: *\nDisallow: /\n\nSitemap: ${base}/sitemap.xml\n`
    : `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
