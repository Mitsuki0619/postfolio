import { MutationResolvers } from "@Generated/graphql";

export const createPost: MutationResolvers["createPost"] = (
  _parent,
  { content, userId },
  ctx
) => {
  return ctx.prisma.post.create({
    data: {
      content,
      userId,
    },
  });
};
