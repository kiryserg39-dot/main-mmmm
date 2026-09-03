"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/types/catalog";
import { Badge } from "@/components/ui/Badge";
import { formatPrice, formatRating } from "@/lib/format";
import { minPrice } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  const price = minPrice(product);
  const oldPrice = product.sizes[0].oldPrice;
  const isBestseller = product.tags.includes("bestseller");
  const isNew = product.tags.includes("new");

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all hover:border-accent/40 hover:shadow-[0_0_40px_-12px_rgba(180,255,57,0.15)]"
    >
      <div className="relative aspect-square overflow-hidden bg-surface-2">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
        />
        <div className="absolute left-3 top-3 flex gap-1.5">
          {isBestseller && <Badge tone="lime">Хит</Badge>}
          {isNew && <Badge tone="orange">Новинка</Badge>}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4">
        {product.line && (
          <span className="text-[11px] font-semibold uppercase tracking-wide text-text-muted">
            {product.line}
          </span>
        )}
        <h3 className="mt-1 font-display text-base font-bold uppercase leading-tight group-hover:text-accent">
          {product.name}
        </h3>
        <p className="mt-1 flex-1 text-xs leading-relaxed text-text-muted line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="mt-3 flex items-center gap-1 text-xs text-text-muted">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span className="font-semibold text-text">{formatRating(product.rating)}</span>
          <span className="ml-0.5">({product.reviewsCount})</span>
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-display text-lg font-bold">
            {product.sizes.length > 1 ? "от " : ""}
            {formatPrice(price)}
          </span>
          {oldPrice && (
            <span className="text-xs text-text-muted line-through">{formatPrice(oldPrice)}</span>
          )}
        </div>
        {product.flavors.length > 1 && (
          <div className="mt-2.5 flex gap-1">
            {product.flavors.slice(0, 6).map((f) => (
              <span
                key={f.id}
                title={f.name}
                className="h-4 w-4 rounded-full border border-border"
                style={{ backgroundColor: f.swatch }}
              />
            ))}
            {product.flavors.length > 6 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-border text-[9px] text-text-muted">
                +{product.flavors.length - 6}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
