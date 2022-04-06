/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/info",
        destination: "/info/default",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
