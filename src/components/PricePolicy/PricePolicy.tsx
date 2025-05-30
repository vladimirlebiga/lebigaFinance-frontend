import React from 'react';
import {
  StyledParagraph,
  StyledHeader,
  StyledSection,
  StyledItems,
} from './Styled';
import { useTranslation } from '@/hooks/useTranslation';
import { useResponsive } from '@/contexts/ResponsiveContext';

export const PricePolicy = () => {
  const { t } = useTranslation();
  const { isMobile } = useResponsive();
  return (
    <StyledSection isMobile={isMobile} id="price-policy">
      <article>
        <StyledHeader>{t('pricePolicy.title')}</StyledHeader>
        <StyledParagraph>{t('pricePolicy.firstConsultation')}</StyledParagraph>
        <StyledParagraph>{t('pricePolicy.standardRate')}</StyledParagraph>
        <StyledParagraph>{t('pricePolicy.paymentTerms')}</StyledParagraph>
        <StyledParagraph>{t('pricePolicy.timeTracking')}</StyledParagraph>
        <ul>
          <StyledItems>{t('pricePolicy.timeTrackingItems')}</StyledItems>
          <StyledItems>{t('pricePolicy.timeTrackingItemsTwo')}</StyledItems>
        </ul>
        <StyledParagraph>
          {t('pricePolicy.preliminaryEstimation')}
        </StyledParagraph>
      </article>
    </StyledSection>
  );
};
