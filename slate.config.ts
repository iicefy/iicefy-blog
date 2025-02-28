/*
 * @file Theme configuration
 */

import { defineConfig } from "@/helper/config-helper";

export default defineConfig({
  lang: "en-US",
  site: "",
  title: "iicefy's Blog",
  description: "",
  lastModified: true,
  readTime: true,
  footer: {
    copyright: "",
  },
  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/iicefy/iicefy-blog",
    },
  ],
});
