'use client';
import { styled } from '@mui/material/styles';

export const StyledWrapper = styled('div')(() => ({
  display: 'flex', // enables flexbox
  justifyContent: 'space-between', // optional: adds space between items
  alignItems: 'flex-start', // aligns items at the top
  gap: '16px', // optional: spacing between Aside and MyForm
  padding: '16px',
}));

export const StyledBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '40%',
  gap: '16px',
  width: '100%',
}));

export const StyledNav = styled('div')(() => ({
  backgroundColor: '#f0f0f0', // optional: background color
}));
