import { z } from "@hono/zod-openapi";

export const BaseUserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  fullName: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const PrivateUserSchema = BaseUserSchema;

export const PublicUserSchema = BaseUserSchema.omit({
  email: true,
});

export const UsersSchema = z.array(PublicUserSchema);

export const UserIdSchema = z.object({
  id: z.string(),
});
