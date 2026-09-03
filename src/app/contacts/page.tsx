import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/forms/ContactForm";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с RusLabNutrition: телефон, адрес производства в Казани, email, соцсети.",
};

export default function ContactsPage() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle eyebrow="Контакты" title="Свяжитесь с нами" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex gap-4">
              <Phone className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold">Телефон (бесплатно по РФ)</p>
                <a href="tel:88003025979" className="text-accent hover:underline">8 800 302 59 79</a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:info@ruslabnutrition.ru" className="text-accent hover:underline">info@ruslabnutrition.ru</a>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold">Адрес производства</p>
                <p className="text-text-muted">г. Казань, Республика Татарстан</p>
                <p className="text-xs text-text-muted">ИП Аскеров Р.Б.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-0.5 h-6 w-6 flex-shrink-0 text-accent" />
              <div>
                <p className="font-semibold">Время работы</p>
                <p className="text-text-muted">Пн–Пт: 9:00 – 18:00 (МСК)</p>
                <p className="text-text-muted">Сб–Вс: обработка онлайн-заказов</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href="https://vk.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-bold text-text-muted hover:border-accent hover:text-accent"
              >
                VK
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-sm font-bold text-text-muted hover:border-accent hover:text-accent"
              >
                IG
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
