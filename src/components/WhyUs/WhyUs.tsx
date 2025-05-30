import React from 'react';
import {
  StyledParagraph,
  StyledText,
  StyledHeader,
  StyledSection,
} from './Styled';
import { useTranslation } from '@/hooks/useTranslation';
import { useResponsive } from '@/contexts/ResponsiveContext';

export const WhyUs = () => {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();
  return (
    <StyledSection isMobile={isMobile} id="why-us">
      <article>
        <StyledHeader>{t('whyUs.title')}</StyledHeader>
        <StyledText></StyledText>
        <StyledParagraph>{t('whyUs.text')}</StyledParagraph>
        <StyledText>{t('whyUs.titleOne')}</StyledText>
        <StyledParagraph>{t('whyUs.descriptionOne')}</StyledParagraph>
        <StyledText>{t('whyUs.titleTwo')}</StyledText>
        <StyledParagraph>{t('whyUs.descriptionTwo')}</StyledParagraph>
        <StyledText> {t('whyUs.titleThree')}</StyledText>
        <StyledParagraph>{t('whyUs.descriptionThree')}</StyledParagraph>
        <StyledText>{t('whyUs.titleFour')}</StyledText>
        <StyledParagraph>{t('whyUs.descriptionFour')}</StyledParagraph>
        <StyledText>{t('whyUs.titleFive')}</StyledText>
        <StyledParagraph>{t('whyUs.descriptionFive')}</StyledParagraph>
      </article>
    </StyledSection>
  );
};
