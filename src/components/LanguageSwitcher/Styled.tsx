'use client';
// import { styled } from '@mui/material/styles';
// import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

// export const StyledLangButtonWrapper = styled('div')({
//   position: 'relative',
//   display: 'inline-block',
// });

// export const StyledLang = styled('button')({
//   background: 'none',
//   border: 'none',
//   cursor: 'pointer',
//   padding: '8px',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   gap: '8px',
// });

// export const StyledCurrentLang = styled('span')({
//   fontSize: '14px',
//   fontWeight: 500,
//   color: '#333',
// });

// export const StyledLangWrapper = styled('div')({
//   position: 'absolute',
//   top: '100%',
//   right: 0,
//   backgroundColor: '#fff',
//   border: '1px solid #ccc',
//   borderRadius: '4px',
//   padding: '8px',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '4px',
//   minWidth: '80px',
//   boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//   zIndex: 1000,
// });

// export const StyledLangOption = styled('button')<{ active?: boolean }>(
//   ({ active }) => ({
//     background: 'none',
//     border: 'none',
//     cursor: 'pointer',
//     padding: '4px 8px',
//     textAlign: 'left',
//     color: active ? '#333' : '#666',
//     fontWeight: active ? 'bold' : 'normal',
//     '&:hover': {
//       backgroundColor: '#f5f5f5',
//     },
//   }),
// );

// export const StyledIcon = styled(LanguageSharpIcon)({
//   fontSize: '24px',
//   color: '#333',
// });

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
