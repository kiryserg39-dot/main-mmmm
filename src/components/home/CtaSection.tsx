import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="border-y border-border bg-gradient-to-r from-accent/10 via-transparent to-accent/5 py-16 md:py-24">
      <Container className="text-center">
        <h2 className="font-display text-3xl font-black uppercase sm:text-4xl lg:text-5xl">
          Готовы начать?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-text-muted">
          Собрали каталог для любой цели — набор массы, рельеф, выносливость или здоровье.
          Бесплатная доставка от 2 000 ₽ по всей России.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <LinkButton href="/catalog" size="lg">
            Перейти в каталог
          </LinkButton>
          <LinkButton href="/contacts" variant="outline" size="lg">
            Связаться с нами
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
