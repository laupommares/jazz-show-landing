import { cn } from "@/lib/utils";

interface MaterialSymbolProps {
  name: string;
  className?: string;
}

export function MaterialSymbol({ name, className }: MaterialSymbolProps) {
  return (
    <span aria-hidden className={cn("material-symbol", className)}>
      {name}
    </span>
  );
}
