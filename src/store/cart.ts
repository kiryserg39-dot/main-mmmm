"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem } from "@/types/catalog";

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, flavorId: string, sizeId: string) => void;
  setQuantity: (productId: string, flavorId: string, sizeId: string, quantity: number) => void;
  clear: () => void;
}

function sameLine(a: CartItem, productId: string, flavorId: string, sizeId: string) {
  return a.productId === productId && a.flavorId === flavorId && a.sizeId === sizeId;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      addItem: (item) => {
        const existing = get().items.find((i) => sameLine(i, item.productId, item.flavorId, item.sizeId));
        if (existing) {
          set({
            items: get().items.map((i) =>
              sameLine(i, item.productId, item.flavorId, item.sizeId)
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          });
        } else {
          set({ items: [...get().items, item] });
        }
        set({ isOpen: true });
      },
      removeItem: (productId, flavorId, sizeId) => {
        set({ items: get().items.filter((i) => !sameLine(i, productId, flavorId, sizeId)) });
      },
      setQuantity: (productId, flavorId, sizeId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, flavorId, sizeId);
          return;
        }
        set({
          items: get().items.map((i) =>
            sameLine(i, productId, flavorId, sizeId) ? { ...i, quantity } : i
          ),
        });
      },
      clear: () => set({ items: [] }),
    }),
    {
      name: "ruslab-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);

export function useCartTotals() {
  const items = useCartStore((s) => s.items);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);
  return { subtotal, count };
}
