"use client";

import Link from "next/link";
import { GithubResponse } from "../api/github/github";
import { RocketIcon, CodeIcon, StarIcon, GitForkIcon } from "@phosphor-icons/react/dist/ssr";

type Locale = "en" | "pt-BR";

type Props = {
  repos: GithubResponse;
  locale: Locale;
};

const projectCopy = {
  "pt-BR": {
    sectionTitle: "Projetos em Destaque",
    sectionSubtitle: "Projetos",
    featuredLabel: "Projeto em Destaque",
    latestTitle: "Últimos Projetos",
    repository: "Repositório",
    stars: "estrelas",
    forks: "forks",
    fallbackFeatured:
      "Projeto de software moderno focado em performance, escalabilidade e experiência do usuário.",
    fallbackOther:
      "Projeto de software moderno focado em performance e manutenibilidade.",
    noProjects: "Nenhum projeto encontrado",
  },
  en: {
    sectionTitle: "Featured Projects",
    sectionSubtitle: "Projects",
    featuredLabel: "Featured Project",
    latestTitle: "Latest Projects",
    repository: "Repository",
    stars: "stars",
    forks: "forks",
    fallbackFeatured:
      "Modern software project focused on performance, scalability and user experience.",
    fallbackOther:
      "Modern software project focused on performance and maintainability.",
    noProjects: "No projects found",
  },
};

export default function GithubProjects({ repos, locale }: Props) {
  const t = projectCopy[locale];

  if (repos.featured.length === 0 && repos.others.length === 0) {
    return (
      <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
        <div className="text-center">
          <p className="text-zinc-400">{t.noProjects}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-32 fade-up delay-1200">
      <div className="flex flex-col gap-3 mb-10">
        <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          {t.sectionSubtitle}
        </span>
        <h2 className="text-5xl font-black">{t.sectionTitle}</h2>
      </div>

      {repos.featured.length > 0 && (
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {repos.featured.map((repo, index) => (
            <Link
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.45)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
              style={{ animationDelay: `${index * 0.08 + 0.15}s` }}
            >
              <div className="inline-flex items-center gap-2 mb-4 text-cyan-400 text-sm">
                <RocketIcon size={18} aria-hidden="true" />
                <span>{t.featuredLabel}</span>
              </div>

              <h3 className="text-3xl font-bold group-hover:text-cyan-400 transition-colors">
                {repo.name}
              </h3>

              <p className="mt-4 text-zinc-400 line-clamp-3">
                {repo.description ?? t.fallbackFeatured}
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                {repo.primaryLanguage?.name && (
                  <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
                    {repo.primaryLanguage.name}
                  </span>
                )}
                <span className="rounded-full bg-white/5 px-4 py-2 text-zinc-300 inline-flex items-center gap-1">
                  <StarIcon size={14} aria-hidden="true" />
                  {repo.stargazerCount} {t.stars}
                </span>
                <span className="rounded-full bg-white/5 px-4 py-2 text-zinc-300 inline-flex items-center gap-1">
                  <GitForkIcon size={14} aria-hidden="true" />
                  {repo.forkCount} {t.forks}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {repos.others.length > 0 && (
        <>
          <h2 className="text-4xl font-black mb-10">{t.latestTitle}</h2>
          <div className="space-y-4">
            {repos.others.slice(0, 10).map((repo, index) => (
              <Link
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.35)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
                style={{ animationDelay: `${index * 0.08 + 0.15}s` }}
              >
                <div className="flex items-center gap-2 text-zinc-500 text-sm mb-3">
                  <CodeIcon size={16} aria-hidden="true" />
                  <span>{t.repository}</span>
                </div>

                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">
                  {repo.name}
                </h3>

                <p className="mt-2 text-zinc-400 line-clamp-2">
                  {repo.description ?? t.fallbackOther}
                </p>
              </Link>
            ))}
          </div>
        </>
      )}
    </section>
  );
}