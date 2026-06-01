"use client";

import { useEffect, useState } from "react";

interface TerminalProps {
  terminal: {
    whoami: string;
    current_focus: string;
    project: string;
  };
}

export function Terminal({ terminal }: TerminalProps) {
  const [mounted, setMounted] = useState(false);
  const [displayLines, setDisplayLines] = useState({
    whoami: "",
    current_focus: "",
    project: "",
  });

  useEffect(() => {
    setMounted(true);

    // Animação de digitação
    let timeout: NodeJS.Timeout;
    
    const typeText = (text: string, setter: (value: string) => void, index = 0) => {
      if (index <= text.length) {
        setter(text.slice(0, index));
        timeout = setTimeout(() => typeText(text, setter, index + 1), 30);
      }
    };

    typeText(terminal.whoami, (value) => 
      setDisplayLines(prev => ({ ...prev, whoami: value }))
    );

    setTimeout(() => {
      typeText(terminal.current_focus, (value) => 
        setDisplayLines(prev => ({ ...prev, current_focus: value }))
      );
    }, 500);

    setTimeout(() => {
      typeText(terminal.project, (value) => 
        setDisplayLines(prev => ({ ...prev, project: value }))
      );
    }, 1000);

    return () => clearTimeout(timeout);
  }, [terminal]);

  if (!mounted) {
    // Placeholder durante SSR
    return (
      <div className="mt-10 max-w-2xl rounded-3xl border border-white/10 bg-zinc-950/80 p-5 backdrop-blur-xl font-mono text-sm text-zinc-300">
        <div className="flex gap-2 mb-4">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="space-y-3">
          <div>
            <p className="text-cyan-400">$ whoami</p>
            <p className="animate-pulse">Carregando...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-2xl rounded-3xl border border-white/10 bg-zinc-950/80 p-5 backdrop-blur-xl font-mono text-sm text-zinc-300 fade-up delay-600">
      {/* Botões do terminal (simulando MacOS) */}
      <div className="flex gap-2 mb-4" aria-hidden="true">
        <div className="h-3 w-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
        <div className="h-3 w-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors" />
        <div className="h-3 w-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors" />
      </div>

      {/* Conteúdo do terminal */}
      <div className="space-y-3">
        {/* Linha 1 - whoami */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">$</span>
            <span className="text-green-400">whoami</span>
          </div>
          <p className="terminal-line mt-1 pl-4 border-l-2 border-cyan-500/30">
            {displayLines.whoami}
            {displayLines.whoami.length < terminal.whoami.length && (
              <span className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 animate-pulse" />
            )}
          </p>
        </div>

        {/* Linha 2 - current_focus */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">$</span>
            <span className="text-green-400">current_focus</span>
          </div>
          <p className="terminal-line mt-1 pl-4 border-l-2 border-cyan-500/30">
            {displayLines.current_focus}
            {displayLines.current_focus.length < terminal.current_focus.length && (
              <span className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 animate-pulse" />
            )}
          </p>
        </div>

        {/* Linha 3 - project */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400">$</span>
            <span className="text-green-400">project</span>
          </div>
          <p className="terminal-line mt-1 pl-4 border-l-2 border-cyan-500/30">
            {displayLines.project}
            {displayLines.project.length < terminal.project.length && (
              <span className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 animate-pulse" />
            )}
          </p>
        </div>
      </div>

      {/* Prompt final (opcional) */}
      <div className="mt-4 pt-3 border-t border-white/10">
        <div className="flex items-center gap-2 text-zinc-500">
          <span className="text-green-400">thiago@portfolio</span>
          <span>:</span>
          <span className="text-cyan-400">~</span>
          <span>$</span>
          <span className="w-2 h-4 bg-cyan-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}