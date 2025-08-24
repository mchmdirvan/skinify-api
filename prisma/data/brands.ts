import { Brand } from "../../src/generated/prisma";

type SeedBrand = Pick<Brand, "name">;

export const dataBrands: SeedBrand[] = [
  {
    name: "iPhone",
  },
  {
    name: "Samsung",
  },
  {
    name: "Xiaomi",
  },
  {
    name: "Poco",
  },
  {
    name: "Oppo",
  },
  {
    name: "Google",
  },
  {
    name: "iQOO",
  },
  {
    name: "Realme",
  },
  {
    name: "Asus",
  },
];
