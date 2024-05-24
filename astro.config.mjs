import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://master--blog-astro4455.netlify.app/",
  integrations: [preact()]
});