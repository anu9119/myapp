import { z } from "zod";

const emailSchema = z.object({
  subject: z
    .string()
    .max(100, "Subject must be at most 100 characters long.")
    .min(5, "Subject must be at least 5 characters long."),
  content: z
    .string()
    .max(500, "Content must be at most 500 characters long.")
    .min(100, "Content must be at least 100 characters long."),
  email: z.string().email("Invalid email address."),
});

export { emailSchema };
