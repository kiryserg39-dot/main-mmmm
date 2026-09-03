import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WholesaleForm } from "@/components/forms/WholesaleForm";
import { Handshake, Package, TrendingUp, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Оптовым клиентам",
  description: "Условия оптового сотрудничества с RusLabNutrition — скидки, логистика, поддержка.",
};

const benefits = [
  { icon: TrendingUp, title: "Гибкие скидки", text: "Прогрессивная система скидок от объёма: от 10% при минимальной партии до 35% для крупных дистрибьюторов." },
  { icon: Package, title: "Минимальная партия", text: "Стартовая партия от 30 000 ₽. Пробный заказ для новых партнёров — от 15 000 ₽." },
  { icon: Truck, title: "Логистика", text: "Отправляем транспортными компаниями по всей России и в страны СНГ. Помогаем с маркировкой." },
  { icon: Handshake, title: "Персональный менеджер", text: "За каждым оптовым клиентом закреплён менеджер, который помогает с ассортиментом, маркетингом и остатками." },
];

export default function WholesalePage() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="Для бизнеса"
          title="Оптовым клиентам"
          description="Предлагаем выгодные условия сотрудничества для магазинов, фитнес-клубов, тренеров и дистрибьюторов."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-surface p-6">
              <b.icon className="mb-3 h-8 w-8 text-accent" />
              <h3 className="font-display text-base font-bold uppercase">{b.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{b.text}</p>
            </div>
          ))}
        </div>

        <WholesaleForm />
      </Container>
    </section>
  );
}
