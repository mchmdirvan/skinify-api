import { Hono } from "hono";
import { prisma } from "./utils/prisma";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Skinify Backend API");
});

app.get("/products", async (c) => {
  const products = await prisma.product.findMany();

  return c.json(products);
});

export default app;
