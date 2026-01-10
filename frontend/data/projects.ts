export type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "Clean and modern developer portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    link: "https://example.com",
  },
  {
    title: "UI Library Components",
    description: "Reusable UI components designed for scalable design systems.",
    tech: ["React", "TypeScript", "Storybook"],
  },
];
