import React from 'react';
import { StyledParagraph, StyledSection, StyledHeader } from './Styled';
import { useTranslation } from '@/hooks/useTranslation';

export const AboutUs = () => {
  const { t } = useTranslation();
  console.log(t('about.descriptionOne'));
  return (
    <StyledSection id="about">
      <article>
        <StyledHeader>{t('about.title')}</StyledHeader>
        <StyledParagraph>{t('about.descriptionOne')}</StyledParagraph>
        <StyledParagraph>{t('about.descriptionTwo')}</StyledParagraph>
        <StyledParagraph>{t('about.descriptionThree')}</StyledParagraph>
        <StyledParagraph>{t('about.descriptionFour')}</StyledParagraph>
      </article>
    </StyledSection>
  );
};
