import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://theara.dev',
  output: 'static',
  adapter: cloudflare({
    imageService: 'passthrough',
  }),
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
