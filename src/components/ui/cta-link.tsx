import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-primary text-on-primary hover:bg-secondary hover:text-on-secondary",
  secondary:
    "border border-primary bg-transparent text-primary hover:border-gold hover:text-gold",
} as const;

interface CtaLinkProps extends ComponentPropsWithoutRef<"a"> {
  variant?: keyof typeof VARIANTS;
}

export function CtaLink({
  variant = "primary",
  className,
  ...props
}: CtaLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center px-8 py-4 font-label-sm text-label-sm uppercase transition-colors duration-300",
        VARIANTS[variant],
        className,
      )}
      {...props}
    />
  );
}
