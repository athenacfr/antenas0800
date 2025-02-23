import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import { z } from 'astro/zod';

// https://astro.build/config
export default defineConfig({
  site: 'https://antenas0800.com',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  markdown: {
    shikiConfig: { theme: 'github-dark-high-contrast' },
  },
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      PUBLIC_POSTHOG_KEY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_POSTHOG_HOST: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
        default: 'https://us.i.posthog.com',
      }),
    },
  },
});
