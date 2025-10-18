'use client';

import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const navLinkStyle = `${navigationMenuTriggerStyle()} group px-5 py-2 text-md font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent bg-background hover:bg-azure-800 hover:text-white focus:bg-azure/80`;

export default function NavBar() {
    const pathname = usePathname();

    const isHomeRoute = pathname === "/";

    return (
        <header>
            <div className="p-4 mt-5">
                <div className="flex -mt-7">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink
                                        className={`${navLinkStyle} ${isHomeRoute ? 'focus:ring-azure-500' : ''}`}
                                    >
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/sobre-mim" legacyBehavior passHref>
                                    <NavigationMenuLink className={navLinkStyle}>
                                        Sobre Mim
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/meus-projetos" legacyBehavior passHref>
                                    <NavigationMenuLink className={navLinkStyle}>
                                        Meus Projetos
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="https://api.whatsapp.com/send?phone=5577988217247" target="_blank" legacyBehavior passHref>
                                    <NavigationMenuLink className={navLinkStyle}>
                                        Contato
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
        </header>
    );
}
