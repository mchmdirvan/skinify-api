import z from "zod";

export const UserSchema = z.object({
  id: z.string(),
  username: z.string(),
  fullName: z.string(),
});

export const UsersSchema = z.array(UserSchema);

export const UserIdSchema = z.object({
  id: z.string(),
});
