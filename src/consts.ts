export const PATHS = {
  index: '/',
  slug: (slug: string) => `/${slug}`,
} as const;

export const TITLES = {
  index: 'antenas',
  slug: (title: string) => `antenas · ${title}`,
} as const;

export const DESCRIPTIONS = {
  index: "antena's webarchive!",
} as const;
