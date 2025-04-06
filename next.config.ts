/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.matrixstride.com",
      },
    ],
  },
};

module.exports = nextConfig;
