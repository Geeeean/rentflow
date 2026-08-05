import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { CtaPill } from "@/components/cta_pill";
import { NAV_LINKS } from "@/components/nav_links";

export const metadata: Metadata = {
    title: "Pagina non trovata",
    // A 404 must never be indexed, whatever the site-wide default says.
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <Section>
            <div className="max-w-2xl mx-auto text-center">
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-3 block">Errore 404</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 mb-6">
                    Questa pagina <span className="italic text-blue-950">non esiste.</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8">
                    Il link potrebbe essere vecchio o contenere un errore di battitura.
                    Da qui puoi tornare alla home o andare direttamente a quello che cercavi.
                </p>

                <CtaPill label="Torna alla home" href="/" className="mx-auto" />

                <div className="mt-10 pt-8 border-t border-stone-200 flex flex-wrap justify-center gap-x-8 gap-y-3">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link key={href} href={href} className="text-slate-600 hover:text-slate-900 transition-colors">
                            {label}
                        </Link>
                    ))}
                    <Link href="/contatti" className="text-slate-600 hover:text-slate-900 transition-colors">
                        Contatti
                    </Link>
                </div>
            </div>
        </Section>
    );
}
