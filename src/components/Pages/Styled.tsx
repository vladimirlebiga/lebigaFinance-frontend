'use client';
import { styled } from '@mui/material/styles';

export const StyledWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)', // two equal columns
  gap: '16px', // optional: spacing between Aside and MyForm
  padding: '0 !important',
  position: 'relative',
  overflow: 'auto',
}));

export const StyledBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gridColumn: '3 / 6',
  gap: '16px',
  width: '100%',
}));

export const StyledNav = styled('div')(() => ({
  position: 'relative',
}));
