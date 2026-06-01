interface AboutTranslations {
  label: string;
  title: string;
  description: string;
}

interface AboutSectionProps {
  t: AboutTranslations;
}

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 fade-up delay-900">
      <div className="max-w-4xl">
        <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-medium">
          {t.label}
        </span>
        <h2 className="mt-6 text-5xl md:text-6xl font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
          {t.title}
        </h2>
        <div className="mt-8 relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent rounded-full" />
          <p className="pl-6 text-xl text-zinc-400 leading-relaxed">
            {t.description}
          </p>
        </div>
      </div>
    </section>
  );
}