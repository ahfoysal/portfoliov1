"use client";

import { useState } from "react";
import { experiences } from "@/data/experience";

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = experiences[active];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
    >
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        Experience
      </h2>

      <div className="flex flex-col sm:flex-row">
        <ul className="mb-4 flex shrink-0 overflow-x-auto border-b border-slate-700 sm:mb-0 sm:flex-col sm:border-b-0 sm:border-l sm:border-slate-700">
          {experiences.map((exp, i) => (
            <li key={exp.company} className="shrink-0">
              <button
                onClick={() => setActive(i)}
                className={`block w-full px-5 py-3 text-left font-mono text-xs transition-all whitespace-nowrap ${
                  active === i
                    ? "border-b-2 sm:border-b-0 sm:border-l-2 sm:-ml-px border-[#64ffda] text-[#64ffda] bg-[rgba(100,255,218,0.05)]"
                    : "border-b-2 sm:border-b-0 border-transparent text-slate-500 hover:bg-slate-800/50 hover:text-slate-200"
                }`}
              >
                {exp.company}
              </button>
            </li>
          ))}
        </ul>

        <div className="sm:pl-8">
          <h3 className="text-base font-medium text-slate-200">
            {job.role}{" "}
            <span className="text-[#64ffda]">@ {job.company}</span>
          </h3>
          <p className="mt-1 font-mono text-xs text-slate-500">
            {job.duration} · {job.type}
          </p>
          <ul className="mt-4 space-y-3">
            {job.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2 text-sm text-slate-400">
                <span className="mt-1 shrink-0 text-[#64ffda]">▹</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
