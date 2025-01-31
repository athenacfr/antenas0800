import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const site = defineCollection({
  loader: glob({ base: './src/content/site', pattern: '**/*.{md,mdx}' }),
});

const grafia = defineCollection({
  loader: glob({ base: './src/content/grafia', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      image: image().optional(),
      date: z.coerce
        .date()
        .transform((date) => {
          date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
          return date;
        })
        .optional(),
      public: z.coerce.boolean().catch(false),
    }),
});

export const collections = { site, grafia };
