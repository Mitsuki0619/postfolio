import { QueryResolvers } from "@Generated/graphql";

export const getPosts: QueryResolvers["getPosts"] = async (
  _parent,
  _args,
  ctx
) => {
  return ctx.prisma.post.findMany({
    include: {
      user: true,
    },
  });
};
