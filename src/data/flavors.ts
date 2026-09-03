import { Flavor } from "@/types/catalog";

export const flavor = {
  vanilla: { id: "vanilla", name: "Ванильное мороженое", swatch: "#F3E3B8" },
  chocolate: { id: "chocolate", name: "Шоколад", swatch: "#6B4226" },
  strawberry: { id: "strawberry", name: "Клубника со сливками", swatch: "#F2A6B0" },
  pinacolada: { id: "pinacolada", name: "Пина колада", swatch: "#F5E6A0" },
  cappuccino: { id: "cappuccino", name: "Капучино", swatch: "#B98255" },
  melon: { id: "melon", name: "Дыня", swatch: "#D9EA8E" },
  banana: { id: "banana", name: "Банан", swatch: "#F2D24B" },
  cookies: { id: "cookies", name: "Печенье-крем", swatch: "#C9A57A" },
  hazelnut: { id: "hazelnut", name: "Лесной орех", swatch: "#8A5A34" },
  neutral: { id: "neutral", name: "Без вкуса", swatch: "#E7E6E1" },
  citrus: { id: "citrus", name: "Цитрус", swatch: "#F2C744" },
  berry: { id: "berry", name: "Лесная ягода", swatch: "#7A2E4A" },
  greenapple: { id: "greenapple", name: "Зелёное яблоко", swatch: "#B7D64B" },
  cola: { id: "cola", name: "Кола", swatch: "#4A2E1E" },
} satisfies Record<string, Flavor>;

export const F = flavor;
