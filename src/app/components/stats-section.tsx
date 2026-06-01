import { FolderOpenIcon, RocketIcon, DatabaseIcon, LightningIcon } from "@phosphor-icons/react/dist/ssr";
import type { GithubResponse } from "../api/github/github";

type StatsTranslations = {
  repositories: string;
  learning: string;
  focus: string;
  developer: string;
};

interface StatsSectionProps {
  stats: StatsTranslations;
  repos: GithubResponse;
}

export function StatsSection({ stats, repos }: StatsSectionProps) {
  const statsData = [
    {
      icon: FolderOpenIcon,
      value: repos.totalCount.toString(),
      label: stats.repositories,
      color: "cyan",
    },
    {
      icon: RocketIcon,
      value: "4+",
      label: stats.learning,
      color: "purple",
    },
    {
      icon: DatabaseIcon,
      value: "Java",
      label: stats.focus,
      color: "orange",
    },
    {
      icon: LightningIcon,
      value: "Fullstack",
      label: stats.developer,
      color: "green",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 mt-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 fade-up delay-700">
        {statsData.map((stat, index) => (
          <div
            key={stat.label}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.45)]"
            style={{ animationDelay: `${index * 0.1 + 0.7}s` }}
          >
            <stat.icon size={28} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            <h3 className="text-4xl font-black mt-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {stat.value}
            </h3>
            <p className="text-zinc-500 mt-2 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}