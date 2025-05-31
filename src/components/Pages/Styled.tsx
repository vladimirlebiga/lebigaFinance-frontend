'use client';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export const StyledWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile: boolean }>(({ isMobile }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)', // two equal columns
  gap: '16px', // optional: spacing between Aside and MyForm
  padding: '0 !important',
  paddingBottom: isMobile ? '50px !important' : '0',
  position: 'relative',
  backgroundImage: isMobile
    ? `none`
    : `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526701/slide_2_kjsg2y.png)`,
  backgroundSize: isMobile ? 'none' : '600px 600px', // mobile size 300px 300px
  backgroundPosition: isMobile ? 'bottom 98% left 30%' : 'bottom 78% left 30%',
  backgroundRepeat: 'no-repeat',
}));

export const StyledBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile: boolean }>(({ isMobile }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gridColumn: isMobile ? '1 / 6' : '3 / 6',
  gap: isMobile ? '0' : '16px',
  width: '100%',
}));

export const StyledSection = styled('section', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile: boolean }>(({ isMobile }) => ({
  height: isMobile ? '10px' : '300px',
}));

// New styled component for the image Red Pants
export const StyledNewImgOne = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile: boolean }>(({ isMobile }) => ({
  position: 'absolute', // Use absolute positioning relative to StyledAside
  bottom: isMobile ? '64%' : '64%',
  left: isMobile ? '0%' : '80%',
  width: isMobile ? '200px' : '400px',
  height: isMobile ? '200px' : '400px',
  backgroundImage: isMobile
    ? `none`
    : `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526796/slide_3_1_osei84.png)`,
  backgroundSize: isMobile ? '200px 200px' : '400px 400px',
  // backgroundPosition: 'bottom 63% left 10%',
  backgroundRepeat: 'no-repeat',
  zIndex: 0,
}));

// New styled component for the image Blue Skirt
export const StyledNewImgTwo = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile: boolean }>(({ isMobile }) => ({
  position: 'absolute', // Use absolute positioning relative to StyledAside
  bottom: isMobile ? '50%' : '50%',
  left: isMobile ? '0%' : '80%',
  width: isMobile ? '200px' : '400px',
  height: isMobile ? '200px' : '400px',
  backgroundImage: isMobile
    ? `none`
    : `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526786/slide_4_srbsme.png)`,
  backgroundSize: isMobile ? '200px 200px' : '400px 400px',
  // backgroundPosition: 'bottom 63% left 10%',
  backgroundRepeat: 'no-repeat',
  zIndex: 0,
}));

export const StyledLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile: boolean }>(({ isMobile }) => ({
  position: isMobile ? 'relative' : 'fixed',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  width: isMobile ? '40px' : '50px',
  height: isMobile ? '40px' : '50px',
  borderRadius: '50%',
  backgroundColor: '#333333',
  bottom: isMobile ? '0' : '100px',
  right: isMobile ? '0' : '10%',
}));

export const StyledIcon = styled(HomeRoundedIcon)(() => ({
  color: '#ffffff',
}));
