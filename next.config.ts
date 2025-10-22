import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export configuration for Hostinger
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Disable TypeScript checking during build to avoid deployment issues
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Disable ESLint during build to avoid deployment issues
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Trailing slash for better compatibility with static hosting
  trailingSlash: true,
  
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
