import { createRoute, OpenAPIHono } from "@hono/zod-openapi";

import { BrandSchema, BrandsSchema, BrandsSlugSchema } from "./schema";
import { prisma } from "../../utils/prisma";

export const brandRoute = new OpenAPIHono();

brandRoute.openapi(
  createRoute({
    method: "get",
    path: "/",
    responses: {
      200: {
        content: { "application/json": { schema: BrandsSchema } },
        description: "Get all brands",
      },
    },
  }),
  async (c) => {
    const brand = await prisma.brand.findMany();

    return c.json(brand);
  }
);

brandRoute.openapi(
  createRoute({
    method: "get",
    path: "/{slug}",
    request: {
      params: BrandsSlugSchema,
    },
    responses: {
      200: {
        content: { "application/json": { schema: BrandSchema } },
        description: "Get brand",
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
