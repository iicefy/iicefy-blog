import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), react()],
  vite: {
    plugins: [svgr(), tailwindcss()],
  },
});
