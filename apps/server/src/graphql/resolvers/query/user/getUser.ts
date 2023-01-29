import { QueryResolvers } from "@Generated/graphql";

export const getUser: QueryResolvers["getUser"] = (
  _parent,
  { userId },
  ctx
) => {
  return ctx.prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      posts: true,
    },
  });
};
