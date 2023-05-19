/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // "*.scontent-ord5-2.cdninstagram.com",
      {
        hostname: "*.cdninstagram.com",
      }
    ],
  }
}

module.exports = nextConfig
