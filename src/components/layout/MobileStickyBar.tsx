"use client";

import Link from "next/link";
import { Home, LayoutGrid, Phone, ShoppingCart } from "lucide-react";
import { useCartTotals, useCartStore } from "@/store/cart";

export function MobileStickyBar() {
  const { count } = useCartTotals();
  const openCart = useCartStore((s) => s.open);

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-4 border-t border-border bg-surface/95 backdrop-blur md:hidden"
      aria-label="Мобильная нижняя панель"
    >
      <Link href="/" className="flex flex-col items-center justify-center gap-0.5 text-text-muted">
        <Home size={20} />
        <span className="text-[10px]">Главная</span>
      </Link>
      <Link
        href="/catalog"
        className="flex flex-col items-center justify-center gap-0.5 text-text-muted"
      >
        <LayoutGrid size={20} />
        <span className="text-[10px]">Каталог</span>
      </Link>
      <a
        href="tel:88003025979"
        className="flex flex-col items-center justify-center gap-0.5 text-text-muted"
      >
        <Phone size={20} />
        <span className="text-[10px]">Позвонить</span>
      </a>
      <button
        onClick={openCart}
        className="relative flex flex-col items-center justify-center gap-0.5 text-text-muted"
        aria-label={`Корзина, товаров: ${count}`}
      >
        <ShoppingCart size={20} />
        {count > 0 && (
          <span className="absolute right-1/2 top-1 ml-3 translate-x-5 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-black">
            {count}
          </span>
        )}
        <span className="text-[10px]">Корзина</span>
      </button>
    </nav>
  );
}
