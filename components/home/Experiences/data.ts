import { ExperienceCardProps } from "@/types/data";

export const resumeDownloadUrl =
  "https://drive.google.com/u/1/uc?id=1AVbzD-4wveiw7NyC0Vo0dk79HmHFgHfI&export=download";

export const experiences: ExperienceCardProps[] = [
  {
    company: "Priceline",
    position: "Junior Software Engineer",
    start: "2026-04-02",
    description:
      "Collaborating within a cross-functional team to implement new features. Refactoring legacy codebase to improve maintainability.",
    technologies: [
      "React",
      "TypeScript",
      "GraphQL",
      "Tailwind CSS",
      "New Relic",
    ],
  },
  {
    company: "Priceline",
    position: "Software Engineer Co-op",
    start: "2024-07-02",
    end: "2024-12-31",
    description:
      "Drove UI modernization across multiple pages, reviewed PRs, managaged deployments, and contributed to JWT authentication migration efforts.",
    technologies: ["React", "Next.js", "TypeScript", "GraphQL", "Jest"],
  },
  {
    company: "Northeastern Electric Racing",
    position: "Product Lead",
    start: "2023-12-02",
    end: "2024-12-31",
    description:
      "Led teams of product designers and managers to develop new features for internal project management and data visualization dashboards, working closely with users to create high-fidelity wireframes.",
    technologies: ["Figma", "User Research"],
  },
  {
    company: "Northeastern Electric Racing",
    position: "Software Developer",
    start: "2023-09-02",
    end: "2024-12-31",
    description:
      "Contributed to open-source full-stack internal project management dashboard, notably supporting on an initiative to create a more useful gantt chart.",
    technologies: ["React", "TypeScript", "Express.js", "Prisma", "Jest"],
  },
];
