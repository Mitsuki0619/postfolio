/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    relay: {
      // This should match relay.config.js
      src: "./src",
      schema: "../server/graphql/schema/schema.graphql",
      exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
      artifactDirectory: "src/graphql/queries/__generated__",
      language: "typescript",
    },
  },
};

module.exports = nextConfig;
