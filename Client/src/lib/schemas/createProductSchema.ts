import { z } from "zod";

// const fileSchema = z
//   .instanceof(File)
//   .refine((file) => file.size > 0, {
//     message: "A file must be uploaded",
//   })
//   .transform((file) => ({
//     ...file,
//     preview: URL.createObjectURL(file),
//   }));

const fileSchema = z
  .custom<File & { preview?: string }>()
  .refine((file) => file instanceof File, "Expected a valid file");

export const createProductSchema = z
  .object({
    name: z.string({
      error: (issue) =>
        issue.input === undefined
          ? "Name of product is required"
          : "Invalid input.",
    }),
    description: z
      .string({
        error: (issue) =>
          issue.input === undefined
            ? "Name of product is required"
            : "Invalid input.",
      })
      .min(10, {
        message: "Description must be at least 10 characters",
      }),
    // price: z.coerce
    //   .number<number>({
    //     error: (issue) =>
    //       issue.input === undefined ? "Price is required" : "Invalid number",
    //   })
    //   .min(100, "Price must be at least $1.00"),
    price: z
      .transform(Number)
      .pipe(z.number().min(100, "Price must be at least $1.00")),
    type: z.string({
      error: (issue) =>
        issue.input === undefined ? "Type is required" : "Invalid input.",
    }),
    brand: z.string({
      error: (issue) =>
        issue.input === undefined ? "Brand is required" : "Invalid input.",
    }),
    quantityInStock: z.coerce
      .number<number>({
        error: (issue) =>
          issue.input === undefined ? "Quantity is required" : "Invalid number",
      })
      .min(1, "Quantity must be at least 1"),
    pictureUrl: z.string().optional(),
    file: fileSchema.optional(),
  })
  .refine((data) => data.pictureUrl || data.file, {
    message: "Please provide an image",
    path: ["file"],
  });

export type CreateProductSchema = z.infer<typeof createProductSchema>;
