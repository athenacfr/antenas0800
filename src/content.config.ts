import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const antenas = defineCollection({
  loader: glob({ base: './src/content/antenas', pattern: '**/*.{md,mdx}' }),
  schema: () =>
    z.object({
      year: z.coerce.number().int().optional(),
      public: z.coerce.boolean().catch(false),
    }),
});

export const collections = { antenas };
