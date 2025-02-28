import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), react(), mdx()],
  vite: {
    plugins: [svgr(), tailwindcss()],
  },
});