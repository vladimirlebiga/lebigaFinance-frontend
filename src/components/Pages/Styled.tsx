'use client';
import { styled } from '@mui/material/styles';

export const StyledWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100%',
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '4px',
  padding: '16px',
  backgroundColor: theme.palette.primary.main,
}));
