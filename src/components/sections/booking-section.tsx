import { CtaLink } from "@/components/ui/cta-link";
import { GrainImage } from "@/components/ui/grain-image";
import { Reveal } from "@/components/ui/reveal";

export function BookingSection() {
  return (
    <section
      id="reservas"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-stack-xl"
    >
      <GrainImage
        className="absolute inset-0 z-0"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHOG3k1_0uet2s0wIiqosMD0sS-3MEkENWG7cXphTdow2JthEKqCjkDW1XPdIFeTz6IHV943JSBRFr_l6rT_LVPoe7eos1l9XTdAxyt1BqrnXYTfvOPpVc6LRiZGTIOBoZ35YmYe7Ed6E2jelItXGLuYIItdNnIdu_3EaEpNzHLIS0TetkImWDZYKRYs-aoE51Ro_Otk7inn6HWEmyX_sbbl3PmjAOb0R8E32T-7HATAKXADM8h4FU"
        alt="Potente fotografía en blanco y negro a todo lo ancho del dúo de jazz sosteniendo una pose final dramática y entrelazada. Miran directamente al espectador con expresiones intensas y seguras. La iluminación de estudio en clave alta las recorta sobre un fondo blanco puro. La imagen es nítida y elegante, y funciona como fuerte ancla visual de la sección de cierre."
        imageClassName="object-cover [filter:grayscale(1)_contrast(1.2)]"
        sizes="100vw"
      >
        <div className="absolute inset-0 bg-surface-dark/78 backdrop-blur-[3px]" />
      </GrainImage>

      <Reveal className="relative z-10 flex flex-col items-center gap-8 border border-on-surface-dark/15 bg-surface-dark/70 p-12 px-margin-mobile text-center backdrop-blur-md md:p-24">
        <h2 className="max-w-2xl font-display-md text-headline-lg-mobile leading-tight text-on-surface-dark md:text-display-md">
          LLEVA EL ESPECTÁCULO A TU ESPACIO.
        </h2>
        <div className="my-4 h-px w-16 bg-accent" />
        <p className="mb-4 max-w-lg font-body-lg text-body-lg text-on-surface-dark-variant">
          Contacta con nuestra dirección para diseñar actuaciones a medida para
          tu espacio o evento privado.
        </p>
        <CtaLink href="mailto:contacto@lascoquettes.com">CONTACTAR</CtaLink>
      </Reveal>
    </section>
  );
}
