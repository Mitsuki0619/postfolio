import { makeExecutableSchema } from "@graphql-tools/schema";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { readFileSync } from "fs";
import { resolvers } from "./graphql/resolvers";
import cors from "cors";
import { buildSchema } from "graphql";

const typeDefs = readFileSync("graphql/schema/schema.graphql", {
  encoding: "utf8",
});


export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
