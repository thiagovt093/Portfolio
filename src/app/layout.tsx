import type { Metadata } from "next";

import "./globals.css";

import { Space_Grotesk } from "next/font/google";

import openGraphImage from "../../public/icon.png";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
 metadataBase: new URL(
  process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000"
),

  title: {
    default: "Thiago Vitor",
    template: "%s | Thiago Vitor",
  },

  description:
    "Fullstack & Mobile Developer especializado em Next.js, Flutter, Java e Spring Boot.",

  openGraph: {
    title: "Thiago Vitor",

    description:
      "Desenvolvedor Fullstack & Mobile criando aplicações modernas.",

    images: [
      {
        url: openGraphImage.src,
        width: 1200,
        height: 630,
        alt: "Thiago Vitor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Thiago Vitor",

    description:
      "Fullstack & Mobile Developer",

    images: [openGraphImage.src],
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="dark scroll-smooth"
    >
      <body
        className={`${space.className} bg-black text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}