import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*', // Проксирование запросов на backend
      },
    ];
  },
};

export default nextConfig;
