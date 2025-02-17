import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    // This is needed for Azure deployment
    outputFileTracingRoot: undefined,
  },
}

export default nextConfig;
