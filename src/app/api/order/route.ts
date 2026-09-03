import { NextResponse } from "next/server";

/**
 * Обработка нового заказа.
 *
 * Сейчас — заглушка: логирует заказ в stdout.
 *
 * При подключении production-среды:
 *  1. Telegram-бот: fetch `https://api.telegram.org/bot<TOKEN>/sendMessage`
 *     с `chat_id` менеджера и форматированным текстом заказа.
 *  2. Email: nodemailer или сервис (Resend, SendGrid).
 *  3. ЮKassa: создать платёж через API, вернуть confirmation_url клиенту.
 *  4. Сохранить заказ в БД CMS (Strapi/Payload).
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("[ORDER]", JSON.stringify(body, null, 2));

    const orderId = `RL-${Date.now().toString(36).toUpperCase()}`;

    // -- Telegram notification stub --
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      const itemsText = body.items
        .map(
          (i: { name: string; flavor: string; size: string; quantity: number; price: number }) =>
            `  ${i.name} (${i.flavor}, ${i.size}) x${i.quantity} — ${i.price * i.quantity} ₽`
        )
        .join("\n");

      const text = [
        `🛒 Новый заказ ${orderId}`,
        `👤 ${body.customer.name}`,
        `📞 ${body.customer.phone}`,
        `🏙 ${body.customer.city}, ${body.customer.address}`,
        body.customer.comment ? `💬 ${body.customer.comment}` : "",
        ``,
        itemsText,
        ``,
        `💰 Итого: ${body.total} ₽`,
      ]
        .filter(Boolean)
        .join("\n");

      try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: "HTML" }),
        });
      } catch (err) {
        console.error("[TG]", err);
      }
    }

    return NextResponse.json({ ok: true, orderId });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
