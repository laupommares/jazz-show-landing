import { GrainImage } from "@/components/ui/grain-image";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const DANCERS = [
  {
    name: "Cley",
    role: "Coreógrafa y Primera Bailarina",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBsMEJQ5oG1IERZlaYXIEDysgori5Nf8sMNiqIWgyXXetZ1BpHRdq063VhVtIuAqvk3MjI9s8qSxf4gus4RctRqYqi1W_EyMX8n229Pv3k0DJhJdkxv4HDaONMHetjgmMmcLqpfewA5GDZjPajL7rKqNQNbrUX8SmjqVXuyBVplXqZQ-E4JeHuHGJu1CNNchD6Ww6hJNazUvaBa5AFtMwI0HLEu0owtqqKzsJrfADls_TBbe11zSJaa",
    alt: "Retrato elegante en blanco y negro de una bailarina de jazz en pleno movimiento. La iluminación de estudio resalta el flujo dinámico de su vestido de flecos de inspiración vintage y la línea sofisticada de su postura. Su expresión es concentrada y artística. El fondo es una pared texturizada de color hueso que refuerza el estilo editorial clásico.",
    className: "",
  },
  {
    name: "Isabella",
    role: "Primera Bailarina",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6Y9FfaQYdgZXdWpzphio5Kca_mw6V5P-ZoSjJYYArj3rkKfhxHQbnugEASeC1IgRphYA5HJLmHRzfgzuEi4BDmy3FJNPbHmACLv_I6eNTjLf6ikN3GqdqxJGkwpNo8Vigu5RjBTMlHKprffWzgZrf_R3pq5xgjJoxZ9TWnt8jdULNjWPy7870frTvGUR-NL0Z3LFK1hXohGTbKtrH0Tx_r5YYL285Z252tAV6uhvf4zzG-7iH5VW4",
    alt: "Impactante retrato de estudio en blanco y negro de una bailarina de jazz mirando directamente a cámara. Viste un conjunto de inspiración esmoquin con un sombrero clásico y transmite una presencia fuerte y elegante, característica del cabaret de mediados de siglo. La iluminación de alto contraste crea sombras profundas que esculpen sus facciones, mientras un grano sutil aporta una textura vintage y atemporal.",
    className: "md:mt-24",
  },
];

export function DuoSection() {
  return (
    <section className="bg-surface-dark px-margin-mobile py-stack-xl md:px-margin-desktop">
      <Reveal className="mx-auto flex max-w-[1440px] flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <span className="brand-tagline text-[11px] leading-none tracking-[0.34em] text-accent-muted">
            Jazz Girls Club
          </span>
          <h2 className="text-center font-display-md text-headline-lg-mobile text-on-surface-dark md:text-display-md">
            El Dúo
          </h2>
        </div>

        <div className="grid w-full max-w-5xl grid-cols-1 gap-gutter md:grid-cols-2">
          {DANCERS.map((dancer) => (
            <div
              key={dancer.name}
              className={cn("group flex flex-col gap-6", dancer.className)}
            >
              <GrainImage
                className="relative aspect-[4/5] w-full overflow-hidden border border-on-surface-dark/15"
                src={dancer.src}
                alt={dancer.alt}
                imageClassName="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 512px, (min-width: 768px) 50vw, 100vw"
              />
              <div className="text-center md:text-left">
                <h3 className="font-headline-lg text-headline-lg text-on-surface-dark">
                  {dancer.name}
                </h3>
                <p className="mt-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-dark-variant">
                  {dancer.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
