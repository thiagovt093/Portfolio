import Link from "next/link";

interface FooterTranslations {
  builtWith: string;
}

interface FooterProps {
  t: FooterTranslations;
}

export function Footer({ t }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-white/10 py-12 mt-12 fade-up delay-1100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-lg bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Thiago Vitor
            </h3>
            <p className="text-zinc-500 text-sm">Fullstack & Mobile Developer</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link
              href="https://github.com/thiagovt093"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              GitHub
            </Link>
            <Link
              href="https://wa.me/5577988217247"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              WhatsApp
            </Link>
            <Link
              href="mailto:thiagovt093@gmail.com"
              className="text-zinc-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
            >
              Email
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-zinc-600">
            © {currentYear} {t.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}