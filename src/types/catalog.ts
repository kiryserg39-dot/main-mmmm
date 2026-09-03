export type CategorySlug =
  | "protein"
  | "gainers"
  | "aminoacids"
  | "fat-burners"
  | "functional"
  | "vegan"
  | "for-women";

export interface Category {
  slug: CategorySlug;
  title: string;
  shortTitle: string;
  description: string;
  heroImage: string;
  accent?: "lime" | "pink" | "orange";
}

export interface Flavor {
  id: string;
  name: string;
  swatch: string; // css color for the flavor dot
}

export interface SizeOption {
  id: string;
  label: string; // "900 г"
  grams: number;
  price: number;
  oldPrice?: number;
  servings: number;
  sku: string;
  inStock: boolean;
}

export interface NutritionFacts {
  perServingGrams: number;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  inulin?: number;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  line?: string;
  category: CategorySlug;
  tags: Array<"bestseller" | "new" | "vegan" | "for-women" | "inulin">;
  shortDescription: string;
  description: string;
  composition: string;
  usage: string;
  nutrition: NutritionFacts;
  flavors: Flavor[];
  sizes: SizeOption[];
  images: string[];
  model3d?: {
    kind: "can" | "pouch" | "bottle" | "jar";
    labelColor: string;
    capColor: string;
  };
  rating: number;
  reviewsCount: number;
  reviews: Review[];
}

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  image: string;
  flavorId: string;
  flavorName: string;
  sizeId: string;
  sizeLabel: string;
  price: number;
  quantity: number;
}
