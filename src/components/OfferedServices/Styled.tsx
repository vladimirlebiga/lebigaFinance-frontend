'use client';
import { styled } from '@mui/material/styles';

export const StyledParagraph = styled('p')(() => ({
  padding: '0 0',
}));

export const StyledText = styled('p')(() => ({
  padding: '20px 0 0 0',
  fontWeight: 'bold',
}));

export const StyledSection = styled('section')(
  ({ isMobile }: { isMobile: boolean }) => ({
    paddingTop: isMobile ? '70px' : '70px',
    paddingBottom: isMobile ? '0' : '550px',
  }),
);

export const StyledHeader = styled('h2')(() => ({
  fontSize: '1.4rem',
  fontWeight: 'bold',
}));
