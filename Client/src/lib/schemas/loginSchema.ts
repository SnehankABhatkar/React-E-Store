import { z } from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
/*
In Zod v4, the chainable method .email() (used as z.string().email()) is officially deprecated. It is replaced by a top-level function to improve bundle size and tree-shaking performance. 

Migration Summary
Old Way (Deprecated): z.string().email()
New Way (Recommended): z.email() 
*/
