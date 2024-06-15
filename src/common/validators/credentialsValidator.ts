import { z } from "zod";

export const CredentialsSchema = z.object({
  username: z
    .string()
    .min(3, "Username should be between 3 and 16 characters")
    .max(16, "Username should be between 3 and 16 characters")
    .regex(
      /^[a-zA-z0-9]*$/,
      "Username should only include letters and numbers",
    ),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters long")
    .max(255, "Password should not be longer than 255 characters")
    .regex(
      // alpha numeric, space and !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
      /^[a-zA-Z0-9 \!"\#\$%&'\(\)\*\+,\-\.\/\:;\<\=\>\?@\[\\\]\^_`\{\|\}~ ]*$/,
      "Password contains invalid characters",
    ),
});
