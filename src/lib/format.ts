export function formatPrice(value: number) {
  return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(value) + " ₽";
}

export function formatRating(value: number) {
  return value.toFixed(1).replace(".", ",");
}

export const FREE_SHIPPING_THRESHOLD = 2000;
