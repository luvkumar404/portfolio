const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const S = "https://cdn.simpleicons.org";

export interface ToolItem {
  name: string;
  icon: string;
}

export interface ExperienceData {
  company: string;
  status?: string;
  role: string;
  dateShort: string;
  dateFull: string;
  locationShort: string;
  locationFull: string;
  workMode: string;
  tools: ToolItem[];
  achievements: string[];
}

export const experience: ExperienceData[] = [
  {
    company: "Success Ladder Technologies",
    role: "Software Engineer Intern",
    dateShort: "May 26 – Jul 26",
    dateFull: "May 2026 – July 2026",
    locationShort: "RJ, IN",
    locationFull: "Alwar, Rajasthan",
    workMode: "On-site",
    tools: [
      { name: "TypeScript", icon: `${D}/typescript/typescript-original.svg` },
      { name: "Next.js", icon: `${D}/nextjs/nextjs-original.svg` },
      { name: "shadcn/ui", icon: `${S}/shadcnui` },
      { name: "Vercel", icon: `${S}/vercel` },
      { name: "Gemini", icon: `${S}/googlegemini` },
    ],
    achievements: [
      "Built a live SEO analytics dashboard so marketing teams could track campaign performance and get insights in real time.",
      "Sped up API responses by ~20% through backend query tuning and cutting unnecessary frontend re-renders via memoization.",
      "Wrote 100+ unit tests reaching 90%+ coverage across the stack, cutting down regressions and making deploys safer."
    ]
  }
];
