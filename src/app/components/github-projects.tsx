import { GithubResponse } from "../api/github/github";

type Props = {
  repos: GithubResponse;
};

export default function GithubProjects({
  repos,
}: Props) {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <h2 className="text-5xl font-black mb-16">
        Featured Projects
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 mb-24">
        {repos.featured.map((repo) => (
          <a
            key={repo.id}
            href={repo.url}
            target="_blank"
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-cyan-500 transition"
          >
            <h3 className="text-3xl font-bold">
              {repo.name}
            </h3>

            <p className="mt-4 text-zinc-400">
              {repo.description ??
                "Modern software project focused on performance, scalability and user experience."}
            </p>

            <div className="mt-6">
              <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">
                {repo.primaryLanguage?.name ??
                  "Code"}
              </span>
            </div>
          </a>
        ))}
      </div>

      <h2 className="text-4xl font-black mb-10">
        Latest Projects
      </h2>

      <div className="space-y-4">
        {repos.others.map((repo) => (
          <a
            key={repo.id}
            href={repo.url}
            target="_blank"
            className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-cyan-500 transition"
          >
            <h3 className="text-xl font-bold">
              {repo.name}
            </h3>

            <p className="mt-2 text-zinc-400">
              {repo.description ??
                "Modern software project focused on performance and maintainability."}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}