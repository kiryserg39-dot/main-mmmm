import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CatalogFilters } from "@/components/catalog/CatalogFilters";
import { ProductCard } from "@/components/catalog/ProductCard";
import { getCategory, getAllProducts, getCategories, ProductFilters } from "@/lib/cms";
import { CategorySlug } from "@/types/catalog";

export async function generateStaticParams() {
  const cats = await getCategories();
  return cats.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = await getCategory(category);
  if (!cat) return { title: "Категория не найдена" };
  return {
    title: cat.title,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { category } = await params;
  const cat = await getCategory(category);
  if (!cat) notFound();

  const sp = await searchParams;
  const filters: ProductFilters = { category: category as CategorySlug };
  if (typeof sp.sort === "string") filters.sort = sp.sort as ProductFilters["sort"];
  const flavors = sp.flavor;
  if (flavors) filters.flavorIds = Array.isArray(flavors) ? flavors : [flavors];

  const products = await getAllProducts(filters);

  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="Каталог"
          title={cat.title}
          description={cat.description}
        />
        <div className="mt-8">
          <CatalogFilters currentCategory={category} />
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {products.length === 0 && (
          <p className="mt-12 text-center text-text-muted">В этой категории пока нет товаров по выбранным фильтрам.</p>
        )}
      </Container>
    </section>
  );
}
