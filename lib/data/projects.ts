export type Project = {
  title: string;
  description: string;
  category: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Agentic AI Builder",
    description: "Turns plain-English prompts into working React apps using streaming AI code generation, a live sandboxed preview, and credit-based billing.",
    category: "AI",
    tags: ["React", "LLM Streaming", "Sandbox", "Stripe"],
    repoUrl: "https://github.com/luvkumar404/agentic-ai-builder",
    featured: true,
  },
  {
    title: "Marketing ERP",
    description: "A role-based ERP for marketing teams featuring isolated workflows, full RESTful APIs for payroll and targets, and automated credential delivery.",
    category: "Full-Stack",
    tags: ["Node.js", "Express", "PostgreSQL", "REST API"],
    repoUrl: "https://github.com/luvkumar404/marketing-erp",
  },
  {
    title: "FileShare",
    description: "A secure file-sharing platform with fine-grained access control, password-protected share links, audit logs, and integrated private cloud storage.",
    category: "Security",
    tags: ["Next.js", "TypeScript", "S3", "Auth"],
    repoUrl: "https://github.com/luvkumar404/fileshare",
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive personal portfolio website built with Next.js and Tailwind CSS. Features dynamic animations and a sleek dark mode design.",
    category: "Web",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "React"],
    repoUrl: "https://github.com/luvkumar404/my-portfolio",
    liveUrl: "https://luv.vercel.app", // Adjust if there's a known live url
  }
];
