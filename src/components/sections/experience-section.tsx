import { DiamondDivider } from "@/components/ui/diamond-divider";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { Reveal } from "@/components/ui/reveal";

const FEATURES = [
  {
    icon: "music_note",
    title: "ACTUACIÓN EN VIVO",
    description: "Entretenimiento elegante pensado para públicos sofisticados.",
  },
  {
    icon: "flare",
    title: "ATMÓSFERA",
    description:
      "Una experiencia visual cuidada que realza el ambiente de tu espacio.",
  },
  {
    icon: "architecture",
    title: "FORMATO FLEXIBLE",
    description:
      "Coreografía adaptable a lounges, salones de baile o escenarios íntimos.",
  },
  {
    icon: "auto_awesome",
    title: "MOMENTO MEMORABLE",
    description:
      "Creamos impresiones duraderas de lujo y refinamiento artístico.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="bg-surface px-margin-mobile py-stack-xl md:px-margin-desktop"
    >
      <Reveal className="mx-auto max-w-[1440px]">
        <div className="mb-16 flex flex-col items-center text-center">
          <DiamondDivider className="mb-4" />
          <h2 className="font-display-md text-headline-lg-mobile text-primary md:text-display-md">
            La Experiencia
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-primary/20 pt-12 md:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-4 text-center md:text-left"
            >
              <MaterialSymbol
                name={feature.icon}
                className="text-3xl font-light text-primary"
              />
              <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-primary">
                {feature.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
