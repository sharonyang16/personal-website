import type { NextConfig } from 'next';
import withMDX from '@next/mdx';

const nextConfig: NextConfig = withMDX({
  extension: /\.mdx?$/,
})({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});

export default nextConfig;
