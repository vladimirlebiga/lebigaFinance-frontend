'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { supportedLocales } from '@/utils/languageNegotiator';
import { loadTranslations } from '@/utils/translations';

interface LanguageContextType {
  locale: string;
  setLocale: (locale: string) => void;
  translations: Record<string, any>;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  translations: {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocale] = useState('en');
  const [translations, setTranslations] = useState<Record<string, any>>({});

  // Extract locale from URL
  useEffect(() => {
    const segments = pathname.split('/');
    const urlLocale = segments[1];
    if (supportedLocales.includes(urlLocale as any)) {
      setLocale(urlLocale);
    }
  }, [pathname]);

  // Load translations when locale changes
  useEffect(() => {
    async function load() {
      const loadedTranslations = await loadTranslations(locale);
      setTranslations(loadedTranslations);
    }
    load();
  }, [locale]);

  // Update document language
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
