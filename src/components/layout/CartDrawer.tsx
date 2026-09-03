"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useCartStore, useCartTotals } from "@/store/cart";
import { formatPrice, FREE_SHIPPING_THRESHOLD } from "@/lib/format";
import { LinkButton } from "@/components/ui/Button";

export function CartDrawer() {
  const isOpen = useCartStore((s) => s.isOpen);
  const close = useCartStore((s) => s.close);
  const items = useCartStore((s) => s.items);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const { subtotal } = useCartTotals();

  if (!isOpen) return null;

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        className="absolute inset-0 bg-black/70"
        aria-label="Закрыть корзину"
        onClick={close}
      />
      <div className="relative flex h-full w-full max-w-md flex-col bg-surface">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="font-display text-lg font-bold uppercase">Корзина</h2>
          <button onClick={close} aria-label="Закрыть корзину">
            <X size={22} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <p className="text-text-muted">Корзина пока пуста</p>
            <LinkButton href="/catalog" onClick={close}>
              Перейти в каталог
            </LinkButton>
          </div>
        ) : (
          <>
            <div className="border-b border-border px-5 py-4">
              {remaining > 0 ? (
                <p className="text-xs text-text-muted">
                  До бесплатной доставки: <span className="text-accent font-semibold">{formatPrice(remaining)}</span>
                </p>
              ) : (
                <p className="text-xs font-semibold text-accent">Бесплатная доставка уже доступна</p>
              )}
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-4">
                {items.map((item) => (
                  <li key={`${item.productId}-${item.flavorId}-${item.sizeId}`} className="flex gap-3">
                    <Link
                      href={`/product/${item.slug}`}
                      onClick={close}
                      className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-surface-2"
                    >
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <Link href={`/product/${item.slug}`} onClick={close} className="text-sm font-semibold hover:text-accent">
                        {item.name}
                      </Link>
                      <p className="text-xs text-text-muted">
                        {item.flavorName} · {item.sizeLabel}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2 rounded-full border border-border">
                          <button
                            className="p-1.5"
                            aria-label="Уменьшить количество"
                            onClick={() => setQuantity(item.productId, item.flavorId, item.sizeId, item.quantity - 1)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-4 text-center text-sm">{item.quantity}</span>
                          <button
                            className="p-1.5"
                            aria-label="Увеличить количество"
                            onClick={() => setQuantity(item.productId, item.flavorId, item.sizeId, item.quantity + 1)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-bold">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                    <button
                      aria-label="Удалить товар"
                      className="self-start text-text-muted hover:text-accent-2"
                      onClick={() => removeItem(item.productId, item.flavorId, item.sizeId)}
                    >
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border px-5 py-5">
              <div className="mb-4 flex items-center justify-between text-base">
                <span className="text-text-muted">Итого</span>
                <span className="font-display text-xl font-bold">{formatPrice(subtotal)}</span>
              </div>
              <LinkButton href="/checkout" onClick={close} className="w-full">
                Оформить заказ
              </LinkButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
