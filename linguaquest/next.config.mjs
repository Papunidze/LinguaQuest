/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "api.dicebear.com",
      "firebasestorage.googleapis.com",
    ],
  },
  env: {
    SERVER_URL: "http://localhost:5000",
  },
};

export default nextConfig;
