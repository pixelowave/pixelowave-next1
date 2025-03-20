/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ["lh3.googleusercontent.com"],
    unoptimized: true,
  },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: "javascript/auto",
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      undici: false, // 🛑 Exclude `undici` from Webpack bundling
    };

    return config;
  },

  transpilePackages: ["firebase"],
};

module.exports = nextConfig;
