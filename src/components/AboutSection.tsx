
import Image from "next/image";

const education = [
  {
    institution: "Universidad Pontificia Bolivariana",
    description: "Diseño industrial, 2023-2026",
  },
  {
    institution: "Universidad LCI Veritas",
    description: "Diseño de productos, 2025-2026",
  },
];

const experience = [
  {
    institution: "Universidad Pontificia Bolivariana",
    description: "Monitoría de clase, 2025-1",
  },
  {
    institution: "Fuego Design Studio",
    description: "Diseñadora junior, 2026-1",
  },
];

const interests = [
  "Modelación 3D.",
  "Renderizado CAD.",
  "Creación de espacios.",
  "Innovación material y sostenibilidad.",
];

function InfoGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-black/15 pt-5">
      <h3 className="mb-5 text-xl font-medium text-burgundy">
        {title}
      </h3>
      {children}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative overflow-hidden px-6 py-24 md:px-12 lg:py-36"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

        {/* PORTRAIT */}
        <div className="relative lg:sticky lg:top-16 lg:self-start">
          <div className="relative mx-auto max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -left-4 top-10 h-[80%] w-[75%] rounded-sm bg-gold/20"
            />

            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/sofia-portrait-placeholder.png"
                alt="Ilustración de Sofía Gutiérrez Bohórquez"
                width={1429}
                height={1739}
                sizes="(max-width: 1023px) 90vw, 40vw"
                className="h-auto w-full"
              />
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.25em] text-muted">
              Sofía Gutiérrez Bohórquez / 2026
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="min-w-0">
          <div className="mb-12">
            <p className="text-3xl font-medium text-burgundy md:text-4xl">
              ¡Hola!
            </p>

            <h2 className="mt-1 text-5xl font-light tracking-tight md:text-7xl">
              Bienvenidos...
            </h2>
          </div>

          <div className="space-y-5 text-base leading-relaxed md:text-lg">
            <p className="text-xl font-medium md:text-2xl">
              Soy Sofía Gutiérrez Bohórquez.
              <br />
              Diseñadora industrial y diseñadora de productos.
            </p>

            <p>
              Me apasiona convertir ideas en realidad,
              explorar nuevas formas y crear experiencias
              a través del diseño. Disfruto experimentar
              con materiales, desafiar lo convencional y
              encontrar nuevas maneras de expresar ideas.
            </p>

            <p>
              Soy curiosa, creativa y determinada.
              Me motivan los retos, aprender constantemente
              y salir de mi zona de confort.
            </p>
          </div>

          {/* QUALIFICATIONS */}
          <div className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2">
            <InfoGroup title="Educación:">
              <div className="space-y-5">
                {education.map((item) => (
                  <div key={item.institution}>
                    <p className="font-medium">
                      {item.institution}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </InfoGroup>

            <InfoGroup title="Experiencia:">
              <div className="space-y-5">
                {experience.map((item) => (
                  <div key={item.institution}>
                    <p className="font-medium">
                      {item.institution}
                    </p>
                    <p className="mt-1 text-sm text-muted">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </InfoGroup>

            <InfoGroup title="Competencias digitales:">
              <div className="flex flex-wrap gap-2">
                {[
                  "SolidWorks",
                  "Rhinoceros",
                  "Arduino",
                  "Illustrator",
                  "Procreate",
                  "KeyShot",
                  "V-Ray",
                  "Canva",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-sm border border-black/15 px-3 py-2 text-sm transition-colors duration-300 hover:border-burgundy hover:text-burgundy"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </InfoGroup>

            <InfoGroup title="Intereses:">
              <ul className="space-y-2">
                {interests.map((interest) => (
                  <li key={interest} className="text-sm">
                    <span className="mr-2 text-burgundy">
                      •
                    </span>
                    {interest}
                  </li>
                ))}
              </ul>
            </InfoGroup>

            <InfoGroup title="Idiomas:">
              <div className="space-y-2 text-sm">
                <p>Español (nativo)</p>
                <p>Inglés: C1</p>
              </div>
            </InfoGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
