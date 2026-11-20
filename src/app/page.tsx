import ProjectCard from "@/components/ProjectCard";
import PortfolioWordmark from "@/components/PortfolioWordmark";
import { projects } from "@/data/projects";
import AboutSection from "@/components/AboutSection";

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
      <AboutSection />

      {/* PROJECTS */}
      <section
        id="proyectos"
        className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:pb-52"
      >
        <div className="mb-20 text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted">
            01 — 06
          </p>

          <h2 className="text-5xl font-light uppercase tracking-[0.15em] md:text-7xl">
            PROYECT<span className="text-burgundy">O</span>S
          </h2>
        </div>

        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-y-28 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
