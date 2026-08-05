import Link from "next/link";
import { NAV_LINKS } from "./nav_links";
import { CtaPill } from "./cta_pill";
import { MobileMenu } from "./mobile_menu";

const Nav = () => {
    return (
        // The blur lives on the layer below, NOT on this element: a backdrop-filter here
        // would make this header the containing block for the mobile menu's fixed panel,
        // trapping the panel inside the 80px bar.
        <header className="sticky top-0 left-0 z-50 snap-none h-nav shrink-0 flex items-center px-6 lg:px-10">
            <div className="absolute inset-0 -z-10 bg-stone-50/70 backdrop-blur-2xl border-b border-stone-200/60" />

            <nav className="flex items-center justify-between w-full max-w-7xl mx-auto">
                <Link className="font-bold text-xl" href="/">rentflow</Link>

                <div className="hidden lg:flex gap-10 xl:gap-12 items-center">
                    {NAV_LINKS.map(({ label, href, icon: Icon }) => (
                        <Link key={href} href={href} className="flex items-center gap-2 hover:text-slate-500 transition-colors">
                            <span className="p-1.5 rounded-full bg-slate-100">
                                <Icon size={16} />
                            </span>
                            <span>{label}</span>
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:block">
                    <CtaPill label="Parliamone" href="/contatti" />
                </div>

                <MobileMenu />
            </nav>
        </header>
    )
}

export default Nav;
