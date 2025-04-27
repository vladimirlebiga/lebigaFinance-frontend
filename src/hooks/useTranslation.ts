import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  loadTranslations,
  getTranslation,
  Translations,
} from '@/utils/translations';

export function useTranslation() {
  const { locale }: { locale: string } = useLanguage();
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    async function load() {
      const loadedTranslations = await loadTranslations(locale);
      setTranslations(loadedTranslations);
    }
    load();
  }, [locale]);

  return {
    t: (key: string, params?: Record<string, string>) =>
      getTranslation(translations, key, params),
    locale,
  };
}
