/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "https://cdn.jsdelivr.net/gh/vangona/simlimall/src/img/",
    domains: ["cdn.jsdelivr.net"],
  },
};

module.exports = nextConfig;
