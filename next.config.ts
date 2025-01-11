
import { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Since you're deploying to marsh-design.github.io/Cyberglam-Security-Dashboard
  basePath: '/Cyberglam-Security-Dashboard',
  assetPrefix: '/Cyberglam-Security-Dashboard/',
};

export default config;