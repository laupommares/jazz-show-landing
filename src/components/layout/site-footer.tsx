const FOOTER_LINKS = [
  { href: "#", label: "INSTAGRAM" },
  { href: "#", label: "ARCHIVO" },
  { href: "#", label: "CONTACTO" },
  { href: "#", label: "AVISO LEGAL" },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-primary bg-surface dark:border-on-surface dark:bg-surface-dim">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 px-margin-mobile py-stack-md text-center md:px-margin-desktop">
        <div className="font-display-lg text-headline-lg-mobile text-primary opacity-80 transition-opacity duration-300 hover:opacity-100 md:text-display-lg">
          LAS COQUETTES
        </div>

        <div className="flex w-full flex-wrap justify-center gap-6 md:gap-12">
          {FOOTER_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant transition-colors duration-300 hover:text-secondary"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="mt-8 font-body-md text-label-sm text-on-surface-variant">
          © 2024 LAS COQUETTES BARCELONA. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
}
