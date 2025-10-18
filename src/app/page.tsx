"use client";

import NavBar from "./components/navbar";
import Image from "next/image";
import Program from "@/../public/programming.svg";
import { Button } from "@/components/ui/button";
import { WhatsappLogo } from "@phosphor-icons/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <header>
        <NavBar />
      </header>
      <div className="flex flex-col mt-10 px-6 sm:px-16 lg:px-36">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Coluna do texto */}
          <div className="flex-1 text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">Thiago Vitor</h1>
              <h2 className="text-3xl sm:text-4xl font-bold -mt-3 mb-4">
                seu guia para o próximo nível
              </h2>
              <p className="text-lg sm:text-2xl leading-relaxed text-gray-400 font-semibold">
                Estamos aqui para ajudar você a transformar suas ideias em realidade e levar seus projetos ao próximo nível.
              </p>
              <div className="mt-6 flex justify-center lg:justify-start">
                {/* Apenas o Link envolve o Button */}
                <Button className="bg-azure-800 text-white flex items-center space-x-2" asChild>
                  <Link href="https://api.whatsapp.com/send?phone=5577988217247" target="_blank" rel="noopener noreferrer">
                    <WhatsappLogo size={32} weight="bold" />
                    <span>Vamos Conversar?</span>
                  </Link>
                </Button>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold mt-16 sm:mt-32 mb-4 text-gray-400">
                  Linguagens e Tecnologias Utilizadas
                </h1>
                <div className="flex flex-wrap justify-center lg:justify-start space-x-6 sm:space-x-8">
                  <div className="text-center">
                    <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                      <Image src="/js.png" width={52} height={50} alt="JS picture" />
                      <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-2">JavaScript</p>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                      <Image src="/ts.png" width={52} height={50} alt="TS picture" />
                      <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-2">TypeScript</p>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                      <Image src="/react.png" width={52} height={50} alt="React picture" />
                      <p className="text-xs sm:text-sm text-gray-400 font-semibold mt-2">React JS</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Imagem à direita */}
          <div className="flex-shrink-0 w-full max-w-xs lg:max-w-none lg:w-[500px]">
            <Program className="mx-auto lg:mx-0" width={400} height={400} />
          </div>
        </div>
      </div>
    </main>
  );
}
