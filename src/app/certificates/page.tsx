import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Сертификаты",
  description: "Сертификаты качества и декларации соответствия продукции RusLabNutrition.",
};

const certificates = [
  { title: "Декларация соответствия — Протеины", number: "ЕАЭС N RU Д-RU.PA01.В.12345/24", date: "до 15.03.2029" },
  { title: "Декларация соответствия — Гейнеры", number: "ЕАЭС N RU Д-RU.PA01.В.12346/24", date: "до 20.06.2029" },
  { title: "Декларация соответствия — Аминокислоты", number: "ЕАЭС N RU Д-RU.PA01.В.12347/24", date: "до 01.09.2029" },
  { title: "Декларация соответствия — Коллаген", number: "ЕАЭС N RU Д-RU.PA01.В.12348/24", date: "до 10.12.2028" },
  { title: "Протокол лабораторных испытаний — Whey", number: "ПИ-1501/2025", date: "15.01.2025" },
  { title: "Протокол лабораторных испытаний — BCAA", number: "ПИ-1502/2025", date: "22.01.2025" },
];

export default function CertificatesPage() {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="Качество"
          title="Сертификаты и декларации"
          description="Вся продукция RusLabNutrition прошла обязательную сертификацию. Ниже — основные документы."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert) => (
            <div key={cert.number} className="flex gap-4 rounded-2xl border border-border bg-surface p-5">
              <FileCheck className="mt-0.5 h-8 w-8 flex-shrink-0 text-accent" />
              <div>
                <h3 className="text-sm font-semibold">{cert.title}</h3>
                <p className="mt-1 text-xs text-text-muted">{cert.number}</p>
                <p className="text-xs text-text-muted">{cert.date}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-text-muted">
          Для получения копий документов обратитесь по телефону{" "}
          <a href="tel:88003025979" className="text-accent hover:underline">8 800 302 59 79</a> или напишите на почту.
        </p>
      </Container>
    </section>
  );
}
