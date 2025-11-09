"use client";

import { ButtonHTMLAttributes } from "react";
import { buttonClasses, ButtonVariant } from "@/styles/button";

type ButtonProps = {
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return (
    <button
      className={buttonClasses(variant, className)}
      {...props}
    />
  );
}

