import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { categories } from "@/data/categories";
import { ChevronRight } from "lucide-react";

const accentColors: Record<string, string> = {
  lime: "group-hover:text-accent",
  orange: "group-hover:text-accent-2",
  pink: "group-hover:text-women",
};

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle eyebrow="Каталог" title="Все категории" />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/catalog/${cat.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <div>
                <h3
                  className={`font-display text-base font-bold uppercase transition-colors ${
                    accentColors[cat.accent ?? "lime"]
                  }`}
                >
                  {cat.title}
                </h3>
                <p className="mt-1 text-xs text-text-muted line-clamp-2">{cat.description}</p>
              </div>
              <ChevronRight className="h-5 w-5 flex-shrink-0 text-text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
