
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

    technicalReferences:
      "Empacar, guardar, contener.",

    geometry:
      "Superficies de revolución que unen y envuelven los ejes estructurales.",

    construction:
      "Vista de detalle, mecanismo de encaje a presión (MDF 3mm).",

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
} as const;

export type CaseStudySlug = keyof typeof caseStudies;
