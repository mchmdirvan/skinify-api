import { Model } from "../../src/generated/prisma";

type SeedModel = Pick<Model, "name" | "brandSlug">;

export const dataModels: SeedModel[] = [
  // iPhone
  { name: "iPhone 16e", brandSlug: "iphone" },
  { name: "iPhone 16 Pro", brandSlug: "iphone" },
  { name: "iPhone 16 Pro Max", brandSlug: "iphone" },
  { name: "iPhone 16", brandSlug: "iphone" },
  { name: "iPhone 15", brandSlug: "iphone" },

  // Samsung
  { name: "Galaxy S25 Edge", brandSlug: "samsung" },
  { name: "Galaxy S25", brandSlug: "samsung" },
  { name: "Galaxy S25 Ultra", brandSlug: "samsung" },
  { name: "Galaxy S24 Ultra", brandSlug: "samsung" },
  { name: "Galaxy S24", brandSlug: "samsung" },

  // Xiaomi
  { name: "Xiaomi 15 Ultra", brandSlug: "xiaomi" },
  { name: "Xiaomi 15", brandSlug: "xiaomi" },
  { name: "Xiaomi 14T", brandSlug: "xiaomi" },
  { name: "Xiaomi 14", brandSlug: "xiaomi" },
  { name: "Xiaomi 13T", brandSlug: "xiaomi" },

  // Poco
  { name: "Poco F7", brandSlug: "poco" },
  { name: "Poco F7 Ultra", brandSlug: "poco" },
  { name: "Poco M7 Pro", brandSlug: "poco" },
  { name: "Poco F7 Pro", brandSlug: "poco" },
  { name: "Poco X7 Pro", brandSlug: "poco" },

  // Oppo
  { name: "Oppo Find X7 Ultra", brandSlug: "oppo" },
  { name: "Oppo Find N3 Flip", brandSlug: "oppo" },
  { name: "Oppo Reno11 Pro 5G", brandSlug: "oppo" },
  { name: "Oppo Reno11 F 5G", brandSlug: "oppo" },
  { name: "Oppo A98 5G", brandSlug: "oppo" },

  // Google
  { name: "Pixel 8a", brandSlug: "google" },
  { name: "Pixel 8", brandSlug: "google" },
  { name: "Pixel 8 Pro", brandSlug: "google" },
  { name: "Pixel 7", brandSlug: "google" },
  { name: "Pixel 7 Pro", brandSlug: "google" },

  // iQOO
  { name: "iQOO 13", brandSlug: "iqoo" },
  { name: "iQOO Neo 10", brandSlug: "iqoo" },
  { name: "iQOO 12", brandSlug: "iqoo" },
  { name: "iQOO Z7 5G", brandSlug: "iqoo" },

  // Realme
  { name: "Realme GT 6", brandSlug: "realme" },
  { name: "Realme GT Neo 3", brandSlug: "realme" },
  { name: "Realme 9 Pro", brandSlug: "realme" },
  { name: "Realme GT Neo 3T", brandSlug: "realme" },
  { name: "Realme GT 2 Pro", brandSlug: "realme" },

  // Asus
  { name: "ROG Phone 8", brandSlug: "asus" },
  { name: "Zenfone 10", brandSlug: "asus" },
  { name: "ROG Phone 7", brandSlug: "asus" },
  { name: "Zenfone 9", brandSlug: "asus" },
  { name: "ROG Phone 6 ", brandSlug: "asus" },
];
