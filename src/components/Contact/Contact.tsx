import React from 'react';
import {
  StyledAsideWrapper,
  StyledIconWrapper,
  StyledWrapper,
  StyledSpan,
  StyledSection,
} from './Styled';
import { HeaderTitle } from '../Aside/Styled';
import MailSharpIcon from '@mui/icons-material/MailSharp';
import PhoneSharpIcon from '@mui/icons-material/PhoneSharp';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import Link from 'next/link';
import { useTranslation } from '@/hooks/useTranslation';
import { useResponsive } from '@/contexts/ResponsiveContext';

export const Contact = () => {
  const { isMobile } = useResponsive();
  const { t } = useTranslation();
  return (
    <StyledSection isMobile={isMobile} id="contact">
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
          <Link href="#contactForm">{t('aside.contactUs')}</Link>
        </StyledWrapper>
      </StyledIconWrapper>
    </StyledSection>
  );
};
