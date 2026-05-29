import {
  Star,
  GitFork,
  ClockCountdown,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";

import { GithubResponse } from "../api/github/route";

type Props = {
  repos: GithubResponse;
};

export default function GithubProjects({
  repos,
}: Props) {
  return (
    <section
      id="projects"
      className="relative max-w-7xl mx-auto px-6 py-32"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* HEADER */}
      <div className="relative mb-20">
        <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          Github Projects
        </span>

        <h2 className="text-5xl md:text-7xl font-black mt-6 tracking-tight">
          Projetos em Destaque
        </h2>
      </div>

      {/* FEATURED */}
      <div className="relative grid lg:grid-cols-2 gap-10 mb-28">
        {repos.featured.map((repo) => (
          <a
            key={repo.id}
            href={repo.url}
            target="_blank"
            className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 transition duration-500 hover:border-cyan-400/40 hover:-translate-y-2 min-h-[420px]"
          >
            {/* GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

            {/* GLOW */}
            <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

            <div className="relative flex flex-col h-full">
              {/* TOP */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    Featured Project
                  </span>

                  <h3 className="mt-4 text-4xl font-black capitalize tracking-tight">
                    {repo.name.replace(
                      /-/g,
                      " "
                    )}
                  </h3>
                </div>

                <ArrowUpRight
                  size={28}
                  className="text-cyan-300"
                />
              </div>

              {/* DESCRIPTION */}
              <p className="mt-8 text-lg leading-relaxed text-zinc-400">
                {repo.description ||
                  "Projeto em desenvolvimento."}
              </p>

              {/* TECH */}
              <div className="mt-10 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  {repo.primaryLanguage
                    ?.name || "Code"}
                </span>
              </div>

              {/* STATS */}
              <div className="mt-auto pt-16 flex flex-wrap gap-6 text-zinc-400">
                <div className="flex items-center gap-2">
                  <Star size={18} />

                  {repo.stargazerCount}
                </div>

                <div className="flex items-center gap-2">
                  <GitFork size={18} />

                  {repo.forkCount}
                </div>

                <div className="flex items-center gap-2">
                  <ClockCountdown size={18} />

                  {new Date(
                    repo.updatedAt
                  ).toLocaleDateString(
                    "pt-BR"
                  )}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* OTHERS */}
      <div className="relative">
        <h3 className="mb-10 text-3xl font-black tracking-tight">
          Últimos projetos e estudos
        </h3>

        <div className="space-y-5">
          {repos.others.map((repo) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-cyan-400/30 hover:translate-x-2 lg:flex-row lg:items-center"
            >
              <div>
                <h4 className="text-2xl font-bold capitalize tracking-tight">
                  {repo.name.replace(
                    /-/g,
                    " "
                  )}
                </h4>

                <p className="mt-3 max-w-2xl text-zinc-400 leading-relaxed">
                  {repo.description ||
                    "Projeto em desenvolvimento."}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-6 lg:mt-0">
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  {repo.primaryLanguage
                    ?.name || "Code"}
                </span>

                <span className="text-sm text-zinc-500">
                  {new Date(
                    repo.updatedAt
                  ).toLocaleDateString(
                    "pt-BR"
                  )}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}