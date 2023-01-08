import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./graphql/schema/schema.graphql",
  generates: {
    "graphql/__generated__/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
    "graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
