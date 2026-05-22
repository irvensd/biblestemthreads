import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function SectionLabel({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-label text-muted",
        className
      )}
      {...props}
    />
  );
}
