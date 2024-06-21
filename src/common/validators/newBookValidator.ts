import { z } from "zod";

export const NewBookSchema = z.object({
  title: z
    .string()
    .min(1, "Book's name should be between 1 and 255 characters")
    .max(255, "Book's name should be between 1 and 255 characters"),
  author: z
    .string()
    .min(1, "Author's name should be between 1 and 255 characters")
    .max(255, "Author's name should be between 1 and 255 characters"),
  isbn: z
    .string()
    .length(13, "Please use the 13 digit format without dashes")
    .regex(/^[0-9]{13}$/, "Please use 13 digit format without dashes"),
});
