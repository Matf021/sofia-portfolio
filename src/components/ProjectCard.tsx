
import Image from "next/image";
import Link from "next/link";

import ScrollReveal from "@/components/ScrollReveal";
import type { projects } from "@/data/projects";
import { caseStudies } from "@/data/case-studies";

type Project = (typeof projects)[number];

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({
    project,
    index,
}: ProjectCardProps) {
    const staggerClasses = [
        "md:translate-y-0",
        "md:translate-y-20",
        "md:translate-y-8",
        "md:translate-y-24",
        "md:translate-y-0",
        "md:translate-y-16",
    ];

    const isAvailable = Object.prototype.hasOwnProperty.call(
        caseStudies,
        project.slug
    );

    const card = (
        <article
            className={`group relative min-w-0 ${staggerClasses[index % staggerClasses.length]
                }`}
        >
            <ScrollReveal delay={(index % 3) * 110}>
                <div className="relative aspect-[4/5] overflow-hidden bg-white">
                    <Image
                        src={project.image}
                        alt={`Proyecto ${project.title}`}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                        <h3 className="text-2xl font-normal tracking-tight transition-colors group-hover:text-burgundy">
                            {project.title}
                        </h3>

                        <p className="mt-1 text-sm text-muted">
                            {project.category}
                        </p>
                    </div>

                    {isAvailable ? (
                        <span
                            aria-hidden="true"
                            className="text-2xl text-burgundy transition-transform duration-300 group-hover:translate-x-1"
                        >
                            ↗
                        </span>
                    ) : (
                        <span className="text-xs text-muted">
                            {String(index + 1).padStart(2, "0")}
                        </span>
                    )}
                </div>
            </ScrollReveal>
        </article>
    );

    if (isAvailable) {
        return (
            <Link
                href={`/proyectos/${project.slug}`}
                aria-label={`Explorar ${project.title}`}
                className="block min-w-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
            >
                {card}
            </Link>
        );
    }

    return card;
}
