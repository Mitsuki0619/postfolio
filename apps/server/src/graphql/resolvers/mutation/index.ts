import { MutationResolvers } from "@Generated/graphql";
import { createPost } from "@Mutation/post/createPost";
import { createUser } from "@Mutation/user/createUser";

export const Mutation: MutationResolvers = {
  createPost,
  createUser
};
