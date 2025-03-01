import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import remarkGemoji from "remark-gemoji";
import remarkMath from "remark-math";
import codeImport from "remark-code-import";
import remarkBlockContainers from "remark-block-containers";
import astroExpressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";

function computedIntegrations() {
  const result = [astroExpressiveCode(), mdx(), react(), sitemap("iicefy.me")];

  return result;
}

export default defineConfig({
  site: "https://example.com",
  integrations: computedIntegrations(),
  vite: {
    plugins: [svgr(), tailwindcss()],
  },
  markdown: {
    remarkPlugins: [
      remarkGemoji,
      remarkMath,
      codeImport,
      remarkBlockContainers,
    ],
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "tokyo-night",
      wrap: true,
    },
  },
});
