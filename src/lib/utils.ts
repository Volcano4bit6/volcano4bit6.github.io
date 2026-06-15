import type { Lang } from '../i18n/utils';

/** Format an ISO/Date into a localized "15 Jun 2026" style string. */
export function formatDate(date: Date, lang: Lang = 'en'): string {
  return new Intl.DateTimeFormat(lang === 'vi' ? 'vi-VN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

/** Sort blog-collection entries by pubDate, newest first. */
export function sortByDateDesc<T extends { data: { pubDate: Date } }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** The slug used in URLs, stripped of the `en/` or `vi/` locale prefix. */
export function postSlug(id: string): string {
  return id.replace(/^(en|vi)\//, '');
}
