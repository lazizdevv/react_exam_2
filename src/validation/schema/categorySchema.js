import * as z from "zod";

export const categorySchema = z.object({
  name: z
    .string()
    .min(2, "Product name must be at least 2 characters long")
    .max(40, "The product name must be a maximum of 40 characters"),

  img: z.string().url("Invalid URL format").min(1, "Image URL is required"),
});
