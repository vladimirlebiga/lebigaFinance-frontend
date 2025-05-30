'use client';
import { styled } from '@mui/material/styles';

export const StyledParagraph = styled('p')(() => ({
  padding: '20px 0 0 0',
}));

export const StyledText = styled('p')(() => ({
  padding: '20px 0 0 0',
  fontWeight: 'bold',
}));

export const StyledSection = styled('section')(
  ({ isMobile }: { isMobile: boolean }) => ({
    paddingTop: isMobile ? '70px' : '70px',
    paddingBottom: isMobile ? '0' : '500px',
  }),
);

export const StyledHeader = styled('h2')(() => ({
  fontSize: '1.4rem',
  fontWeight: 'bold',
}));

export const StyledItems = styled('li')(() => ({
  padding: '0 0 0 20px',
  position: 'relative',
  listStyle: 'none',
  marginLeft: '15px',

  '&::before': {
    content: '"•"',
    position: 'absolute',
    left: 0,
    color: '#666',
    fontSize: '1.2em',
  },
}));
