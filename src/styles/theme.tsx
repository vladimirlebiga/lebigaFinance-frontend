'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333333', //'#FEDCC7',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#ff1744',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          // backgroundColor: '#FEDCC7', //#F3DCCB
          borderColor: '#000',
          color: '#fff',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 500,
          width: '100%',
          padding: '12px 0',
        },
        outlined: {
          borderColor: '#000',
          color: '#000',
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 500,
          width: '100%',
          padding: '11.2px 0',
          boxSizing: 'border-box',
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
