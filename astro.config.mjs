// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

// Use || rather than ?? so a blank env var still falls back to the default.
const site =
  (process.env.PUBLIC_SITE_URL || "").trim() ||
  "https://bristol-family-dental.vercel.app";

// Fully static site: every page is plain HTML, there are no server
// endpoints, and Vercel serves the dist/ folder directly. Redirects and
// response headers for production live in vercel.json; the redirects below
// keep the same paths working in local development.
export default defineConfig({
  site,
  output: "static",
  trailingSlash: "never",
  redirects: {
    "/espanol": "/es",
    "/book": "/contact",
    "/es/book": "/es/contact",
  },
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
