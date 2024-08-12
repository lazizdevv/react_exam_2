import * as z from "zod";

export const profileSchema = z.object({
  email: z.string().email("Invalid email"),
  name: z.string().min(2, "The name must be at least 2 characters long"),
  img: z.string().url("Invalid URL"),
  password: z.string().min(4, "Password must contain at least 4 characters"),
});
