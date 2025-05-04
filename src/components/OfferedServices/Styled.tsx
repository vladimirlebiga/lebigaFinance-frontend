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
  paddingTop: '70px',
  paddingBottom: '550px',
  // backgroundImage: `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526786/slide_4_srbsme.png)`,
  // backgroundSize: '400px 400px',
  // backgroundPosition: 'bottom 10% right -10%',
  // backgroundRepeat: 'no-repeat',
}));

export const StyledHeader = styled('h2')(() => ({
  fontSize: '1.4rem',
  fontWeight: 'bold',
}));

// export const StyledSpan = styled('p')(() => ({
//   fontWeight: 'bold',
// }));
