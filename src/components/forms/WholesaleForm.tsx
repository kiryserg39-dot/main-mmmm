"use client";

import { Button } from "@/components/ui/Button";

export function WholesaleForm() {
  return (
    <div className="mt-14 rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
      <h2 className="font-display text-2xl font-bold uppercase">Хотите стать партнёром?</h2>
      <p className="mt-2 text-text-muted">
        Оставьте заявку, и мы свяжемся с вами в течение рабочего дня.
      </p>
      <form
        className="mt-6 mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          name="phone"
          type="tel"
          required
          placeholder="+7 (___) ___-__-__"
          className="flex-1 rounded-full border border-border bg-surface px-5 py-3 text-sm placeholder:text-text-muted"
        />
        <Button type="submit">Отправить</Button>
      </form>
    </div>
  );
}
