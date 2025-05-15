'use client';
import { styled } from '@mui/material/styles';

export const StyledParagraph = styled('p')(() => ({
  padding: '20px 0',
}));

export const StyledSpan = styled('span')(() => ({
  fontWeight: 'bold',
}));

export const StyledSection = styled('section')(() => ({
  paddingTop: '70px',
  paddingBottom: '250px',
}));

export const StyledHeader = styled('h2')(() => ({
  fontSize: '1.4rem',
  fontWeight: 'bold',
}));

export const StyledItems = styled('li')(() => ({
  padding: '10px 0 10px 20px',
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
