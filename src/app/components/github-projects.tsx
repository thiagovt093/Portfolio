import { GithubResponse } from "../api/github/github";
import { Rocket, Code, Star } from "@phosphor-icons/react/dist/ssr";

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
    fallbackFeatured:
      "Projeto de software moderno focado em performance, escalabilidade e experiência do usuário.",
    fallbackOther:
      "Projeto de software moderno focado em performance e manutenibilidade.",
  },
  en: {
    sectionTitle: "Featured Projects",
    sectionSubtitle: "Projects",
    featuredLabel: "Featured Project",
    latestTitle: "Latest Projects",
    repository: "Repository",
    fallbackFeatured:
      "Modern software project focused on performance, scalability and user experience.",
    fallbackOther:
      "Modern software project focused on performance and maintainability.",
  },
};

export default function GithubProjects({ repos, locale }: Props) {
  const t = projectCopy[locale];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-32 fade-up delay-1200">
      <div className="flex flex-col gap-3 mb-10">
        <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          {t.sectionSubtitle}
        </span>
        <h2 className="text-5xl font-black">{t.sectionTitle}</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-24">
        {repos.featured.map((repo, index) => (
          <a
            key={repo.id}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.45)] fade-up"
            style={{ animationDelay: `${index * 0.08 + 0.15}s` }}
          >
            <div className="inline-flex items-center gap-2 mb-4 text-cyan-400 text-sm">
              <Rocket size={18} />
              {t.featuredLabel}
            </div>

            <h3 className="text-3xl font-bold">{repo.name}</h3>

            <p className="mt-4 text-zinc-400">
              {repo.description ?? t.fallbackFeatured}
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
                {repo.primaryLanguage?.name ?? "Code"}
              </span>
              <span className="rounded-full bg-white/5 px-4 py-2 text-zinc-300">
                <Star size={14} className="inline-block" /> {repo.stargazerCount}
              </span>
              <span className="rounded-full bg-white/5 px-4 py-2 text-zinc-300">
                <Code size={14} className="inline-block" /> {repo.forkCount}
              </span>
            </div>
          </a>
        ))}
      </div>

      <h2 className="text-4xl font-black mb-10">{t.latestTitle}</h2>

      <div className="space-y-4">
        {repos.others.map((repo, index) => (
          <a
            key={repo.id}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.35)] fade-up"
            style={{ animationDelay: `${index * 0.08 + 0.15}s` }}
          >
            <div className="flex items-center gap-2 text-zinc-500 text-sm mb-3">
              <Code size={16} />
              {t.repository}
            </div>

            <h3 className="text-xl font-bold">{repo.name}</h3>

            <p className="mt-2 text-zinc-400">
              {repo.description ?? t.fallbackOther}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
