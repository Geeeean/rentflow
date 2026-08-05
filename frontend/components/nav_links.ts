import { Building2, House, Layers, UsersRound, type LucideIcon } from "lucide-react";

type NavLink = {
    label: string,
    href: string,
    icon: LucideIcon,
}

const NAV_LINKS: NavLink[] = [
    { label: "Servizi", href: "/servizi", icon: Layers },
    { label: "Alloggi", href: "/alloggi", icon: House },
    { label: "Chi siamo", href: "/about-us", icon: UsersRound },
    { label: "Per agenzie", href: "/per-agenzie", icon: Building2 },
];

export { NAV_LINKS }
