/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "lat91.jp" }],
        destination: "https://www.lat91.co.jp/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lat91.jp" }],
        destination: "https://www.lat91.co.jp/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
