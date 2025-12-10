import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  // Disable experimental features that might cause issues
  experimental: {
    turbo: false, // Disable Turbopack to use stable webpack
  },
  // Only run rewrites in development (when running `npm run dev`)
  async rewrites() {
    if (!isDev) {
      return [];
    }
    
    return [
      {
        source: '/api/:path*',
        // Proxy to your local FastAPI server
        destination: 'http://127.0.0.1:8000/api/:path*', 
      },
    ];
  },
};

export default nextConfig;
