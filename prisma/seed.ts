import { PrismaClient } from "../src/generated/prisma";

import createSlug from "../src/utils/slug";

import { dataProducts } from "./data/products";
import { dataBrands } from "./data/brands";
import { dataModels } from "./data/models";

const prisma = new PrismaClient();

async function main() {
  for (const seedBrand of dataBrands) {
    const slug = createSlug(seedBrand.name);

    const brand = await prisma.brand.upsert({
      where: { slug },
      update: {},
      create: {
        slug,
        ...seedBrand,
      },
    });
    console.log(`🏷️ Brand: ${brand.name}`);
  }

  for (const seedModel of dataModels) {
    const slug = createSlug(seedModel.name);

    const model = await prisma.model.upsert({
      where: { slug },
      update: {},
      create: {
        slug,
        ...seedModel,
      },
    });
    console.log(`📱 Model: ${model.name}`);
  }

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
    console.log(`🛒 Product: ${product.name}`);
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
