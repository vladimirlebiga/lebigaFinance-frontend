'use client';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export const StyledWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)', // two equal columns
  gap: '16px', // optional: spacing between Aside and MyForm
  padding: '0 !important',
  position: 'relative',
  backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526701/slide_2_kjsg2y.png)`,
  backgroundSize: '600px 600px',
  backgroundPosition: 'bottom 78% left 30%',
  backgroundRepeat: 'no-repeat',
}));

export const StyledBox = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gridColumn: '3 / 6',
  gap: '16px',
  width: '100%',
}));

export const StyledSection = styled('section')(() => ({
  height: '300px',
}));

// New styled component for the image
export const StyledNewImgOne = styled('div')(() => ({
  position: 'absolute', // Use absolute positioning relative to StyledAside
  bottom: '64%',
  left: '80%',
  width: '400px',
  height: '400px',
  backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526796/slide_3_1_osei84.png)`,
  backgroundSize: '400px 400px',
  backgroundPosition: 'bottom 63% left 99%',
  backgroundRepeat: 'no-repeat',
  zIndex: 0,
}));

// New styled component for the image
export const StyledNewImgTwo = styled('div')(() => ({
  position: 'absolute', // Use absolute positioning relative to StyledAside
  bottom: '50%',
  left: '80%',
  width: '400px',
  height: '400px',
  backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526786/slide_4_srbsme.png)`,
  backgroundSize: '400px 400px',
  backgroundPosition: 'bottom 63% left 99%',
  backgroundRepeat: 'no-repeat',
  zIndex: 0,
}));

export const StyledLink = styled(Link)(() => ({
  position: 'fixed',
  justifyContent: 'center',
  alignItems: 'center',
  display: 'flex',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: '#333333',
  bottom: '10%',
  right: '10%',
}));

export const StyledIcon = styled(HomeRoundedIcon)(() => ({
  color: '#ffffff',
}));
