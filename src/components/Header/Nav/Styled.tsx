'use client';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

interface StyledLiProps {
  smallArea?: string;
}

export const StyledIconWrapper = styled(Link)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  //   gap: '14px',
}));

export const StyledUl = styled('ul')(() => ({
  display: 'grid',
  // gridTemplateColumns: 'repeat(5, 1fr)',
  // gridTemplateRows: '10px 1fr',
  //   gap: '16px',
  //   listStyle: 'none',
  //   padding: '0',
  //   margin: '0',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: '10px 1fr',
}));

export const StyledLi = styled('li')<StyledLiProps>(({ smallArea }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  //   gap: '10px',
  //   padding: '10px 0',
  // gridArea: smallArea || '',
  //   listStyle: 'none',
  //   padding: '0',
  //   margin: '0',
  gridArea: smallArea,
  '&:nth-child(2)': {
    fontSize: '0.8rem',
  },
}));

export const StyledParagraph = styled('p')(() => ({
  textAlign: 'center',
}));

export const NavContainer = styled('div')(() => ({}));
