// 'use client';
// import { styled } from '@mui/material/styles';

// export const StyledHeader = styled('header')(() => ({
//   backgroundImage: "url('/assets/white-paper-texture.jpg')",
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// }));

'use client';
import { styled } from '@mui/material/styles';

// Define the props for your styled header
interface StyledHeaderProps {
  scrolled: boolean;
}

// export const StyledHeader = styled('header')<StyledHeaderProps>(
//   ({ scrolled }) => ({
//     backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1743878987/white-paper-texture_pgvkop.jpg)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: scrolled ? '60px' : 'auto',
//     position: scrolled ? 'sticky' : 'static',
//     top: scrolled ? 0 : 'auto', // This is the key property for sticky behavior
//     zIndex: scrolled ? 1000 : 'auto',
//   }),
// );

export const HeaderContent = styled('div')(() => ({}));

// export const StyledHeader = styled('header')<StyledHeaderProps>(
//   ({ scrolled }) => ({
//     backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1743878987/white-paper-texture_pgvkop.jpg)`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '60px',
//     position: 'sticky',
//     top: 0, // This is the key property for sticky behavior
//     zIndex: 1000,
//   }),
// );

export const StyledHeader = styled('header')<StyledHeaderProps>(
  ({ scrolled }) => ({
    backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1743878987/white-paper-texture_pgvkop.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: scrolled ? '60px' : 'auto',
    position: scrolled ? 'fixed' : 'static',
    top: scrolled ? 0 : 'auto', // This is the key property for sticky behavior
    zIndex: scrolled ? 1000 : 'auto',
    width: scrolled ? '48%' : '100%',
  }),
);
