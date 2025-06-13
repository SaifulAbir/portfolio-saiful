import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Netlify
  output: "export",

  // Add trailing slash for better compatibility
  trailingSlash: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Optional: Configure base path if deploying to subdirectory
  // basePath: '/your-subdirectory',

  // Optional: Configure asset prefix for CDN
  // assetPrefix: 'https://your-cdn.com',

  // Ensure compatibility with static hosting
  distDir: "out",

  // Optional: Configure redirects if needed
  // async redirects() {
  //   return [
  //     {
  //       source: '/old-page',
  //       destination: '/new-page',
  //       permanent: true,
  //     },
  //   ]
  // },
};

export default nextConfig;
