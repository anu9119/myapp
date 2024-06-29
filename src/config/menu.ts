import { MainNavItem } from "@/types/nav"

interface MenuConfig {
  mainNav: MainNavItem[]
}

export const menuConfig: MenuConfig = {
    mainNav: [
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Projects",
            href: "/projects",
        },
        {
            title: "Contact me",
            href: "/contact",
        }
    ],
}