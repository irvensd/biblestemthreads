/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  webpack: (config, { dev }) => {
    // Prevents recurring "Cannot find module './XXX.js'" errors in local dev.
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;

