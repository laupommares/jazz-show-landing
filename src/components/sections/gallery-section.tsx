import { GrainImage } from "@/components/ui/grain-image";
import { Reveal } from "@/components/ui/reveal";

const GALLERY_ITEMS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdI3Z1p2pV9TqobADuPO0-68cdeddFcOdfkUA4XOiz0XmV3hGQpLc72jVa9hsfctgH6snS0VIcLLSH8iBiVq7zssCwqsHSE8QH3ZaIv1Enz_DQLuHdCQLx4P9K836OzbhAz2cCyLrROwCau21pMhUCu5WXg3E3d6ttOwGJkqJZZjEQgeG2ovSpR7LSQJVG5txvCQK2LckNc9qEBJOnLzrUJzYsFj6roXYdZyAQWoZbzhJk-7NCCXBN",
    alt: "Toma editorial de alta costura en blanco y negro centrada en el torso y las manos de una bailarina ajustando una delicada boa de plumas. Las texturas de las plumas y del vestido de seda se aprecian con gran detalle. La imagen tiene una iluminación cinematográfica y sugerente con grano, y evoca un momento entre bastidores en un camerino vintage.",
    className:
      "relative col-span-2 row-span-2 aspect-[3/4] overflow-hidden border border-primary/10 md:col-span-1",
    sizes: "(min-width: 768px) 25vw, 100vw",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTmnKUUQZXF4xTPXaLGLG5Q_Mo1iwUBwp2utW7Ai8LjI_4ohvOCNP8u2tAO9dIoiJcPNWkW_Ttp_Zg_Hc5Um1LUff9imzWFRLKbHR0RS3sfYSMG3a3W3Xo-Lcf9d3cY0gIuqA9NhTBj14cVA7356s2LsNyq05oFCgSB4kgzzVITjo9QxkpPSGEL3RyAgVvj1Q20wXD2KGAIOGibOaHKtOabwzLsYEm9zsOCQ5uNEuFZby_TLLflVLy",
    alt: "Fotografía abstracta en blanco y negro que captura el desenfoque de movimiento de una bailarina girando. El foco está en el movimiento de un vestido vintage con brillos, que crea estelas de luz y sombra sobre un fondo oscuro. Transmite energía y elegancia de forma puramente visual y artística.",
    className:
      "relative col-span-1 aspect-square overflow-hidden border border-primary/10",
    sizes: "(min-width: 768px) 25vw, 50vw",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdxMh4hZk99WX_9bPpinVJpiAdc8gKlej9P1TW8iDDNxKlSvnSIqurOesDOMbUc_-g7X14gRqvPh2v-XT86CW5eDq9zsZVLbP8HX5M677ACyG7nx1wGBIhptwF4lBmXEp3KJH1MzDE49M-wPHJeAfewnEFwAV0cCl3rEZ3ee3jRLDFOwbS2RRNTEY43xZPNFMz4jL8joiXWoGE1_3dmIWThkFRljp5q1WE2ntVmiplxfxQTKq17jo4",
    alt: "Toma en gran angular en blanco y negro del dúo de jazz actuando en contraluz sobre un fondo muy iluminado. Sus posturas son angulosas y teatrales, y recuerdan a la coreografía clásica de Fosse. El fuerte contraste y la composición minimalista realzan la forma y la sombra.",
    className:
      "relative col-span-1 aspect-[4/3] overflow-hidden border border-primary/10 md:col-span-2",
    sizes: "(min-width: 768px) 50vw, 50vw",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Iwu3ER9IJMgP1jLCJfFm0xKZzMZHMsUQp6M5pij8HK911sDhkT8SjFpMfpWgUk1VmrTZYFCe7XZ6sWyVcJbvodY5Kn2Sw4uKVC1prJpvlYu2R-ug1KWlCry1Buq_RfTZpt4xFLdk6c1X3p54d0lgMDVSxSR0D_QGLMHBREqs-ek8Nsq0g1ZNkdcnuMKw5j2mpfN7mo0S1Yj1FM8uR16sOPq7ZlX9WYIyTUgTsapjhiZnL9k3AubC",
    alt: "Bodegón detallado en blanco y negro con accesorios de jazz vintage sobre un tocador: un par de guantes largos de satén, un collar de perlas y un micrófono antiguo. La iluminación es suave y direccional, resalta las texturas y crea una sensación de expectación antes del espectáculo.",
    className:
      "relative col-span-1 aspect-square overflow-hidden border border-primary/10",
    sizes: "(min-width: 768px) 25vw, 50vw",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-1cWNzdqH_FO-AMBrbbIrtAOR5YKgPZ7NWKFucZCD1cE5D36D10OqWy8ixVmlymJOwSUDq6g68ynR8oqScHR1jDZWNMRmkV5bFUtIjWYHxagF-OXN2wp-nSFhzExB7gf3Y4er8zF-W5-v0msV-LCRe0XnREpSKn44f4TPcoZkMQdS0k-JvJ51wdP7jm5yyVpZj0pdS4f0D7grlGO0_E8eOWbpiBzbNp35tzndM5FOXBKsMk2QNzO7",
    alt: "Retrato dramático en blanco y negro de una de las bailarinas captada en un instante de quietud durante la actuación. Mira ligeramente fuera de cámara con expresión serena, iluminada por un único foco. El viñeteado marcado y el grano refuerzan la calidad cinematográfica y atemporal.",
    className:
      "relative col-span-2 row-span-2 aspect-[3/4] overflow-hidden border border-primary/10 md:col-span-1 md:-mt-32",
    sizes: "(min-width: 768px) 25vw, 100vw",
  },
];

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="bg-surface px-margin-mobile py-stack-xl md:px-margin-desktop"
    >
      <Reveal className="mx-auto max-w-[1440px]">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-display-md text-headline-lg-mobile text-primary md:text-display-md">
            Galería
          </h2>
          <a
            href="#"
            className="hidden border-b border-primary pb-1 font-label-sm text-label-sm uppercase tracking-widest transition-colors hover:text-secondary md:inline-block"
          >
            Ver Archivo
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <GrainImage
              key={item.src}
              src={item.src}
              alt={item.alt}
              className={item.className}
              sizes={item.sizes}
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
