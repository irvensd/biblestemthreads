import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export const baseButtonStyles =
  "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

export const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-royal text-white hover:bg-royal/90 focus-visible:outline-royal",
  secondary:
    "border border-border bg-white text-ink hover:border-ink/20 focus-visible:outline-ink",
  ghost:
    "bg-transparent text-ink hover:bg-surface focus-visible:outline-ink",
};

export function buttonClasses(variant: ButtonVariant = "primary", className?: string) {
  return cn(baseButtonStyles, variantStyles[variant], className);
}
