"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { MaterialSymbol } from "@/components/ui/material-symbol";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#programa", label: "Programa" },
  { href: "#galeria", label: "Galería" },
  { href: "#repertorio", label: "Repertorio" },
  { href: "#reservas", label: "Reservas" },
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  const isCompact = isScrolled && !isMenuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 flex w-full flex-col transition-[background-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isMenuOpen && "h-dvh bg-surface lg:h-auto lg:bg-transparent",
        isCompact &&
          "bg-surface/92 shadow-[0_1px_28px_rgba(27,28,26,0.07)] backdrop-blur-xl",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-36 bg-linear-to-b from-surface/90 via-surface/45 to-transparent transition-opacity duration-500",
          isCompact || isMenuOpen ? "opacity-0" : "opacity-100",
        )}
      />

      <div
        className={cn(
          "relative mx-auto flex w-full max-w-[1440px] shrink-0 items-center justify-between px-margin-mobile transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-margin-desktop",
          isCompact ? "py-3" : "py-5 md:py-7",
        )}
      >
        <a
          href="#"
          aria-label="Las Coquettes · Jazz Girls Club"
          onClick={() => setIsMenuOpen(false)}
          className={cn(
            "flex flex-col gap-1.5 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isCompact || isMenuOpen
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-1 opacity-0",
          )}
        >
          <Image
            src="/logo-wordmark.webp"
            alt="Las Coquettes"
            width={560}
            height={294}
            priority
            className={cn(
              "w-auto transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
              isCompact ? "h-9 md:h-11" : "h-11 md:h-14",
            )}
          />
          <span
            className={cn(
              "brand-tagline pl-1 text-[10px] leading-none transition-[opacity,letter-spacing] duration-500",
              isCompact
                ? "tracking-[0.34em] opacity-0 md:opacity-100"
                : "tracking-[0.42em] opacity-100",
            )}
          >
            Jazz Girls Club
          </span>
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-9 lg:flex"
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="group relative py-1 font-label-sm text-[13px] font-semibold uppercase leading-none tracking-[0.16em] text-on-background transition-colors duration-300 hover:text-accent"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#reservas"
            className="hidden bg-accent px-6 py-3 font-label-sm text-[12px] font-bold uppercase leading-none tracking-[0.18em] text-on-accent shadow-[0_2px_0_0_var(--color-accent-strong)] transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_6px_18px_-6px_rgba(119,3,3,0.55)] sm:block"
          >
            Entradas
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="menu-movil"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="-mr-2 flex h-11 w-11 items-center justify-center text-primary transition-colors duration-300 hover:text-accent lg:hidden"
          >
            <MaterialSymbol
              name={isMenuOpen ? "close" : "menu"}
              className="text-[28px]"
            />
          </button>
        </div>
      </div>

      <div
        id="menu-movil"
        hidden={!isMenuOpen}
        className="relative flex flex-1 flex-col overflow-y-auto border-t border-primary/10 lg:hidden"
      >
        <nav
          aria-label="Principal móvil"
          className="flex flex-1 flex-col px-margin-mobile py-6"
        >
          {NAV_LINKS.map(({ href, label }, index) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsMenuOpen(false)}
              style={{ transitionDelay: `${index * 60 + 80}ms` }}
              className={cn(
                "border-b border-primary/10 py-4 font-headline-lg text-[28px] leading-none text-primary transition-all duration-500 ease-out hover:text-accent",
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0",
              )}
            >
              {label}
            </a>
          ))}

          <a
            href="#reservas"
            onClick={() => setIsMenuOpen(false)}
            className="mt-7 bg-accent px-6 py-4 text-center font-label-sm text-[12px] font-bold uppercase tracking-[0.18em] text-on-accent transition-colors duration-300 hover:bg-accent-strong"
          >
            Entradas
          </a>

          <p className="mt-auto pt-10 font-label-sm text-[11px] uppercase tracking-[0.22em] text-on-surface-variant">
            Barcelona · Hoteles y eventos privados
          </p>
        </nav>
      </div>
    </header>
  );
}
