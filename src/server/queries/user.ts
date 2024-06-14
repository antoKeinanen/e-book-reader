import { z } from "zod";
import { db } from "../db";
import { CredentialsSchema } from "~/common/validators/credentialsValidator";

export async function getUserByName(name: string) {
  return db.user.findUnique({ where: { name: name } });
}

export async function createUser(user: z.infer<typeof CredentialsSchema>) {
  return db.user.create({ data: user });
}
