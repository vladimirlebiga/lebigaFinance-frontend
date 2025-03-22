import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F3DCCB',
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
    // This sets the base font size for MUI's typography scaling.
    // 16 => 1rem = 16px
    fontSize: 16,
    fontWeightRegular: 400,
    fontWeightBold: 700,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#F3DCCB',
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
