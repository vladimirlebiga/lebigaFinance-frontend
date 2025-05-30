'use client';
import { styled } from '@mui/material/styles';

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
  alignItems: 'flex-start',
  justifyContent: 'center',
  margin: '8px auto',
  width: 'fit-content',
}));

export const StyledWrapper = styled('div')(() => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  margin: '8px 0',
}));

export const StyledSpan = styled('div')(() => ({
  // display: 'flex',
  // alignItems: 'center',
  margin: '8px 5%',
  fontWeight: 'normal', // ensures the text is not bold
  fontSize: '5rem',
}));

const StyledH1 = styled('h1')({
  display: 'flex',
  alignItems: 'center',
});

export const StyledLang = styled('button')(() => ({
  // position: 'relative',
  borderRadius: '50%',
  // bottom: '100px',
  backgroundColor: 'transparent',
}));

export const StyledLangButtonWrapper = styled('div')(() => ({
  position: 'absolute',
  backgroundColor: 'transparent',
  top: '20px',
  right: '20px',
  display: 'flex',
  justifyContent: 'flex-end',
}));

export const HeaderTitle = () => (
  <StyledH1>
    <span>LEBIGA</span>
    <span style={{ fontWeight: 'normal', marginLeft: '8px' }}>FINANCE</span>
  </StyledH1>
);

export const StyledSection = styled('section')(
  ({ isMobile }: { isMobile: boolean }) => ({
    paddingTop: isMobile ? '35px' : '0',
    paddingBottom: isMobile ? '0' : '0',
  }),
);
