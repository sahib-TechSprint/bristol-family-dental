// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

// Use || rather than ?? so a blank env var still falls back to the default.
const site =
  (process.env.PUBLIC_SITE_URL || "").trim() ||
  "https://bristol-family-dental.vercel.app";

export default defineConfig({
  redirects: {
    "/espanol": "/es/",
  },
  site,
  output: "static",
  adapter: vercel(),
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
