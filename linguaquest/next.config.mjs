/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    SERVER_URL: "http://localhost:5000",
  },
};

export default nextConfig;
