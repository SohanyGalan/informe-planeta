import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  turbopack: { root: process.cwd() },
  // Alias de la página "Acerca de" que exigen las guías de AdSense
  async redirects() {
    return [{ source: "/acerca-de", destination: "/sobre-el-proyecto", permanent: true }];
  },
};

export default nextConfig;
