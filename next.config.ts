import type { NextConfig } from "next";

// GitHub Pages 배포를 위한 설정은 production에서만 적용
const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProduction ? "export" : undefined,
  basePath: isProduction ? "/grace-portfolio" : "",
  assetPrefix: isProduction ? "/grace-portfolio" : "",
  reactCompiler: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
