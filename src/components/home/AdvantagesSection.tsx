import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Factory, Medal, Truck, Users } from "lucide-react";

const advantages = [
  { icon: Factory, title: "14+ лет производства", text: "Собственный завод в Казани, полный контроль от сырья до упаковки." },
  { icon: Medal, title: "Проверенный состав", text: "Сертификация, лабораторные анализы и прозрачная информация на каждой банке." },
  { icon: Truck, title: "Бесплатная доставка", text: "При заказе от 2 000 ₽ доставим бесплатно по всей России." },
  { icon: Users, title: "50 000+ клиентов", text: "Нас выбирают новички и профессионалы — от фитнеса до тяжёлой атлетики." },
];

export function AdvantagesSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle eyebrow="Почему RusLab" title="Качество, в котором уверены" align="center" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((a) => (
            <div key={a.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface-2">
                <a.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold uppercase">{a.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{a.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
