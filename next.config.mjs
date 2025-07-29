/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ghchart.rshah.org',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // 👈 This disables ESLint errors during production build
  },
};

export default nextConfig;
