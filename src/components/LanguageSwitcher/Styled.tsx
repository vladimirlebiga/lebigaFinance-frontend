'use client';

import { styled } from '@mui/material/styles';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

export const StyledLang = styled('button')(() => ({
  // position: 'relative',
  borderRadius: '50%',
  // bottom: '100px',
  backgroundColor: 'transparent',
}));

export const StyledLangButtonWrapper = styled('div')(() => ({
  position: 'relative',
  backgroundColor: 'transparent',
  bottom: 0,
}));

export const StyledIcon = styled(LanguageSharpIcon)(() => ({
  color: '#333333',
  fontSize: '3.5rem',
}));

export const StyledLangWrapper = styled('div')(() => ({
  position: 'absolute',
  bottom: '100%',
  right: '-30%',
}));

export const StyledNed = styled('button')(() => ({
  position: 'absolute',
  top: '-25px',
  left: '-55px',
  backgroundColor: 'transparent',
  '&:hover': {
    fontWeight: 'bold',
  },
}));

export const StyledUkr = styled('button')(() => ({
  position: 'absolute',
  top: '-5px',
  left: '-15px',
  backgroundColor: 'transparent',
  '&:hover': {
    fontWeight: 'bold',
  },
}));

export const StyledEng = styled('button')(() => ({
  position: 'absolute',
  top: '20px',
  left: '5px',
  backgroundColor: 'transparent',
  '&:hover': {
    fontWeight: 'bold',
  },
}));

export const StyledRus = styled('button')(() => ({
  position: 'absolute',
  top: '45px',
  left: '-15px',
  backgroundColor: 'transparent',
  '&:hover': {
    fontWeight: 'bold',
  },
}));

// import Brightness3OutlinedIcon from '@mui/icons-material/Brightness3Outlined';
