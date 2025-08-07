import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   images: {
//     remotePatterns: [new URL('https://https://image.tmdb.org/account123/**')],
//   },
// };

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ['image.tmdb.org'],
  },
}

module.exports = nextConfig

export default nextConfig;
