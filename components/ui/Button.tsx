import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "white" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-fg hover:bg-primary-hover hover:-translate-y-px shadow-[0_12px_34px_-16px_rgba(31,107,255,0.85)]",
  white:
    "bg-white text-bg hover:bg-white/90 hover:-translate-y-px",
  secondary:
    "border border-white/15 text-fg hover:border-white/30 hover:bg-white/[0.04]",
  ghost: "text-fg-soft hover:text-fg",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-small",
  lg: "h-12 px-6 text-body",
};

type Props = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  href,
  variant = "primary",
  size = "lg",
  className,
  target,
  rel,
  children,
  ...props
}: Props) {
  const cls = cn(base, variants[variant], sizes[size], className);
  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cls}
        target={target ?? (external ? "_blank" : undefined)}
        rel={rel ?? (external ? "noopener noreferrer" : undefined)}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
