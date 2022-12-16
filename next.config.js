/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/goals",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
