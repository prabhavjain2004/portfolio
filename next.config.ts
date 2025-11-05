import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false, // Disabled - can cause issues with React 19
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
