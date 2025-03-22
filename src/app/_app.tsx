import * as React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import store from '../store';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  console.log(theme);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
