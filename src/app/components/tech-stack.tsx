"use client";

interface TechStackProps {
  technologies: string[];
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 mt-16">
      <div className="flex flex-wrap gap-4 fade-up delay-800 justify-center">
        {technologies.map((tech, index) => (
          <span
            key={tech}
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:scale-105 cursor-default"
            style={{ animationDelay: `${index * 0.05 + 0.8}s` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}