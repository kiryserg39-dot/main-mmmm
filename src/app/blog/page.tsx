import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { blogPosts } from "@/data/blog";
import { BookOpen, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Блог",
  description: "Статьи о спортивном питании, составах и здоровом образе жизни от RusLabNutrition.",
};

export default function BlogPage() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle eyebrow="Блог" title="Полезные статьи" description="Разбираемся в составах, развенчиваем мифы и помогаем выбрать питание под вашу цель." />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40"
            >
              <div className="mb-3 flex items-center gap-2 text-xs text-text-muted">
                <BookOpen size={14} className="text-accent" />
                <span>{post.readMin} мин</span>
                <span>·</span>
                <span>{new Date(post.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}</span>
              </div>
              <h3 className="flex-1 font-display text-base font-bold uppercase leading-tight group-hover:text-accent">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted line-clamp-3">{post.excerpt}</p>
              <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-accent">
                Читать <ChevronRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
