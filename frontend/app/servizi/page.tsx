import type { Metadata } from "next";
import { Atom, Brain, Handshake, Key, TrendingUp } from "lucide-react";
import { Section, SectionHeading, type Accent } from "@/components/section";
import { CheckPoint } from "@/components/check_point";
import { ProcessSection } from "@/components/process_section";
import { CtaCard } from "@/components/cta_card";
import { CtaPill } from "@/components/cta_pill";
import { BreadcrumbSchema, ServicesSchema } from "@/components/structured_data";
import Link from "next/link";
import { ReactNode } from "react";

const TITLE = "Servizi di gestione immobiliare a Perugia";
const DESCRIPTION = "Gestione affitti brevi e medio termine a Perugia e in Umbria, più intermediazione, analisi investimenti e consulenza fiscale. Servizi modulari e combinabili.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/servizi/" },
    openGraph: { title: TITLE, description: DESCRIPTION, url: "/servizi/" },
};

type Service = {
    id: string,
    icon: ReactNode,
    accent: Accent,
    eyebrow: string,
    title: string,
    text: string,
    points: string[],
}

const SERVICES: Service[] = [
    {
        id: "gestioni-brevi",
        icon: <Key className="size-7 text-emerald-600" />,
        accent: "emerald",
        eyebrow: "Servizio 01",
        title: "Gestioni Brevi",
        text: "Il pacchetto completo per chi vuole il rendimento degli affitti brevi senza il lavoro che comportano. Ci occupiamo di tutto, dalla pubblicazione dell'annuncio alla riconsegna delle chiavi.",
        points: [
            "Listing ottimizzati su Airbnb, Booking.com e OTA strategiche, con calendari sincronizzati.",
            "Revenue management con pricing dinamico rivisto ogni notte su domanda, eventi e competitor.",
            "Check-in e check-out gestiti da noi, con comunicazione ospiti 24/7.",
            "Pulizie professionali e cambio biancheria certificati ad ogni checkout.",
        ],
    },
    {
        id: "medio-termine",
        icon: <Atom className="size-7 text-blue-600" />,
        accent: "blue",
        eyebrow: "Servizio 02",
        title: "Medio Termine",
        text: "Per chi preferisce una rendita più stabile e meno turnover. Contratti transitori su misura per professionisti in trasferta, studenti fuori sede e nuclei in ricollocazione.",
        points: [
            "Selezione e screening degli inquilini business e studenti.",
            "Contratti transitori redatti con i nostri professionisti di riferimento.",
            "Rendita prevedibile su orizzonti da 1 a 18 mesi.",
            "Gestione operativa e manutenzione inclusa per tutta la durata.",
        ],
    },
    {
        id: "intermediazione",
        icon: <Brain className="size-7 text-purple-600" />,
        accent: "purple",
        eyebrow: "Servizio 03",
        title: "Intermediazione",
        text: "Quando la strategia migliore non è affittare ma comprare o vendere. Ti affianchiamo nella transazione con la nostra agenzia partner di fiducia.",
        points: [
            "Valutazione dell'immobile basata su dati di mercato reali, non su stime a occhio.",
            "Vendite e acquisizioni seguite end-to-end dalla nostra agenzia partner.",
            "Scouting di immobili con potenziale di rendita per chi vuole ampliare il portafoglio.",
            "Assistenza documentale e notarile fino al rogito.",
        ],
    },
    {
        id: "analisi-investimenti",
        icon: <TrendingUp className="size-7 text-orange-600" />,
        accent: "orange",
        eyebrow: "Servizio 04",
        title: "Analisi Investimenti",
        text: "Prima di investire, sapere. Costruiamo il business plan dell'immobile con scenari di rendimento realistici, così la decisione poggia su numeri e non su sensazioni.",
        points: [
            "Business plan con scenari conservativo, atteso e ottimistico.",
            "Stima di occupazione, ADR e RevPAR sulla base del mercato locale.",
            "Piano di valorizzazione: quali interventi ripagano davvero e in quanto tempo.",
            "Confronto diretto fra affitto breve, medio termine e vendita.",
        ],
    },
    {
        id: "consulenza-fiscale",
        icon: <Handshake className="size-7 text-emerald-600" />,
        accent: "emerald",
        eyebrow: "Servizio 05",
        title: "Consulenza Fiscale",
        text: "La parte che nessuno vuole gestire, gestita. Ti mettiamo in contatto con la nostra rete di commercialisti specializzati in locazione immobiliare.",
        points: [
            "Adempimenti, comunicazioni e codici identificativi in regola.",
            "Valutazione fra cedolare secca e regime ordinario sul tuo caso specifico.",
            "Ottimizzazione del carico fiscale entro i margini di legge.",
            "Supporto continuativo, non solo a ridosso della dichiarazione.",
        ],
    },
];

export default function Servizi() {
    return (
        <>
            <Section>
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                    <div className="lg:w-1/2">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-slate-900 mb-6">
                            <span className="text-sm font-sans font-bold uppercase tracking-widest text-blue-600 mb-3 block">Gestione immobiliare a Perugia e in Umbria</span>
                            Cinque servizi, <br />
                            <span className="italic text-blue-950">infinite combinazioni.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8">
                            Non vendiamo un pacchetto unico. Prendi il full-service o solo il pezzo che ti serve:
                            paghi quello che usi, e puoi cambiare configurazione quando cambiano le tue esigenze.
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            Operiamo da Perugia in tutta l&apos;Umbria, per proprietari privati, investitori e{" "}
                            <Link href="/per-agenzie" className="font-semibold text-slate-900 underline underline-offset-4">agenzie immobiliari</Link>.
                            Gli immobili che gestiamo oggi, con le recensioni dei loro ospiti, sono nella pagina{" "}
                            <Link href="/alloggi" className="font-semibold text-slate-900 underline underline-offset-4">alloggi</Link>.
                        </p>
                        <CtaPill label="Parliamone" href="/contatti" />
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        {SERVICES.map(service => (
                            <a
                                key={service.id}
                                href={`#${service.id}`}
                                className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-3"
                            >
                                <div className="size-12 rounded-xl bg-stone-50 flex items-center justify-center shadow-sm">
                                    {service.icon}
                                </div>
                                <span className="font-serif text-xl text-slate-900">{service.title}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </Section>

            {SERVICES.map((service, index) => (
                <Section key={service.id} white={index % 2 === 0} id={service.id}>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                        <div className={`lg:w-1/2 ${index % 2 === 0 ? "" : "lg:order-2"}`}>
                            <SectionHeading
                                eyebrow={service.eyebrow}
                                accent={service.accent}
                                title={service.title}
                                text={service.text}
                            />
                        </div>

                        <div className={`lg:w-1/2 w-full flex flex-col gap-5 ${index % 2 === 0 ? "" : "lg:order-1"}`}>
                            {service.points.map(point => <CheckPoint key={point} text={point} />)}
                        </div>
                    </div>
                </Section>
            ))}

            <ProcessSection ctaLabel="Guarda i risultati" ctaHref="/alloggi" />

            <Section white full={false}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                    <div className="lg:col-span-2">
                        <SectionHeading
                            eyebrow="Su misura per te"
                            accent="emerald"
                            title="Non tutti gli immobili vogliono lo stesso servizio."
                            text="Un bilocale in centro storico e una villa fuori città non si gestiscono allo stesso modo. Raccontaci il tuo caso e ti diciamo quale combinazione ha senso — anche se la risposta è che non ne hai bisogno."
                        />
                    </div>
                    <CtaCard
                        title="Non sai cosa scegliere?"
                        text="Parla con un nostro consulente per analizzare il tuo caso specifico."
                        cta="Contattaci"
                        href="/contatti"
                    />
                </div>
            </Section>

            <ServicesSchema services={SERVICES} />
            <BreadcrumbSchema name="Servizi" path="/servizi/" />
        </>
    );
}
