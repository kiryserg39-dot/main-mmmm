import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin", "cyrillic"],
  weight: ["500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ruslabnutrition.ru"),
  title: {
    default: "RusLabNutrition — спортивное питание с инулином",
    template: "%s — RusLabNutrition",
  },
  description:
    "RusLabNutrition — российский производитель спортивного и функционального питания из Казани. 14+ лет опыта, натуральный пребиотик инулин в составе. Протеины, гейнеры, аминокислоты и многое другое с доставкой по России.",
  keywords: [
    "спортивное питание",
    "протеин",
    "гейнер",
    "BCAA",
    "креатин",
    "RusLabNutrition",
    "инулин",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={`${inter.variable} ${unbounded.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-base text-text">
        <Header />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
