import { cors } from "hono/cors";

import { prisma } from "./utils/prisma";
import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { ProductsSchema } from "./module/product/schema";

const app = new OpenAPIHono();

app.use(cors());

app.get("/", (c) => {
  return c.text("Skinify Backend API");
});

const route = createRoute({
  method: "get",
  path: "/products",
  responses: {
    200: {
      content: { "application/json": { schema: ProductsSchema } },
      description: "Get all products",
    },
  },
});

app.openapi(route, async (c) => {
  const products = await prisma.product.findMany();

  return c.json(products);
});

export default app;
