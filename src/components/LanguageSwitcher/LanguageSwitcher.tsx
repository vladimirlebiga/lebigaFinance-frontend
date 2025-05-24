'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { supportedLocales } from '@/utils/languageNegotiator';
import {
  StyledIcon,
  StyledLang,
  StyledLangButtonWrapper,
  StyledLangWrapper,
  StyledEng,
  StyledUkr,
  StyledNed,
  StyledRus,
} from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

export function LanguageSwitcher({
  onLinkClick,
}: {
  onLinkClick?: () => void;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useResponsive();

  // Handle mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load saved language preference on mount
  useEffect(() => {
    if (mounted) {
      const savedLocale = localStorage.getItem('language');
      if (savedLocale && supportedLocales.includes(savedLocale as any)) {
        handleLanguageChange(savedLocale);
      }
    }
  }, [mounted]);

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
    localStorage.setItem('language', newLocale);

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
    <StyledLangButtonWrapper
      isMobile={isMobile}
      ref={wrapperRef}
      onClick={onLinkClick}
    >
      <StyledLang onClick={() => setIsOpen(!isOpen)}>
        <StyledIcon />
      </StyledLang>
      {isOpen && (
        <StyledLangWrapper isMobile={isMobile}>
          <StyledNed
            isMobile={isMobile}
            onClick={() => handleLanguageChange('nl')}
          >
            NED
          </StyledNed>
          <StyledUkr
            isMobile={isMobile}
            onClick={() => handleLanguageChange('uk')}
          >
            УКР
          </StyledUkr>
          <StyledEng
            isMobile={isMobile}
            onClick={() => handleLanguageChange('en')}
          >
            ENG
          </StyledEng>
          <StyledRus
            isMobile={isMobile}
            onClick={() => handleLanguageChange('ru')}
          >
            РУС
          </StyledRus>
        </StyledLangWrapper>
      )}
    </StyledLangButtonWrapper>
  );
}
