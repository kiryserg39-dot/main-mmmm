"use client";

import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProductViewer } from "@/components/three/ProductViewer";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
      <Container className="relative grid items-center gap-8 md:grid-cols-2 md:gap-4">
        <div className="animate-fade-up">
          <Badge className="mb-4">Хит продаж</Badge>
          <h1 className="font-display text-4xl font-black uppercase leading-[0.95] sm:text-5xl lg:text-6xl xl:text-7xl">
            Протеин <br />
            с инулином —{" "}
            <span className="text-accent">результат без компромиссов</span>
          </h1>
          <p className="mt-4 max-w-lg text-base text-text-muted sm:text-lg">
            Спортивное питание RusLab Nutrition из Казани. 14+ лет опыта, натуральный
            пребиотик в каждой банке. Бесплатная доставка от 2 000 ₽.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/catalog" size="lg">
              Каталог
            </LinkButton>
            <LinkButton href="/catalog/protein" variant="outline" size="lg">
              Протеины
            </LinkButton>
          </div>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <ProductViewer
            model={{ kind: "can", labelColor: "#B4FF39", capColor: "#14161a" }}
            fallbackImage="/images/products/whey.svg"
            className="aspect-square w-full max-w-lg mx-auto"
          />
        </div>
      </Container>
    </section>
  );
}
