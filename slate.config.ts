/*
 * @file Theme configuration
 */

import { defineConfig } from "@/helper/config-helper";

const slateCongig = defineConfig({
  lang: "en-US",
  site: "iicefy.me",
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

export default slateCongig;