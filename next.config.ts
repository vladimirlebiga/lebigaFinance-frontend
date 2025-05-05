// // next.config.ts
// import { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   // Remove i18n and next-intl configuration
//   reactStrictMode: true,
// };

// export default nextConfig;

// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // If you ever do add i18n, you could uncomment & configure this:
  // i18n: {
  //   locales: ['nl', 'en'],
  //   defaultLocale: 'nl',
  // },

  // eslint-disable-next-line @typescript-eslint/require-await
  async rewrites() {
    return [
      {
        // This will make requests to /nl/api/... or /en/api/... etc
        // be served by your single /api/... handler
        source: '/:locale/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default nextConfig;
