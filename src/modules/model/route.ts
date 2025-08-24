import { createRoute, OpenAPIHono } from "@hono/zod-openapi";

import { ModelSchema, ModelsSchema, ModelsSlugSchema } from "./schema";
import { prisma } from "../../utils/prisma";

export const modelRoute = new OpenAPIHono();

modelRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: { "application/json": { schema: ModelsSchema } },
        description: "Get all models",
      },
    },
  }),
  async (c) => {
    const model = await prisma.model.findMany();

    return c.json(model);
  }
);

modelRoute.openapi(
  createRoute({
    method: "get",
    path: "/{slug}",
    request: {
      params: ModelsSlugSchema,
    },
    responses: {
      200: {
        content: { "application/json": { schema: ModelSchema } },
        description: "Get model",
      },
      404: {
        description: "Not found",
      },
    },
  }),
  async (c) => {
    const { slug } = c.req.valid("param");

    const product = await prisma.product.findUnique({
      where: { slug },
    });
    if (!product) {
      return c.json({ message: "Product not found" }, 404);
    }

    return c.json(product);
  }
);
