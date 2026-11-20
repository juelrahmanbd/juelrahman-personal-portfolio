/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/portfolio/:slug',
        destination: '/portfolio',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
