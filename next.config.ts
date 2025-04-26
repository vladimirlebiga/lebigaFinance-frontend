// // next.config.ts
// import { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   // i18n settings live here when using the Pages Router
//   i18n: {
//     locales: ['en', 'nl', 'uk', 'ru'],
//     defaultLocale: 'en',
//   },
// };

// export default nextConfig;

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
