"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useCartStore } from "@/store/cart";
import { Product } from "@/types/catalog";
import { formatPrice } from "@/lib/format";

export function AddToCartForm({ product }: { product: Product }) {
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0]?.id ?? "");
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.id ?? "");
  const [qty, setQty] = useState(1);
  const [quickBuy, setQuickBuy] = useState(false);
  const addItem = useCartStore((s) => s.addItem);

  const size = product.sizes.find((s) => s.id === selectedSize) ?? product.sizes[0];
  const flavor = product.flavors.find((f) => f.id === selectedFlavor) ?? product.flavors[0];

  function handleAddToCart() {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      image: product.images[0],
      flavorId: flavor.id,
      flavorName: flavor.name,
      sizeId: size.id,
      sizeLabel: size.label,
      price: size.price,
      quantity: qty,
    });
  }

  return (
    <div className="space-y-5">
      {product.flavors.length > 1 && (
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-text-muted">
            Вкус: <span className="text-text">{flavor.name}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {product.flavors.map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedFlavor(f.id)}
                title={f.name}
                className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                  f.id === selectedFlavor
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-text-muted hover:border-accent/50"
                }`}
              >
                <span className="h-3 w-3 rounded-full border border-border" style={{ backgroundColor: f.swatch }} />
                {f.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.sizes.length > 1 && (
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-text-muted">Объём</p>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSize(s.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  s.id === selectedSize
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-text-muted hover:border-accent/50"
                } ${!s.inStock ? "opacity-40 pointer-events-none" : ""}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-baseline gap-3">
        <span className="font-display text-3xl font-bold">{formatPrice(size.price)}</span>
        {size.oldPrice && (
          <span className="text-base text-text-muted line-through">{formatPrice(size.oldPrice)}</span>
        )}
        <span className="text-xs text-text-muted">{size.servings} порций</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-full border border-border">
          <button className="p-2.5" aria-label="Уменьшить" onClick={() => setQty(Math.max(1, qty - 1))}>
            <Minus size={16} />
          </button>
          <span className="w-6 text-center text-sm font-semibold">{qty}</span>
          <button className="p-2.5" aria-label="Увеличить" onClick={() => setQty(qty + 1)}>
            <Plus size={16} />
          </button>
        </div>
        <Button onClick={handleAddToCart} className="flex-1" disabled={!size.inStock}>
          <ShoppingCart size={18} />
          В корзину
        </Button>
      </div>

      <button
        onClick={() => setQuickBuy(true)}
        className="flex w-full items-center justify-center gap-2 rounded-full border border-accent/30 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/10"
      >
        <Zap size={16} />
        Купить в 1 клик
      </button>

      {quickBuy && (
        <div className="rounded-2xl border border-border bg-surface-2 p-5">
          <p className="mb-3 text-sm font-semibold">Оставьте номер — мы перезвоним</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const fd = new FormData(e.currentTarget);
              alert(`Спасибо! Мы перезвоним на ${fd.get("phone")} по товару ${product.name}`);
              setQuickBuy(false);
            }}
            className="flex gap-2"
          >
            <input
              name="phone"
              type="tel"
              required
              placeholder="+7 (___) ___-__-__"
              className="flex-1 rounded-full border border-border bg-surface px-4 py-2.5 text-sm placeholder:text-text-muted"
            />
            <Button type="submit" size="sm">
              Отправить
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
