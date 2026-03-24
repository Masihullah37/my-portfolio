// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// next.config.ts
// ─────────────────────────────────────────────────────────────────────────────
// PURPOSE: Configures Next.js build and runtime behavior.
// ─────────────────────────────────────────────────────────────────────────────

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images.remotePatterns: Security — only allow images from these domains.
  // The <Image /> component blocks external images by default.
  // Add any domain you load images from (e.g., your CDN, GitHub avatars).
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;