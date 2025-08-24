import { Product } from "../../src/generated/prisma";

type SeedProduct = Pick<
  Product,
  "name" | "modelSlug" | "sku" | "imageUrl" | "stockQuantity" | "price"
>;

export const dataProducts: SeedProduct[] = [
  {
    name: "iPhone 16 Skins - Slate",
    sku: "SKINIFY-IP16-SLATE",
    modelSlug: "iphone-16",
    imageUrl:
      "https://ucarecdn.com/f650359b-3692-4e47-9450-8caabf85999c/Screenshot_20250818_151029removebgpreview.png",
    stockQuantity: 112,
    price: 129000,
  },
];
