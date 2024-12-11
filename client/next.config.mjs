/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "0.0.0.0", port: "8055", pathname: "/**" },
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_HOSTNAME,
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
