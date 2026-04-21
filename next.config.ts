import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["fakestoreapi.com"],
    remotePatterns: [
      {
       hostname: "hostname.com",
      },
    ],
  },
};

export default nextConfig;
