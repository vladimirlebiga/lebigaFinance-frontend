'use client';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/theme';
import ThemeRegistry from './ThemeRegistry';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ResponsiveProvider } from '@/contexts/ResponsiveContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeRegistry>
      <ThemeProvider theme={theme}>
        <ResponsiveProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ResponsiveProvider>
      </ThemeProvider>
    </ThemeRegistry>
  );
}
