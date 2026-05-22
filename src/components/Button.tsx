"use client";

import { ButtonHTMLAttributes } from "react";
import { buttonClasses, ButtonVariant } from "@/styles/button";
import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonClasses(variant, className))} {...props} />
  );
}
