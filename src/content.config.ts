import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const site = defineCollection({
  loader: glob({ base: './src/content/site', pattern: '**/*.{md,mdx}' }),
});

const grafia = defineCollection({
  loader: glob({ base: './src/content/grafia', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { site, grafia };
