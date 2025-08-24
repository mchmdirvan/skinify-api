import { Brand } from "../../src/generated/prisma";

type SeedBrand = Pick<Brand, "name" | "imageUrl">;

export const dataBrands: SeedBrand[] = [
  {
    name: "iPhone",
    imageUrl:
      "https://ucarecdn.com/929481cc-a975-444f-922b-4774ffcaf40d/iPhone16Body420x420.png",
  },
  {
    name: "Samsung",
    imageUrl:
      "https://ucarecdn.com/ddf981b3-9bb7-4705-85ed-9733328b9b17/GalaxyS25UltraBody.png",
  },
  {
    name: "Xiaomi",
    imageUrl:
      "https://ucarecdn.com/28218f89-b77b-4b64-9736-93ac1495aac4/Xiaomi15UltraBody.png",
  },
  {
    name: "Poco",
    imageUrl:
      "https://ucarecdn.com/1b8f1f99-72c9-4bbf-ba6c-313e264ab229/PocoX7ProBody.png",
  },
  {
    name: "Oppo",
    imageUrl:
      "https://ucarecdn.com/bbe46f7f-68f1-4cbb-a0cf-f149077dc52e/OppoFindX8Body420x420.png",
  },
  {
    name: "Google",
    imageUrl:
      "https://ucarecdn.com/5c1947be-0e7a-4e53-b7f3-1aa8be0f59a2/GooglePixel8ProBody400x400.png",
  },
  {
    name: "iQOO",
    imageUrl:
      "https://ucarecdn.com/d8efc569-c642-4734-bfb6-131a6c26dde0/iQOO12Body400x400.png",
  },
  {
    name: "Realme",
    imageUrl:
      "https://ucarecdn.com/3f387c74-5440-4f20-b4ee-3639df577f3e/RealmeGT6Body400x400.png",
  },
  {
    name: "Asus",
    imageUrl:
      "https://ucarecdn.com/4d618520-df27-4b71-a247-abd938955091/ROGPhone8Body400x400.png",
  },
];
