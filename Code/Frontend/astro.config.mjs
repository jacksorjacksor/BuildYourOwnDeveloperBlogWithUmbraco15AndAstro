// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://your-domain-here.com',

  image: {
    // Used for all Markdown images; not configurable per-image
    // Used for all `<Image />` and `<Picture />` components unless overridden with a prop
    experimentalLayout: 'constrained',
  },

  experimental: {
    responsiveImages: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [expressiveCode()],
});