import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // eslint-disable-next-line @typescript-eslint/require-await
  async rewrites() {
    return [
      {
        source: '/:locale/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default nextConfig;
