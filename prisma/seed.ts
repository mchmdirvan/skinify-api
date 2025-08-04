import { PrismaClient } from "../src/generated/prisma";
import createSlug from "../src/utils/slug";
import { dataProducts } from "./data/products";

const prisma = new PrismaClient();

async function main() {
  for (const seedProduct of dataProducts) {
    const slug = createSlug(seedProduct.name);

    const product = await prisma.product.upsert({
      where: { slug },
      update: {},
      create: {
        slug,
        ...seedProduct,
      },
    });
    console.log(`🗺️ Product: ${product.name}`);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
