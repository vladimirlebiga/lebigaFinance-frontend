'use client';
import { styled } from '@mui/material/styles';

export const StyledHeader = styled('header')(
  ({ isMobile }: { isMobile: boolean }) => ({
    backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1743878987/white-paper-texture_pgvkop.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '60px',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: isMobile ? '100vw' : '100%',
    marginLeft: isMobile ? 'calc(-50vw + 50%)' : 0,
    marginRight: isMobile ? 'calc(-50vw + 50%)' : 0,
  }),
);

export const HeaderContent = styled('div')(
  ({ isMobile }: { isMobile: boolean }) => ({
    display: isMobile ? 'flex' : 'block',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isMobile ? '10px 20px' : '0',
    maxWidth: isMobile ? '100%' : '1200px',
    margin: '0 auto',
  }),
);
