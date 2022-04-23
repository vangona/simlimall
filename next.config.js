/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["simlimall.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about/greeting",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
