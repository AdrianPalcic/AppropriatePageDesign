import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // This will skip ESLint during build
  },
  typescript: {
    ignoreBuildErrors: true, // Optional: if you have TypeScript errors too
  },
};

export default nextConfig;
