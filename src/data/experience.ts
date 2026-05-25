import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "RnC · Research and Companion",
    role: "Full-Stack Developer",
    duration: "Feb 2026 – May 2026",
    type: "Contract · South Korea",
    bullets: [
      "Built a multi-role app for owners, vendors, and admins using React Native and NestJS",
      "Implemented real-time chat with Socket.IO and JWT-based role access for 3 user types",
      "Added multilingual support (Korean, English, Japanese) using i18n",
      "Deployed the full app on Fly.io and worked onsite with the Korea-based team for 3 months",
    ],
  },
  {
    company: "Softvence Agency",
    role: "Full-Stack Developer",
    duration: "2024 – Present",
    type: "Full-time",
    bullets: [
      "Built frontend and backend features for client projects using TypeScript, Next.js, and NestJS",
      "Set up CI/CD pipelines with GitHub Actions across multiple projects",
      "Standardized API structures and reusable UI components to reduce repeated work",
      "Participated in code reviews and technical planning sessions",
    ],
  },
];
