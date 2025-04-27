export type SupportedLocale = 'en' | 'nl' | 'uk' | 'ru';

export const supportedLocales: SupportedLocale[] = ['en', 'nl', 'uk', 'ru'];

export const defaultLocale: SupportedLocale = 'en';

export function getPreferredLocale(): SupportedLocale {
  if (typeof window === 'undefined') {
    return defaultLocale;
  }

  // Get browser's preferred languages
  const browserLanguages = navigator.languages || [navigator.language];

  // Try to find a matching supported locale
  for (const lang of browserLanguages) {
    const locale = lang.split('-')[0] as SupportedLocale;
    if (supportedLocales.includes(locale)) {
      return locale;
    }
  }

  return defaultLocale;
}

export function isValidLocale(locale: string): locale is SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale);
}
