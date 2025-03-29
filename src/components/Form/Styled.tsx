'use client';
import { styled } from '@mui/material/styles';

export const StyledFormWrapper = styled('div')(() => ({
  //   paddingLeft: '40%',
}));

export const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '16px',
  width: '100%',
  //   maxWidth: '400px',
  margin: '0 auto',
}));
