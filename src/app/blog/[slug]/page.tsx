import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { blogPosts, getBlogPost } from "@/data/blog";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Статья не найдена" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="py-10 md:py-16">
      <Container className="max-w-3xl">
        <Link href="/blog" className="mb-6 inline-flex items-center gap-1 text-sm text-text-muted hover:text-accent">
          <ChevronLeft size={16} />
          Все статьи
        </Link>
        <div className="mb-4 flex items-center gap-2 text-xs text-text-muted">
          <BookOpen size={14} className="text-accent" />
          <span>{post.readMin} мин</span>
          <span>·</span>
          <span>{new Date(post.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}</span>
        </div>
        <h1 className="font-display text-3xl font-bold uppercase sm:text-4xl">{post.title}</h1>
        <p className="mt-3 text-base text-text-muted">{post.excerpt}</p>
        <div className="prose-ruslab mt-8 space-y-4 text-sm leading-relaxed text-text-muted">
          {post.body.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return <h3 key={i} className="font-display text-base font-bold text-text mt-6">{paragraph.slice(2, -2)}</h3>;
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={i} className="ml-4 list-disc space-y-1">
                  {paragraph.split("\n").map((line, j) => (
                    <li key={j}>{line.replace(/^- /, "")}</li>
                  ))}
                </ul>
              );
            }
            const boldRegex = /\*\*(.*?)\*\*/g;
            const parts = paragraph.split(boldRegex);
            return (
              <p key={i}>
                {parts.map((part, j) =>
                  j % 2 === 1 ? <strong key={j} className="text-text font-semibold">{part}</strong> : part
                )}
              </p>
            );
          })}
        </div>
      </Container>
    </article>
  );
}
