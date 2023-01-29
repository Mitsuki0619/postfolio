import { QueryResolvers } from "@Generated/graphql";
import { getPostDetail } from "@Query/post/getPostDetail";
import { getPosts } from "@Query/post/getPosts";
import { searchPosts } from "@Query/post/searchPosts";
import { getUser } from "@Query/user/getUser";

export const Query: QueryResolvers = {
  getPosts,
  getUser,
  getPostDetail,
  searchPosts,
};
