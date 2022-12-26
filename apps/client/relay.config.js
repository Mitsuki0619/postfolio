module.exports = {
  src: "./src",
  schema: "../server/graphql/schema/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  language: "typescript",
  artifactDirectory: "src/graphql/queries/__generated__",
};
