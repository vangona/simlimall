/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
};

module.exports = nextConfig;
module.exports = withImages();
