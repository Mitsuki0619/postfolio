import { QueryResolvers } from "@Generated/graphql";

export const searchPosts: QueryResolvers["searchPosts"] = async (
  _parent,
  { word },
  ctx
) => {
  return ctx.prisma.post.findMany({
    where: {
      content: word,
    },
    include: {
      user: true,
    },
  });
};
