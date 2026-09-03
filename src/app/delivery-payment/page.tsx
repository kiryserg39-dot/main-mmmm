import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CreditCard, MapPin, Shield, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Оплата и доставка",
  description: "Способы оплаты и доставки заказов RusLabNutrition по всей России.",
};

export default function DeliveryPaymentPage() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle eyebrow="Покупателям" title="Оплата и доставка" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="font-display text-xl font-bold uppercase flex items-center gap-2">
              <Truck className="h-6 w-6 text-accent" />
              Доставка
            </h2>
            <div className="space-y-4 text-sm text-text-muted">
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-text">Бесплатная доставка</h3>
                <p className="mt-1">При заказе от 2 000 ₽ — бесплатно по всей России через СДЭК или Почту России.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-text">Стандартная доставка</h3>
                <p className="mt-1">При заказе менее 2 000 ₽ — 350 ₽. Срок: 2–7 рабочих дней в зависимости от региона.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-text flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-accent" />
                  Самовывоз (Казань)
                </h3>
                <p className="mt-1">Бесплатно. Адрес склада уточняйте у менеджера после оформления заказа.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-xl font-bold uppercase flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-accent" />
              Оплата
            </h2>
            <div className="space-y-4 text-sm text-text-muted">
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-text">Онлайн-оплата</h3>
                <p className="mt-1">Банковские карты (Visa, Mastercard, Мир), SberPay, ЮMoney через платёжный сервис ЮKassa. Все данные защищены.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5">
                <h3 className="font-semibold text-text">Оплата при получении</h3>
                <p className="mt-1">Наложенный платёж при получении в пункте выдачи СДЭК или на почте.</p>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-5 flex items-start gap-3">
                <Shield className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <div>
                  <h3 className="font-semibold text-text">Безопасность</h3>
                  <p className="mt-1">Все платежи проходят через защищённый протокол 3D-Secure. Мы не храним данные ваших карт.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
