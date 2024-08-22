import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "always",
  },
  compressHTML: true,
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: netlify(),
  integrations: [tailwind()],
});
