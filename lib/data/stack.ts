const D = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const S = "https://cdn.simpleicons.org";

export const stack = [
  {
    number: "01",
    category: "Languages",
    items: [
      { name: "Java", icon: `${D}/java/java-original.svg` },
      { name: "JavaScript", icon: `${D}/javascript/javascript-original.svg` },
      { name: "TypeScript", icon: `${D}/typescript/typescript-original.svg` },
      { name: "Python", icon: `${D}/python/python-original.svg` },
    ],
  },
  {
    number: "02",
    category: "Frontend",
    items: [
      { name: "React", icon: `${D}/react/react-original.svg` },
      { name: "Next.js", icon: `${D}/nextjs/nextjs-original.svg` },
      { name: "Tailwind CSS", icon: `${D}/tailwindcss/tailwindcss-original.svg` },
      { name: "shadcn/ui", icon: `${S}/shadcnui` },
      { name: "Bootstrap CSS", icon: `${D}/bootstrap/bootstrap-original.svg` },
    ],
  },
  {
    number: "03",
    category: "Backend & Databases",
    items: [
      { name: "Node.js", icon: `${D}/nodejs/nodejs-original.svg` },
      { name: "Express.js", icon: `${D}/express/express-original.svg` },
      { name: "Bun", icon: `${S}/bun` },
      { name: "MongoDB", icon: `${D}/mongodb/mongodb-original.svg` },
      { name: "PostgreSQL", icon: `${D}/postgresql/postgresql-original.svg` },
      { name: "Redis", icon: `${D}/redis/redis-original.svg` },
    ],
  },
  {
    number: "04",
    category: "DevOps & Cloud",
    items: [
      { name: "Git", icon: `${D}/git/git-original.svg` },
      { name: "GitHub", icon: `${D}/github/github-original.svg` },
      { name: "Docker", icon: `${D}/docker/docker-original.svg` },
      { name: "GitHub Actions", icon: `${S}/githubactions` },
      { name: "AWS", icon: `${S}/amazonwebservices` },
      { name: "Vercel", icon: `${S}/vercel` },
    ],
  },
];
