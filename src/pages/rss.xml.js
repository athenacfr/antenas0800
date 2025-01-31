import { getCollection } from 'astro:content';
import { DESCRIPTIONS, TITLES } from '@/consts';
import rss from '@astrojs/rss';

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
