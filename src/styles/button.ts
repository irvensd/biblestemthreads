import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export const baseButtonStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

export const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent/90 focus-visible:outline-accent shadow-subtle",
  secondary:
    "bg-secondary text-navy hover:bg-secondary/90 focus-visible:outline-secondary",
  ghost:
    "bg-transparent text-secondary border border-secondary/30 hover:border-secondary focus-visible:outline-secondary",
};

export function buttonClasses(variant: ButtonVariant = "primary", className?: string) {
  return cn(baseButtonStyles, variantStyles[variant], className);
}

