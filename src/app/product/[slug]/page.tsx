import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ProductViewer } from "@/components/three/ProductViewer";
import { AddToCartForm } from "@/components/product/AddToCartForm";
import { NutritionTable } from "@/components/product/NutritionTable";
import { ProductCard } from "@/components/catalog/ProductCard";
import { getProduct, getRelatedProducts, getCategory } from "@/lib/cms";
import { products } from "@/data/products";
import { formatRating } from "@/lib/format";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return { title: "Товар не найден" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const related = await getRelatedProducts(product, 4);
  const cat = await getCategory(product.category);

  return (
    <article className="py-8 md:py-14">
      <Container>
        <nav className="mb-6 flex items-center gap-1 text-xs text-text-muted" aria-label="Хлебные крошки">
          <Link href="/" className="hover:text-accent">Главная</Link>
          <ChevronRight size={12} />
          <Link href="/catalog" className="hover:text-accent">Каталог</Link>
          {cat && (
            <>
              <ChevronRight size={12} />
              <Link href={`/catalog/${cat.slug}`} className="hover:text-accent">{cat.title}</Link>
            </>
          )}
          <ChevronRight size={12} />
          <span className="text-text">{product.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <ProductViewer
              model={product.model3d}
              fallbackImage={product.images[0]}
              className="aspect-square w-full rounded-2xl border border-border bg-surface"
            />
            <div className="absolute left-4 top-4 flex gap-1.5">
              {product.tags.includes("bestseller") && <Badge tone="lime">Хит</Badge>}
              {product.tags.includes("new") && <Badge tone="orange">Новинка</Badge>}
              {product.tags.includes("inulin") && <Badge tone="lime">Инулин</Badge>}
            </div>
          </div>

          <div>
            {product.line && (
              <span className="text-xs font-semibold uppercase tracking-wide text-text-muted">
                {product.line}
              </span>
            )}
            <h1 className="mt-1 font-display text-3xl font-black uppercase sm:text-4xl">
              {product.name}
            </h1>
            <div className="mt-2 flex items-center gap-2 text-sm text-text-muted">
              <div className="flex items-center gap-0.5">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="font-semibold text-text">{formatRating(product.rating)}</span>
              </div>
              <span>{product.reviewsCount} отзывов</span>
            </div>
            <p className="mt-4 text-base leading-relaxed text-text-muted">{product.shortDescription}</p>

            <div className="mt-6">
              <AddToCartForm product={product} />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="font-display text-xl font-bold uppercase">Описание</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{product.description}</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold uppercase">Состав</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{product.composition}</p>
            </section>
            <section>
              <h2 className="font-display text-xl font-bold uppercase">Способ применения</h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">{product.usage}</p>
            </section>
          </div>
          <div>
            <NutritionTable nutrition={product.nutrition} />
          </div>
        </div>

        {product.reviews.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-xl font-bold uppercase">Отзывы</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.reviews.map((r) => (
                <div key={r.id} className="rounded-2xl border border-border bg-surface p-5">
                  <div className="mb-2 flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted">{r.text}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-text-muted">
                    <span className="font-semibold text-text">{r.author}</span>
                    <span>{r.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-14">
            <h2 className="font-display text-xl font-bold uppercase">Похожие товары</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </Container>
    </article>
  );
}
