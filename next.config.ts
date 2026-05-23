import type { NextConfig } from "next";

/**
 * Configured for GitHub Pages static export.
 *
 *   output: "export"           — builds to /out as fully static HTML/CSS/JS
 *   trailingSlash: true        — GitHub Pages serves index.html from each folder
 *   images.unoptimized: true   — Pages has no Next.js image optimization runtime
 *
 * Site lives at anmol-pawa.github.io/ (user pages — root path, no basePath).
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
