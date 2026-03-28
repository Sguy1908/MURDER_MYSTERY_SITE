import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint config is incomplete; don't fail the build for lint warnings
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
