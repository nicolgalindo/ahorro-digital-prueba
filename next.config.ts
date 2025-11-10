import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // Use static HTML export mode (replaces the old `next export` command).
  // This makes `next build` produce a static `out/` folder suitable for GitHub Pages.
  // If you will publish under a repo path (https://<user>.github.io/<repo>),
  // set `basePath` and `assetPrefix` to `'/<repo>'` and `'/<repo>/'` respectively.
  output: 'export',
  // Example (uncomment and replace with your repo name if needed):
  // basePath: '/ahorro-digital-prueba',
  // assetPrefix: '/ahorro-digital-prueba/',
};

export default nextConfig;
