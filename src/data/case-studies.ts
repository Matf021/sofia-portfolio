
type CaseStudy = {
    title: string;
    category: string;
    period: string;
    collaborators: string[];

    introduction: string;
    challenge: string;

    referenceLabel: string;
    technicalReferences: string;

    geometry: string;
    processDetailHeading: string;
    construction: string;
    detailNotes: string[];

    techniques: string[];

    images: {
        hero: string;
        process: string;
        final: string;
    };

    finalProduct: string;
};

export const caseStudies = {
    "abrazo-de-lirio": {
        title: "Abrazo de lirio",
        category: "Luminaria de mesa",
        period: "2023-1",

        collaborators: [
            "Sofía Gutiérrez Bohórquez",
            "Mariana Pérez Ramos",
        ],

        introduction:
            "Observación y reinterpretación biomimética.",

        challenge:
            "Crear una luminaria inspirada en las estructuras de una especie botánica.",

        referenceLabel: "Referencias técnicas:",
        technicalReferences: "Empacar, guardar, contener.",

        geometry:
            "Superficies de revolución que unen y envuelven los ejes estructurales.",

        processDetailHeading: "Exploración geométrica",
        construction:
            "Vista de detalle, mecanismo de encaje a presión (MDF 3mm).",

        detailNotes: [
            "Vista superior, ángulo de las piezas.",
        ],

        techniques: [
            "Ilustración digital.",
            "Corte Láser.",
        ],

        images: {
            hero: "/images/projects/abrazo-de-lirio.png",
            process: "/images/projects/abrazo-de-lirio/process.webp",
            final: "/images/projects/abrazo-de-lirio/final.webp",
        },

        finalProduct:
            "Producto final: luminaria de mesa.",
    },

    siestoteca: {
        title: "Siestoteca",
        category: "Producto textil",
        period: "2024-2",

        collaborators: [
            "Sofía Gutiérrez Bohórquez",
            "Manuela Aldana",
            "Sara Guzmán",
        ],

        introduction:
            "Habitabilidad temporal en espacios compartidos.",

        challenge:
            "Desarrollar una solución que permita mejorar y resignificar la experiencia de descanso en espacios no destinados para ello.",

        referenceLabel: "Puntos de dolor:",
        technicalReferences:
            "Superficies incómodas, falta de espacios y privacidad",

        geometry:
            "Privacidad y comfort.",

        processDetailHeading: "Exploración textil 1:5.",
        construction:
            "Un solo sistema de broches con múltiples acomodaciones.",

        detailNotes: [
            "Complementos para una experiencia de descanso; antifaz, bruma de lavanda y manual de uso (incluye playlist).",
            "Portabilidad.",
        ],

        techniques: [
            "Investigación centrada en el usuario.",
            "Ilustración digital.",
            "Prueba de resistencia textil.",
            "Diseño de patronaje.",
            "Planimetria CAD",
        ],

        images: {
            hero: "/images/projects/siestoteca.png",
            process: "/images/projects/siestoteca/process.webp",
            final: "/images/projects/siestoteca/final.webp",
        },

        finalProduct: "Producto final: artículo textil.",
    },


    "nudos-y-lazos": {
        title: "Nudos y lazos",
        category: "Mobiliario doméstico",
        period: "2023-1",

        collaborators: [
            "Sofía Gutiérrez Bohórquez",
            "Mariana Pérez Ramos",
        ],

        introduction:
            "Convivencia multiespecie en espacios reducidos.",

        challenge:
            "Desarrollar un sistema de mobiliario multifuncional que optimice el espacio doméstico y mejore la convivencia entre personas y mascotas.",

        referenceLabel: "Puntos de dolor:",
        technicalReferences:
            "Menos espacio habitacional para más integrantes",

        geometry:
            "Se triplican el número de acomodaciones del sistema.",

        processDetailHeading: "Principios claves del sistema:",

        construction:
            "2+ acomodaciones. Permitir almacenamiento. Cojinería extraíble. Asegurar espacio para 1 mascota.",

        detailNotes: [
            "Actores cruciales (mordidas, rasguños, pelaje y fluidos, entre otras).",
            "Pino cepillado, tela antifuídos, hilo náutico.",
        ],

        techniques: [
            "Investigación centrada en el usuario.",
            "Ilustración digital y modelado 3D.",
            "Pruebas de resistencia mecánica.",
            "Diseño de patronaje.",
            "Planimetria CAD.",
            "Ensamblaje total del sistema.",
        ],

        images: {
            hero: "/images/projects/nudos-y-lazos.png",
            process: "/images/projects/nudos-y-lazos/process.webp",
            final: "/images/projects/nudos-y-lazos/final.webp",
        },

        finalProduct:
            "Producto final: sistema de mobiliario doméstico.",
    },
} satisfies Record<string, CaseStudy>;

export type CaseStudySlug = keyof typeof caseStudies;
