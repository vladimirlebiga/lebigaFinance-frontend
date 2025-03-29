'use client';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const StyledIconWrapper = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
}));
