
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import ScrollReveal from "@/components/ScrollReveal";
import { caseStudies } from "@/data/case-studies";
import LightLaboratory from "@/components/experiments/LightLaboratory";

type Props = {
    params: Promise<{ slug: string }>;
};

function getCaseStudy(slug: string) {
    if (Object.prototype.hasOwnProperty.call(caseStudies, slug)) {
        return caseStudies[slug as keyof typeof caseStudies];
    }

    return null;
}

export function generateStaticParams() {
    return Object.keys(caseStudies).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({
    params,
}: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getCaseStudy(slug);

    if (!project) {
        return { title: "Proyecto no encontrado" };
    }

    return {
        title: project.title,
        description: `${project.title} — ${project.category}. ${project.introduction}`,
    };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = getCaseStudy(slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            {/* HEADER */}
            <header className="absolute inset-x-0 top-0 z-20 px-6 py-7 md:px-12">
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    <Link
                        href="/#proyectos"
                        className="text-sm text-white/80 transition-colors hover:text-white"
                    >
                        ← Volver a proyectos
                    </Link>

                    <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                        Portafolio / 2026
                    </span>
                </div>
            </header>

            {/* HERO */}
            <section className="bg-[#241915] px-6 pb-16 pt-32 text-white md:px-12 md:pb-28">
                <div className="mx-auto max-w-7xl">
                    <ScrollReveal>
                        <div className="mb-10">
                            <p className="mb-5 text-xs uppercase tracking-[0.25em] text-[#D6AE65]">
                                {project.category} / {project.period}
                            </p>

                            <h1 className="max-w-5xl text-6xl font-light tracking-tight md:text-8xl">
                                {project.title}
                                <span className="text-[#D6AE65]">.</span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
                                {project.collaborators.join(", ")}
                                {" · "}
                                {project.period}
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="overflow-hidden rounded-sm">
                        <Image
                            src={project.images.hero}
                            alt={`Presentación de ${project.title}`}
                            width={1600}
                            height={900}
                            priority
                            sizes="(max-width: 1280px) 100vw, 1280px"
                            className="h-auto w-full"
                        />
                    </div>
                </div>
            </section>

            {/* DESIGN CHALLENGE */}
            <section className="px-6 py-24 md:px-12 lg:py-36">
                <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <ScrollReveal direction="left">
                        <div>
                            <span className="text-xs tracking-[0.25em] text-burgundy">
                                01 / CONCEPTO
                            </span>

                            <h2 className="mt-8 text-4xl font-light leading-tight md:text-6xl">
                                {project.introduction}
                            </h2>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="right" delay={120}>
                        <div className="border-l-2 border-gold pl-6 md:pl-10">
                            <h3 className="mb-5 text-sm font-medium text-burgundy">
                                Reto de diseño:
                            </h3>

                            <p className="text-2xl font-light leading-relaxed md:text-3xl">
                                {project.challenge}
                            </p>

                            <div className="mt-10 border-t border-black/15 pt-6">
                                <p className="text-sm text-muted">
                                    Referencias técnicas:
                                </p>

                                <p className="mt-2 text-lg">
                                    {project.technicalReferences}
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* PROCESS */}
            <section className="bg-[#E5DFD7] px-6 py-24 md:px-12 lg:py-32">
                <div className="mx-auto max-w-7xl">
                    <ScrollReveal>
                        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
                            <div>
                                <span className="text-xs tracking-[0.25em] text-burgundy">
                                    02 / EXPLORACIÓN
                                </span>

                                <h2 className="mt-5 text-5xl font-light text-burgundy md:text-7xl">
                                    PROCESO:
                                </h2>
                            </div>

                            <p className="max-w-xs text-sm leading-relaxed text-muted">
                                {project.geometry}
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="overflow-hidden rounded-sm bg-white">
                            <Image
                                src={project.images.process}
                                alt={`Lámina original del proceso de diseño de ${project.title}`}
                                width={4800}
                                height={2700}
                                sizes="(max-width: 1280px) 100vw, 1280px"
                                className="h-auto w-full"
                            />
                        </div>
                    </ScrollReveal>

                    <div className="mt-14 grid gap-10 md:grid-cols-2">
                        <ScrollReveal>
                            <h3 className="mb-4 text-lg font-medium text-burgundy">
                                Exploración geométrica
                            </h3>

                            <p className="leading-relaxed">
                                {project.construction}
                            </p>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <h3 className="mb-4 text-lg font-medium text-burgundy">
                                Técnicas y tecnologías aplicadas:
                            </h3>

                            <ul className="space-y-3">
                                {project.techniques.map((technique) => (
                                    <li key={technique} className="flex gap-3">
                                        <span className="text-burgundy">•</span>
                                        <span>{technique}</span>
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE LIGHTING EXPERIENCE */}
            {slug === "abrazo-de-lirio" && (
                <LightLaboratory
                    image={project.images.hero}
                    title={project.title}
                />
            )}

            {/* FINAL PRODUCT */}
            <section className="bg-[#211915] px-6 py-24 text-white md:px-12 lg:py-36">
                <div className="mx-auto max-w-7xl">
                    <ScrollReveal>
                        <span className="text-xs tracking-[0.25em] text-[#D6AE65]">
                            03 / RESULTADO
                        </span>

                        <h2 className="mb-12 mt-5 max-w-4xl text-4xl font-light md:text-6xl">
                            {project.finalProduct}
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="overflow-hidden rounded-sm">
                            <Image
                                src={project.images.final}
                                alt={`Producto final de ${project.title}`}
                                width={4800}
                                height={2700}
                                sizes="(max-width: 1280px) 100vw, 1280px"
                                className="h-auto w-full"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="px-6 py-16 md:px-12">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6">
                    <p className="text-sm text-muted">
                        Sofía Gutiérrez Bohórquez / 2026
                    </p>

                    <Link
                        href="/#proyectos"
                        className="border-b border-burgundy pb-2 text-sm transition-colors hover:text-burgundy"
                    >
                        Volver a proyectos ↗
                    </Link>
                </div>
            </footer>
        </main>
    );
}
