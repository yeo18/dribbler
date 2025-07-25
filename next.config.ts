import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://172.29.192.1:3000"], // ✅ ajoute ton IP ici
};

export default nextConfig;
