import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { LinkButton } from "@/components/ui/Button";
import { ProductCard } from "@/components/catalog/ProductCard";
import { getBestsellers } from "@/lib/cms";

export async function BestsellersSection() {
  const items = await getBestsellers(4);

  return (
    <section className="border-t border-border bg-surface py-16 md:py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle eyebrow="Бестселлеры" title="Самые популярные" />
          <LinkButton href="/catalog" variant="outline" size="sm">
            Весь каталог
          </LinkButton>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
