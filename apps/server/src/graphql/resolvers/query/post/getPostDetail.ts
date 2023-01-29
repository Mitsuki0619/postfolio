import { QueryResolvers } from "@Generated/graphql";

export const getPostDetail: QueryResolvers["getPostDetail"] = (
  _parent,
  { postId },
  ctx
) => {
  return ctx.prisma.post.findUnique({
    where: {
      id: postId,
    },
    include: {
      user: true,
    },
  });
};
