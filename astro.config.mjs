import { defineConfig } from "astro/config";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  markdown: {
    // Can be 'shiki' (default), 'prism' or false to disable highlighting
    syntaxHighlight: false,
  },
  integrations: [mdx({
    drafts: false,
  })],
});
