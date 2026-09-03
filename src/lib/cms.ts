/**
 * Единая точка доступа к каталогу.
 *
 * Сейчас данные берутся из локальных файлов в /src/data — это позволяет
 * запустить и протестировать весь сайт без внешней CMS.
 *
 * Когда будет поднята headless CMS (Strapi/Payload), нужно заменить тело
 * функций в этом файле на fetch к её REST/GraphQL API — сигнатуры и типы
 * (см. /src/types/catalog.ts) созданы так, чтобы остальной код (страницы,
 * компоненты) менять не пришлось.
 */
import { categories, getCategoryBySlug as _getCategoryBySlug } from "@/data/categories";
import {
  products,
  getProductBySlug as _getProductBySlug,
  getProductsByCategory as _getProductsByCategory,
  getBestsellers as _getBestsellers,
  getRelated as _getRelated,
} from "@/data/products";
import { CategorySlug, Product } from "@/types/catalog";

export interface ProductFilters {
  category?: CategorySlug;
  flavorIds?: string[];
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  query?: string;
  sort?: "popular" | "price-asc" | "price-desc" | "new";
}

function priceRange(p: Product) {
  const prices = p.sizes.map((s) => s.price);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

export async function getCategories() {
  return categories;
}

export async function getCategory(slug: string) {
  return _getCategoryBySlug(slug) ?? null;
}

export async function getAllProducts(filters: ProductFilters = {}) {
  let result = [...products];

  if (filters.category) {
    result = result.filter((p) => p.category === filters.category);
  }
  if (filters.flavorIds?.length) {
    result = result.filter((p) => p.flavors.some((f) => filters.flavorIds!.includes(f.id)));
  }
  if (filters.tags?.length) {
    result = result.filter((p) => filters.tags!.some((t) => p.tags.includes(t as Product["tags"][number])));
  }
  if (typeof filters.minPrice === "number") {
    result = result.filter((p) => priceRange(p).min >= filters.minPrice!);
  }
  if (typeof filters.maxPrice === "number") {
    result = result.filter((p) => priceRange(p).min <= filters.maxPrice!);
  }
  if (filters.query) {
    const q = filters.query.toLowerCase();
    result = result.filter(
      (p) => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q)
    );
  }

  switch (filters.sort) {
    case "price-asc":
      result.sort((a, b) => priceRange(a).min - priceRange(b).min);
      break;
    case "price-desc":
      result.sort((a, b) => priceRange(b).min - priceRange(a).min);
      break;
    case "new":
      result = result.filter((p) => p.tags.includes("new")).concat(result.filter((p) => !p.tags.includes("new")));
      break;
    default:
      result.sort((a, b) => b.rating * b.reviewsCount - a.rating * a.reviewsCount);
  }

  return result;
}

export async function getProduct(slug: string) {
  return _getProductBySlug(slug) ?? null;
}

export async function getProductsByCategory(category: string) {
  return _getProductsByCategory(category);
}

export async function getBestsellers(limit = 8) {
  return _getBestsellers().slice(0, limit);
}

export async function getRelatedProducts(product: Product, limit = 4) {
  return _getRelated(product, limit);
}

export function getPriceRange(product: Product) {
  return priceRange(product);
}

export const allFlavors = Array.from(
  new Map(products.flatMap((p) => p.flavors).map((f) => [f.id, f])).values()
);
