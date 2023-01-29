import { MutationResolvers } from "@Generated/graphql";

export const createUser: MutationResolvers["createUser"] = (
  _parent,
  { name, email, password },
  ctx
) => {
  return ctx.prisma.user.create({
    data: {
      email,
      name,
      password,
    },
  });
};
