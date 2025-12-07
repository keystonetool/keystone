/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // allow serving images from the site; you can add external domains if needed
    remotePatterns: [],
  },
}

module.exports = nextConfig
