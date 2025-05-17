'use client';
import React from 'react';
import { Nav } from './Nav/Nav';
import { StyledHeader, HeaderContent } from './Styled';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { StyledLangButtonWrapper } from '../LanguageSwitcher/Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

export const Header = () => {
  const { isMobile } = useResponsive();
  return (
    <StyledHeader>
      <HeaderContent>
        <Nav />
        {isMobile && (
          <StyledLangButtonWrapper>
            <LanguageSwitcher />
          </StyledLangButtonWrapper>
        )}
      </HeaderContent>
    </StyledHeader>
  );
};
