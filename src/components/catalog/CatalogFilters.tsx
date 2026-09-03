"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { categories } from "@/data/categories";
import { allFlavors } from "@/lib/cms";

const SORT_OPTIONS = [
  { value: "popular", label: "По популярности" },
  { value: "price-asc", label: "Сначала дешёвые" },
  { value: "price-desc", label: "Сначала дорогие" },
  { value: "new", label: "Новинки" },
];

export function CatalogFilters({ currentCategory }: { currentCategory?: string }) {
  const router = useRouter();
  const params = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const currentSort = params.get("sort") ?? "popular";
  const selectedFlavors = params.getAll("flavor");

  function push(overrides: Record<string, string | string[] | null>) {
    const sp = new URLSearchParams(params.toString());
    for (const [key, val] of Object.entries(overrides)) {
      sp.delete(key);
      if (val === null) continue;
      const values = Array.isArray(val) ? val : [val];
      for (const v of values) sp.append(key, v);
    }
    const basePath = currentCategory ? `/catalog/${currentCategory}` : "/catalog";
    router.push(`${basePath}?${sp.toString()}`);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        {!currentCategory && (
          <select
            className="rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-text"
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) router.push(`/catalog/${e.target.value}`);
              else router.push("/catalog");
            }}
          >
            <option value="">Все категории</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>{c.title}</option>
            ))}
          </select>
        )}

        <select
          className="rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-text"
          value={currentSort}
          onChange={(e) => push({ sort: e.target.value })}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>

        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center gap-1.5 rounded-full border border-border px-4 py-2.5 text-sm transition-colors hover:border-accent"
        >
          Фильтры
          <ChevronDown className={`h-4 w-4 transition-transform ${filtersOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {filtersOpen && (
        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-text-muted">Вкус</p>
          <div className="flex flex-wrap gap-2">
            {allFlavors.map((f) => {
              const active = selectedFlavors.includes(f.id);
              return (
                <button
                  key={f.id}
                  onClick={() =>
                    push({
                      flavor: active
                        ? selectedFlavors.filter((fid) => fid !== f.id)
                        : [...selectedFlavors, f.id],
                    })
                  }
                  className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                    active
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border text-text-muted hover:border-accent/50"
                  }`}
                >
                  <span className="h-3 w-3 rounded-full border border-border" style={{ backgroundColor: f.swatch }} />
                  {f.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
