import GithubProjects from "./components/github-projects";

import { getGithubRepos } from "./api/github/github";

export const revalidate = 3600;

export default async function Home() {
  const repos = await getGithubRepos();

  return (
    <main className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* STATUS */}
          <div className="flex items-center gap-3 mb-10">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />

            <span className="text-zinc-400">
              Atualmente desenvolvendo PulseWatch
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none max-w-5xl">
            Thiago Vitor
          </h1>

          {/* SUBTITLE */}
          <p className="mt-10 max-w-2xl text-xl leading-relaxed text-zinc-400">
            Fullstack & Mobile Developer
            focado em construir aplicações
            modernas, performáticas e
            experiências digitais premium
            usando Java, Spring Boot,
            Next.js e Flutter.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-5">
            <a
              href="https://github.com/thiagovt093"
              target="_blank"
              className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Github
            </a>

            <a
              href="https://wa.me/5577988217247"
              target="_blank"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition hover:border-cyan-400/30"
            >
              Vamos conversar
            </a>
          </div>

          {/* STACK */}
          <div className="mt-16 flex flex-wrap gap-4">
            {[
              "Java",
              "Spring Boot",
              "Next.js",
              "Flutter",
              "TypeScript",
              "PostgreSQL",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <GithubProjects repos={repos} />
    </main>
  );
}