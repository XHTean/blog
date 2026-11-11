import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://xhtean.github.io",
  base: "/blog",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !page.includes("/admin") })],
  markdown: {
    shikiConfig: { theme: "github-dark", wrap: true },
  },
});
