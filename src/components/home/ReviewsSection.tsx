import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Алексей",
    product: "Whey",
    rating: 5,
    text: "Беру Whey уже полгода. Вкус ванильное мороженое — реально как молочный коктейль. Живот не беспокоит, инулин делает своё дело.",
  },
  {
    name: "Ирина",
    product: "Female",
    rating: 5,
    text: "Наконец-то нормальный протеин для девушек! Лёгкий, без тяжести, вкус пина колада обалденный. И кожа стала лучше от коллагена в составе.",
  },
  {
    name: "Дмитрий",
    product: "Creatine Monohydrate",
    rating: 5,
    text: "Классический креатин без лишнего. Сила растёт, вес +3 кг за месяц. Качество на уровне импортных брендов, а цена приятнее.",
  },
  {
    name: "Кристина",
    product: "Giant Mass",
    rating: 5,
    text: "Муж на гейнере набрал 5 кг за два месяца — очень доволен. Банан — топ-вкус, растворяется без комков.",
  },
];

export function ReviewsSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle eyebrow="Отзывы" title="Что говорят наши клиенты" align="center" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-5"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="flex-1 text-sm leading-relaxed text-text-muted">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-4 border-t border-border pt-3">
                <p className="text-sm font-semibold">{r.name}</p>
                <p className="text-xs text-text-muted">о {r.product}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
