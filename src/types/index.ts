export interface Experience {
  company: string;
  role: string;
  duration: string;
  type: string;
  bullets: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  isPrivate?: boolean;
  isFeatured: boolean;
}
