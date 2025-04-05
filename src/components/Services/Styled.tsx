'use client';
import { styled } from '@mui/material/styles';

export const StyledServices = styled('li')(() => ({
  display: 'flex', // enables flexbox
  justifyContent: 'space-between', // optional: adds space between items
  alignItems: 'flex-start', // aligns items at the top
  gap: '16px', // optional: spacing between Aside and MyForm
  padding: '10px 0',
}));

export const StyledParagraph = styled('p')(() => ({
  padding: '20px 0',
}));
