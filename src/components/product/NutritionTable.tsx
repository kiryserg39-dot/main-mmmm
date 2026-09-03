import { NutritionFacts } from "@/types/catalog";

export function NutritionTable({ nutrition }: { nutrition: NutritionFacts }) {
  const rows = [
    { label: "Калории", value: `${nutrition.calories} ккал` },
    { label: "Белки", value: `${nutrition.protein} г` },
    { label: "Жиры", value: `${nutrition.fat} г` },
    { label: "Углеводы", value: `${nutrition.carbs} г` },
  ];
  if (nutrition.inulin) {
    rows.push({ label: "Инулин", value: `${nutrition.inulin} г` });
  }

  return (
    <div>
      <p className="mb-3 text-xs font-bold uppercase tracking-wide text-text-muted">
        Пищевая ценность (на {nutrition.perServingGrams} г)
      </p>
      <div className="overflow-hidden rounded-xl border border-border">
        {rows.map((r, i) => (
          <div
            key={r.label}
            className={`flex items-center justify-between px-4 py-2.5 text-sm ${
              i % 2 === 0 ? "bg-surface" : "bg-surface-2"
            }`}
          >
            <span className="text-text-muted">{r.label}</span>
            <span className="font-semibold">{r.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
