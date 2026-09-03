import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { LinkButton } from "@/components/ui/Button";
import { Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react";

const points = [
  {
    icon: Leaf,
    title: "Натуральный пребиотик",
    text: "Инулин получают из корня цикория — это 100% природная растворимая клетчатка без химической обработки.",
  },
  {
    icon: Heart,
    title: "Здоровое пищеварение",
    text: "Питает полезную микрофлору кишечника и помогает усваивать белок без вздутия и дискомфорта.",
  },
  {
    icon: ShieldCheck,
    title: "Усиленное усвоение",
    text: "Инулин повышает биодоступность минералов — кальция, магния, железа — из того же приёма пищи.",
  },
  {
    icon: Sparkles,
    title: "Чувство сытости",
    text: "Мягко снижает аппетит и помогает контролировать калорийность рациона без чувства голода.",
  },
];

export function InulinSection() {
  return (
    <section className="overflow-hidden border-y border-border bg-surface py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <SectionTitle
            eyebrow="Наше отличие"
            title="Зачем мы добавляем инулин"
            description="Каждый протеин RusLab Nutrition содержит натуральный пребиотик инулин — это не маркетинг, а забота о вашем пищеварении и результате."
            align="center"
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-surface-2 p-6 transition-colors hover:border-accent/40"
            >
              <p.icon className="mb-4 h-8 w-8 text-accent" />
              <h3 className="font-display text-base font-bold uppercase">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{p.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <LinkButton href="/blog/inulin" variant="outline">
            Подробнее про инулин
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
