import { cors } from "hono/cors";

import { prisma } from "./utils/prisma";
import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { ProductsSchema } from "./module/product/schema";

const app = new OpenAPIHono();

app.use(cors());

app.get("/", (c) => {
  return c.text("Skinify Backend API");
});

app.openapi(
  createRoute({
    method: "get",
    path: "/products",
    responses: {
      200: {
        content: { "application/json": { schema: ProductsSchema } },
        description: "Get all products",
      },
    },
  }),
  async (c) => {
    const products = await prisma.product.findMany();

    return c.json(products);
  }
);

app.doc("/openapi.json", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "Skinify API",
  },
});

export default app;
