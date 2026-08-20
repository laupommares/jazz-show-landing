import { GrainImage } from "@/components/ui/grain-image";
import { Reveal } from "@/components/ui/reveal";

export function BarcelonaSection() {
  return (
    <section className="relative overflow-hidden border-t border-primary/10 bg-surface px-margin-mobile py-stack-xl md:px-margin-desktop">
      <GrainImage
        className="absolute inset-0 z-0 opacity-10"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmcvZDjzsiXR-C1d_6g-iwCYkM5l7-Cctg82cf75i0A_OZ5itwJPLnlfRvbO-vpJ5-D2ADggVV3_ByHX3t2BHEGIBxCAakIbyvR_AEbbR8BwQwoF1BP6GWphFKqjDso6ReKWtbjX0M9n15jzKhOINZUrBSHigyz5VPyw_1Z1WQxRpq5EYbOvGu_pXLxTKIHrDmd48TR2wfMe6Y3NZEORYkoXE6si7FU0bkGUqkwMmQgcJpMkQsuvd3"
        alt="Fotografía arquitectónica estilizada en blanco y negro de alto contraste de la arquitectura clásica de Barcelona, como la elegante fachada de un edificio del Eixample o la intrincada forja de un balcón. La imagen se utiliza como textura de fondo sutil para anclar el diseño en la atmósfera sofisticada de la ciudad."
        sizes="100vw"
      />

      <Reveal className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <p className="font-label-sm text-label-sm uppercase tracking-[0.3em] text-primary">
          Con Base En
        </p>
        <h2 className="font-display-lg text-headline-lg-mobile tracking-tighter text-primary md:text-display-lg">
          BARCELONA
        </h2>
        <p className="mt-4 max-w-xl font-body-md text-body-md text-on-surface-variant">
          Disponibles para reservas exclusivas en toda la ciudad y a nivel
          internacional para compromisos seleccionados.
        </p>
      </Reveal>
    </section>
  );
}
