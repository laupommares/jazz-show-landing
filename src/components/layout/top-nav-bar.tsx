import { MaterialSymbol } from "@/components/ui/material-symbol";

const NAV_LINKS = [
  { href: "#programa", label: "PROGRAMA" },
  { href: "#galeria", label: "GALERÍA" },
  { href: "#repertorio", label: "REPERTORIO" },
  { href: "#reservas", label: "RESERVAS" },
];

export function TopNavBar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-primary/10 bg-surface/80 backdrop-blur-xl transition-all duration-500 ease-in-out dark:border-on-surface/10 dark:bg-surface-dim/80">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-margin-mobile py-6 md:px-margin-desktop">
        <a
          href="#"
          className="font-display-md text-headline-lg-mobile tracking-tighter text-primary md:text-display-md dark:text-on-primary"
        >
          LAS COQUETTES
        </a>

        <div className="hidden items-center gap-8 font-label-sm text-label-sm uppercase tracking-[0.2em] md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="font-light text-on-surface-variant transition-colors duration-300 hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#reservas"
            className="border-b border-primary pb-1 font-label-sm text-label-sm uppercase tracking-[0.2em] text-primary transition-opacity duration-300 hover:opacity-70"
          >
            ENTRADAS
          </a>
        </div>

        <button
          type="button"
          aria-label="Menú"
          className="text-primary focus:outline-none md:hidden"
        >
          <MaterialSymbol name="menu" className="text-2xl" />
        </button>
      </div>
    </nav>
  );
}
