/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "upload.wikimedia.org",
      },
      {
        hostname: "api.dicebear.com",
      },
    ],
  },
}

module.exports = nextConfig
