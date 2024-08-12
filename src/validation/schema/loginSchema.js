import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters long")
    .max(100, "Password must be a maximum of 20 characters"),
});
