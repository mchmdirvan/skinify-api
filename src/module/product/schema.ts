import z from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  brand: z.string().optional().nullable(),
  sku: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  imageUrl: z.string().optional().nullable(),
  stockQuantity: z.number(),
  price: z.number(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ProductsSchema = z.array(ProductSchema);
