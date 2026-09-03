"use client";

import { Button } from "@/components/ui/Button";

export function ContactForm() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h2 className="mb-4 font-display text-lg font-bold uppercase">Напишите нам</h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input
          name="name"
          placeholder="Ваше имя"
          className="w-full rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm placeholder:text-text-muted"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm placeholder:text-text-muted"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Сообщение"
          className="w-full resize-none rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm placeholder:text-text-muted"
        />
        <Button type="submit" className="w-full">
          Отправить
        </Button>
      </form>
    </div>
  );
}
