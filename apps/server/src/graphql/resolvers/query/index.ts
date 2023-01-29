import { QueryResolvers } from "@/src/generated/graphql";

export const Query: QueryResolvers = {
  /**
   * 全ポスト取得
   */
  getAllPosts: (_parent, _args, ctx) => {
    return ctx.prisma.post.findMany({
      include: {
        user: true,
      },
    });
  },

  /**
   * ユーザー情報取得
   * @param userId ユーザーID
   */
  getUser: (_parent, { userId }, ctx) => {
    return ctx.prisma.user.findUnique({
      where:{
        id: userId
      },
      include: {
        posts: true,
        profile: true
      }
    });
  },

  /**
   * ポスト詳細取得
   * @param postId ポストID
   */
  getPostDetail: (_parent, { postId }, ctx) => {
    return ctx.prisma.post.findUnique({
      where: { id: postId },
      include: {
        user: true,
      },
    });
  },

  /**
   * ポスト検索
   * @param word 検索ワード
   */
  searchPosts: (_parent, { word }, ctx) => {
    return ctx.prisma.post.findMany({
      where: {
        content: word,
      },
      include: {
        user: true,
      },
    });
  },
};
