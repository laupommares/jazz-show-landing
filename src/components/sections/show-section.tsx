import { DiamondDivider } from "@/components/ui/diamond-divider";
import { GrainImage } from "@/components/ui/grain-image";
import { Reveal } from "@/components/ui/reveal";

export function ShowSection() {
  return (
    <section
      id="programa"
      className="relative bg-surface px-margin-mobile py-stack-xl md:px-margin-desktop"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
          <Reveal className="flex flex-col gap-7 md:col-span-5 md:col-start-2">
            <DiamondDivider className="text-center md:text-left" />
            <h2 className="font-display-md text-headline-lg-mobile text-primary md:text-display-md">
              El Espectáculo
            </h2>
            <p className="text-pretty font-body-lg text-[20px] font-light leading-[1.55] text-on-background md:text-[24px]">
              Un show donde el jazz, la danza, el teatro y el universo del
              cabaret se encuentran para crear una experiencia escénica llena de
              encanto, humor, sensualidad y glamour.
            </p>
            <p className="text-pretty font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Una propuesta creada para elevar la atmósfera de cualquier evento,
              aportando sofisticación, entretenimiento y una puesta en escena
              cuidada, dinámica y visualmente impactante.
            </p>
          </Reveal>

          <Reveal
            delay={200}
            className="relative mt-12 md:col-span-5 md:col-start-8 md:mt-0"
          >
            <GrainImage
              className="relative aspect-[3/4] w-full overflow-hidden border border-primary/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaNLEmZW7Yum84LFFWV3NSsMrmZAaCauxGpfuyWtXLDLyo6YYn1ATlAEho3ozmMmSJA2ZZesBn6tDqaIb9jZJWaKmGoUgtNIk5PPsUzoGQG0VjC1Oa9Lp3E4XtDtymXJK5ovDICxhF7VQO9Vob1iJc0vdvytGklqEkRtlzfyCPk6AlfP2yyPk1HvRaV0SU0AeQG81XLvrjD28-urkXjMlY3Fh2UHlt66nMfgcsUsDpII25U6Kg_NQB"
              alt="Composición asimétrica y estilizada con una fotografía editorial de moda en blanco y negro de las piernas de una bailarina, cubiertas por medias transparentes y tacones vintage con pedrería, apoyadas sobre una butaca mullida. La imagen se centra en texturas como la seda, las piedras y las plumas delicadas."
              imageClassName="object-cover [filter:grayscale(1)_contrast(1.1)]"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
            <GrainImage
              className="absolute -bottom-16 -left-16 hidden aspect-square w-2/3 overflow-hidden border border-primary/20 bg-surface md:block"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy5JXxYYTiyGL-eYm2e-vw5eF2-Ks3Z6UYQGCVH6SjqvJ0XM231tr6yR33gag85GdS1fq0TcNqGIWnWmZKTsvZgKZ6A9Rg5ex6x_rDOkvUmPv3CEhRI8iFTduUCRRDnShB5Dq4FvEDTzKmYcgo0mBK58WipNlQV949_c379DhC7kRlIyQbTCvOb8vb-68D-TJx7H5cbzS1RFW3WvEAoRm0TTvC9rEYRVeBOB9WnXDrsW_qNsDw4UnT"
              alt="Primer plano en blanco y negro de la mano de una bailarina con un largo guante de seda de noche, sosteniendo con delicadeza un collar de perlas. La imagen tiene una textura muy marcada, con grano visible, fuerte contraste y poca profundidad de campo."
              imageClassName="object-cover [filter:grayscale(1)_contrast(1.1)]"
              sizes="(min-width: 768px) 27vw, 100vw"
            />
          </Reveal>
        </div>

        <Reveal className="mt-24 grid grid-cols-1 gap-gutter md:mt-44 md:grid-cols-12 md:gap-x-16">
          <p className="text-pretty font-body-md text-body-md leading-relaxed text-on-surface-variant md:col-span-4 md:col-start-2">
            Las Coquettes convierte el escenario en un universo de fantasía,
            glamour y juego. Cada cuadro abre una nueva escena: una canción, un
            personaje, una actitud, una historia.
          </p>
          <p className="text-pretty font-body-md text-body-md leading-relaxed text-on-surface-variant md:col-span-4 md:col-start-7">
            La danza jazz se encuentra con el teatro, la sensualidad con el
            humor y la elegancia con la picardía, dando lugar a una sucesión de
            momentos inesperados, llenos de carácter y personalidad.
          </p>
        </Reveal>

        <Reveal className="mt-16 grid grid-cols-1 md:mt-24 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-9 md:col-start-2 md:flex-row md:items-center md:gap-8">
            <span aria-hidden className="h-px w-16 shrink-0 bg-accent" />
            <p className="text-pretty font-display-md text-[26px] italic leading-snug text-primary md:text-[34px]">
              Una experiencia que despierta los sentidos y deja huella
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
