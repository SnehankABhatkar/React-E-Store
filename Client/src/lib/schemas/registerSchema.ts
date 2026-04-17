import z from "zod";

export type RegisterSchema = z.infer<typeof registerSchema>;

const passwordValidation = new RegExp(
  /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
);

export const registerSchema = z.object({
  email: z.email(),
  password: z.string().regex(passwordValidation, {
    message:
      "Paassword must contain 1 lowercase and 1 uppercase character, 1 number, 1 special character and must be between 6-10 in lenght.",
  }),
});

/*
In regular expressions, the pattern (?!.*\s) is a negative lookahead that ensures there is no whitespace character(no spaces, tabs, or newlines) anywhere in the remainder of the string.

Username Validation: Ensuring a username does not contain spaces (e.g., ^(?!.*\s)[a-zA-Z0-9]+$)
*/
