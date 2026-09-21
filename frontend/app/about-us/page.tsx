import type { Metadata } from "next";
import { Award, BarChart3, Building2, Shield, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { FeatureCard } from "@/components/feature_card";
import { CheckPoint } from "@/components/check_point";
import { CtaCard } from "@/components/cta_card";
import { BreadcrumbSchema } from "@/components/structured_data";
import Link from "next/link";

const TITLE = "Chi siamo: gestione immobiliare a Perugia";
const DESCRIPTION = "Chi è Rentflow: un team di gestione immobiliare con sede a Perugia che trasforma immobili in reddito in tutta l'Umbria, con dati, processi e trasparenza.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/about-us/" },
    openGraph: { title: TITLE, description: DESCRIPTION, url: "/about-us/" },
};

const MISSION_POINTS = [
    { title: "Al fianco del cliente", text: "Consulenti indipendenti per soluzioni short, medium o vendita." },
    { title: "Crescita e risultati", text: "Tecnologia e ospitalità per massimizzare l'occupazione." },
    { title: "Fiducia e Trasparenza", text: "Report accessibili e tracciabilità totale." },
    { title: "Standard elevati", text: "Servizi legali, fiscali e di valorizzazione integrati." },
];

const STRENGTHS = [
    {
        icon: <Award className="size-7 text-blue-600" />, colorClass: "bg-blue-50",
        title: "Esperienza pratica",
        text: "Gestiamo annunci, flussi di ospitalità, manutenzione e comunicazione con gli ospiti con cura “sul campo”.",
    },
    {
        icon: <BarChart3 className="size-7 text-emerald-600" />, colorClass: "bg-emerald-50",
        title: "Tecnologia avanzata",
        text: "Strumenti moderni per pricing dinamico, channel-management e automazione per massimizzare le prenotazioni.",
    },
    {
        icon: <Building2 className="size-7 text-purple-600" />, colorClass: "bg-purple-50",
        title: "Radicati in Umbria",
        text: "Sede a Perugia e gestione in tutta l'Umbria, con una rete di agenzie immobiliari partner per l'intermediazione.",
    },
    {
        icon: <TrendingUp className="size-7 text-orange-600" />, colorClass: "bg-orange-50",
        title: "Crescita costante",
        text: "Ampliamento continuo del portafoglio e miglioramento dei KPI grazie a processi consolidati e gestione attenta.",
    },
    {
        icon: <Shield className="size-7 text-blue-600" />, colorClass: "bg-blue-50",
        title: "Trasparenza totale",
        text: "Contratti chiari, report periodici, controllo dei flussi finanziari e compliance fiscale con professionisti del settore.",
    },
];

export default function AboutUs() {
    return (
        <>
            <Section white>
                <div className="flex flex-col gap-8 lg:gap-12 lg:flex-row justify-center lg:justify-between w-full items-start">
                    <div className="flex flex-col gap-4 lg:w-[45%]">
                        <h1 className="text-4xl sm:text-5xl font-medium lg:font-normal font-serif text-slate-900">Chi siamo</h1>
                        <p className="text-2xl sm:text-3xl font-light text-slate-800">Siamo Rentflow, una realtà di gestione immobiliare con sede a Perugia che trasforma immobili in reddito senza stress per i proprietari.</p>
                    </div>

                    <div className="lg:w-[50%] text-lg text-slate-600 leading-relaxed">
                        Gestiamo affitti brevi e medio termine a Perugia e in Umbria, e da subito abbiamo scelto un approccio professionale, semplice e trasparente. Lavoriamo al fianco di proprietari, investitori e{" "}
                        <Link href="/per-agenzie" className="font-semibold text-slate-900 underline underline-offset-4">agenzie partner</Link>{" "}
                        per massimizzare il rendimento degli immobili e togliere ai proprietari i problemi pratici di ogni giorno. Trovi l&apos;elenco completo nei nostri{" "}
                        <Link href="/servizi" className="font-semibold text-slate-900 underline underline-offset-4">servizi</Link>.
                    </div>
                </div>
                {/* Viewport-relative so the text + image composition always fits one screen —
                    a fixed height overflowed on laptops, which is what stopped it centering. */}
                <div className="w-full h-[26vh] min-h-44 sm:h-[30vh] lg:h-[36vh] bg-[url('/interior2-800.webp')] lg:bg-[url('/interior2.webp')] bg-center bg-cover rounded-2xl shadow-lg mt-8 lg:mt-10" />
            </Section>

            <Section>
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    <div className="w-full lg:w-1/2 h-72 sm:h-96 lg:h-[500px] bg-[url('/interior3-800.webp')] lg:bg-[url('/interior3.webp')] bg-center bg-cover rounded-2xl shadow-lg overflow-hidden" />

                    <div className="flex flex-col gap-6 lg:w-1/2">
                        <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Vision</p>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-4">
                            Oltre l&apos;affitto: una piattaforma per il tuo patrimonio.
                        </h3>
                        <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
                            <p>
                                La nostra visione è ambiziosa: non ci limitiamo a gestire prenotazioni, ma vogliamo ridefinire il modo in cui i proprietari interagiscono con i loro immobili.
                            </p>
                            <p>
                                Immaginiamo un futuro dove possedere un immobile non significhi oneri e burocrazia, ma pura opportunità. Stiamo costruendo una piattaforma di servizi immobiliari integrati che spazia dalla gestione operativa all&apos;intermediazione, fino alla consulenza strategica.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section white>
                <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">
                    <div className="flex flex-col gap-8 lg:w-1/2">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-2">Mission</p>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 mb-6">
                                Valore reale, gestione trasparente.
                            </h3>
                            <p className="text-lg sm:text-xl text-slate-600 font-light">
                                Aiutiamo chi possiede un immobile a trasformarlo in una rendita sicura, con soluzioni su misura e dati chiari.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {MISSION_POINTS.map(item => <CheckPoint key={item.title} {...item} />)}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 h-72 sm:h-96 lg:h-[600px] bg-[url('/flat-800.webp')] lg:bg-[url('/flat.webp')] bg-center bg-cover rounded-2xl shadow-lg overflow-hidden" />
                </div>
            </Section>

            <Section>
                <SectionHeading
                    center
                    className="mb-16"
                    eyebrow="I nostri punti di forza"
                    accent="orange"
                    title="Cosa ci rende diversi"
                    text="Non siamo solo gestori, siamo partner strategici per la crescita del tuo patrimonio immobiliare."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {STRENGTHS.map(s => <FeatureCard key={s.title} {...s} />)}
                    <CtaCard
                        title="Vuoi saperne di più?"
                        text="Parla con un nostro consulente per analizzare il tuo immobile."
                        cta="Contattaci ora"
                        href="/contatti"
                    />
                </div>
            </Section>

            <BreadcrumbSchema name="Chi siamo" path="/about-us/" />
        </>
    );
}
