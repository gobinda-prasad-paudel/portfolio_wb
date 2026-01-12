/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gobindapoudel.com.np',
      },
    ],
  },
 
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
 
}

export default nextConfig