import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: false,
  },
  integrations: [],
});