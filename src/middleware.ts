import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const response = NextResponse.next();

  // Troca de idioma via ?lang=en ou ?lang=pt-BR
  const langParam = searchParams.get("lang");
  if (langParam === "en" || langParam === "pt-BR") {
    response.cookies.set("locale", langParam, { path: "/" });
    response.headers.set("x-nextjs-locale", langParam);
    return response;
  }

  // Lê o cookie de idioma
  const localeCookie = request.cookies.get("locale")?.value;
  const locale = localeCookie === "en" ? "en" : "pt-BR";

  response.headers.set("x-nextjs-locale", locale);
  return response;
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};