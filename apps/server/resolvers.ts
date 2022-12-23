import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {

    /**
     * 全ポスト取得
     */
    allPosts: () => {
      return prisma.post.findMany();
    },

    /**
     * ユーザーのポスト一覧取得
     * @param userId ユーザーID 
     */
    userPosts: (_: undefined, { userId }: { userId: string }) => {
      return prisma.post.findMany({
        where: { userId },
      });
    },

    /**
     * ポスト詳細取得
     * @param postId ポストID
     */
    postDetail: (_: undefined, { postId }: { postId: number }) => {
      return prisma.post.findUnique({
        where: { id: postId },
      });
    },

    /**
     * ポスト検索
     * @param word 検索ワード
     */
    searchPosts: (_: undefined, { word }: { word: string }) => {
      return prisma.post.findMany({
        where: { content: word },
      });
    },
  },
};
