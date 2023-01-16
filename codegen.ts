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
    "./apps/client/src/graphql/__generated__/": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
      preset: "client",
    },
  },
};

export default config;
