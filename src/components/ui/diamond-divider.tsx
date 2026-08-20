import { cn } from "@/lib/utils";

export function DiamondDivider({ className }: { className?: string }) {
  return <div aria-hidden className={cn("diamond-divider", className)} />;
}
