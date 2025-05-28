'use client';
import React from 'react';
import {
  StyledAside,
  StyledSticky,
  StyledNewImg,
  StyledNewImgDoc,
  StyledNewImgOrange,
  StyledLangButtonWrapper,
} from './Styled';
import { Footer } from '../Footer/Footer';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { useResponsive } from '@/contexts/ResponsiveContext';
import { Contact } from '../Contact/Contact';

export const Aside: React.FC = () => {
  const { isMobile } = useResponsive();
  return (
    <StyledAside>
      <StyledNewImgOrange />
      <StyledNewImg />
      <StyledNewImgDoc />
      <StyledSticky>
        {!isMobile && <Contact />}
        {/* Language selector with click-outside detection */}
        {!isMobile && (
          <StyledLangButtonWrapper>
            <LanguageSwitcher />
          </StyledLangButtonWrapper>
        )}
        {!isMobile && <Footer />}
      </StyledSticky>
    </StyledAside>
  );
};
