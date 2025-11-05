import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false, // Disabled - can cause issues with React 19
  // API rewrites for both development and production
  async rewrites() {
    if (isDev) {
      // In development, proxy to local FastAPI server
      return [
        {
          source: '/api/:path*',
          destination: 'http://127.0.0.1:8000/api/:path*', 
        },
      ];
    }
    
    // In production (Vercel), keep the same path
    // Vercel will handle routing to serverless functions
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default nextConfig;
