'use client';
import { styled } from '@mui/material/styles';

export const StyledHeader = styled('header')(() => ({
  backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1743878987/white-paper-texture_pgvkop.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '60px',
  position: 'sticky',
  top: 0, // This is the key property for sticky behavior
  zIndex: 1000,
}));

export const HeaderContent = styled('div')(
  ({ isMobile }: { isMobile: boolean }) => ({
    display: isMobile ? 'flex' : 'block',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: '100%',
    padding: isMobile ? '10px' : '0',
  }),
);
