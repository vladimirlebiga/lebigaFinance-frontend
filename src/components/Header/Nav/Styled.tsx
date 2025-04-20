'use client';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

interface StyledLiProps {
  area?: string;
  smallArea?: string;
  scrolled?: boolean;
}

// Define the props for your styled header
interface StyledHeaderProps {
  scrolled: boolean;
}

export const StyledIconWrapper = styled(Link)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  //   gap: '14px',
}));

export const StyledUl = styled('ul')<StyledHeaderProps>(({ scrolled }) => ({
  display: 'grid',
  // gridTemplateColumns: 'repeat(5, 1fr)',
  // gridTemplateRows: '10px 1fr',
  //   gap: '16px',
  //   listStyle: 'none',
  //   padding: '0',
  //   margin: '0',
  gridTemplateColumns: `${scrolled ? 'repeat(5, 1fr)' : '1fr 10px 1fr 10px 1fr'}`,
  gridTemplateRows: `${scrolled ? '10px 1fr' : 'repeat(11, 1fr)'}`,
}));

export const StyledLi = styled('li')<StyledLiProps>(
  ({ area, smallArea, scrolled }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    //   gap: '10px',
    //   padding: '10px 0',
    // gridArea: smallArea || '',
    //   listStyle: 'none',
    //   padding: '0',
    //   margin: '0',
    gridArea: `${scrolled ? smallArea : area}`,
  }),
);

export const StyledParagraph = styled('p')(() => ({
  textAlign: 'center',
}));

export const NavContainer = styled('div')(() => ({}));
