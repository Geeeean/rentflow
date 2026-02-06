import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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
    CheckCircle2,
    Quote,
    Star,
    CircleCheck,
    Plus
} from "lucide-react";
import { ReactNode } from "react";

const FeatureCard = ({ icon, title, text, colorClass = "text-blue-600 bg-blue-50" }: { icon: ReactNode, title: string, text: string, colorClass?: string }) => {
    return (
        <div className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-4 h-full">
            <div className={`size-14 rounded-xl flex items-center justify-center shadow-sm ${colorClass}`}>
                {icon}
            </div>
            <div>
                <h3 className="font-serif text-2xl font-medium mb-3 text-slate-900">{title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

const StepCard = ({ num, title, text }: { num: string, title: string, text: string }) => {
    return (
        <div className="flex flex-col gap-4 border-l-2 border-slate-200 pl-6 py-2 hover:border-slate-900 transition-colors duration-300">
            <span className="text-4xl font-serif text-slate-300 font-bold">{num}</span>
            <div>
                <h4 className="text-xl font-serif font-medium text-slate-900 mb-2">{title}</h4>
                <p className="text-slate-600 leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

const TestimonialCard = ({ name, role, text }: { name: string, role: string, text: string }) => {
    return (
        <div className="p-8 rounded-xl border border-stone-100 bg-white relative">
            <Quote className="absolute top-6 right-6 text-stone-200 w-10 h-10" />
            <div className="flex gap-1 text-orange-400 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-slate-700 italic mb-6 text-lg">"{text}"</p>
            <div>
                <p className="font-serif text-slate-900 font-medium">{name}</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">{role}</p>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="max-w-7xl flex flex-col lg:grid grid-cols-5 grid-rows-5 gap-5 pt-30 snap-start">
                    <div className="col-span-3 row-span-4 py-6 ">
                        <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-3 block">Socio Strategico Immobiiare</span>
                        <div className="text-7xl font-serif mt-5">
                            <div>RENTFLOW</div>
                            <div className="italic text-blue-950">il partner strategico</div>
                            <div>per il tuo immobile.</div>
                        </div>
                        <p className="text-xl text-gray-700 my-6">
                            Massimizziamo il rendimento, proteggiamo il valore e riduciamo i rischi.
                            Soluzioni modulabili: full-service o supporto mirato.
                        </p>

                        <div className="flex flex-col gap-6">
                            {[
                                { title: "Entrate certe", text: "Pagamenti anticipati OTA e depositi cauzionali." },
                                { title: "Manutenzione continua", text: "Ispezioni e pulizie certificate." },
                                { title: "Coperture doppie", text: "Assicurazioni OTA + polizza Rentflow." },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 group">
                                    <div className="mt-1 shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-emerald-600 group-hover:text-emerald-500 transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-serif font-medium text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:block bg-slate-200 rounded-2xl shadow-lg relative row-span-1 col-span-3 row-start-5">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                            qualcosa
                        </div>
                    </div>

                    <div className="col-span-2 row-span-5 lg:grid grid-rows-5 gap-5 *:rounded-lg *:shadow relative">
                        <div className="hidden lg:block relative shadow-lg row-span-3 bg-[url('/interior1.jpg')] bg-center bg-contain overflow-hidden">
                            <div className="absolute inset-0 backdrop-blur-xs"></div>
                        </div>
                        <div className="hidden lg:block relative row-span-2 shadow-lg bg-[url('/interior4.jpg')] bg-center bg-contain overflow-hidden">
                            <div className="absolute inset-0 backdrop-blur-xs"></div>
                        </div>

                        <div className="lg:absolute inset-8 bg-gray-50 p-10 rounded-lg shadow-md flex flex-col gap-6 z-10">
                            <div className="mb-1">
                                <p className="font-serif text-2xl">Richiedi la valutazione <span className="font-medium">gratuita</span></p>
                                <p className="text-gray-400 font-medium text-sm">
                                    Ricevi il report Pal. personalizzato entro 24 ore. Se non troviamo margine positivo, ti diciamo perché. Zero perdite di tempo
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="name" className="font-semibold">NOME E COGNOME</Label>
                                <Input placeholder="Mario Rossi" id="name" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email" className="font-semibold">EMAIL</Label>
                                <Input placeholder="mario.rossi@gmail.com" id="email" type="email" />
                                <p className="text-gray-400 text-sm">La useremo per contattarti. Non condivideremo le tue informazioni con nessun altro.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="telephone" className="font-semibold">TELEFONO</Label>
                                <Input placeholder="+39 3335004460" id="telephone" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="locality" className="font-semibold">LOCALITA'</Label>
                                <Input placeholder="Perugia, Centro" id="locality" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="note" className="font-semibold">NOTA (FACOLTATIVA)</Label>
                                <Textarea placeholder="Tipo immobile, metratura, camere, ..." id="note" />
                            </div>

                            <div className="w-full text-center">
                                <Button className="w-full bg-slate-900">Richiedi valutazione gratuita</Button>
                                <p className="text-gray-400 text-sm">Nessuna email promozionale.</p>
                            </div>
                        </div>
                    </div>
                </div >
            </div>


            < div className="pb-24 pt-5 px-4 lg:px-10 snap-center flex items-center" >
                <div className="max-w-7xl mx-auto shadow-lg overflow-hidden flex flex-col gap-16">
                    <div className="bg-slate-900 rounded-2xl p-10 lg:p-16 text-white flex flex-col lg:flex-row items-center gap-10 shadow-lg">
                        <div className="lg:w-1/2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-200 text-sm font-medium mb-6 border border-white/20">
                                <Sparkle size={16} />
                                <span>Approccio Data-Driven</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-serif font-medium mb-4">Numeri che dimostrano la differenza.</h2>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                Ottenere performance superiori non è un’eccezione: è il risultato di un approccio strutturato. Le nostre metriche parlano chiaro.
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                            {[
                                { val: "85%", lab: "Occupazione Media" },
                                { val: "4.8/5", lab: "Valutazione Ospiti" },
                                { val: "50+", lab: "Immobili Gestiti" },
                                { val: "24/7", lab: "Supporto Attivo" },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <p className="text-4xl font-serif text-white mb-1">{stat.val}</p>
                                    <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.lab}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >

            <div className="w-full h-screen flex justify-center snap-start">
                <div className="max-w-7xl flex justify-between w-full items-center p-6 rounded-lg">
                    <div className="flex flex-col gap-4 w-[40%]">
                        <p className="text-5xl font-serif">Chi siamo</p>
                        <div className=" text-lg">
                            Siamo un team appassionato di gestione immobiliare, specializzato nel trasformare proprietà in investimenti redditizi e sicuri. Con un approccio strategico e operativo, proteggiamo il valore degli immobili, massimizziamo il rendimento e assicuriamo una gestione senza pensieri, sempre trasparente e misurabile.
                        </div>
                        <a href="/about-us">
                            <div className="font-semibold flex items-center gap-2">
                                <span>Scopri di piu</span>
                                <ArrowRight />
                            </div>
                        </a>
                    </div>

                    <div className="w-[50%] bg-slate-200 rounded-2xl shadow-lg h-96 relative">
                        <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                            Immagine
                        </div>
                    </div>
                </div>
            </div>

            < div className="bg-white py-24 px-4 lg:px-10 snap-start min-h-screen flex items-center" >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-3 block">Garanzie & Sicurezza</span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6">Perché affidarsi a noi</h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Proteggiamo il tuo investimento riducendo i rischi e massimizzando il rendimento, con trasparenza totale.
                        </p>
                    </div>

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
                </div>
            </div >

            <div className="relative py-24 px-4 lg:px-10 snap-start h-screen flex items-center lg:pt-30 w-full" >
                <div className="mx-auto max-w-7xl bg-[url('/interior5.jpg')] bg-center bg-cover overflow-hidden rounded-lg h-full w-full relative">
                    <div className="absolute top-4 left-4 text-white lg:max-w-xl text-xl font-medium">Immobili selezionati, gestiti e ottimizzati con il nostro metodo. Ogni alloggio è il risultato di strategie di pricing, cura operativa e analisi dei dati orientate alla massima performance.</div>
                    <div className="absolute bottom-4 pl-4 pr-2 shadow py-2 right-4 bg-white rounded-md flex gap-4 items-center">
                        <span className="font-semibold">
                            Scopri i nostri immobili
                        </span>
                        <div className="text-white bg-black p-3 rounded-sm">
                            <Plus size={16} />
                        </div>
                    </div>
                    <div className="absolute left-4 bottom-4 flex gap-2">
                        <div className="max-w-sm bg-slate-50/30 font-medium p-3 rounded-md text-white shadow backdrop-blur-xl ">
                            Immobili gestiti secondo standard operativi certificati. Ogni alloggio è ottimizzato con strategie di pricing dinamico, controllo qualità continuo e analisi dei dati orientata alla massima redditività.
                        </div>
                        <div className="max-w-xs bg-slate-50/30 font-medium p-3 rounded-md text-white shadow-inner backdrop-blur-xl ">
                            Il risultato è un portafoglio di immobili con occupazione elevata, recensioni eccellenti e rendimenti ottimizzati, dove estetica, comfort e dati lavorano insieme.
                        </div>
                    </div>
                </div>
            </div>

            < div className="py-24 px-4 lg:px-10 snap-start  min-h-screen flex items-center lg:pt-30" >
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <span className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-3 block">Come Funziona</span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6">
                            Processo <br /> <span className="italic font-light text-slate-600">efficiente e scalabile.</span>
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Cinque fasi operative collaudate per ottimizzare le prestazioni e massimizzare il tuo reddito operativo netto fin dal primo mese.
                        </p>
                        <Button variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-100">
                            Scopri il servizio completo
                        </Button>
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <StepCard
                            num="01"
                            title="Fotografia Professionale"
                            text="Shooting di alta gamma e copywriting strategico. Le immagini influenzano direttamente il CTR e le conversioni."
                        />
                        <StepCard
                            num="02"
                            title="Distribuzione Multi-Canale"
                            text="Airbnb, Booking.com e OTA strategiche. Sincronizzazione calendari perfetta e prezzi ottimizzati per canale."
                        />
                        <StepCard
                            num="03"
                            title="Guest Experience"
                            text="Comunicazione proattiva 24/7. Le recensioni a 5 stelle aumentano la visibilità organica e l'ADR."
                        />
                        <StepCard
                            num="04"
                            title="Pricing Dinamico"
                            text="Algoritmi Real-time basati su domanda, eventi locali e competitor. Massimizziamo il RevPAR ogni notte."
                        />
                        <StepCard
                            num="05"
                            title="Reporting Mensile"
                            text="Dashboard chiara con NOI, occupazione e ripartizione costi. Trasparenza totale sui tuoi guadagni."
                        />
                    </div>
                </div>
            </div >

            < div className=" bg-white py-24 px-4 lg:px-10 snap-start min-h-screen flex items-center lg:pt-30" >
                <div className="max-w-7xl mx-auto h-fit">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-3 block">Soluzioni Modulari</span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-6">Cinque servizi, infinite combinazioni</h2>
                        <p className="text-xl text-slate-600">
                            Scegli la soluzione che si adatta alle tue esigenze, dalla gestione totale alla singola consulenza.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureCard
                            icon={<Key className="size-6 text-slate-700" />} colorClass="bg-slate-100"
                            title="Gestioni Brevi"
                            text="Listing ottimizzati, revenue management, check-in/out e pulizie. Il pacchetto completo per l'host."
                        />
                        <FeatureCard
                            icon={<Atom className="size-6 text-slate-700" />} colorClass="bg-slate-100"
                            title="Medio Termine"
                            text="Selezione inquilini business/studenti e contratti transitori su misura per rendite stabili."
                        />
                        <FeatureCard
                            icon={<Brain className="size-6 text-slate-700" />} colorClass="bg-slate-100"
                            title="Intermediazione"
                            text="Vendite e acquisizioni strategiche supportate dalla nostra agenzia partner di fiducia."
                        />
                        <FeatureCard
                            icon={<TrendingUp className="size-6 text-slate-700" />} colorClass="bg-slate-100"
                            title="Analisi Investimenti"
                            text="Business plan, scenari di rendimento e strategie di valorizzazione per chi vuole investire."
                        />
                        <FeatureCard
                            icon={<Handshake className="size-6 text-slate-700" />} colorClass="bg-slate-100"
                            title="Consulenza Fiscale"
                            text="Rete di professionisti per adempimenti, cedolare secca e ottimizzazione del carico fiscale."
                        />
                        <div className="bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start justify-center h-full text-white">
                            <h3 className="font-serif text-2xl font-medium mb-3">Non sai cosa scegliere?</h3>
                            <p className="text-slate-300 mb-6">Parla con un nostro consulente per analizzare il tuo caso specifico.</p>
                            <Button variant="secondary" className="w-full bg-white text-slate-900 hover:bg-stone-100">
                                Contattaci
                            </Button>
                        </div>
                    </div>
                </div>
            </div >

            < div className="py-24 px-4 lg:px-10 snap-start lg:pt-30" >
                <div className="max-w-7xl mx-auto flex flex-col gap-20">

                    <div>
                        <h2 className="text-4xl font-serif text-slate-900 mb-12 text-center">Cosa dicono i nostri partner</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <TestimonialCard
                                name="Marco R." role="Investitore Immobiliare"
                                text="Avevo dubbi sulla sicurezza dei pagamenti. Con Rentflow ho scoperto che le coperture doppie mi fanno dormire sonni tranquilli."
                            />
                            <TestimonialCard
                                name="Elena B." role="Proprietaria Seconda Casa"
                                text="Prima gestivo tutto da sola ed ero stressata. Ora guadagno il 20% in più e non devo rispondere al telefono la domenica."
                            />
                            <TestimonialCard
                                name="Giovanni L." role="Costruttore"
                                text="La loro analisi di mercato è stata fondamentale per decidere come arredare gli appartamenti per massimizzare l'affitto."
                            />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-10 lg:p-16 border border-stone-100 shadow-sm text-center">
                        <span className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 block">Performance Verificate</span>
                        <h3 className="text-3xl lg:text-5xl font-serif text-slate-900 mb-10">Risultati misurabili (Gen-Dic 2024)</h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                            <div className="flex flex-col items-center px-4 pt-4 md:pt-0">
                                <span className="text-6xl font-serif text-emerald-600 mb-2">+32%</span>
                                <span className="font-bold text-slate-900 mb-2">ROI MEDIO ANNO 1</span>
                                <span className="text-slate-500 text-sm">Vs gestione autonoma precedente su proprietà comparabili</span>
                            </div>
                            <div className="flex flex-col items-center px-4 pt-8 md:pt-0">
                                <span className="text-6xl font-serif text-blue-600 mb-2">-40%</span>
                                <span className="font-bold text-slate-900 mb-2">COSTI MANUTENZIONE</span>
                                <span className="text-slate-500 text-sm">Grazie a interventi preventivi e controlli regolari</span>
                            </div>
                            <div className="flex flex-col items-center px-4 pt-8 md:pt-0">
                                <span className="text-6xl font-serif text-purple-600 mb-2">98%</span>
                                <span className="font-bold text-slate-900 mb-2">TASSO RISPOSTA</span>
                                <span className="text-slate-500 text-sm">Entro 1 ora, garantendo il posizionamento "Superhost"</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

            < div className="bg-white py-20 px-4 lg:px-10 snap-start" >
                <div className="max-w-7xl mx-auto">
                    <div className="w-full bg-slate-900 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center text-center py-24 px-6">
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

                        <div className="relative z-10 max-w-2xl flex flex-col items-center">
                            <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">Su misura per te</span>
                            <h2 className="text-4xl lg:text-5xl font-serif text-white mb-6">I primi passi per un investimento sicuro.</h2>
                            <p className="text-xl text-slate-300 mb-10 font-light">
                                Contattaci oggi per scoprire come Rentflow può aiutarti a massimizzare il valore del tuo immobile senza pensieri.
                            </p>

                            <div className="pl-4 pr-2 py-2 bg-white text-slate-900 rounded-full flex gap-3 items-center w-fit">
                                <span className="font-semibold">Richiedi Consulenza</span>
                                <div className="p-1 bg-slate-900 text-white rounded-full"><ArrowRight size={20} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
