"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, Search, ShoppingCart, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { categories } from "@/data/categories";
import { useCartStore, useCartTotals } from "@/store/cart";
import { CartDrawer } from "@/components/layout/CartDrawer";

const NAV_LINKS = [
  { href: "/about", label: "О компании" },
  { href: "/certificates", label: "Сертификаты" },
  { href: "/wholesale", label: "Оптовым клиентам" },
  { href: "/delivery-payment", label: "Оплата и доставка" },
  { href: "/blog", label: "Блог" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const { count } = useCartTotals();
  const openCart = useCartStore((s) => s.open);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border bg-base/95 backdrop-blur">
        <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <button
            className="p-1 lg:hidden"
            aria-label="Открыть меню"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} />
          </button>

          <Link href="/" className="font-display text-lg font-black uppercase tracking-tight lg:text-xl">
            RusLab<span className="text-accent">Nutrition</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Основная навигация">
            <div
              className="relative"
              onMouseEnter={() => setCatalogOpen(true)}
              onMouseLeave={() => setCatalogOpen(false)}
            >
              <Link
                href="/catalog"
                className="text-sm font-semibold uppercase tracking-wide text-text hover:text-accent"
              >
                Каталог
              </Link>
              {catalogOpen && (
                <div className="absolute left-0 top-full grid w-[560px] grid-cols-2 gap-1 rounded-2xl border border-border bg-surface p-3 shadow-2xl">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/catalog/${c.slug}`}
                      className="rounded-xl px-4 py-3 text-sm text-text-muted transition-colors hover:bg-surface-2 hover:text-accent"
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wide text-text-muted hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:88003025979"
              className="hidden items-center gap-2 text-sm font-semibold sm:flex"
            >
              <Phone size={16} className="text-accent" />
              8 800 302 59 79
            </a>
            <Link href="/catalog" className="hidden p-2 sm:block" aria-label="Поиск">
              <Search size={20} />
            </Link>
            <button
              onClick={openCart}
              className="relative p-2"
              aria-label={`Корзина, товаров: ${count}`}
            >
              <ShoppingCart size={22} />
              {count > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-black">
                  {count}
                </span>
              )}
            </button>
          </div>
        </Container>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-base lg:hidden">
          <Container className="flex h-16 items-center justify-between">
            <span className="font-display text-lg font-black uppercase">Меню</span>
            <button aria-label="Закрыть меню" onClick={() => setMenuOpen(false)}>
              <X size={26} />
            </button>
          </Container>
          <nav className="flex-1 overflow-y-auto px-4 pb-10" aria-label="Мобильная навигация">
            <p className="mb-2 mt-4 text-xs font-bold uppercase tracking-wide text-text-muted">
              Каталог
            </p>
            <div className="mb-6 grid grid-cols-1 gap-1">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/catalog/${c.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold hover:bg-surface"
                >
                  {c.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-1 border-t border-border pt-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-text-muted hover:bg-surface hover:text-text"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <a
              href="tel:88003025979"
              className="mt-6 flex items-center gap-2 rounded-xl bg-surface px-3 py-3 text-base font-semibold"
            >
              <Phone size={18} className="text-accent" />
              8 800 302 59 79
            </a>
          </nav>
        </div>
      )}

      <CartDrawer />
    </>
  );
}
