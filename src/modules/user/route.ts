import { createRoute, OpenAPIHono } from "@hono/zod-openapi";

import { UserIdSchema, PublicUserSchema, UsersSchema } from "./schema";
import { prisma } from "../../utils/prisma";

export const userRoute = new OpenAPIHono();

userRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: { "application/json": { schema: UsersSchema } },
        description: "Get all users",
      },
    },
  }),
  async (c) => {
    const users = await prisma.user.findMany({
      omit: {
        email: true,
      },
    });

    return c.json(users);
  }
);

userRoute.openapi(
  createRoute({
    method: "get",
    path: "/{id}",
    request: {
      params: UserIdSchema,
    },
    responses: {
      200: {
        content: { "application/json": { schema: PublicUserSchema } },
        description: "Get user by id",
      },
      404: {
        description: "Not found",
      },
    },
  }),
  async (c) => {
    const { id } = c.req.valid("param");

    const product = await prisma.user.findUnique({
      where: { id },
      omit: {
        email: true,
      },
    });
    if (!product) {
      return c.json({ message: "Product not found" }, 404);
    }

    return c.json(product);
  }
);
