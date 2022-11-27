/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
}

module.exports = withMDX(nextConfig)
