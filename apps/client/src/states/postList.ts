import { envKey } from "pages/_app";
import { graphQLSelector } from "recoil-relay";
import { graphql } from "relay-runtime";

export const postListQuery = graphQLSelector({
  key: "postListQuery",
  environment: envKey,
  query: graphql`
    query postListQuery {
      allPosts {
        content
        createdAt
      }
    }
  `,
  variables: {},
  mapResponse: (data) => data,
});
