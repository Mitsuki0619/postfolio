import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./apps/server/src/graphql/schema/schema.graphql",
  // documents: "./apps/client/src/**/*.tsx",
  generates: {
    "./apps/server/src/generated/graphql.ts": {
      config: {
        contextType: "@/context#Context",
        mapperTypeSuffix: "Model",
        mappers: {
          Account: "@prisma/client/index#Account",
          Message: "@prisma/client/index#Message",
          MessageRoom: "@prisma/client/index#MessageRoom",
          Notification: "@prisma/client/index#Notification",
          Post: "@prisma/client/index#Post",
          PostLikes: "@prisma/client/index#PostLikes",
          PostTags: "@prisma/client/index#PostTags",
          Profile: "@prisma/client/index#Profile",
          Session: "@prisma/client/index#Session",
          Tag: "@prisma/client/index#Tag",
          User: "@prisma/client/index#User",
          VerificationToken: "@prisma/client/index#VerificationToken",
        }
      },
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
