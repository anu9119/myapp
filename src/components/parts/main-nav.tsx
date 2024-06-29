"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/parts/icons"
import Link from "next/link"
import { menuConfig } from "@/config/menu"

export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <Icons.logo />
            </Link>
            <nav className="flex items-center gap-4 text-md lg:gap-6">
                {menuConfig.mainNav.map((item) => (
                    <Link
                        href={item.href as string}
                        className={cn(
                            "transition-colors hover:text-foreground/80",
                            pathname === item.href ? "text-foreground" : "text-foreground/60"
                        )}
                        >
                        {item.title}
                    </Link>
                ))}
            </nav>
        </div>
    )

}