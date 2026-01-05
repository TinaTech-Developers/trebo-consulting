import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.governancemc.co.za", "www.adaptit.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.governancemc.co.za",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "www.adaptit.com",
        pathname: "/hs-fs/**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
