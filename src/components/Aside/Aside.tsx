'use client';
import React from 'react';
import {
  StyledAside,
  StyledAsideWrapper,
  StyledWrapper,
  StyledIconWrapper,
  HeaderTitle,
  StyledSpan,
  StyledSticky,
  StyledNewImg,
  StyledNewImgDoc,
  StyledNewImgOrange,
  StyledLangButtonWrapper,
} from './Styled';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import Link from 'next/link';
import { Footer } from '../Footer/Footer';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from '@/hooks/useTranslation';

export const Aside: React.FC = () => {
  const { t } = useTranslation();

  return (
    <StyledAside>
      <StyledNewImgOrange />
      <StyledNewImg />
      <StyledNewImgDoc />
      <StyledSticky>
        <StyledAsideWrapper>
          <h2>{t('aside.title')}</h2>
          <StyledSpan>24/7</StyledSpan>
        </StyledAsideWrapper>

        <StyledIconWrapper>
          <div>
            <HeaderTitle />
          </div>
          <StyledWrapper>
            <MailSharpIcon style={{ marginRight: '8px' }} />
            <a href="mailto:finance@lebiga.nl">finance@lebiga.nl</a>
          </StyledWrapper>
          <StyledWrapper>
            <PhoneSharpIcon style={{ marginRight: '8px' }} />
            <a href="tel:+31620876606">+31 (0) 6 20 87 66 06</a>
          </StyledWrapper>
          <StyledWrapper>
            <ContactMailSharpIcon style={{ marginRight: '8px' }} />
            <Link href="#contact">{t('aside.contactUs')}</Link>
          </StyledWrapper>
        </StyledIconWrapper>
        {/* Language selector with click-outside detection */}
        <StyledLangButtonWrapper>
          <LanguageSwitcher />
        </StyledLangButtonWrapper>
        <Footer />
      </StyledSticky>
    </StyledAside>
  );
};
