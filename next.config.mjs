/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/climate-coordination-network-website',
  assetPrefix: '/climate-coordination-network-website/',
}
export default nextConfig
