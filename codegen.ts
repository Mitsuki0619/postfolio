import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "apps/server/**/*.graphql",
  documents: "apps/client/src/**/*.tsx",
  generates: {
    "apps/client/src/graphql/__generated__/models.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-urql"],
    },
    "apps/server/graphql/__generated__/models.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
