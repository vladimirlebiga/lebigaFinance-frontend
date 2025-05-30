'use client';
import { styled } from '@mui/material/styles';

export const StyledParagraph = styled('p')(() => ({
  padding: '20px 0',
}));

export const StyledSection = styled('section')(
  ({ isMobile }: { isMobile: boolean }) => ({
    paddingTop: isMobile ? '70px' : '70px',
    paddingBottom: isMobile ? '0' : '550px',
    backgroundImage: isMobile
      ? 'none'
      : `url(https://res.cloudinary.com/dico8i3m0/image/upload/v1744526827/slide_2_1_uxywxo.png)`,
    backgroundSize: '300px 300px',
    backgroundPosition: 'bottom 30% right 0%',
    backgroundRepeat: 'no-repeat',
  }),
);

export const StyledHeader = styled('h2')(() => ({
  fontSize: '1.4rem',
  fontWeight: 'bold',
}));
