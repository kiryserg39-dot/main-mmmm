import { Category } from "@/types/catalog";

export const categories: Category[] = [
  {
    slug: "protein",
    title: "Протеины",
    shortTitle: "Протеины",
    description:
      "Сывороточные и многокомпонентные протеины для роста и восстановления мышц — с добавлением натурального пребиотика инулина.",
    heroImage: "/images/categories/protein.svg",
    accent: "lime",
  },
  {
    slug: "gainers",
    title: "Гейнеры",
    shortTitle: "Гейнеры",
    description:
      "Высококалорийные комплексы белков и углеводов для набора массы и восполнения энергии после тяжёлых тренировок.",
    heroImage: "/images/categories/gainers.svg",
    accent: "orange",
  },
  {
    slug: "aminoacids",
    title: "Аминокислоты",
    shortTitle: "Аминокислоты",
    description:
      "BCAA, креатин, глютамин и другие аминокислоты для силы, выносливости и быстрого восстановления.",
    heroImage: "/images/categories/aminoacids.svg",
    accent: "lime",
  },
  {
    slug: "fat-burners",
    title: "Жиросжигатели",
    shortTitle: "Жиросжигатели",
    description:
      "L-карнитин и термогенные комплексы, которые помогают эффективнее использовать жир как источник энергии.",
    heroImage: "/images/categories/fat-burners.svg",
    accent: "orange",
  },
  {
    slug: "functional",
    title: "Функциональное питание",
    shortTitle: "Функц. питание",
    description:
      "Пребиотики, витаминные комплексы и добавки для здоровья пищеварения и общего тонуса — основа философии RusLab.",
    heroImage: "/images/categories/functional.svg",
    accent: "lime",
  },
  {
    slug: "vegan",
    title: "Для веганов и вегетарианцев",
    shortTitle: "Веган",
    description:
      "Растительные протеины на горохе и рисе — полноценная аминокислотная профиль без животных компонентов.",
    heroImage: "/images/categories/vegan.svg",
    accent: "lime",
  },
  {
    slug: "for-women",
    title: "Для девушек",
    shortTitle: "Для девушек",
    description:
      "Сбалансированные формулы с коллагеном и лёгкой текстурой, разработанные с учётом женской физиологии.",
    heroImage: "/images/categories/for-women.svg",
    accent: "pink",
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
