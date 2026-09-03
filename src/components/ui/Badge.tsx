import { clsx } from "clsx";

const styles = {
  lime: "bg-accent text-black",
  orange: "bg-accent-2 text-black",
  pink: "bg-women text-black",
  outline: "border border-border text-text-muted",
};

export function Badge({
  children,
  tone = "lime",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof styles;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide",
        styles[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
