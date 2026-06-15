import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postSlug } from '../lib/utils';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'Than Van Hong Son — Blog',
    description: 'Notes on AI engineering, computer vision and building products.',
    site: context.site!,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((p) => ({
        title: p.data.title,
        description: p.data.description,
        pubDate: p.data.pubDate,
        link: `/${p.data.lang === 'vi' ? 'vi/' : ''}blog/${postSlug(p.id)}/`,
      })),
  });
}
