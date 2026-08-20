import { CtaLink } from "@/components/ui/cta-link";
import { GrainImage } from "@/components/ui/grain-image";
import { Reveal } from "@/components/ui/reveal";

export function HeroSection() {
  return (
    <header className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface pt-24">
      <GrainImage
        className="absolute inset-0 z-0"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVd5-_7DFubhFnk7J2EMk-BAGyInGEnZNJUempoeWgxrAo8kim8_C9ntSCJ0b4GskU4uAGggAxT2DvD3ZolVSIVvuoAz6dgnFPpne4KBuSknyCLAvoC5oSVD-szhPL13KtQia8N-OPMOMQX2ptSoULlE5b1tL4Bxamv3tmkCA7elXEJ_s_b-dGAKQvX5I6_hdKS1LkRqDiteMJ_I23m0Rh3WHDxF-ZBNcv3GaLq1ctIN2y-ALYNRHgBS9MWkO3JB0HBQ"
        alt="Fotografía cinematográfica en blanco y negro de alto contraste de dos bailarinas elegantes posando con gracia. Visten un glamuroso atuendo de cabaret inspirado en los años 50, con plumas, perlas y tacones vintage. La iluminación es dramática, de flash de estudio, y proyecta sombras profundas sobre un fondo marfil minimalista. La imagen tiene un sutil grano analógico que evoca la época dorada de Hollywood y las editoriales vintage de Vogue."
        imageClassName="object-cover object-center opacity-80"
        sizes="100vw"
        priority
      >
        <div className="absolute inset-0 bg-linear-to-b from-surface/20 via-surface/10 to-surface" />
      </GrainImage>

      <Reveal className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-margin-mobile text-center md:px-margin-desktop">
        <h1 className="font-display-lg text-display-md uppercase leading-tight tracking-tighter text-primary md:text-display-lg">
          LAS COQUETTES
        </h1>
        <p className="max-w-3xl font-headline-lg text-headline-lg-mobile italic text-primary md:text-headline-lg">
          Una experiencia de danza inspirada en el glamour del jazz y el
          Hollywood clásico.
        </p>
        <p className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-on-surface-variant">
          Barcelona · Disponibles para hoteles y eventos privados
        </p>
        <div className="mt-8 flex flex-col gap-6 sm:flex-row">
          <CtaLink href="#reservas">RESERVA EL ESPECTÁCULO</CtaLink>
          <CtaLink href="#experiencia" variant="secondary">
            DESCUBRE LA EXPERIENCIA
          </CtaLink>
        </div>
      </Reveal>
    </header>
  );
}
