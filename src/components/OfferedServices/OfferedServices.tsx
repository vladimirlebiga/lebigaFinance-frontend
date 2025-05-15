import React from 'react';
import {
  StyledParagraph,
  StyledText,
  StyledHeader,
  StyledSection,
} from './Styled';
import { useTranslation } from '@/hooks/useTranslation';

export const OfferedServices = () => {
  const { t } = useTranslation();
  return (
    <StyledSection id="services">
      <article>
        <StyledHeader>{t('offeredServices.title')}</StyledHeader>
        <StyledText>{t('offeredServices.textOne')}</StyledText>
        <StyledParagraph>{t('offeredServices.paragraphOne')}</StyledParagraph>
        <StyledText>{t('offeredServices.textTwo')}</StyledText>
        <StyledParagraph>{t('offeredServices.paragraphTwo')}</StyledParagraph>
        <StyledText>{t('offeredServices.textThree')}</StyledText>
        <StyledParagraph>{t('offeredServices.paragraphThree')}</StyledParagraph>
        <StyledText>{t('offeredServices.textFour')}</StyledText>
        <StyledParagraph>{t('offeredServices.paragraphFour')}</StyledParagraph>
        <StyledText>{t('offeredServices.textFive')}</StyledText>
        <StyledParagraph>{t('offeredServices.paragraphFive')}</StyledParagraph>
        <StyledText>{t('offeredServices.textSix')}</StyledText>
        <StyledParagraph>{t('offeredServices.paragraphSix')}</StyledParagraph>
      </article>
    </StyledSection>
  );
};
