import type { NextConfig } from "next";

const nextConfig = {
  output: 'standalone',
  experimental: {
    // This is needed for Azure deployment
    outputFileTracingRoot: undefined,
  },
}

export default nextConfig;
