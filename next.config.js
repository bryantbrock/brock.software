/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.streamlinesci.com",
        port: "",
        pathname: "**/*.png",
      },
    ],
  },
};

module.exports = nextConfig;
