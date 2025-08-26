import { z } from "@hono/zod-openapi";

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  fullName: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const PrivateUserSchema = UserSchema;

export const PublicUserSchema = UserSchema.omit({
  email: true,
});

export const UsersSchema = z.array(PublicUserSchema);

export const UserIdSchema = z.object({
  id: z.string(),
});

export type PrivateUser = z.infer<typeof PrivateUserSchema>;
