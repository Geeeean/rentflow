import type { Metadata } from "next";
import { Building2, HandCoins, Handshake, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { FeatureCard } from "@/components/feature_card";
import { StepCard } from "@/components/step_card";
import { CtaPill } from "@/components/cta_pill";
import { ClosingCta } from "@/components/closing_cta";

export const metadata: Metadata = {
    title: "Per agenzie",
    description: "Collabora con Rentflow: un servizio in più per i tuoi clienti e una provvigione in più per la tua agenzia.",
    alternates: { canonical: "/per-agenzie/" },
    openGraph: { title: "Per agenzie", description: "Collabora con Rentflow: un servizio in più per i tuoi clienti e una provvigione in più per la tua agenzia.", url: "/per-agenzie/" },
};

const BENEFITS = [
    {
        num: "01",
        title: "Un servizio in più per i tuoi clienti",
        text: "Trovare soluzioni per gli appartamenti sfitti o per i proprietari indecisi sul tradizionale affitto a lungo termine è una sfida. Noi gestiamo o affittiamo questi immobili, risolvendo il problema della vacanza prolungata dell'unità e il rischio di inquilini inaffidabili e morosi. È un'alternativa concreta da mettere sul tavolo, che dà ai tuoi clienti tranquillità e convenienza.",
    },
    {
        num: "02",
        title: "Un'opportunità di guadagno in più",
        text: "Ogni volta che prendiamo in affitto un immobile, tu come intermediario ricevi la tua provvigione. Hai subito a disposizione un contatto affidabile e interessato per ogni appartamento che proponi, con la possibilità di aprirsi a ulteriori opportunità in futuro: acquisiamo più immobili e in tempi più rapidi di un affittuario normale.",
    },
];

const STRENGTHS = [
    {
        icon: <ShieldCheck className="size-7 text-emerald-600" />, colorClass: "bg-emerald-50",
        title: "Contraente affidabile",
        text: "Firmiamo noi il contratto e paghiamo noi il canone. Nessuna morosità da gestire e nessun contenzioso da seguire per il tuo cliente.",
    },
    {
        icon: <HandCoins className="size-7 text-blue-600" />, colorClass: "bg-blue-50",
        title: "Provvigione riconosciuta",
        text: "La tua provvigione è riconosciuta su ogni immobile che ci porti, alle condizioni di mercato che pratichi normalmente.",
    },
    {
        icon: <Building2 className="size-7 text-purple-600" />, colorClass: "bg-purple-50",
        title: "Volumi, non singoli casi",
        text: "Non cerchiamo la casa per le vacanze. Acquisiamo con continuità, quindi il rapporto vale ben oltre la prima operazione.",
    },
    {
        icon: <Handshake className="size-7 text-orange-600" />, colorClass: "bg-orange-50",
        title: "Nessuna sovrapposizione",
        text: "Non facciamo intermediazione in concorrenza con te sui tuoi clienti. Ci occupiamo della gestione, tu resti il riferimento commerciale.",
    },
];

const PROCESS = [
    { num: "01", title: "Ci presenti l'immobile", text: "Ci mandi le informazioni di base di un'unità sfitta o di un proprietario indeciso sul lungo termine." },
    { num: "02", title: "Valutiamo in 48 ore", text: "Analizziamo la zona e il potenziale di rendita e ti diciamo subito se siamo interessati, senza farti attendere." },
    { num: "03", title: "Firmiamo e ti liquidiamo", text: "Se procediamo, firmiamo il contratto come conduttori e la tua provvigione viene riconosciuta all'atto." },
];

export default function PerAgenzie() {
    return (
        <>
            <Section white>
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    <div className="lg:w-1/2">
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 block">Alle agenzie</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 mb-6">
                            Se sei un&apos;agenzia immobiliare, <span className="italic text-blue-950">sei nel posto giusto.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-8">
                            Siamo lieti di introdurti al nostro servizio e di illustrarti i due principali benefici che
                            puoi ottenere dalla nostra collaborazione.
                        </p>
                        <CtaPill label="Collaboriamo" href="/contatti" />
                    </div>

                    <div className="lg:w-1/2 w-full h-64 sm:h-80 lg:h-[420px] bg-[url('/perugia.webp')] bg-center bg-cover rounded-2xl shadow-lg" />
                </div>
            </Section>

            <Section>
                <SectionHeading
                    className="mb-16"
                    eyebrow="Vantaggi"
                    accent="emerald"
                    title="Due motivi per lavorare insieme"
                    text="Non ti chiediamo di cambiare come lavori. Ti diamo una risposta in più da dare quando l'affitto tradizionale non funziona."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {BENEFITS.map(benefit => (
                        <div key={benefit.num} className="bg-slate-900 rounded-2xl p-8 sm:p-10 lg:p-12 text-white relative overflow-hidden flex flex-col gap-4">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                            <span className="relative z-10 text-5xl font-serif text-white/30 font-bold">{benefit.num}</span>
                            <div className="relative z-10">
                                <h3 className="font-serif text-2xl sm:text-3xl font-medium mb-4">{benefit.title}</h3>
                                <p className="text-slate-300 text-lg leading-relaxed">{benefit.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section white>
                <SectionHeading
                    center
                    className="mb-16"
                    eyebrow="Perché noi"
                    accent="purple"
                    title="Cosa cambia per la tua agenzia"
                    text="Un partner di gestione, non un concorrente sul tuo stesso mercato."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {STRENGTHS.map(s => <FeatureCard key={s.title} {...s} />)}
                </div>
            </Section>

            <Section>
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <SectionHeading
                            eyebrow="Come si parte"
                            accent="orange"
                            title={<>Tre passaggi <br /> <span className="italic font-light text-slate-600">e nessuna burocrazia.</span></>}
                            text="Non serve un accordo quadro per iniziare. Si parte da un immobile e si vede come va."
                        />
                        <div className="flex flex-col gap-4 mt-8">
                            {["Nessuna esclusiva richiesta", "Nessun costo di attivazione", "Valutazione entro 48 ore"].map(point => (
                                <div key={point} className="flex gap-3 items-center">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                                    <span className="text-slate-600">{point}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        {PROCESS.map(step => <StepCard key={step.num} {...step} />)}
                    </div>
                </div>
            </Section>

            <ClosingCta
                eyebrow="Collaborazione"
                title="Hai un immobile difficile da piazzare?"
                text="Mandacelo. Ti diciamo entro 48 ore se possiamo prenderlo in gestione, e a quali condizioni."
                cta="Scrivici"
                href="/contatti"
            />
        </>
    );
}
