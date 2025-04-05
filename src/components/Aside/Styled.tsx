'use client';
import { styled } from '@mui/material/styles';

export const StyledAside = styled('aside')(() => ({
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100%',
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  padding: '16px',
}));

export const StyledAsideWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '20px 0',
}));

export const StyledIconWrapper = styled('div')(() => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '8px 0',
}));

export const StyledWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  margin: '8px 0',
}));

export const StyledSpan = styled('div')(() => ({
  // display: 'flex',
  // alignItems: 'center',
  margin: '8px 5%',
  fontWeight: 'bold', // ensures the text is not bold
  fontSize: '2.5rem',
}));

const StyledH1 = styled('h1')({
  display: 'flex',
  alignItems: 'center',
});

export const HeaderTitle = () => (
  <StyledH1>
    <span>LEBIGA</span>
    <span style={{ fontWeight: 'normal', marginLeft: '8px' }}>FINANCE</span>
  </StyledH1>
);
