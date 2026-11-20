
import type { CaseStudySlug } from "@/data/case-studies";

type ProjectTheme = {
  heroBackground: string;
  finalBackground: string;
  processBackground: string;
  accentText: string;
};

export const projectThemes = {
  "abrazo-de-lirio": {
    heroBackground: "bg-[#241915]",
    finalBackground: "bg-[#211915]",
    processBackground: "bg-[#E5DFD7]",
    accentText: "text-[#D6AE65]",
  },

  siestoteca: {
    heroBackground: "bg-[#35283F]",
    finalBackground: "bg-[#30243A]",
    processBackground: "bg-[#EBE4EF]",
    accentText: "text-[#D7B9EA]",
  },

  "nudos-y-lazos": {
    heroBackground: "bg-[#40342A]",
    finalBackground: "bg-[#30271F]",
    processBackground: "bg-[#E9E0D3]",
    accentText: "text-[#E0BA83]",
  },
} satisfies Record<CaseStudySlug, ProjectTheme>;
