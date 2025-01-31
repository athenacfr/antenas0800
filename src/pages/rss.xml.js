import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { DESCRIPTIONS, TITLES } from '@/consts';

export async function GET(context) {
  const posts = await getCollection('grafia');
  return rss({
    title: TITLES.index,
    description: DESCRIPTIONS.index,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/grafia/${post.id}/`,
    })),
  });
}
