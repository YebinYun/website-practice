/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "*", "cf.bstatic.com", "a0.muscache.com"],
  },
  rewrites: () => [
    {
      source: "/post",
      destination: "https://next13-hotels-reservation-client.vercel.app/",
    },
  ],
  reactStrictMode: true,
};

module.exports = nextConfig;
