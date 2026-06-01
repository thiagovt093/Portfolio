"use client";

import { useEffect, useState } from "react";

export function BackgroundGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Glow fixo central */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-cyan-500/10 blur-[140px] float pointer-events-none"
        aria-hidden="true"
      />
      
      {/* Glow que segue o mouse */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-0 md:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.08), transparent 80%)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}