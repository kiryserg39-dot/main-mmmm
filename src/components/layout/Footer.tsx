import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { categories } from "@/data/categories";

const LINKS = {
  Каталог: categories.map((c) => ({ href: `/catalog/${c.slug}`, label: c.shortTitle })),
  "О компании": [
    { href: "/about", label: "История бренда" },
    { href: "/certificates", label: "Сертификаты" },
    { href: "/wholesale", label: "Оптовым клиентам" },
    { href: "/blog", label: "Блог" },
  ],
  Покупателям: [
    { href: "/delivery-payment", label: "Оплата и доставка" },
    { href: "/contacts", label: "Контакты" },
    { href: "/faq", label: "Вопросы и ответы" },
  ],
};

export function Footer() {
  return (
    <footer className="hidden border-t border-border bg-surface md:block">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="font-display text-lg font-black uppercase tracking-tight">
              RusLab<span className="text-accent">Nutrition</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-text-muted">
              Российский производитель спортивного и функционального питания из Казани.
              14+ лет опыта, натуральный пребиотик инулин в составе.
            </p>
            <a href="tel:88003025979" className="mt-4 block text-sm font-semibold text-accent">
              8 800 302 59 79
            </a>
          </div>
          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <p className="mb-4 text-xs font-bold uppercase tracking-wide text-text-muted">
                {title}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-text-muted hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} RusLabNutrition (ИП Аскеров Р.Б.). Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent" aria-label="ВКонтакте">
              VK
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent" aria-label="Instagram">
              IG
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
