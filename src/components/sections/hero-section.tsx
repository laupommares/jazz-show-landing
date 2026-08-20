import Image from "next/image";

import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <header className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface pt-28 pb-32 md:pb-36">
      <div
        aria-hidden
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_38%,#fffdf9_0%,#f8f6f2_55%,#ece8e0_100%)]"
      />
      <div aria-hidden className="grain-overlay z-0 opacity-[0.9]" />

      <Reveal className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center gap-8 px-margin-mobile text-center md:gap-10 md:px-margin-desktop">
        <h1 className="w-full">
          <Image
            src="/logo-lockup.webp"
            alt="Las Coquettes · Jazz Girls Club"
            width={1400}
            height={896}
            priority
            sizes="(min-width: 768px) 560px, 82vw"
            className="mx-auto h-auto w-[82%] max-w-[560px]"
          />
        </h1>

        <div aria-hidden className="h-px w-14 bg-accent/45" />

        <p className="max-w-2xl text-balance font-body-lg text-[21px] font-light leading-[1.55] tracking-[-0.005em] text-on-background md:text-[27px]">
          Un espectáculo de jazz, teatro y glamour.
          <span className="mt-1.5 block text-on-surface-variant">
            Elegante, divertido y lleno de encanto.
          </span>
        </p>

        <p className="max-w-md font-label-sm text-[11px] uppercase leading-relaxed tracking-[0.13em] text-on-surface-variant sm:max-w-none sm:text-label-sm sm:tracking-[0.22em]">
          Barcelona · Disponibles para hoteles y eventos privados
        </p>

        <div className="mt-2 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-5">
          <CtaLink href="#reservas">RESERVA EL ESPECTÁCULO</CtaLink>
          <CtaLink href="#experiencia" variant="secondary">
            DESCUBRE LA EXPERIENCIA
          </CtaLink>
        </div>
      </Reveal>

      <a
        href="#programa"
        aria-label="Ir al programa"
        className="group absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-label-sm text-[10px] uppercase tracking-[0.3em] text-on-surface-variant transition-colors duration-300 group-hover:text-accent">
          Descubrir
        </span>
        <span className="h-10 w-px overflow-hidden bg-primary/15">
          <span className="block h-1/2 w-px animate-[scroll-cue_2.2s_ease-in-out_infinite] bg-accent" />
        </span>
      </a>
    </header>
  );
}
