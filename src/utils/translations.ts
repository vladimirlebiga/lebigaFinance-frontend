// import { supportedLocales } from './languageNegotiator';

type TranslationValue = string | Record<string, string>;

export interface Translations {
  [key: string]: TranslationValue;
}

// Cache for loaded translations
const translationCache: Record<string, Translations> = {};

export async function loadTranslations(locale: string): Promise<Translations> {
  // Return cached translations if available
  if (translationCache[locale]) {
    return translationCache[locale];
  }

  try {
    // Load the translation file
    const translations = (await import(`../../messages/${locale}.json`)) as {
      default: Translations;
    };
    translationCache[locale] = translations.default;
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for locale: ${locale}`, error);
    return {};
  }
}

export function getTranslation(
  translations: Translations,
  key: string,
  params?: Record<string, string>,
): string {
  const keys = key.split('.');
  let value: unknown = translations;

  // Navigate through nested keys
  for (const k of keys) {
    if (typeof value === 'object' && value !== null && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key; // Return the key if translation not found
    }
  }

  // Handle string values
  if (typeof value === 'string') {
    if (params) {
      return value.replace(
        /\{(\w+)\}/g,
        (match, param: string) => params[param] || match,
      );
    }
    return value;
  }

  return key; // Return the key if translation not found
}
