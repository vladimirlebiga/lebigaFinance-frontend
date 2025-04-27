'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { supportedLocales } from '@/utils/languageNegotiator';
//import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import {
  StyledIcon,
  StyledLang,
  StyledLangButtonWrapper,
  StyledLangOption,
  StyledLangWrapper,
  StyledCurrentLang,
} from './Styled';

const languageLabels: Record<string, string> = {
  en: 'ENG',
  nl: 'NED',
  uk: 'УКР',
  ru: 'РУС',
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load saved language preference on mount
  useEffect(() => {
    if (mounted) {
      const savedLocale = localStorage.getItem('language');
      if (savedLocale && supportedLocales.includes(savedLocale as any)) {
        setLocale(savedLocale as any);
      }
    }
  }, [mounted, setLocale]);

  // Save language preference when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', locale);
    }
  }, [locale, mounted]);

  useEffect(() => {
    if (!mounted) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mounted]);

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale as any);
    setIsOpen(false);

    // Update the URL with the new locale
    const segments = pathname.split('/');
    const currentLocale = segments[1];

    if (supportedLocales.includes(currentLocale as any)) {
      // Replace the locale segment
      segments[1] = newLocale;
      router.push(segments.join('/'));
    } else {
      // Add the locale segment
      router.push(`/${newLocale}${pathname}`);
    }
  };

  // Prevent hydration issues by not rendering until mounted
  if (!mounted) {
    return null;
  }

  return (
    <StyledLangButtonWrapper ref={wrapperRef}>
      <StyledLang onClick={() => setIsOpen(!isOpen)}>
        <StyledIcon />
        <StyledCurrentLang>{languageLabels[locale]}</StyledCurrentLang>
      </StyledLang>
      {isOpen && (
        <StyledLangWrapper>
          {supportedLocales.map((lang) => (
            <StyledLangOption
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              active={locale === lang}
            >
              {languageLabels[lang]}
            </StyledLangOption>
          ))}
        </StyledLangWrapper>
      )}
    </StyledLangButtonWrapper>
  );
}
