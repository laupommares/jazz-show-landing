import { DiamondDivider } from "@/components/ui/diamond-divider";
import { Reveal } from "@/components/ui/reveal";

const NUMBERS = [
  {
    index: "01",
    title: "A Girl’s Best Friend",
    description:
      "Inspirada en el glamour de Marilyn Monroe. Brillos, plumas y cabaret cobran vida al ritmo de “Diamonds Are a Girl’s Best Friend”, en un número divertido, elegante y lleno de encanto.",
  },
  {
    index: "02",
    title: "Make It Iconic",
    description:
      "Vestidos de novia, actitud y picardía se unen al ritmo del icónico “Like a Virgin” de Madonna, en un número dinámico creado para celebrar el amor con un giro fresco, divertido y sofisticado, lleno de encanto y alegría.",
  },
  {
    index: "03",
    title: "City of Dreams",
    description:
      "Una noche en Nueva York, entre luces, trajes y glamour. Al ritmo de “New York, New York” de Frank Sinatra, el jazz y el cabaret se encuentran en una propuesta vibrante, elegante y llena de actitud.",
  },
];

export function StageSection() {
  return (
    <section
      id="repertorio"
      className="border-y border-primary/10 bg-surface-container-low px-margin-mobile py-stack-xl md:px-margin-desktop"
    >
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="grid grid-cols-1 items-end gap-6 md:grid-cols-12">
          <div className="flex flex-col gap-6 md:col-span-6 md:col-start-2">
            <DiamondDivider />
            <h2 className="font-display-md text-headline-lg-mobile text-primary md:text-display-md">
              En Escena
            </h2>
          </div>
          <p className="font-label-sm text-label-sm uppercase tracking-[0.22em] text-on-surface-variant md:col-span-3 md:col-start-9 md:pb-3 md:text-right">
            Tres cuadros
          </p>
        </Reveal>

        <Reveal className="mt-14 grid grid-cols-1 md:mt-20 md:grid-cols-12">
          <div className="grid grid-cols-1 border-t border-primary/15 md:col-span-10 md:col-start-2 md:grid-cols-3">
            {NUMBERS.map((item) => (
              <article
                key={item.index}
                className="flex flex-col gap-5 border-b border-primary/15 py-10 md:border-b-0 md:border-l md:border-primary/15 md:px-10 md:py-12 md:first:border-l-0 md:first:pl-0 md:last:pr-0"
              >
                <span
                  aria-hidden
                  className="font-display-lg text-[44px] leading-none text-accent/45 md:text-[56px]"
                >
                  {item.index}
                </span>

                <h3 className="font-display-md text-[24px] uppercase leading-tight tracking-[0.01em] text-primary md:text-[27px]">
                  {item.title}
                </h3>

                <span aria-hidden className="h-px w-10 bg-accent/50" />

                <p className="text-pretty font-body-md text-body-md leading-relaxed text-on-surface-variant">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
