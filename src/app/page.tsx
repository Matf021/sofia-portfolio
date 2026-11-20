
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-8 md:px-12">
      <header className="flex items-center justify-between">
        <span className="text-xl font-semibold tracking-tight">
          Sofía G.
        </span>

        <span className="text-xs uppercase tracking-[0.2em] text-burgundy">
          Portafolio / 2026
        </span>
      </header>

      <section className="flex min-h-[65vh] flex-col justify-center">
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-burgundy">
          Diseño industrial · Diseño de productos
        </p>

        <h1 className="max-w-5xl text-5xl leading-tight font-light tracking-tight md:text-8xl">
          Sofía Gutiérrez
          <br />
          <span className="text-burgundy">Bohórquez.</span>
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Me apasiona convertir ideas en realidad,
          explorar nuevas formas y crear experiencias
          a través del diseño.
        </p>

        <a
          href="#proyectos"
          className="mt-10 w-fit border-b border-gold pb-2 text-sm uppercase tracking-widest"
        >
          Explorar proyectos ↓
        </a>
      </section>

      <section
        id="proyectos"
        className="border-t border-black/15 py-16"
      >
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="text-4xl font-light tracking-tight md:text-6xl">
            Proyectos<span className="text-burgundy">.</span>
          </h2>

          <span className="text-sm text-muted">
            01 — 06
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="group flex min-h-64 flex-col justify-between border border-black/15 p-6 transition-colors duration-300 hover:bg-white/70"
            >
              <div className="flex justify-between text-xs text-muted">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{project.year}</span>
              </div>

              <div>
                <h3 className="mb-2 text-3xl font-light transition-colors group-hover:text-burgundy">
                  {project.title}
                </h3>
                <p className="text-sm text-muted">
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
