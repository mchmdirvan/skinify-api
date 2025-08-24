import z from "zod";

export const BrandSchema = z.object({
  id: z.string(),
  slug: z.string(),

  name: z.string(),
  imageUrl: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export const BrandsSchema = z.array(BrandSchema);

export const BrandsSlugSchema = z.object({
  slug: z.string(),
});
