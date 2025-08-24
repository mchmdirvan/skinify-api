import { Product } from "../../src/generated/prisma";

type SeedProduct = Pick<
  Product,
  | "name"
  | "modelSlug"
  | "sku"
  | "description"
  | "imageUrl"
  | "stockQuantity"
  | "price"
>;

export const dataProducts: SeedProduct[] = [
  {
    name: "iPhone 16 Skins - Slate",
    modelSlug: "iphone-16",
    sku: "SKINIFY-IP16-SLATE",
    description:
      "Let’s get one thing straight — your iPhone 16 is cool. But not your kind of cool. Wrap your iPhone 16 with Exacoat’s premium skin – no added bulk, just flawless defense. Engineered for an exact, edge‑to‑edge fit.",
    imageUrl:
      "https://ucarecdn.com/f650359b-3692-4e47-9450-8caabf85999c/Screenshot_20250818_151029removebgpreview.png",
    stockQuantity: 112,
    price: 129000,
  },
];
