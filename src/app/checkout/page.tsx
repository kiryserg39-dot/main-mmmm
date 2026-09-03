"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useCartStore, useCartTotals } from "@/store/cart";
import { formatPrice, FREE_SHIPPING_THRESHOLD } from "@/lib/format";

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const setQuantity = useCartStore((s) => s.setQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const clearCart = useCartStore((s) => s.clear);
  const { subtotal } = useCartTotals();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : 350;
  const total = subtotal + shipping;
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  function validate(fd: FormData) {
    const e: Record<string, string> = {};
    if (!fd.get("name")) e.name = "Укажите имя";
    const phone = String(fd.get("phone") ?? "").replace(/\D/g, "");
    if (phone.length < 10) e.phone = "Укажите корректный телефон";
    if (!fd.get("city")) e.city = "Укажите город";
    if (!fd.get("address")) e.address = "Укажите адрес";
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs = validate(fd);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: {
            name: fd.get("name"),
            phone: fd.get("phone"),
            email: fd.get("email"),
            city: fd.get("city"),
            address: fd.get("address"),
            comment: fd.get("comment"),
          },
          items: items.map((i) => ({
            productId: i.productId,
            name: i.name,
            flavor: i.flavorName,
            size: i.sizeLabel,
            price: i.price,
            quantity: i.quantity,
          })),
          subtotal,
          shipping,
          total,
        }),
      });

      if (res.ok) {
        clearCart();
        router.push("/checkout/success");
      } else {
        setErrors({ form: "Ошибка при оформлении заказа. Попробуйте ещё раз." });
      }
    } catch {
      setErrors({ form: "Ошибка сети. Проверьте соединение." });
    } finally {
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <section className="py-20">
        <Container className="text-center">
          <h1 className="font-display text-3xl font-bold uppercase">Корзина пуста</h1>
          <p className="mt-2 text-text-muted">Добавьте товары из каталога, чтобы оформить заказ.</p>
          <Link href="/catalog" className="mt-6 inline-flex items-center gap-2 font-semibold text-accent hover:underline">
            Перейти в каталог
          </Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-10 md:py-16">
      <Container>
        <h1 className="font-display text-3xl font-bold uppercase">Оформление заказа</h1>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-[1fr,380px]">
          <div className="space-y-8">
            <div className="rounded-2xl border border-border bg-surface p-5">
              <h2 className="mb-4 font-display text-lg font-bold uppercase">Ваш заказ</h2>
              <ul className="divide-y divide-border">
                {items.map((item) => (
                  <li key={`${item.productId}-${item.flavorId}-${item.sizeId}`} className="flex gap-3 py-4 first:pt-0 last:pb-0">
                    <Link
                      href={`/product/${item.slug}`}
                      className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-surface-2"
                    >
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                    </Link>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{item.name}</p>
                      <p className="text-xs text-text-muted">{item.flavorName} · {item.sizeLabel}</p>
                      <div className="mt-2 flex items-center gap-3">
                        <div className="flex items-center gap-1 rounded-full border border-border">
                          <button type="button" className="p-1" onClick={() => setQuantity(item.productId, item.flavorId, item.sizeId, item.quantity - 1)}>
                            <Minus size={14} />
                          </button>
                          <span className="w-5 text-center text-xs">{item.quantity}</span>
                          <button type="button" className="p-1" onClick={() => setQuantity(item.productId, item.flavorId, item.sizeId, item.quantity + 1)}>
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-sm font-bold">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    </div>
                    <button type="button" className="self-start text-text-muted hover:text-accent-2" onClick={() => removeItem(item.productId, item.flavorId, item.sizeId)}>
                      <Trash2 size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-5 space-y-4">
              <h2 className="font-display text-lg font-bold uppercase">Данные получателя</h2>
              <Field label="Имя*" name="name" error={errors.name} />
              <Field label="Телефон*" name="phone" type="tel" placeholder="+7 (___) ___-__-__" error={errors.phone} />
              <Field label="Email" name="email" type="email" />
              <Field label="Город*" name="city" error={errors.city} />
              <Field label="Адрес доставки*" name="address" error={errors.address} />
              <Field label="Комментарий" name="comment" />
            </div>
          </div>

          <aside className="space-y-4">
            <div className="sticky top-24 rounded-2xl border border-border bg-surface p-5 space-y-4">
              {remaining > 0 && (
                <p className="text-xs text-text-muted">
                  До бесплатной доставки: <span className="text-accent font-semibold">{formatPrice(remaining)}</span>
                </p>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Товары</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Доставка</span>
                <span>{shipping === 0 ? <span className="text-accent font-semibold">Бесплатно</span> : formatPrice(shipping)}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between text-base">
                <span>Итого</span>
                <span className="font-display text-xl font-bold">{formatPrice(total)}</span>
              </div>

              {errors.form && (
                <p className="text-xs text-accent-2">{errors.form}</p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Оформляем…" : "Оформить заказ"}
              </Button>

              <p className="text-center text-[11px] text-text-muted">
                Оплата при получении или онлайн (ЮKassa).
                <br />
                Нажимая кнопку, вы соглашаетесь с условиями оферты.
              </p>
            </div>
          </aside>
        </form>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div>
      <label className="mb-1 block text-xs font-semibold text-text-muted">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-surface-2 px-4 py-2.5 text-sm text-text placeholder:text-text-muted ${
          error ? "border-accent-2" : "border-border"
        }`}
      />
      {error && <p className="mt-1 text-xs text-accent-2">{error}</p>}
    </div>
  );
}
