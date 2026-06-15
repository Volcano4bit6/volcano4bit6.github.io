import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

/**
 * Remark plugin that injects `minutesRead` into a post's frontmatter so
 * it can be read back via `render(entry)` -> remarkPluginFrontmatter.
 */
export function remarkReadingTime() {
  return function (tree: any, { data }: any) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    data.astro.frontmatter.minutesRead = Math.max(1, Math.round(readingTime.minutes));
  };
}
