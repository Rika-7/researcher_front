import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
    instrumentationHook: true
  }
};

export default nextConfig;
