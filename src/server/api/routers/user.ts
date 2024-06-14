import * as argon2 from "argon2";

import { CredentialsSchema } from "~/common/validators/credentialsValidator";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { createUser } from "~/server/queries/user";

export const userRouter = createTRPCRouter({
  createUser: publicProcedure
    .input(CredentialsSchema)
    .mutation(async ({ input: { username, password } }) => {
      const hash = await argon2.hash(password, { type: argon2.argon2id });
      const result = await createUser({ username, password: hash });
      return result;
    }),
});
