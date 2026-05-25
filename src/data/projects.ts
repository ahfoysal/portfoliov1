import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Boksily",
    description:
      "A booking and business management platform. I built the NestJS backend, REST APIs, database structure, and deployment setup. Includes AWS/MinIO media storage for audio and video, and trilingual support (Korean, English, Japanese).",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "AWS", "MinIO", "i18n"],
    link: "https://boksiri.app",
    isPrivate: true,
    isFeatured: true,
  },
  {
    title: "Chat Application",
    description:
      "A real-time chat app built with Socket.IO and Next.js. Supports multiple rooms and live messaging.",
    tech: ["Socket.IO", "Next.js", "MongoDB"],
    link: "https://chatcord.pewds.vercel.app/",
    github: "https://github.com/ahfoysal/ChatCord-Client-Next.js",
    isFeatured: true,
  },
  {
    title: "Jobify",
    description:
      "A job board app for seekers and employers. Features job listings, applications, and a dashboard built with React and Tanstack Query.",
    tech: ["React", "MongoDB", "Tanstack Query", "Firebase Auth"],
    link: "https://jobify-bd6c2.web.app/",
    github: "https://github.com/ahfoysal/Jobify-Client-Code-MERN",
    isFeatured: true,
  },
  {
    title: "Node.js API Library",
    description:
      "A Node.js library providing APIs for various Bangladeshi websites (Daraz, Bikroy.com, Foodpanda, Prothom Alo) and streaming links for movies and anime.",
    tech: ["Node.js", "Express.js", "Cheerio.js"],
    link: "https://docs.pewds.vercel.app/",
    github: "https://github.com/ahfoysal/docs.pewds.api",
    isFeatured: true,
  },
];
