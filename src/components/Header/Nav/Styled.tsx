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
}));

export const StyledUl = styled('ul')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: '10px 1fr',
}));

export const StyledLi = styled('li')<StyledLiProps>(({ smallArea }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gridArea: smallArea,
  '&:nth-child(2)': {
    fontSize: '0.8rem',
  },
  // ['@media only screen and (max-width: 480px)']: {

  // },
  // ['@media only screen and (max-width: 767px)']: {

  // }
}));

export const StyledParagraph = styled('p')(() => ({
  textAlign: 'center',
}));

export const NavContainer = styled('div')(() => ({}));
