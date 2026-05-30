import GithubProjects from "./components/github-projects";
import Image from "next/image";

import { getGithubRepos } from "./api/github/github";
import { GithubLogoIcon, WhatsappLogoIcon, RocketIcon, FolderOpenIcon, DatabaseIcon, LightningIcon } from "@phosphor-icons/react/dist/ssr";
export const revalidate = 3600;

type Locale = "en" | "pt-BR";

const translations = {
  "pt-BR": {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      language: "EN",
      languageTitle: "Mudar para inglês",
    },
    hero: {
      badge: "Atualmente construindo PulseWatch",
      title: "Thiago Vitor",
      subtitle: "Desenvolvedor Fullstack e Mobile",
      description:
        "Construindo backends escaláveis, aplicações web modernas e experiências mobile de alta performance com Java, Spring Boot, Next.js, Flutter e PostgreSQL.",
      github: "GitHub",
      contact: "Contato",
    },
    terminal: {
      whoami: "Thiago Vitor — Desenvolvedor Fullstack e Mobile",
      current_focus:
        "Java • Spring Boot • PostgreSQL • Next.js • Flutter",
      project: "PulseWatch — plataforma de produtividade e monitoramento em tempo real",
    },
    stats: {
      repositories: "Repositórios Públicos",
      learning: "Anos de Aprendizado",
      focus: "Foco Principal",
      developer: "Desenvolvedor",
    },
    about: {
      label: "Sobre Mim",
      title: "Minha Jornada",
      description:
        "Comecei a programar em 2021 criando soluções para comunidades online e servidores de jogos. Desde então tenho focado em engenharia de software, construindo aplicações web, mobile e back-end enquanto aprendo continuamente Java, Spring Boot, design de sistemas e práticas modernas de desenvolvimento.",
    },
    currentFocus: {
      label: "Foco Atual",
      title: "O que estou construindo",
      projectTitle: "PulseWatch",
      projectDescription:
        "Plataforma de produtividade e monitoramento em tempo real focada em performance, escalabilidade e experiência de usuário moderna.",
      learningTitle: "Aprendizado Atual",
      learningItems: [
        "Java & Spring Boot",
        "Design de Sistemas",
        "APIs REST",
        "PostgreSQL",
        "Arquitetura de Software",
      ],
    },
    footer: {
      builtWith: "Construído com Next.js, Tailwind CSS e implantado no Vercel.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      language: "PT-BR",
      languageTitle: "Switch to Portuguese",
    },
    hero: {
      badge: "Currently building PulseWatch",
      title: "Thiago Vitor",
      subtitle: "Fullstack & Mobile Developer",
      description:
        "Building scalable backends, modern web applications and high-performance mobile experiences with Java, Spring Boot, Next.js, Flutter and PostgreSQL.",
      github: "GitHub",
      contact: "Contact Me",
    },
    terminal: {
      whoami: "Thiago Vitor — Fullstack & Mobile Developer",
      current_focus:
        "Java • Spring Boot • PostgreSQL • Next.js • Flutter",
      project: "PulseWatch — real-time productivity and monitoring platform",
    },
    stats: {
      repositories: "Public Repositories",
      learning: "Years Learning",
      focus: "Main Focus",
      developer: "Developer",
    },
    about: {
      label: "About Me",
      title: "My Journey",
      description:
        "I started programming in 2021 creating solutions for online communities and game servers. Since then I have focused on software engineering, building web, mobile and backend applications while continuously learning Java, Spring Boot, system design and modern development practices.",
    },
    currentFocus: {
      label: "Current Focus",
      title: "What I'm Building",
      projectTitle: "PulseWatch",
      projectDescription:
        "Real-time productivity and monitoring platform focused on performance, scalability and modern user experience.",
      learningTitle: "Current Learning",
      learningItems: [
        "Java & Spring Boot",
        "System Design",
        "REST APIs",
        "PostgreSQL",
        "Software Architecture",
      ],
    },
    footer: {
      builtWith: "Built with Next.js, Tailwind CSS and deployed on Vercel.",
    },
  },
};

export default async function Home({
  searchParams,
}: {
  searchParams?: { lang?: string | string[] } | Promise<{ lang?: string | string[] }>;
}) {
  const repos = await getGithubRepos();
  const params = await searchParams;
  const lang = Array.isArray(params?.lang) ? params.lang[0] : params?.lang;
  const locale: Locale = lang === "en" ? "en" : "pt-BR";
  const t = translations[locale];

  return (
    <main className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[140px] float" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl fade-up delay-100">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between gap-4 px-6">
          <span className="font-semibold tracking-tight text-white">Thiago Vitor</span>

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#about" className="transition hover:text-cyan-400">
              {t.nav.about}
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              {t.nav.projects}
            </a>
            <a href="#contact" className="transition hover:text-cyan-400">
              {t.nav.contact}
            </a>
          </nav>

          <a
            href={`/?lang=${locale === "en" ? "pt-BR" : "en"}`}
            title={t.nav.languageTitle}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            {t.nav.language}
          </a>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center pt-24 fade-up delay-200">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="inline-flex items-center gap-3 mb-8 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-zinc-300 animate-slide-in-left delay-200">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            {t.hero.badge}
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none fade-up delay-300">
                {t.hero.title}
                <span className="block text-cyan-400">{t.hero.subtitle}</span>
              </h1>

              <p className="mt-10 max-w-3xl text-xl md:text-2xl text-zinc-400 leading-relaxed fade-up delay-400">
                {t.hero.description}
              </p>

              <div className="mt-12 flex flex-wrap gap-4 fade-up delay-500">
                <a
                  href="https://github.com/thiagovt093"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black transition duration-300 hover:-translate-y-1 hover:scale-[1.01]"
                >
                  <GithubLogoIcon size={20} />
                  {t.hero.github}
                </a>

                <a
                  href="https://wa.me/5577988217247"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                >
                  <WhatsappLogoIcon size={20} />
                  {t.hero.contact}
                </a>
              </div>
            </div>

            <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-1 shadow-2xl shadow-cyan-500/10 fade-up delay-400 w-full max-w-xs">
              <Image
                src="/myself.jpeg"
                alt="Foto de Thiago Vitor"
                width={320}
                height={420}
                className="h-auto w-full rounded-[1.75rem] object-cover"
                priority
              />
            </div>
          </div>

          <div className="mt-10 max-w-2xl rounded-3xl border border-white/10 bg-zinc-950/80 p-5 backdrop-blur-xl font-mono text-sm text-zinc-300 fade-up delay-600 terminal-card">
            <div className="flex gap-2 mb-4">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-cyan-400">$ whoami</p>
                <p className="terminal-line delay-100">{t.terminal.whoami}</p>
              </div>
              <div>
                <p className="text-cyan-400">$ current_focus</p>
                <p className="terminal-line delay-200">{t.terminal.current_focus}</p>
              </div>
              <div>
                <p className="text-cyan-400">$ project</p>
                <p className="terminal-line delay-300">{t.terminal.project}</p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 fade-up delay-700">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.45)]">
              <FolderOpenIcon size={28} className="text-cyan-400" />
              <h3 className="text-4xl font-black mt-4">{repos.featured.length + repos.others.length}</h3>
              <p className="text-zinc-500 mt-2">{t.stats.repositories}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.45)]">
              <RocketIcon size={28} className="text-cyan-400" />
              <h3 className="text-4xl font-black mt-4">4+</h3>
              <p className="text-zinc-500 mt-2">{t.stats.learning}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.45)]">
              <DatabaseIcon size={28} className="text-cyan-400" />
              <h3 className="text-4xl font-black mt-4">Java</h3>
              <p className="text-zinc-500 mt-2">{t.stats.focus}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.45)]">
              <LightningIcon size={28} className="text-cyan-400" />
              <h3 className="text-4xl font-black mt-4">Fullstack</h3>
              <p className="text-zinc-500 mt-2">{t.stats.developer}</p>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap gap-4 fade-up delay-800">
            {[
              "Java",
              "Spring Boot",
              "PostgreSQL",
              "Next.js",
              "Flutter",
              "TypeScript",
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

      <section id="about" className="max-w-7xl mx-auto px-6 py-24 fade-up delay-900">
        <div className="max-w-4xl">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            {t.about.label}
          </span>
          <h2 className="mt-6 text-5xl font-black">{t.about.title}</h2>
          <p className="mt-8 text-xl text-zinc-400 leading-relaxed">
            {t.about.description}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 fade-up delay-1000">
        <div className="mb-16">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
            {t.currentFocus.label}
          </span>
          <h2 className="mt-6 text-5xl font-black">{t.currentFocus.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-[32px] border border-cyan-500/20 bg-cyan-500/5 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.35)]">
            <h3 className="text-3xl font-black">{t.currentFocus.projectTitle}</h3>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              {t.currentFocus.projectDescription}
            </p>
            <div className="mt-6 flex gap-3 flex-wrap">
              <span className="rounded-full bg-black/30 px-4 py-2 text-sm">Java</span>
              <span className="rounded-full bg-black/30 px-4 py-2 text-sm">Spring Boot</span>
              <span className="rounded-full bg-black/30 px-4 py-2 text-sm">PostgreSQL</span>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_80px_-52px_rgba(34,211,238,0.25)]">
            <h3 className="text-3xl font-black">{t.currentFocus.learningTitle}</h3>
            <ul className="mt-6 space-y-4 text-zinc-400">
              {t.currentFocus.learningItems.map((item: string) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <GithubProjects repos={repos} locale={locale} />

      <footer id="contact" className="border-t border-white/10 py-12 mt-24 fade-up delay-1100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-lg">Thiago Vitor</h3>
            <p className="text-zinc-500">Fullstack & Mobile Developer</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-zinc-400">
            <a
              href="https://github.com/thiagovt093"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              GitHub
            </a>
            <a
              href="https://wa.me/5577988217247"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              WhatsApp
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-zinc-600">
          {t.footer.builtWith}
        </div>
      </footer>
    </main>
  );
}
