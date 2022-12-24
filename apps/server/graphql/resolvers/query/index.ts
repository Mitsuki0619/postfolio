import { QueryResolvers } from "graphql/__generated__/graphql";

export const Query: QueryResolvers = {
  /**
   * 全ポスト取得
   */
  allPosts: (_parent, _args, ctx) => {
    return ctx.prisma.post.findMany();
  },

  /**
   * ユーザーのポスト一覧取得
   * @param userId ユーザーID
   */
  userPosts: (_parent, { userId }, ctx) => {
    return ctx.prisma.post.findMany({
      where: { userId },
    });
  },

  /**
   * ポスト詳細取得
   * @param postId ポストID
   */
  postDetail: (_parent, { postId }, ctx) => {
    return ctx.prisma.post.findUnique({
      where: { id: postId },
    });
  },

  /**
   * ポスト検索
   * @param word 検索ワード
   */
  searchPosts: (_parent, { word }, ctx) => {
    return ctx.prisma.post.findMany({
      where: { content: word },
    });
  },
};
