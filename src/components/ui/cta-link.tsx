import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const VARIANTS = {
  primary:
    "bg-accent text-on-accent shadow-[0_2px_0_0_var(--color-accent-strong)] hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_10px_24px_-10px_rgba(119,3,3,0.6)]",
  secondary:
    "border border-primary/25 bg-surface/40 text-primary backdrop-blur-sm hover:-translate-y-0.5 hover:border-accent hover:bg-surface/70 hover:text-accent",
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
        "inline-flex items-center justify-center px-8 py-4 font-label-sm text-label-sm uppercase transition-[background-color,border-color,color,transform,box-shadow] duration-300",
        VARIANTS[variant],
        className,
      )}
      {...props}
    />
  );
}
