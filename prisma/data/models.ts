import { Model } from "../../src/generated/prisma";

type SeedModel = Pick<Model, "name" | "brandSlug">;

export const dataModels: SeedModel[] = [
  // iPhone
  { name: "iPhone 16e", brandSlug: "iPhone" },
  { name: "iPhone 16 Pro", brandSlug: "iPhone" },
  { name: "iPhone 16 Pro Max", brandSlug: "iPhone" },
  { name: "iPhone 16", brandSlug: "iPhone" },
  { name: "iPhone 15", brandSlug: "iPhone" },

  // Samsung
  { name: "Galaxy S25 Edge", brandSlug: "Samsung" },
  { name: "Galaxy S25", brandSlug: "Samsung" },
  { name: "Galaxy S25 Ultra", brandSlug: "Samsung" },
  { name: "Galaxy S24 Ultra", brandSlug: "Samsung" },
  { name: "Galaxy S24", brandSlug: "Samsung" },

  // Xiaomi
  { name: "Xiaomi 15 Ultra", brandSlug: "Xiaomi" },
  { name: "Xiaomi 15", brandSlug: "Xiaomi" },
  { name: "Xiaomi 14T", brandSlug: "Xiaomi" },
  { name: "Xiaomi 14", brandSlug: "Xiaomi" },
  { name: "Xiaomi 13T", brandSlug: "Xiaomi" },

  // Poco
  { name: "Poco F7", brandSlug: "Poco" },
  { name: "Poco F7 Ultra", brandSlug: "Poco" },
  { name: "Poco M7 Pro", brandSlug: "Poco" },
  { name: "Poco F7 Pro", brandSlug: "Poco" },
  { name: "Poco X7 Pro", brandSlug: "Poco" },

  // Oppo
  { name: "Oppo Find X7 Ultra", brandSlug: "Oppo" },
  { name: "Oppo Find N3 Flip", brandSlug: "Oppo" },
  { name: "Oppo Reno11 Pro 5G", brandSlug: "Oppo" },
  { name: "Oppo Reno11 F 5G", brandSlug: "Oppo" },
  { name: "Oppo A98 5G", brandSlug: "Oppo" },

  // Google
  { name: "Pixel 8a", brandSlug: "Google" },
  { name: "Pixel 8", brandSlug: "Google" },
  { name: "Pixel 8 Pro", brandSlug: "Google" },
  { name: "Pixel 7", brandSlug: "Google" },
  { name: "Pixel 7 Pro", brandSlug: "Google" },

  // iQOO
  { name: "iQOO 13", brandSlug: "iQOO" },
  { name: "iQOO Neo 10", brandSlug: "iQOO" },
  { name: "iQOO 12", brandSlug: "iQOO" },
  { name: "iQOO Z7 5G", brandSlug: "iQOO" },

  // Realme
  { name: "Realme GT 6", brandSlug: "Realme" },
  { name: "Realme GT Neo 3", brandSlug: "Realme" },
  { name: "Realme 9 Pro", brandSlug: "Realme" },
  { name: "Realme GT Neo 3T", brandSlug: "Realme" },
  { name: "Realme GT 2 Pro", brandSlug: "Realme" },

  // Asus
  { name: "ROG Phone 8", brandSlug: "Asus" },
  { name: "Zenfone 10", brandSlug: "Asus" },
  { name: "ROG Phone 7", brandSlug: "Asus" },
  { name: "Zenfone 9", brandSlug: "Asus" },
  { name: "ROG Phone 6 ", brandSlug: "Asus" },
];
