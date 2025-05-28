'use client';
import { styled } from '@mui/material/styles';

export const StyledFooter = styled('footer')(
  ({ isMobile }: { isMobile: boolean }) => ({
    position: 'absolute',
    // gridColumn: '1 / 6',
    padding: '20px 0 ',
    bottom: isMobile ? '0' : '1%',
    left: isMobile ? '0' : '10%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }),
);

export const StyledParagraph = styled('p')(() => ({
  fontSize: '0.8rem',
}));
