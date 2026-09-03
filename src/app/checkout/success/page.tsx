import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Заказ оформлен",
};

export default function CheckoutSuccessPage() {
  return (
    <section className="py-20">
      <Container className="flex flex-col items-center text-center">
        <CheckCircle className="h-16 w-16 text-accent" />
        <h1 className="mt-6 font-display text-3xl font-bold uppercase">Заказ оформлен!</h1>
        <p className="mt-3 max-w-md text-text-muted">
          Спасибо за заказ! Менеджер свяжется с вами в течение 15 минут для подтверждения. Уведомление также
          отправлено на вашу почту.
        </p>
        <div className="mt-8 flex gap-3">
          <LinkButton href="/catalog">Продолжить покупки</LinkButton>
          <LinkButton href="/" variant="outline">На главную</LinkButton>
        </div>
      </Container>
    </section>
  );
}
