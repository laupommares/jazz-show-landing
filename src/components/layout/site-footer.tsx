import Image from "next/image";

const FOOTER_LINKS = [
  { href: "#", label: "INSTAGRAM" },
  { href: "#", label: "ARCHIVO" },
  { href: "#", label: "CONTACTO" },
  { href: "#", label: "AVISO LEGAL" },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-primary/15 bg-surface">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 px-margin-mobile py-stack-md text-center md:px-margin-desktop">
        <a href="#" aria-label="Las Coquettes · Jazz Girls Club" className="flex flex-col items-center gap-2.5">
          <Image
            src="/logo-wordmark.webp"
            alt="Las Coquettes"
            width={560}
            height={294}
            sizes="200px"
            className="h-16 w-auto md:h-20"
          />
          <span className="brand-tagline text-[10px] leading-none tracking-[0.42em]">
            Jazz Girls Club
          </span>
        </a>

        <div className="my-2 h-px w-16 bg-primary/15" />

        <div className="flex w-full flex-wrap justify-center gap-6 md:gap-12">
          {FOOTER_LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant transition-colors duration-300 hover:text-accent"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="mt-6 font-label-sm text-[11px] uppercase tracking-[0.18em] text-on-surface-variant/70">
          © 2024 Las Coquettes Barcelona · Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
