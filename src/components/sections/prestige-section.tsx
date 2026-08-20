import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";

const VENUES = [
  "Hoteles de Lujo",
  "Hoteles Boutique",
  "Rooftops",
  "Eventos Privados",
];

export function PrestigeSection() {
  return (
    <section className="border-y border-primary/10 bg-surface-container-low px-margin-mobile py-stack-xl md:px-margin-desktop">
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
        <h2 className="font-display-md text-headline-lg-mobile text-primary md:text-display-md">
          Creado para el Prestigio
        </h2>
        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Nuestras actuaciones están diseñadas para integrarse con naturalidad
          en entornos de alto nivel, elevando la experiencia del huésped a
          través del arte visual.
        </p>
        <div className="my-8 flex flex-wrap justify-center gap-4">
          {VENUES.map((venue) => (
            <span
              key={venue}
              className="border border-primary/20 px-6 py-2 font-label-sm text-label-sm uppercase tracking-widest text-primary"
            >
              {venue}
            </span>
          ))}
        </div>
        <CtaLink href="#reservas" className="mt-4">
          CONSULTA DISPONIBILIDAD
        </CtaLink>
      </Reveal>
    </section>
  );
}
