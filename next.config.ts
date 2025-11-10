import type { NextConfig } from "next";

// Make basePath conditional so local dev doesn't 404.
// If NEXT_PUBLIC_BASE_PATH is set (for CI / GitHub Pages), we'll use it.
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Use static HTML export mode (replaces the old `next export` command).
  // This makes `next build` produce a static `out/` folder suitable for GitHub Pages.
  output: 'export',
  // Only set basePath/assetPrefix when NEXT_PUBLIC_BASE_PATH is defined.
  ...(configuredBasePath
    ? {
        basePath: configuredBasePath,
        assetPrefix: `${configuredBasePath}/`,
      }
    : {}),
};

export default nextConfig;
