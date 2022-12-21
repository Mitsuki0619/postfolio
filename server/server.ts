import express from "express";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFileSync } from "fs";
import { resolvers } from "./resolvers";

const typeDefs = readFileSync("src/graphql/schema/schema.graphql", {
  encoding: "utf8",
});

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000);
