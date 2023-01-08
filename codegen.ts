import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./apps/server/graphql/schema/schema.graphql",
  // documents: "./apps/client/src/**/*.tsx",
  generates: {
    "./apps/server/graphql/__generated__/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
    "./apps/server/graphql.schema.json": {
      plugins: ["introspection"],
    },
    "./apps/client/src/graphql/__generated__/graphql-operations.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      preset: "client",
    },
  },
};

export default config;
