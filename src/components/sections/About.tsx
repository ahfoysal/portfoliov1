import { skills } from "@/data/skills";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24"
    >
      <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
        About
      </h2>

      <div className="space-y-4 text-slate-400">
        <p>
          I&apos;m Foysal, a full-stack developer based in Dhaka, Bangladesh. I
          work mainly with TypeScript across the frontend and backend, building
          web apps, REST APIs, and real-time features. I&apos;ve shipped
          production apps using Next.js, NestJS, and PostgreSQL, and
          I&apos;ve worked onsite with teams in South Korea.
        </p>
        <p>
          Currently at{" "}
          <span className="text-[#64ffda]">Softvence Agency</span>, building
          client projects end-to-end. I&apos;m open to freelance and full-time
          roles.
        </p>
        <p className="pt-2 font-medium text-slate-300">
          Technologies I work with:
        </p>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-2 font-mono text-xs text-slate-400"
            >
              <span className="text-[#64ffda]">▹</span>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
