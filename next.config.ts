import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Force redirect from naked domain (procgen.in) to www.procgen.in
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'procgen.in',
          },
        ],
        destination: 'https://www.procgen.in/:path*',
        permanent: true, // 308 Permanent Redirect for SEO
      },
    ];
  },

  // 2. Force HTTPS and strict security headers (Fixes the Lighthouse HSTS warning)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
