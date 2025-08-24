import { Product } from "../../src/generated/prisma";

type SeedProduct = Pick<
  Product,
  "name" | "modelSlug" | "sku" | "imageUrl" | "stockQuantity" | "price"
>;

export const dataProducts: SeedProduct[] = [
  {
    name: "Slate",
    sku: "SKINIFY-IP16-SLATE",
    modelSlug: "iphone-16",
    imageUrl:
      "https://ucarecdn.com/f650359b-3692-4e47-9450-8caabf85999c/Screenshot_20250818_151029removebgpreview.png",
    stockQuantity: 100,
    price: 159000,
  },
  {
    name: "Patina",
    sku: "SKINIFY-IP16-Patina",
    modelSlug: "iphone-16",
    imageUrl: "https://ucarecdn.com/0889b6da-b6f5-4021-b040-f81bda338d88/4.png",
    stockQuantity: 100,
    price: 159000,
  },
  {
    name: "Black Camo",
    sku: "SKINIFY-IP16-BLACKCAMO",
    modelSlug: "iphone-16",
    imageUrl: "https://ucarecdn.com/edb1ea02-b14c-4111-8e40-21c167516368/3.png",
    stockQuantity: 100,
    price: 159000,
  },
  {
    name: "Matte Black",
    sku: "SKINIFY-IP16-MATTEBLACK",
    modelSlug: "iphone-16",
    imageUrl: "https://ucarecdn.com/69677c5d-ef51-4839-820e-a58068860a47/6.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Matte White",
    sku: "SKINIFY-IP16-MATTEWHITE",
    modelSlug: "iphone-16",
    imageUrl: "https://ucarecdn.com/7be2e6ec-6d0d-43f3-b95f-4a0a3ada9d90/7.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Artic Blue",
    sku: "SKINIFY-IP16-ARTICBLUE",
    modelSlug: "iphone-16",
    imageUrl: "https://ucarecdn.com/16cb0fec-218d-464b-b793-d07a71607fca/8.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Glacial Green",
    sku: "SKINIFY-IP16-GLACIALGREEN",
    modelSlug: "iphone-16",
    imageUrl: "https://ucarecdn.com/1c8a75bd-ec24-48fd-aa05-9b15635215e7/9.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Mellow Yellow",
    sku: "SKINIFY-IP16-MELLOWYELLOW",
    modelSlug: "iphone-16",
    imageUrl:
      "https://ucarecdn.com/2f02c5ee-0b25-436e-a63b-509c8177fbdd/10.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Petal Pink",
    sku: "SKINIFY-IP16-PETALPINK",
    modelSlug: "iphone-16",
    imageUrl:
      "https://ucarecdn.com/d04a9133-a613-4389-b3f3-fdf1093d84e9/12.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Blush Pink",
    sku: "SKINIFY-IP16-BLUSHPINK",
    modelSlug: "iphone-16",
    imageUrl:
      "https://ucarecdn.com/31a886f9-6db9-4c58-b795-9d45e1e73fea/11.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Emerald Green",
    sku: "SKINIFY-IP16-EMERALDGREEN",
    modelSlug: "iphone-16",
    imageUrl:
      "https://ucarecdn.com/9c2b84d6-7f0b-42e2-b9b8-e34428a5b3d7/14.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Lust Red",
    sku: "SKINIFY-IP16-LUSTRED",
    modelSlug: "iphone-16",
    imageUrl:
      "https://ucarecdn.com/18c03412-f388-4850-aa04-b9f2a97d77ec/13.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Lemon Yellow",
    sku: "SKINIFY-IP16-Lemon Yellow",
    modelSlug: "iphone-16",
    imageUrl:
      "https://ucarecdn.com/14876efc-27b7-4a5b-8319-da5f7f2c4280/15.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Marble White",
    sku: "SKINIFY-IP16-MARBLEWHITE",
    modelSlug: "iphone-16",
    imageUrl:
      "https://ucarecdn.com/4ef72e0e-578f-44cd-b385-e5ff8e964589/16.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Leather Black",
    sku: "SKINIFY-IP16-LEATHERBLACK",
    modelSlug: "iphone-16",
    imageUrl: "https://ucarecdn.com/53c3bd9b-43df-413d-9bb3-57b8a6d0a390/2.png",
    stockQuantity: 100,
    price: 129000,
  },
  {
    name: "Titanium Black",
    sku: "SKINIFY-IP16-TITANIUMBLACK",
    modelSlug: "iphone-16",
    imageUrl: "https://ucarecdn.com/c3d2d5f3-f0d4-4288-b43f-f27596dcb3d4/1.png",
    stockQuantity: 100,
    price: 129000,
  },
];
