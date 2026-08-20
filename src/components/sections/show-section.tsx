import { DiamondDivider } from "@/components/ui/diamond-divider";
import { GrainImage } from "@/components/ui/grain-image";
import { Reveal } from "@/components/ui/reveal";

export function ShowSection() {
  return (
    <section
      id="programa"
      className="relative bg-surface px-margin-mobile py-stack-xl md:px-margin-desktop"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-gutter md:grid-cols-12">
        <Reveal className="flex flex-col gap-8 md:col-span-5 md:col-start-2">
          <DiamondDivider className="mb-4 text-center md:text-left" />
          <h2 className="font-display-md text-headline-lg-mobile text-primary md:text-display-md">
            El Espectáculo
          </h2>
          <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
            Adéntrate en una época de elegancia inigualable. Las Coquettes
            revive el sofisticado encanto del cabaret de los años 50 y la gracia
            atemporal del Hollywood clásico.
          </p>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            Concebido como un espectáculo boutique, combina una coreografía de
            jazz minuciosa con una estética de alta costura. Cada movimiento es
            una pincelada de glamour vintage, pensada para espacios íntimos y
            públicos exigentes que buscan algo más que mero entretenimiento.
          </p>
        </Reveal>

        <Reveal
          delay={200}
          className="relative mt-12 md:col-span-5 md:col-start-8 md:mt-0"
        >
          <GrainImage
            className="relative aspect-[3/4] w-full overflow-hidden border border-primary/20"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaNLEmZW7Yum84LFFWV3NSsMrmZAaCauxGpfuyWtXLDLyo6YYn1ATlAEho3ozmMmSJA2ZZesBn6tDqaIb9jZJWaKmGoUgtNIk5PPsUzoGQG0VjC1Oa9Lp3E4XtDtymXJK5ovDICxhF7VQO9Vob1iJc0vdvytGklqEkRtlzfyCPk6AlfP2yyPk1HvRaV0SU0AeQG81XLvrjD28-urkXjMlY3Fh2UHlt66nMfgcsUsDpII25U6Kg_NQB"
            alt="Composición asimétrica y estilizada con una fotografía editorial de moda en blanco y negro de las piernas de una bailarina, cubiertas por medias transparentes y tacones vintage con pedrería, apoyadas sobre una butaca mullida. La imagen se centra en texturas como la seda, las piedras y las plumas delicadas. La iluminación es suave y sugerente, y crea una atmósfera lujosa e íntima propia del camerino de un club de jazz de alto nivel."
            sizes="(min-width: 768px) 40vw, 100vw"
          />
          <GrainImage
            className="absolute -bottom-16 -left-16 hidden aspect-square w-2/3 overflow-hidden border border-primary/20 bg-surface md:block"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy5JXxYYTiyGL-eYm2e-vw5eF2-Ks3Z6UYQGCVH6SjqvJ0XM231tr6yR33gag85GdS1fq0TcNqGIWnWmZKTsvZgKZ6A9Rg5ex6x_rDOkvUmPv3CEhRI8iFTduUCRRDnShB5Dq4FvEDTzKmYcgo0mBK58WipNlQV949_c379DhC7kRlIyQbTCvOb8vb-68D-TJx7H5cbzS1RFW3WvEAoRm0TTvC9rEYRVeBOB9WnXDrsW_qNsDw4UnT"
            alt="Primer plano en blanco y negro de la mano de una bailarina con un largo guante de seda de noche, sosteniendo con delicadeza un collar de perlas. La imagen tiene una textura muy marcada, con grano visible, fuerte contraste y poca profundidad de campo, lo que resalta el lujo táctil de los accesorios sobre un fondo minimalista."
            sizes="(min-width: 768px) 27vw, 100vw"
          />
        </Reveal>
      </div>
    </section>
  );
}
