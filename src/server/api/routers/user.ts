import { CredentialsSchema } from "~/common/validators/credentialsValidator";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { createUser } from "~/server/queries/user";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(CredentialsSchema)
    .mutation(async ({ input: user }) => {
      const result = await createUser(user);
      return result;
    }),
});
