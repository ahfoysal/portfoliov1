"use client";

import { useState, useEffect } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const navLinks = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Abu Hossain Foysal
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Full-Stack Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I build web apps, REST APIs, and real-time features with TypeScript,
          Next.js, NestJS, and PostgreSQL.
        </p>

        <nav className="mt-16 hidden lg:block" aria-label="On-page sections">
          <ul className="space-y-1">
            {navLinks.map(({ name, id }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className={`group flex w-full items-center py-3 text-left transition-all ${
                      isActive ? "text-slate-200" : "text-slate-500"
                    }`}
                  >
                    <span
                      className={`mr-4 h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-slate-200"
                          : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                      }`}
                    />
                    <span className="text-xs font-bold uppercase tracking-widest group-hover:text-slate-200">
                      {name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-8">
        <a
          href="/AhFoysal_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded border border-[#64ffda] px-5 py-2.5 font-mono text-sm text-[#64ffda] transition hover:bg-[rgba(100,255,218,0.1)]"
        >
          Resume
        </a>

        <ul className="mt-8 flex items-center gap-5 text-slate-400">
          <li>
            <a
              href="https://github.com/ahfoysal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition hover:text-slate-200"
            >
              <FiGithub className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ahfoysal/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-slate-200"
            >
              <FiLinkedin className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
