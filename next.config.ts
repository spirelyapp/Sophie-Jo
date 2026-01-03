// Cloudflare setup commented out for Vercel compatibility
// Uncomment when deploying to Cloudflare Pages:
// import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
// setupDevPlatform().catch(console.error);

import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
