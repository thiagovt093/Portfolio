import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import openGraphImage from "../../public/icon.png";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Thiago Vitor | Fullstack Developer",
    template: "%s | Thiago Vitor",
  },
  description:
    "Fullstack & Mobile Developer focused on Java, Spring Boot, Next.js, Flutter and PostgreSQL.",
  keywords: [
    "Fullstack Developer",
    "Mobile Developer",
    "Java",
    "Spring Boot",
    "Next.js",
    "Flutter",
    "PostgreSQL",
  ],
  authors: [{ name: "Thiago Vitor" }],
  creator: "Thiago Vitor",
  publisher: "Thiago Vitor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    title: "Thiago Vitor | Fullstack Developer",
    description:
      "Fullstack & Mobile Developer focused on scalable web, mobile and backend solutions.",
    images: [
      {
        url: openGraphImage.src,
        width: 1200,
        height: 630,
        alt: "Thiago Vitor - Fullstack Developer Portfolio",
      },
    ],
    siteName: "Thiago Vitor Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Vitor | Fullstack Developer",
    description:
      "Fullstack & Mobile Developer focused on scalable web, mobile and backend solutions.",
    images: [openGraphImage.src],
    creator: "@thiagovt093",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  // LINHA REMOVIDA: verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-nextjs-locale") ?? "pt-BR";

  return (
    <html lang={locale} className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${space.className} bg-black text-white antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}