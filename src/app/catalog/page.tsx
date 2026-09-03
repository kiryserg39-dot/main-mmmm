import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CatalogFilters } from "@/components/catalog/CatalogFilters";
import { ProductCard } from "@/components/catalog/ProductCard";
import { getAllProducts, ProductFilters } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Каталог",
  description: "Полный каталог спортивного питания RusLabNutrition: протеины, гейнеры, аминокислоты, жиросжигатели и функциональное питание.",
};

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const filters: ProductFilters = {};

  if (typeof sp.sort === "string") filters.sort = sp.sort as ProductFilters["sort"];
  const flavors = sp.flavor;
  if (flavors) filters.flavorIds = Array.isArray(flavors) ? flavors : [flavors];

  const products = await getAllProducts(filters);

  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle eyebrow="Каталог" title="Все товары" description={`${products.length} товаров в наличии`} />
        <div className="mt-8">
          <CatalogFilters />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {products.length === 0 && (
          <p className="mt-12 text-center text-text-muted">По вашему запросу ничего не найдено. Попробуйте изменить фильтры.</p>
        )}
      </Container>
    </section>
  );
}
