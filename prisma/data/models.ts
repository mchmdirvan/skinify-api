import { Model } from "../../src/generated/prisma";

type SeedModel = Pick<Model, "name" | "brandSlug" | "imageUrl">;

export const dataModels: SeedModel[] = [
  // iPhone
  {
    name: "iPhone 16e",
    brandSlug: "iphone",
    imageUrl:
      "https://ucarecdn.com/ea788fdd-ce25-4422-a087-54ace119d673/iPhone16eBody420x420.png",
  },
  {
    name: "iPhone 16 Pro",
    brandSlug: "iphone",
    imageUrl:
      "https://ucarecdn.com/5bef43d5-2f29-42dc-b745-a5d53c0abe65/iPhone16ProBody.png",
  },
  {
    name: "iPhone 16 Pro Max",
    brandSlug: "iphone",
    imageUrl:
      "https://ucarecdn.com/5bef43d5-2f29-42dc-b745-a5d53c0abe65/iPhone16ProBody.png",
  },
  {
    name: "iPhone 16",
    brandSlug: "iphone",
    imageUrl:
      "https://ucarecdn.com/929481cc-a975-444f-922b-4774ffcaf40d/iPhone16Body420x420.png",
  },
  {
    name: "iPhone 15",
    brandSlug: "iphone",
    imageUrl:
      "https://ucarecdn.com/4a3267db-f8bf-404b-8770-7b1ff500686e/iPhone15Body400x400.png",
  },

  // Samsung
  {
    name: "Galaxy S25 Edge",
    brandSlug: "samsung",
    imageUrl:
      "https://ucarecdn.com/5efda7ca-0071-46a5-856b-a9394aa59116/GalaxyS25EdgeBody420x420.png",
  },
  {
    name: "Galaxy S25",
    brandSlug: "samsung",
    imageUrl:
      "https://ucarecdn.com/e057939f-b6bf-42d6-b0e4-7fd1dc835b94/GalaxyS25Body400x400.png",
  },
  {
    name: "Galaxy S25 Ultra",
    brandSlug: "samsung",
    imageUrl:
      "https://ucarecdn.com/ddf981b3-9bb7-4705-85ed-9733328b9b17/GalaxyS25UltraBody.png",
  },
  {
    name: "Galaxy S24 Ultra",
    brandSlug: "samsung",
    imageUrl:
      "https://ucarecdn.com/78d96e8e-bf7d-44fc-b261-5d7cc43d5a41/GalaxyS24UltraBody400x400.png",
  },
  {
    name: "Galaxy S24",
    brandSlug: "samsung",
    imageUrl:
      "https://ucarecdn.com/560c9d77-fb8b-42e1-b97b-48b9f344d3fe/GalaxyS24Body400x400.png",
  },

  // Xiaomi
  {
    name: "Xiaomi 15 Ultra",
    brandSlug: "xiaomi",
    imageUrl:
      "https://ucarecdn.com/4d57b57e-9de3-4db8-a457-ded261331152/Xiaomi15UltraBody400x400.png",
  },
  {
    name: "Xiaomi 15",
    brandSlug: "xiaomi",
    imageUrl:
      "https://ucarecdn.com/c644989e-4510-44ce-9e1d-24b194737d35/Xiaomi15Body400x400.png",
  },
  {
    name: "Xiaomi 14T",
    brandSlug: "xiaomi",
    imageUrl:
      "https://ucarecdn.com/542d7e5d-0a1a-4dcb-b80d-3c81c74bfd53/Xiaomi14TBody400x400.png",
  },
  {
    name: "Xiaomi 14",
    brandSlug: "xiaomi",
    imageUrl:
      "https://ucarecdn.com/f1b084ad-3a73-46df-8f56-3b3550ad0085/Xiaomi14Body400x400.png",
  },
  {
    name: "Xiaomi 13T",
    brandSlug: "xiaomi",
    imageUrl:
      "https://ucarecdn.com/f3f05fe8-da8f-4dcf-b862-7d141fdf59f6/Xiaomi13TBody400x400.png                                                                 ",
  },

  // Poco
  {
    name: "Poco F7",
    brandSlug: "poco",
    imageUrl:
      "https://ucarecdn.com/2464efff-4c05-4ad1-b576-295f58f18c81/PocoF7Body420x420.png",
  },
  {
    name: "Poco F7 Ultra",
    brandSlug: "poco",
    imageUrl:
      "https://ucarecdn.com/061d450f-48de-4d67-a7f9-e15885951f4f/PocoF7UltraBack420x420.png",
  },
  {
    name: "Poco M7 Pro",
    brandSlug: "poco",
    imageUrl:
      "https://ucarecdn.com/079ff3e2-650b-439a-90b0-e4da91352b70/PocoM7ProBody420x420.png",
  },
  {
    name: "Poco F7 Pro",
    brandSlug: "poco",
    imageUrl:
      "https://ucarecdn.com/a9adc2bd-3bb1-4c24-a54e-4bf63c1c250c/PocoF7ProBody420x420.png",
  },
  {
    name: "Poco X7 Pro",
    brandSlug: "poco",
    imageUrl:
      "https://ucarecdn.com/1b8f1f99-72c9-4bbf-ba6c-313e264ab229/PocoX7ProBody.png",
  },

  // Oppo
  {
    name: "Oppo Find X8 ",
    brandSlug: "oppo",
    imageUrl:
      "https://ucarecdn.com/7bf03970-bf2b-4e21-bada-cc2d6becb427/OppoFindX8Body768x768.png",
  },

  // Google
  {
    name: "Pixel 8a",
    brandSlug: "google",
    imageUrl:
      "https://ucarecdn.com/89925a0d-5bba-4459-93fb-a083ad4ba5d7/GooglePixel8aBody400x400.png",
  },
  {
    name: "Pixel 8",
    brandSlug: "google",
    imageUrl:
      "https://ucarecdn.com/c50e0558-7f64-4e68-a7a6-94304b73b36d/GooglePixel8ProBody400x400.png",
  },
  {
    name: "Pixel 8 Pro",
    brandSlug: "google",
    imageUrl:
      "https://ucarecdn.com/c50e0558-7f64-4e68-a7a6-94304b73b36d/GooglePixel8ProBody400x400.png",
  },
  {
    name: "Pixel 7",
    brandSlug: "google",
    imageUrl:
      "https://ucarecdn.com/901207f5-728e-4a59-a5e3-d4b4252b1c83/GooglePixel7Body400x400.png",
  },
  {
    name: "Pixel 7 Pro",
    brandSlug: "google",
    imageUrl:
      "https://ucarecdn.com/b9477ea7-3529-477b-a935-5c0896cec8ef/GooglePixel7ProBody400x400.png",
  },

  // iQOO
  {
    name: "iQOO 13",
    brandSlug: "iqoo",
    imageUrl:
      "https://ucarecdn.com/23b11841-ec10-425f-8c14-21e4c6c03cd1/iQOO13Body420x420.png",
  },
  {
    name: "iQOO Neo 10",
    brandSlug: "iqoo",
    imageUrl:
      "https://ucarecdn.com/a2996be7-88d1-414d-917f-830ae10bb481/iQOONeo10Body420x420.png",
  },
  {
    name: "iQOO 12",
    brandSlug: "iqoo",
    imageUrl:
      "https://ucarecdn.com/4388c73d-572e-4629-af3f-9dfbb88b4ea0/iQOO12Body400x400.png",
  },
  {
    name: "iQOO Z7 5G",
    brandSlug: "iqoo",
    imageUrl:
      "https://ucarecdn.com/1bbd76f0-d786-4245-958e-45566c5571f1/iQOOZ75GBody400x400.png",
  },

  // Realme
  {
    name: "Realme GT 6",
    brandSlug: "realme",
    imageUrl:
      "https://ucarecdn.com/e34e69a5-8326-486e-aaa4-18f54c0f6c97/RealmeGT6Body400x400.png",
  },
  {
    name: "Realme GT Neo 3",
    brandSlug: "realme",
    imageUrl:
      "https://ucarecdn.com/02b3dddc-36be-4133-aa4a-ed3e7390ca78/RealmeGTNeo3Body768x768png.webp",
  },
  {
    name: "Realme 9 Pro",
    brandSlug: "realme",
    imageUrl:
      "https://ucarecdn.com/a592fe52-3413-4705-9d52-7471fc1bbc3d/Realme9ProBody768x768.png",
  },
  {
    name: "Realme GT Neo 3T",
    brandSlug: "realme",
    imageUrl:
      "https://ucarecdn.com/02b3dddc-36be-4133-aa4a-ed3e7390ca78/RealmeGTNeo3Body768x768png.webp",
  },
  {
    name: "Realme GT 2 Pro",
    brandSlug: "realme",
    imageUrl:
      "https://ucarecdn.com/e2ccf7ef-8471-4b63-8ca0-3f668806bfe0/RealmeGT2ProBody768x768.png",
  },

  // Asus
  {
    name: "ROG Phone 8",
    brandSlug: "asus",
    imageUrl:
      "https://ucarecdn.com/4d618520-df27-4b71-a247-abd938955091/ROGPhone8Body400x400.png",
  },
  {
    name: "Zenfone 10",
    brandSlug: "asus",
    imageUrl:
      "https://ucarecdn.com/2412ce8b-c054-4e50-bd48-fdf69c20355f/Zenfone10Body400x400.png",
  },
  {
    name: "ROG Phone 7",
    brandSlug: "asus",
    imageUrl:
      "https://ucarecdn.com/cf3e8132-0f21-4d16-960b-bcb5925bb915/ROGPhone7Body400x400.png",
  },
  {
    name: "Zenfone 9",
    brandSlug: "asus",
    imageUrl:
      "https://ucarecdn.com/227598f0-9fcc-4a00-871a-990b041bdd7d/Zenfone9Body400x400.png",
  },
  {
    name: "ROG Phone 6 ",
    brandSlug: "asus",
    imageUrl:
      "https://ucarecdn.com/ae216dd0-bcf2-4da0-8792-8ec2859ff922/ROGPhone6Body400x400.png",
  },
];
