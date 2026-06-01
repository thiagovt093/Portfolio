interface CurrentFocusTranslations {
  label: string;
  title: string;
  projectTitle: string;
  projectDescription: string;
  learningTitle: string;
  learningItems: string[];
}

interface CurrentFocusSectionProps {
  t: CurrentFocusTranslations;
}

export function CurrentFocusSection({ t }: CurrentFocusSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 fade-up delay-1000">
      <div className="mb-16 text-center md:text-left">
        <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-medium">
          {t.label}
        </span>
        <h2 className="mt-6 text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          {t.title}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Projeto em Destaque */}
        <div className="group rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-transparent p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.35)] hover:border-cyan-500/40">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-400 text-sm uppercase tracking-wide">
              Destaque
            </span>
          </div>
          <h3 className="text-3xl font-black group-hover:text-cyan-400 transition-colors">
            {t.projectTitle}
          </h3>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            {t.projectDescription}
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <span className="rounded-full bg-black/40 backdrop-blur-sm px-4 py-2 text-sm border border-white/10">
              Java
            </span>
            <span className="rounded-full bg-black/40 backdrop-blur-sm px-4 py-2 text-sm border border-white/10">
              Spring Boot
            </span>
            <span className="rounded-full bg-black/40 backdrop-blur-sm px-4 py-2 text-sm border border-white/10">
              PostgreSQL
            </span>
          </div>
        </div>

        {/* Aprendizado Atual */}
        <div className="group rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.25)] hover:border-cyan-500/30">
          <h3 className="text-3xl font-black group-hover:text-cyan-400 transition-colors">
            {t.learningTitle}
          </h3>
          <ul className="mt-6 space-y-3">
            {t.learningItems.map((item: string, index: number) => (
              <li 
                key={item} 
                className="text-zinc-400 flex items-center gap-3 group/item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover/item:scale-150 transition-transform" />
                <span className="group-hover/item:text-cyan-400 transition-colors">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}