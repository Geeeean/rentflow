import { Button } from "@/components/ui/button";
import { Award, BarChart3, Building2, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

type Props = {
    children: ReactNode,
    title: string,
    text: string,
}

const FeatureCard = ({ children, title, text }: Props) => {
    return (
        <div className="bg-white p-8 rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start gap-4 h-full">
            <div className="mb-2">
                {children}
            </div>
            <div>
                <h3 className="font-serif text-2xl font-medium mb-3 text-slate-900">{title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed">{text}</p>
            </div>
        </div>
    )
}

export default function AboutUs() {
    return (
        <>
            <div className="px-4 lg:px-10 w-full min-h-screen py-32 lg:py-20 flex flex-col justify-center snap-start text-center items-center lg:text-left bg-white">
                <div className="flex flex-col gap-12 lg:flex-row justify-center lg:justify-between w-full items-start max-w-7xl mx-auto">
                    <div className="flex flex-col gap-4 lg:w-[45%]">
                        <p className="text-5xl font-medium lg:font-normal font-serif text-slate-900">Su di noi</p>
                        <h2 className="text-3xl font-light text-slate-800">Siamo RentFlow, realtà giovane e competitiva che trasforma immobili in reddito senza stress per i proprietari.</h2>
                    </div>

                    <div className="lg:w-[50%] text-lg text-slate-600 leading-relaxed">
                        Con anni di esperienza nella gestione di affitti brevi e lunghi, da subito abbiamo scelto un approccio professionale, semplice e trasparente. Lavoriamo a fianco proprietari, investitori e partner per massimizzare il rendimento degli immobili e minimizzare i problemi pratici del day-to-day.
                    </div>
                </div>
                <div className="w-full h-96 bg-stone-100 rounded-2xl shadow-inner mt-16 max-w-7xl mx-auto flex items-center justify-center text-stone-400">
                    Hero Image
                </div>
            </div>

            <div className="px-4 lg:px-10 w-full py-24 flex flex-col justify-center bg-stone-50 snap-start">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                    
                    <div className="w-full lg:w-1/2 h-[500px] bg-slate-200 rounded-2xl shadow-lg overflow-hidden relative">
                         <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                           Immagine Visione
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 lg:w-1/2">
                        <p className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Vision</p>
                        <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
                            Oltre l'affitto: una piattaforma per il tuo patrimonio.
                        </h3>
                        <div className="text-lg text-slate-600 space-y-6 leading-relaxed">
                            <p>
                                La nostra visione è ambiziosa: non ci limitiamo a gestire prenotazioni, ma vogliamo ridefinire il modo in cui i proprietari interagiscono con i loro immobili.
                            </p>
                            <p>
                                Immaginiamo un futuro dove possedere un immobile non significhi oneri e burocrazia, ma pura opportunità. Stiamo costruendo una piattaforma di servizi immobiliari integrati che spazia dalla gestione operativa all'intermediazione, fino alla consulenza strategica.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-10 w-full py-24 flex flex-col justify-center bg-white snap-start">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-16 items-center">
                    
                    <div className="flex flex-col gap-8 lg:w-1/2">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-2">Mission</p>
                            <h3 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
                                Valore reale, gestione trasparente.
                            </h3>
                            <p className="text-xl text-slate-600 font-light">
                                Aiutiamo chi possiede un immobile a trasformarlo in una rendita sicura, con soluzioni su misura e dati chiari.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {[
                                { title: "Al fianco del cliente", text: "Consulenti indipendenti per soluzioni short, medium o vendita." },
                                { title: "Crescita e risultati", text: "Tecnologia e ospitalità per massimizzare l'occupazione." },
                                { title: "Fiducia e Trasparenza", text: "Report accessibili e tracciabilità totale." },
                                { title: "Standard elevati", text: "Servizi legali, fiscali e di valorizzazione integrati." }
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

                    <div className="w-full lg:w-1/2 h-[600px] bg-stone-200 rounded-2xl shadow-lg overflow-hidden relative">
                         <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-medium">
                           Immagine Missione
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 lg:px-10 w-full py-24 bg-stone-50 snap-start">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <p className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-3">I nostri punti di forza</p>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Cosa ci rende diversi</h2>
                        <p className="text-xl text-slate-600">
                            Non siamo solo gestori, siamo partner strategici per la crescita del tuo patrimonio immobiliare.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        
                        <FeatureCard
                            title="Esperienza pratica"
                            text='Gestiamo annunci, flussi di ospitalità, manutenzione e comunicazione con gli ospiti con cura "sul campo".'
                        >
                            <div className="size-14 rounded-xl bg-blue-50 flex items-center justify-center shadow-sm">
                                <Award className="size-7 text-blue-600" />
                            </div>
                        </FeatureCard>

                        <FeatureCard
                            title="Tecnologia avanzata"
                            text='Strumenti moderni per pricing dinamico, channel-management e automazione per massimizzare le prenotazioni.'
                        >
                            <div className="size-14 rounded-xl bg-emerald-50 flex items-center justify-center shadow-sm">
                                <BarChart3 className="size-7 text-emerald-600" />
                            </div>
                        </FeatureCard>

                        <FeatureCard
                            title="Copertura nazionale"
                            text="Partnership strategiche con agenzie immobiliari per offrire intermediazione e servizi su tutto il territorio italiano."
                        >
                            <div className="size-14 rounded-xl bg-purple-50 flex items-center justify-center shadow-sm">
                                <Building2 className="size-7 text-purple-600" />
                            </div>
                        </FeatureCard>

                        <FeatureCard
                            title="Crescita costante"
                            text="Ampliamento continuo del portafoglio e miglioramento dei KPI grazie a processi consolidati e gestione attenta."
                        >
                            <div className="size-14 rounded-xl bg-orange-50 flex items-center justify-center shadow-sm">
                                <TrendingUp className="size-7 text-orange-600" />
                            </div>
                        </FeatureCard>

                        <FeatureCard
                            title="Trasparenza totale"
                            text="Contratti chiari, report periodici, controllo dei flussi finanziari e compliance fiscale con professionisti del settore."
                        >
                            <div className="size-14 rounded-xl bg-blue-50 flex items-center justify-center shadow-sm">
                                <Shield className="size-7 text-blue-600" />
                            </div>
                        </FeatureCard>

                        <div className="bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start justify-between h-full text-white">
                            <div>
                                <h3 className="font-serif text-2xl font-medium mb-3">Vuoi saperne di più?</h3>
                                <p className="text-slate-300 mb-6">Parla con un nostro consulente per analizzare il tuo immobile.</p>
                            </div>
                            <Button variant="secondary" className="w-full bg-white text-slate-900 hover:bg-slate-100">
                                Contattaci ora
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
