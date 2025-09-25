// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export (needed for GitHub Pages)
  trailingSlash: true, // ensures all paths use trailing slash like `/about/`
  images: {
    unoptimized: true, // fixes image issues with `next/image`
  },
};

module.exports = nextConfig;
