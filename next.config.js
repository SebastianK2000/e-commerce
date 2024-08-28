/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = require('./csp')
const redirects = require('./redirects')

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,  // Ignoruje błędy TypeScript przy budowaniu
  },
  reactStrictMode: true,  // Włącza tryb Strict Mode w React
  swcMinify: true,  // Używa SWC do minifikacji kodu

  images: {
    domains: ['localhost', process.env.NEXT_PUBLIC_SERVER_URL]
      .filter(Boolean)
      .map(url => url.replace(/https?:\/\//, '')),  // Filtruje i mapuje domeny dla obsługi obrazów
  },

  redirects,  // Ustawia przekierowania z pliku redirects.js

  async headers() {
    const headers = []

    // Blokuje indeksowanie przez wyszukiwarki, jeśli strona nie jest na żywo
    if (!process.env.NEXT_PUBLIC_IS_LIVE) {
      headers.push({
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      })
    }

    // Ustawia nagłówek Content-Security-Policy dla ochrony przed atakami XSS
    headers.push({
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: ContentSecurityPolicy,
        },
      ],
    })

    return headers
  },

  // Dodaj poniższy blok, aby upewnić się, że Turbopack nie jest używany
  experimental: {
    turboMode: false,  // Wyłącza Turbopack, upewniając się, że używany jest Webpack
  },
}

module.exports = nextConfig
