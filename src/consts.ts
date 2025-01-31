export const PATHS = {
  index: '/',
  arquivos: {
    index: '/arquivos',
    slug: (slug: string) => `/arquivos/${slug}`,
  },
} as const;

export const TITLES = {
  index: 'antenas',
  arquivos: {
    index: 'arquivos',
    slug: (title: string) => `arquivos - ${title}`,
  },
} as const;

export const DESCRIPTIONS = {
  index: "antena's webarchive!",
} as const;
