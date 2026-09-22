import Link from "next/link";
import {
    ArrowRight,
    Sparkle,
    Shield,
    Brush,
    BarChart3,
    Key,
    Atom,
    Brain,
    TrendingUp,
    Handshake,
    Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/section";
import { FeatureCard } from "@/components/feature_card";
import { CheckPoint } from "@/components/check_point";
import { TestimonialCard } from "@/components/testimonial_card";
import { CtaCard } from "@/components/cta_card";
import { CtaPill } from "@/components/cta_pill";
import { ClosingCta } from "@/components/closing_cta";
import { StatsPanel } from "@/components/stats_panel";
import { ProcessSection } from "@/components/process_section";
import { LeadForm } from "@/components/lead_form";
import { FAQs } from "@/components/faqs";
import { FaqSchema } from "@/components/structured_data";

const HERO_POINTS = [
    { title: "Entrate certe", text: "Pagamenti anticipati OTA e depositi cauzionali." },
    { title: "Manutenzione continua", text: "Ispezioni e pulizie certificate." },
    { title: "Coperture doppie", text: "Assicurazioni OTA + polizza Rentflow." },
];

const STATS = [
    { val: "87%", lab: "Occupazione Media" },
    { val: "4.82/5", lab: "Valutazione Ospiti" },
    { val: "12+", lab: "Immobili Gestiti" },
    { val: "24/7", lab: "Supporto Attivo" },
];

const SERVICES = [
    { icon: <Key className="size-6 text-slate-700" />, title: "Gestioni Brevi", text: "Listing ottimizzati, revenue management, check-in/out e pulizie. Il pacchetto completo per l'host." },
    { icon: <Atom className="size-6 text-slate-700" />, title: "Medio Termine", text: "Selezione inquilini business/studenti e contratti transitori su misura per rendite stabili." },
    { icon: <Brain className="size-6 text-slate-700" />, title: "Intermediazione", text: "Vendite e acquisizioni strategiche supportate dalla nostra agenzia partner di fiducia." },
    { icon: <TrendingUp className="size-6 text-slate-700" />, title: "Analisi Investimenti", text: "Business plan, scenari di rendimento e strategie di valorizzazione per chi vuole investire." },
    { icon: <Handshake className="size-6 text-slate-700" />, title: "Consulenza Fiscale", text: "Rete di professionisti per adempimenti, cedolare secca e ottimizzazione del carico fiscale." },
];

const TESTIMONIALS = [
    { name: "Marco R.", role: "Investitore Immobiliare", text: "Avevo dubbi sulla sicurezza dei pagamenti. Con Rentflow ho scoperto che le coperture doppie mi fanno dormire sonni tranquilli." },
    { name: "Elena B.", role: "Proprietaria Seconda Casa", text: "Prima gestivo tutto da sola ed ero stressata. Ora guadagno il 20% in più e non devo rispondere al telefono la domenica." },
    { name: "Giovanni L.", role: "Costruttore", text: "La loro analisi di mercato è stata fondamentale per decidere come arredare gli appartamenti per massimizzare l'affitto." },
];

const RESULTS = [
    { val: "+32%", color: "text-emerald-600", lab: "ROI MEDIO ANNO 1", text: "Vs gestione autonoma precedente su proprietà comparabili" },
    { val: "-40%", color: "text-blue-600", lab: "COSTI MANUTENZIONE", text: "Grazie a interventi preventivi e controlli regolari" },
    { val: "98%", color: "text-purple-600", lab: "TASSO RISPOSTA", text: "Entro 1 ora, garantendo il posizionamento “Superhost”" },
];

export default function Home() {
    return (
        <>
            <Section className="items-start lg:items-center">
                {/* 12 columns rather than 5: the form needs 5/12 to fit its fields two-up,
                    which a 5-column grid can't express without starving the headline. */}
                <div className="w-full flex flex-col lg:grid grid-cols-12 grid-rows-5 gap-5">
                    <div className="col-span-7 row-span-4 lg:py-6">
                        {/* The eyebrow lives inside the h1 so the heading carries the service and
                            the city — the terms owners actually search for. */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif">
                            <span className="text-sm font-sans font-bold uppercase tracking-widest text-emerald-600 mb-8 block">Gestione affitti brevi a Perugia</span>
                            <span className="block">RENTFLOW</span>
                            <span className="block italic text-blue-950">il partner strategico</span>
                            <span className="block">per il tuo immobile.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-600 my-6">
                            Gestiamo affitti brevi e medio termine a Perugia e in tutta l&apos;Umbria:
                            massimizziamo il rendimento, proteggiamo il valore e riduciamo i rischi.
                            Soluzioni modulabili: full-service o supporto mirato.
                        </p>

                        {/* On mobile the form stacks below the fold; this gets the ask on screen. */}
                        <CtaPill label="Richiedi la valutazione gratuita" href="#valutazione" className="lg:hidden mb-8" />

                        <div className="flex flex-col gap-6">
                            {HERO_POINTS.map(item => <CheckPoint key={item.title} {...item} />)}
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-center gap-6 bg-slate-900 rounded-2xl shadow-lg relative row-span-1 col-span-7 row-start-5 px-10 text-white">
                        <p className="text-lg font-medium">Vuoi sapere quanto rende davvero il tuo immobile?</p>
                        <CtaPill label="Parliamone" href="/contatti" variant="light" />
                    </div>

                    {/* The form is in normal flow and the photos are the absolute layer, not
                        the other way round. Previously the form was `absolute inset-8`, which
                        pinned its height to the column and clipped the taller content. */}
                    <div id="valutazione" className="col-span-5 row-span-5 relative flex items-center">
                        <div className="hidden lg:grid absolute inset-0 grid-rows-5 gap-5 *:rounded-lg *:shadow">
                            <div className="relative shadow-lg row-span-3 bg-[url('/interior1-800.webp')] bg-center bg-cover overflow-hidden">
                                <div className="absolute inset-0 backdrop-blur-xs"></div>
                            </div>
                            <div className="relative row-span-2 shadow-lg bg-[url('/interior4-800.webp')] bg-center bg-cover overflow-hidden">
                                <div className="absolute inset-0 backdrop-blur-xs"></div>
                            </div>
                        </div>

                        <LeadForm className="relative z-10 w-full lg:mx-4" />
                    </div>
                </div>
            </Section>

            <StatsPanel
                eyebrow={
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-sm font-medium mb-6 border border-white/20">
                        <Sparkle size={16} />
                        <span>Approccio Data-Driven</span>
                    </div>
                }
                title="Numeri che dimostrano la differenza."
                text={<>Ottenere performance superiori non è un&rsquo;eccezione: è il risultato di un approccio strutturato. Le nostre metriche parlano chiaro.</>}
                stats={STATS}
            />

            <Section>
                <div className="flex flex-col lg:flex-row justify-between w-full items-center gap-10">
                    <div className="flex flex-col gap-4 w-full lg:w-[40%]">
                        <p className="text-4xl sm:text-5xl font-serif">Chi siamo</p>
                        <div className="text-lg">
                            Siamo un team appassionato di gestione immobiliare, specializzato nel trasformare proprietà in investimenti redditizi e sicuri. Con un approccio strategico e operativo, proteggiamo il valore degli immobili, massimizziamo il rendimento e assicuriamo una gestione senza pensieri, sempre trasparente e misurabile.
                        </div>
                        <Link href="/about-us" className="font-semibold flex items-center gap-2 w-fit hover:gap-3 transition-all">
                            <span>Scopri di più</span>
                            <ArrowRight />
                        </Link>
                    </div>

                    <div className="w-full lg:w-[50%] bg-[url('/perugia.webp')] bg-center bg-cover rounded-2xl shadow-lg h-64 sm:h-96 relative overflow-hidden" />
                </div>
            </Section>

            <Section white>
                <SectionHeading
                    center
                    className="mb-16"
                    eyebrow="Garanzie & Sicurezza"
                    accent="emerald"
                    title="Perché affidarsi a noi"
                    text="Proteggiamo il tuo investimento riducendo i rischi e massimizzando il rendimento, con trasparenza totale."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={<Shield className="size-7 text-emerald-600" />}
                        colorClass="bg-emerald-50"
                        title="Riduzione del rischio"
                        text="Pagamenti anticipati, depositi cauzionali e gestione sinistri. Dormi sonni tranquilli mentre noi tuteliamo il tuo asset."
                    />
                    <FeatureCard
                        icon={<Brush className="size-7 text-blue-600" />}
                        colorClass="bg-blue-50"
                        title="Cura quotidiana"
                        text="Ispezioni dettagliate e pulizie professionali ad ogni checkout. Il tuo immobile rimane in condizioni impeccabili."
                    />
                    <FeatureCard
                        icon={<BarChart3 className="size-7 text-purple-600" />}
                        colorClass="bg-purple-50"
                        title="Decisioni sui dati"
                        text="Niente intuizioni, solo numeri. Report mensili, KPI precisi e interventi di pricing mirati per massimizzare il reddito."
                    />
                </div>
            </Section>

            <Section>
                <div className="bg-[url('/interior5-800.webp')] lg:bg-[url('/interior5.webp')] bg-center bg-cover overflow-hidden rounded-2xl w-full relative flex flex-col justify-between min-h-[70vh] lg:min-h-[75vh] p-6 lg:p-8 gap-10">
                    <div className="absolute inset-0 bg-slate-950/25" />

                    <p className="relative z-10 text-white lg:max-w-xl text-lg lg:text-xl font-medium">
                        Immobili selezionati, gestiti e ottimizzati con il nostro metodo. Ogni alloggio è il risultato di strategie di pricing, cura operativa e analisi dei dati orientate alla massima performance.
                    </p>

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                        <div className="flex flex-col lg:flex-row gap-2">
                            <div className="lg:max-w-sm bg-slate-50/30 font-medium p-3 rounded-md text-white shadow backdrop-blur-xl">
                                Immobili gestiti secondo standard operativi certificati. Ogni alloggio è ottimizzato con strategie di pricing dinamico, controllo qualità continuo e analisi dei dati orientata alla massima redditività.
                            </div>
                            <div className="max-w-xs hidden lg:block bg-slate-50/30 font-medium p-3 rounded-md text-white shadow-inner backdrop-blur-xl">
                                Il risultato è un portafoglio di immobili con occupazione elevata, recensioni eccellenti e rendimenti ottimizzati, dove estetica, comfort e dati lavorano insieme.
                            </div>
                        </div>

                        <Link href="/alloggi" className="pl-4 pr-2 shadow py-2 bg-white rounded-md flex gap-4 items-center justify-between lg:justify-start hover:bg-stone-100 transition-colors shrink-0">
                            <span className="font-semibold">Scopri i nostri immobili</span>
                            <div className="text-white bg-black p-3 rounded-sm">
                                <Plus size={16} />
                            </div>
                        </Link>
                    </div>
                </div>
            </Section>

            <ProcessSection ctaLabel="Scopri il servizio completo" ctaHref="/servizi" />

            <Section white>
                <SectionHeading
                    center
                    className="mb-16"
                    eyebrow="Soluzioni Modulari"
                    accent="blue"
                    title="Cinque servizi, infinite combinazioni"
                    text="Scegli la soluzione che si adatta alle tue esigenze, dalla gestione totale alla singola consulenza."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map(service => (
                        <FeatureCard key={service.title} {...service} colorClass="bg-slate-100" />
                    ))}
                    <CtaCard
                        title="Non sai cosa scegliere?"
                        text="Parla con un nostro consulente per analizzare il tuo caso specifico."
                        cta="Contattaci"
                        href="/contatti"
                    />
                </div>
            </Section>

            <Section>
                <SectionHeading
                    center
                    className="mb-12 lg:mb-16"
                    eyebrow="Testimonianze"
                    accent="orange"
                    title="Cosa dicono i nostri partner"
                    text="Proprietari e investitori che ci hanno affidato il loro immobile."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map(t => <TestimonialCard key={t.name} {...t} />)}
                </div>
            </Section>

            <Section>
                <div className="bg-white rounded-2xl p-8 sm:p-10 lg:p-16 border border-stone-100 shadow-sm text-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 block">Performance Verificate</span>
                    <h2 className="text-2xl sm:text-3xl lg:text-5xl font-serif text-slate-900 mb-10">Risultati misurabili (Gen-Dic 2024)</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                        {RESULTS.map((r, i) => (
                            <div key={r.lab} className={`flex flex-col items-center px-4 ${i === 0 ? "pt-4 md:pt-0" : "pt-8 md:pt-0"}`}>
                                <span className={`text-5xl sm:text-6xl font-serif mb-2 ${r.color}`}>{r.val}</span>
                                <span className="font-bold text-slate-900 mb-2">{r.lab}</span>
                                <span className="text-slate-500 text-sm">{r.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section white>
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <SectionHeading
                            eyebrow="Domande Frequenti"
                            accent="blue"
                            title={<>Le risposte <br /> <span className="italic font-light text-slate-600">prima che tu le chieda.</span></>}
                            text={<>Legalità, garanzie sui pagamenti, coperture assicurative e usura dell&apos;immobile: i dubbi più comuni, spiegati senza giri di parole.</>}
                        />
                        <Button asChild variant="outline" className="mt-8 border-slate-900 text-slate-900 hover:bg-slate-100">
                            <Link href="/contatti">Hai un&apos;altra domanda?</Link>
                        </Button>
                    </div>

                    <div className="lg:w-2/3 flex flex-col">
                        <FAQs />
                        <FaqSchema />
                    </div>
                </div>
            </Section>

            <ClosingCta
                eyebrow="Su misura per te"
                title="I primi passi per un investimento sicuro."
                text="Contattaci oggi per scoprire come Rentflow può aiutarti a massimizzare il valore del tuo immobile senza pensieri."
                cta="Richiedi Consulenza"
                href="/contatti"
            />
        </>
    );
}
