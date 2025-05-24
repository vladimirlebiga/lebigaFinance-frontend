'use client';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

interface StyledLiProps {
  smallArea?: string;
  isMobile?: boolean;
}

export const StyledIconWrapper = styled(Link)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledUl = styled('ul')(({ isMobile }: { isMobile: boolean }) => ({
  display: isMobile ? 'flex' : 'grid',
  flexDirection: 'column',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: '10px 1fr',
  gap: isMobile ? '5px' : '0',
  padding: isMobile ? '10px' : '0',
}));

export const StyledLi = styled('li')<StyledLiProps>(
  ({ smallArea, isMobile }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: isMobile ? '30px' : 'none',
    gridArea: smallArea,
    '&:nth-child(2)': {
      fontSize: '0.8rem',
    },
    // ['@media only screen and (max-width: 480px)']: {

    // },
    // ['@media only screen and (max-width: 767px)']: {

    // }
  }),
);

export const StyledParagraph = styled('p')(
  ({ isMobile }: { isMobile: boolean }) => ({
    textAlign: 'center',
    fontSize: isMobile ? '1rem' : 'none',
  }),
);

export const NavContainer = styled('div')(
  ({ isMobile }: { isMobile: boolean }) => ({
    position: isMobile ? 'fixed' : 'relative',
    backgroundImage: isMobile
      ? 'url(https://res.cloudinary.com/dico8i3m0/image/upload/v1743878987/white-paper-texture_pgvkop.jpg)'
      : 'none',
    backgroundSize: isMobile ? 'cover' : 'none',
    backgroundPosition: isMobile ? 'center' : 'none',
    backgroundRepeat: isMobile ? 'no-repeat' : 'none',
    top: isMobile ? '6.5%' : 'none',
    left: isMobile ? '0' : 'none',
    right: isMobile ? '0' : 'none',
    // bottom: isMobile ? '0' : 'none',
    zIndex: isMobile ? '1000' : 'none',
  }),
);
