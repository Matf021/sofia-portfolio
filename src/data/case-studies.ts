
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
} satisfies Record<string, CaseStudy>;

export type CaseStudySlug = keyof typeof caseStudies;
