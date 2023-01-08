// The ApolloServer constructor requires two parameters: your schema

import { ApolloServer } from "@apollo/server";
import { resolvers } from "./graphql/resolvers";
import { readFileSync } from "fs";
import { startStandaloneServer } from "@apollo/server/standalone";
import { createContext } from "./graphql/resolvers/context";

(async () => {
  const typeDefs = readFileSync("./graphql/schema/schema.graphql", {
    encoding: "utf8",
  });

  // definition and your set of resolvers.
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: createContext,
  });

  console.log(`🚀  Server ready at: ${url}`);
})();
