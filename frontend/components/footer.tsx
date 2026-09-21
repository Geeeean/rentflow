import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { NAV_LINKS } from "./nav_links"
import { CONTACT, CONTACT_HREF } from "@/lib/contact"

const SOCIALS = [
    { label: "Facebook", href: "https://facebook.com" },
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Whatsapp", href: CONTACT_HREF.whatsapp },
];

// Static export: this is the build year, which a routine redeploy keeps current.
const YEAR = new Date().getFullYear();

const Footer = () => {
    return (
        <div className="w-full flex justify-center bg-slate-950 snap-start">
            <div className="w-full px-6 py-12 lg:p-10 max-w-7xl flex flex-col lg:flex-row justify-between text-white gap-10">
                <div className="flex flex-col justify-between gap-8">
                    <div>
                        <div className="text-5xl sm:text-7xl lg:text-9xl font-bold">rentflow.</div>
                        <div className="font-medium flex flex-col lg:flex-row lg:gap-10 justify-between">
                            <a href={CONTACT_HREF.email} className="hover:text-stone-300 transition-colors">{CONTACT.email}</a>
                            <a href={CONTACT_HREF.phone} className="hover:text-stone-300 transition-colors">{CONTACT.phone}</a>
                            <p>{CONTACT.locality}</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-stone-300">
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link key={href} href={href} className="hover:text-white transition-colors">{label}</Link>
                        ))}
                        <Link href="/contatti" className="hover:text-white transition-colors">Contatti</Link>
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                    </div>

                    <p className="hidden lg:block text-stone-400">© {YEAR} Rentflow. Tutti i diritti riservati. · P.IVA {CONTACT.vat}</p>
                </div>

                <div className="lg:w-[35%]">
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl sm:text-3xl font-medium">Iscriviti alla nostra newsletter per gli ultimi aggiornamenti.</p>
                        <div className="flex w-full max-w-md items-center rounded-full bg-zinc-800/80 p-1 pl-5 pr-2 shadow-sm ring-offset-zinc-900 focus-within:ring-1 focus-within:ring-zinc-500">
                            <Input
                                type="email"
                                aria-label="Email per la newsletter"
                                placeholder="mario.rossi@gmail.com"
                                className="w-full border-none bg-transparent p-0 text-white placeholder:text-zinc-400 shadow-none focus-visible:ring-0"
                            />

                            <Button
                                type="submit"
                                size="sm"
                                className="ml-2 rounded-full bg-zinc-100 text-zinc-900 hover:bg-white px-6 flex items-center gap-2"
                            >
                                <span className="ml-1">Iscriviti</span>
                                <ArrowRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 grid-rows-2 mt-8 text-sm lg:flex gap-3">
                        {SOCIALS.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 py-1 border w-fit rounded-full hover:bg-white hover:text-slate-950 transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

                <p className="lg:hidden block text-stone-400">© {YEAR} Rentflow. Tutti i diritti riservati. · P.IVA {CONTACT.vat}</p>
            </div>
        </div>
    )
}

export { Footer }
