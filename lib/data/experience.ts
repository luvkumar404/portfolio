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
      "Built a real-time SEO analytics dashboard, enabling marketing teams to monitor campaign page performance and surface actionable insights instantly.",
      "Reduced API response time by 20% by optimizing backend database queries and eliminating redundant React rerenders through memoization and component restructuring.",
      "Authored 100+ Jest unit tests achieving 90%+ code coverage across frontend and backend, reducing production regressions and enabling safer, faster deploys."
    ]
  }
];
