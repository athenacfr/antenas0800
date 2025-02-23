import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const antenas = defineCollection({
  loader: glob({ base: './src/content/antenas', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
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

export const collections = { antenas };
