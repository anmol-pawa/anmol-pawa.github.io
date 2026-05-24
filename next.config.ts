import type { NextConfig } from "next";

/**
 * Next.js config — Vercel deploy target.
 *
 *   reactStrictMode: catches lifecycle bugs early in dev.
 *   poweredByHeader: false — strip X-Powered-By, no fingerprinting hint.
 *   compress: true — Brotli/Gzip at the edge (Vercel handles this, but explicit).
 *   experimental.optimizePackageImports — tree-shakes lucide-react + framer-motion
 *     barrel files; meaningful client-bundle wins on a site that uses many icons.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },

  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Security baseline. Vercel's CDN respects these headers.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
