import { Suspense } from "react";
import { headers } from "next/headers";
import { getGithubRepos } from "./api/github/github";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { CurrentFocusSection } from "./components/current-focus-section";
import { StatsSection } from "./components/stats-section";
import { TechStack } from "./components/tech-stack";
import GithubProjects from "./components/github-projects";
import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation";
import { translations, type Locale } from "./lib/translations";
import { BackgroundGlow } from "./components/background-glow";
import { StructuredData } from "./components/structured-data";

export const revalidate = 3600;
export const dynamic = "force-static";
export const preferredRegion = "auto";

export default async function Home() {
  const headersList = await headers();
  const localeHeader = headersList.get("x-nextjs-locale");
  const locale: Locale = localeHeader === "en" ? "en" : "pt-BR";
  
  const repos = await getGithubRepos();
  const t = translations[locale];

  return (
    <>
      <StructuredData />
      <main className="relative overflow-hidden">
        <BackgroundGlow />
        <Navigation t={t.nav} locale={locale} />
        
        <Suspense fallback={<div className="min-h-screen" />}>
          <HeroSection t={t.hero} terminal={t.terminal} />
        </Suspense>

        <StatsSection stats={t.stats} repos={repos} />
        <TechStack technologies={t.technologies} />
        <AboutSection t={t.about} />
        <CurrentFocusSection t={t.currentFocus} />
        
        <Suspense fallback={<div className="h-96" />}>
          <GithubProjects repos={repos} locale={locale} />
        </Suspense>
        
        <Footer t={t.footer} />
      </main>
    </>
  );
}