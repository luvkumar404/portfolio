import type { ToolItem } from "./experience";

const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const S = "https://cdn.simpleicons.org";

export type Project = {
  title: string;
  description: string;
  category: string;
  tools: ToolItem[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Agentic AI Builder",
    description: "Turns plain-English prompts into working React apps using streaming AI code generation, a live sandboxed preview, and credit-based billing.",
    category: "AI",
    tools: [
      { name: "Next.js", icon: `${D}/nextjs/nextjs-original.svg` },
      { name: "TypeScript", icon: `${D}/typescript/typescript-original.svg` },
      { name: "Gemini", icon: `${S}/googlegemini` },
      { name: "Tailwind CSS", icon: `${D}/tailwindcss/tailwindcss-original.svg` },
    ],
    repoUrl: "https://github.com/luvkumar404/agentic-ai-builder",
    featured: true,
  },
  {
    title: "Marketing ERP",
    description: "A role-based ERP for marketing teams featuring isolated workflows, full RESTful APIs for payroll and targets, and automated credential delivery.",
    category: "Full-Stack",
    tools: [
      { name: "Node.js", icon: `${D}/nodejs/nodejs-original.svg` },
      { name: "Express", icon: `${D}/express/express-original.svg` },
      { name: "MongoDB", icon: `${D}/mongodb/mongodb-original.svg` },
      { name: "Razorpay", icon: `${S}/razorpay` },
    ],
    repoUrl: "https://github.com/luvkumar404/marketing-erp",
  },
  {
    title: "FileShare",
    description: "A secure file-sharing platform with fine-grained access control, password-protected share links, audit logs, and integrated private cloud storage.",
    category: "Security",
    tools: [
      { name: "React.js", icon: `${D}/react/react-original.svg` },
      { name: "Bun.js", icon: `${D}/bun/bun-original.svg` },
      { name: "Cloudinary", icon: `${S}/cloudinary` },
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
    ],
    repoUrl: "https://github.com/luvkumar404/fileshare",
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive personal portfolio website built with Next.js and Tailwind CSS. Features dynamic animations and a sleek dark mode design.",
    category: "Web",
    tools: [
      { name: "Next.js", icon: `${D}/nextjs/nextjs-original.svg` },
      { name: "Tailwind CSS", icon: `${D}/tailwindcss/tailwindcss-original.svg` },
      { name: "TypeScript", icon: `${D}/typescript/typescript-original.svg` },
      { name: "shadcn/ui", icon: `${S}/shadcnui` },
    ],
    repoUrl: "https://github.com/luvkumar404/my-portfolio",
    liveUrl: "https://luv.vercel.app", // Adjust if there's a known live url
  }
];
