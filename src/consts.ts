export const PATHS = {
  index: '/',
  grafia: {
    index: '/grafia',
    post: (slug: string) => `/grafia/${slug}`,
  },
} as const;

export const TITLES = {
  index: 'antenas',
  grafia: {
    index: 'grafia',
    post: (title: string) => `grafia - ${title}`,
  },
} as const;

export const DESCRIPTIONS = {
  index: "antena's webarchive!",
} as const;
