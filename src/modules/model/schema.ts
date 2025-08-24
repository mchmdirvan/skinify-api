import z from "zod";

export const ModelSchema = z.object({
  id: z.string(),
  slug: z.string(),

  name: z.string(),
  imageUrl: z.string(),

  createdAt: z.date(),
  updatedAt: z.date(),
});

export const ModelsSchema = z.array(ModelSchema);

export const ModelsSlugSchema = z.object({
  slug: z.string(),
});
