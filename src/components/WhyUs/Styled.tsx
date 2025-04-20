'use client';
import { styled } from '@mui/material/styles';

export const StyledParagraph = styled('p')(() => ({
  padding: '0 0',
}));

export const StyledText = styled('p')(() => ({
  padding: '20px 0 0 0',
  fontWeight: 'bold',
}));

export const StyledSection = styled('section')(() => ({
  paddingTop: '60px',
  paddingBottom: '250px',
  // backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526796/slide_3_1_osei84.png)`,
  // backgroundSize: '400px 400px',
  // backgroundPosition: 'bottom 20% right -10%',
  // backgroundRepeat: 'no-repeat',
}));

export const StyledHeader = styled('h2')(() => ({
  fontSize: '1.4rem',
  fontWeight: 'bold',
}));
