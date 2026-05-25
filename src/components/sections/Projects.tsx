import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
    >
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Projects
      </h2>

      <ul className="space-y-4">
        {projects
          .filter((p) => p.isFeatured)
          .map((project) => (
            <li
              key={project.title}
              className="group relative rounded-lg p-4 transition-all hover:bg-slate-800/50 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-sm font-semibold text-slate-200 transition group-hover:text-[#64ffda]">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="flex shrink-0 items-center gap-3 text-slate-400">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="transition hover:text-slate-200"
                    >
                      <FiGithub className="h-4 w-4" />
                    </a>
                  ) : project.isPrivate ? (
                    <button
                      onClick={() => alert("Source code is private")}
                      aria-label="Private repo"
                      className="transition hover:text-slate-200"
                    >
                      <FiGithub className="h-4 w-4" />
                    </button>
                  ) : null}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live link`}
                    className="transition hover:text-slate-200"
                  >
                    <FiExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-teal-400/10 px-3 py-1 font-mono text-xs text-teal-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </section>
  );
}
