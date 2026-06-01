"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type NavTranslations = {
  about: string;
  projects: string;
  contact: string;
  language: string;
  languageTitle: string;
};

interface NavigationProps {
  t: NavTranslations;
  locale: string;
}

export function Navigation({ t, locale }: NavigationProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageSwitch = () => {
    const newLocale = locale === "en" ? "pt-BR" : "en";
    const currentPath = pathname || "/";
    router.push(`/${currentPath}?lang=${newLocale}`);
  };

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl fade-up delay-100">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between gap-4 px-6">
        <Link 
          href="/" 
          className="font-semibold tracking-tight text-white hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg"
        >
          Thiago Vitor
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          <a 
            href="#about" 
            onClick={scrollToSection("about")}
            className="transition hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg px-2 py-1"
          >
            {t.about}
          </a>
          <a 
            href="#projects" 
            onClick={scrollToSection("projects")}
            className="transition hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg px-2 py-1"
          >
            {t.projects}
          </a>
          <a 
            href="#contact" 
            onClick={scrollToSection("contact")}
            className="transition hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg px-2 py-1"
          >
            {t.contact}
          </a>
        </nav>

        <button
          onClick={handleLanguageSwitch}
          title={t.languageTitle}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/30 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label={t.languageTitle}
        >
          {t.language}
        </button>
      </div>
    </header>
  );
}