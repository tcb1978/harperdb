const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rickandmortyapi.com",
        pathname: "/api/character/avatar/**",
      },
    ],
  },
  webpack: (config) => {
    config.externals.push({
      harperdb: "commonjs harperdb",
    });

    return config;
  },
};

module.exports = nextConfig;
