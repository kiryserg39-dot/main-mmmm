import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Factory, Leaf, Medal, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "О компании",
  description: "RusLabNutrition — российский производитель спортивного питания из Казани. Более 14 лет опыта.",
};

const timeline = [
  { year: "2010", text: "Основание компании в Казани. Первая линейка сывороточных протеинов." },
  { year: "2014", text: "Запуск собственного производства и линейки для девушек." },
  { year: "2018", text: "Внедрение инулина в весь ассортимент протеинов — главное отличие бренда." },
  { year: "2021", text: "Выход на маркетплейсы (Ozon, Wildberries). 30+ SKU в каталоге." },
  { year: "2024", text: "Обновление линейки, запуск веганской серии и функционального питания." },
];

export default function AboutPage() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="О компании"
          title="14+ лет создаём спортивное питание, которому доверяют"
          description="RusLabNutrition — российский бренд из Казани. Полный цикл производства: от разработки формулы и закупки сырья до упаковки и контроля качества."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Factory, title: "Своё производство", text: "Полный контроль от сырья до готового продукта — никаких посредников." },
            { icon: FlaskConical, title: "R&D лаборатория", text: "Собственные технологи разрабатывают формулы и тестируют каждую партию." },
            { icon: Leaf, title: "Инулин в каждой банке", text: "Натуральный пребиотик для комфортного пищеварения — наша визитная карточка." },
            { icon: Medal, title: "Сертификация", text: "Продукция прошла сертификацию. Лабораторные анализы в открытом доступе." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-surface p-6">
              <item.icon className="mb-3 h-8 w-8 text-accent" />
              <h3 className="font-display text-sm font-bold uppercase">{item.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold uppercase">История бренда</h2>
          <div className="mt-8 space-y-6 border-l-2 border-accent/30 pl-6">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <span className="absolute -left-[1.85rem] top-0.5 h-3 w-3 rounded-full bg-accent" />
                <p className="font-display text-sm font-bold text-accent">{t.year}</p>
                <p className="mt-1 text-sm text-text-muted">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
