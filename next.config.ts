import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/grace-portfolio",
  assetPrefix: "/grace-portfolio",
  reactCompiler: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
