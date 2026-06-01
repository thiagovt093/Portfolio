"use client";

import Image from "next/image";
import Link from "next/link";
import { GithubLogoIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Terminal } from "./terminal";

type HeroTranslations = {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  github: string;
  contact: string;
};

type TerminalTranslations = {
  whoami: string;
  current_focus: string;
  project: string;
};

interface HeroSectionProps {
  t: HeroTranslations;
  terminal: TerminalTranslations;
  // locale removido pois não está sendo usado
}

export function HeroSection({ t, terminal }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 fade-up delay-200">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="inline-flex items-center gap-3 mb-8 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm text-zinc-300 animate-slide-in-left delay-200">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
          <span>{t.badge}</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none fade-up delay-300">
              {t.title}
              <span className="block text-cyan-400">{t.subtitle}</span>
            </h1>

            <p className="mt-10 max-w-3xl text-xl md:text-2xl text-zinc-400 leading-relaxed fade-up delay-400">
              {t.description}
            </p>

            <div className="mt-12 flex flex-wrap gap-4 fade-up delay-500">
              <Link
                href="https://github.com/thiagovt093"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="GitHub Profile"
              >
                <GithubLogoIcon size={20} aria-hidden="true" />
                {t.github}
              </Link>

              <Link
                href="https://wa.me/5577988217247"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="WhatsApp Contact"
              >
                <WhatsappLogoIcon size={20} aria-hidden="true" />
                {t.contact}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-1 shadow-2xl shadow-cyan-500/10 fade-up delay-400 w-full max-w-xs">
            <Image
              src="/myself.jpeg"
              alt="Thiago Vitor - Fullstack Developer"
              width={320}
              height={420}
              className="h-auto w-full rounded-[1.75rem] object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 320px"
            />
          </div>
        </div>

        <Terminal terminal={terminal} />
      </div>
    </section>
  );
}