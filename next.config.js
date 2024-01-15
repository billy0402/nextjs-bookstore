/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  output: 'export',
  basePath: '/nextjs-bookstore',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
