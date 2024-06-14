import { CredentialsSchema } from "~/common/validators/credentialsValidator";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(CredentialsSchema)
    .mutation(async ({ input: user }) => {
      
    }),
});
