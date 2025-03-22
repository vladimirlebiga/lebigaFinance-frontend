import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  i18n: {
    // List all locales your app supports
    locales: ['en', 'uk', 'ru'],
    // Default locale that will be rendered at root
    defaultLocale: 'en',
  },
};

export default nextConfig;
