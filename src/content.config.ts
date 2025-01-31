import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const site = defineCollection({
  loader: glob({ base: './src/content/site', pattern: '**/*.{md,mdx}' }),
});

const grafia = defineCollection({
  loader: glob({ base: './src/content/grafia', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      thumbnail: image().optional(),
      date: z.coerce.date(),
      private: z.coerce.boolean().default(false),
    }),
});

export const collections = { site, grafia };
