import { ui, defaultLang, type UIKey } from './ui';

export type Lang = 'en' | 'vi';
export const languages: Record<Lang, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
};

/** Detect the active language from the current URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg === 'vi') return 'vi';
  return defaultLang;
}

/** Returns a `t('key')` translator bound to the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a locale-aware path. EN is at root (`/about`), VI is prefixed
 * (`/vi/about`). Pass paths WITHOUT a leading-locale segment.
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = '/' + path.replace(/^\/+/, '').replace(/\/+$/, '');
  const normalized = clean === '/' ? '/' : clean;
  if (lang === 'vi') {
    return normalized === '/' ? '/vi/' : `/vi${normalized}/`;
  }
  return normalized === '/' ? '/' : `${normalized}/`;
}

/** Given the current URL, return the equivalent path in the other language. */
export function getAlternatePath(url: URL, target: Lang): string {
  let path = url.pathname;
  // strip an existing vi prefix
  path = path.replace(/^\/vi(\/|$)/, '/');
  const bare = path.replace(/^\/+/, '').replace(/\/+$/, '');
  return localizePath(bare, target);
}
