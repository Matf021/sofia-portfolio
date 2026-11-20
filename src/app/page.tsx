
import PortfolioWordmark from "@/components/PortfolioWordmark";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      {/* COVER */}
      <section
        id="inicio"
        className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-16 md:px-12"
      >
        <PortfolioWordmark />

        <a
          href="#sobre-mi"
          aria-label="Continuar hacia la presentación"
          className="absolute bottom-8 text-sm text-muted transition-colors hover:text-burgundy"
        >
          ↓
        </a>
      </section>

      {/* INTRODUCTION */}
      <section
        id="sobre-mi"
        className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-12"
      >
        <div>
          <p className="mb-5 text-2xl text-burgundy">
            ¡Hola!
          </p>

          <h2 className="text-5xl font-light md:text-7xl">
            Bienvenidos...
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-2xl">
            Soy Sofía Gutiérrez Bohórquez.
            <br />
            Diseñadora industrial y diseñadora
            de productos.
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
      </section>

      {/* PROJECTS */}
      <section
        id="proyectos"
        className="mx-auto max-w-7xl px-6 py-24 md:px-12"
      >
        <h2 className="mb-16 text-center text-5xl font-light uppercase tracking-[0.15em] md:text-7xl">
          Proyect<span className="text-burgundy">o</span>s
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group flex min-h-72 flex-col justify-between border border-black/10 p-6 transition-colors duration-300 hover:bg-white/60"
            >
              <div className="flex justify-between text-sm text-muted">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span>{project.year}</span>
              </div>

              <div>
                <h3 className="mb-2 text-3xl font-light group-hover:text-burgundy">
                  {project.title}
                </h3>

                <p className="text-muted">
                  {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
