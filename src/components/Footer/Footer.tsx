import React from 'react';
import { StyledFooter, StyledParagraph } from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

export const Footer = () => {
  const { isMobile } = useResponsive();
  return (
    <StyledFooter isMobile={isMobile}>
      <StyledParagraph>
        &copy; 2025 LEBIGA FINANCE. All rights reserved.
      </StyledParagraph>
    </StyledFooter>
  );
};
