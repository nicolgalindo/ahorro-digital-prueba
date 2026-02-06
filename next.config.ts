import type { NextConfig } from "next";


const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {

  reactCompiler: true,

  output: 'export',

  ...(configuredBasePath
    ? {
        basePath: configuredBasePath,
        assetPrefix: `${configuredBasePath}/`,
      }
    : {}),
};

export default nextConfig;
