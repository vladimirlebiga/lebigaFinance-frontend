'use client';
import { styled } from '@mui/material/styles';

export const StyledFormWrapper = styled('div')(() => ({
  //   paddingLeft: '40%',
}));

export const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '16px 0',
  width: '100%',
  //   maxWidth: '400px',
  margin: '0 auto',
}));

export const StyledSection = styled('section')(
  ({ isMobile }: { isMobile: boolean }) => ({
    paddingTop: isMobile ? '70px' : '60px',
  }),
);

export const StyledHeader = styled('h2')(() => ({
  fontSize: '1.4rem',
  fontWeight: 'bold',
}));
