import { Button } from "@/components/ui/button"
import { Badge } from "@/components/badge";
import { ArrowRight, ArrowUpRight, Atom, Brain, BrushCleaning, ChartNoAxesColumnIncreasing, Handshake, Key, Shield, TrendingUp } from "lucide-react";
import TimelineCard from "@/components/timeline_card";
import { Card1 } from "@/components/card1";
import { CardProof } from "@/components/card_proof";
import { FAQs } from "@/components/faqs";
import { Hero } from "@/components/hero";

export default function Home() {
    return (
        <div>
            <Hero />

            <div className="flex items-center justify-center gap-24 py-24 bg-gray-100 rounded-lg my-36">
                <div className="flex flex-col items-center gap-4">
                    <p className="font-serif text-7xl">85%</p>
                    <p className="text-gray-500 font-semibold">OCCUPAZIONE MEDIA</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <p className="font-serif text-7xl">4.8/5</p>
                    <p className="text-gray-500 font-semibold">VALUTAZIONE OSPITI</p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <p className="font-serif text-7xl">50+</p>
                    <p className="text-gray-500 font-semibold">IMMOBILI GESTITI</p>
                </div>

                <div className="flex flex-col items-center gap-4">
                    <p className="font-serif text-7xl">24/7</p>
                    <p className="text-gray-500 font-semibold">ASSISTENZA</p>
                </div>
            </div>

            <div className="px-10 flex flex-col gap-12 mb-56">
                <Badge text={"GARANZIE & SICUREZZA"} />
                <div>
                    <p className="text-7xl font-serif italic">Perché affidarsi a noi</p>
                    <p className="text-gray-500 text-xl">Proteggiamo il tuo investimento riducendo i rischi e massimizzando il rendimento, con trasparenza e risultati misurabili.</p>
                </div>
                <div className="flex justify-between gap-6">
                    <div className="p-10 flex flex-col flex-1 bg-gray-100 gap-6 rounded-md border shadow">
                        <div className="p-3 bg-white rounded-full w-fit border shadow">
                            <Shield />
                        </div>
                        <div>
                            <p className="font-serif text-3xl">Riduzione del rischio</p>
                            <p className="text-gray-500 text-lg">Pagamenti anticipati, depositi cauzionali e gestione sinistri.</p>
                        </div>
                    </div>

                    <div className="p-10 flex flex-col flex-1 bg-gray-100 gap-6 rounded-md border shadow">
                        <div className="p-3 bg-white rounded-full w-fit border shadow">
                            <BrushCleaning />
                        </div>
                        <div>
                            <p className="font-serif text-3xl">Cura quotidiana</p>
                            <p className="text-gray-500 text-lg">Ispezioni e pulizia ad ogni checkout, meno usura.</p>
                        </div>
                    </div>

                    <div className="p-10 flex flex-col flex-1 bg-gray-100 gap-6 rounded-md border shadow">
                        <div className="p-3 bg-white rounded-full w-fit border shadow">
                            <ChartNoAxesColumnIncreasing />
                        </div>
                        <div>
                            <p className="font-serif text-3xl">Decisioni guidate dai numeri</p>
                            <p className="text-gray-500 text-lg">Report, KPI e interventi mirati.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="px-10 w-full mb-56">
                <div className="flex justify-between w-full p-6 rounded-lg items-end">
                    <div className="flex flex-col gap-4 w-[40%]">
                        <Badge text="COPERTURE" />
                        <p className="text-5xl">Massimizza il rendimento del tuo immobile senza stress</p>
                    </div>

                    <div className="w-[45%] text-lg">
                        Con Rentflow il tuo immobile è sempre protetto e pronto a generare reddito. Offriamo coperture OTA e polizza integrativa Rentflow, pagamenti anticipati e depositi cauzionali garantiti. Gestiamo ogni sinistro e assicuriamo pulizie certificate ad ogni checkout, per massima sicurezza e zero stress.
                    </div>
                </div>
            </div>


            <div className="px-10 flex flex-col items-center text-center gap-12 mb-56">
                <Badge text={"COME FUNZIONA"} />
                <div className="max-w-2xl">
                    <p className="text-7xl font-serif italic">Processo efficiente e scalabile</p>
                    <p className="text-gray-500 text-xl">Cinque fasi operative per ottimizzare le prestazioni e massimizzare il tuo reddito operativo</p>
                </div>
                <div className="flex justify-between gap-6">
                    <TimelineCard
                        num={1}
                        title={"Fotografia Professionale"}
                        text={"Servizio fotografico di alta gamma e copywriting strategico. Le immagini influenzano direttamente il CTR e il booking rate."}
                    />
                    <TimelineCard
                        num={2}
                        title={"Distribuzione Multi-Canale"}
                        text={"Presenza ottimizzata su Airbnb, Booking.com e piattaforme OTA strategiche. Gestiamo elenchi, sincronizzazione calendari e prezzi per canale."}
                    />
                    <TimelineCard
                        num={3}
                        title={"Gestione dell’esperienza degli ospiti"}
                        text={"Coordinatore check-in, comunicazione proattiva e assistenza operativa 24 ore su 24, 7 giorni su 7. Le recensioni a 5 stelle aumentano visibilità e ADR."}
                    />
                    <TimelineCard
                        num={4}
                        title={"Prezzi dinamici"}
                        text={"Algoritmo di revenue management con aggiustamenti in tempo reale basati su domanda, eventi locali e competitor set. Massimizza RevPAR."}
                    />
                    <TimelineCard
                        num={5}
                        title={"Segnalazione Mensile"}
                        text={"Dashboard con KPI operativi: NOI, ADR, RevPAR, occupazione, ripartizione costi. Dati trasparenti e utilizzabili."}
                    />
                </div>
                <Button size="lg" type="button" className="bg-emerald-950">Scopri il servizio completo</Button>
            </div>

            <div className="bg-gray-100 py-24 flex flex-col items-center gap-12 px-12 mb-56">
                <Badge text="SOLUZIONI MODULARI COMPLETE" />
                <div className="max-w-2xl text-center">
                    <p className="text-7xl font-serif">Cinque servizi, infinite combinazioni</p>
                    <p className="text-gray-500 text-xl">Dal full-service al supporto mirato: scegli la soluzione che massimizza il rendimento del tuo immobile</p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <Card1 icon={<Key />} title="Gestioni brevi" text="Listing ottimizzati, revenue management, check-in/out e pulizie certificate." />
                    <Card1 icon={<Atom />} title="Gestione Medio Termine & Tradizionale" text="Selezione inquilini e contratti su misura." />
                    <Card1 icon={<Brain />} title="Intermediazione Immobiliare" text="Vendite, localizzazioni e consulenza con agenzia partner." />
                    <Card1 icon={<TrendingUp />} title="Consulenza sugli Invesimenti" text="Analisi investimento, scenario rendimento e strategia valorizzazione." />
                    <Card1 icon={<Handshake />} title="Consulenza Contrattuale & Fiscale" text="Rete di professionisti per adempimenti e ottimizzazione." />
                </div>
            </div>

            <div className="px-10 flex flex-col items-center text-center gap-12 mb-56">
                <Badge text={"PROVA SOCIALE"} />
                <div className="max-w-2xl text-center">
                    <p className="text-6xl font-serif">Cosa dicono i nostri clienti</p>
                </div>

                <div className="flex gap-6">
                    <CardProof
                        text="Avevo dubbi sulla sicurezza e sui pagamenti. Con Rentflow ho scoperto che con le coperture doppie ei pagamenti anticipati OTA dormo sonni tranquilli."
                        title="SIG"
                        name="Marco R."
                        job="Investitore Immobiliare"
                    />
                    <CardProof
                        text="Avevo dubbi sulla sicurezza e sui pagamenti. Con Rentflow ho scoperto che con le coperture doppie ei pagamenti anticipati OTA dormo sonni tranquilli."
                        title="SIG"
                        name="Marco R."
                        job="Investitore Immobiliare"
                    />
                    <CardProof
                        text="Avevo dubbi sulla sicurezza e sui pagamenti. Con Rentflow ho scoperto che con le coperture doppie ei pagamenti anticipati OTA dormo sonni tranquilli."
                        title="SIG"
                        name="Marco R."
                        job="Investitore Immobiliare"
                    />
                </div>
            </div>

            <div className="px-10 flex flex-col items-center text-center gap-12 mb-56">
                <Badge text={"VERIFICA DELLE PRESTAZIONI"} />
                <div className="max-w-2xl text-center">
                    <p className="text-7xl font-serif">Risultati misurabili e verificabili</p>
                    <p className="text-gray-500 text-xl">Metriche aggregate da 50+ proprieta gestite in Umbria (gen-dic 2024), confronto anno su anno per immobili in gestione &gt; 24 mesi</p>
                </div>

                <div className="flex gap-6">
                    <div className="p-10 bg-gray-100 border shadow flex flex-col items-center gap-10 text-center rounded-md">
                        <div className="bg-white p-3 rounded-full shadow-inner border">
                            <TrendingUp />
                        </div>

                        <div>
                            <p className="font-serif text-6xl mb-4">+32%</p>
                            <p className="font-semibold text-lg">INCREMENTO ROI MEDIO</p>
                            <p className="text-gray-500">Risultato Operativo Netto anno 1 vs gestione autonoma precedente (proprieta comparabili)</p>
                        </div>
                    </div>
                    <div className="p-10 bg-gray-100 border shadow flex flex-col items-center gap-10 text-center rounded-md">
                        <div className="bg-white p-3 rounded-full shadow-inner border">
                            <TrendingUp />
                        </div>

                        <div>
                            <p className="font-serif text-6xl mb-4">+32%</p>
                            <p className="font-semibold text-lg">INCREMENTO ROI MEDIO</p>
                            <p className="text-gray-500">Risultato Operativo Netto anno 1 vs gestione autonoma precedente (proprieta comparabili)</p>
                        </div>
                    </div>
                    <div className="p-10 bg-gray-100 border shadow flex flex-col items-center gap-10 text-center rounded-md">
                        <div className="bg-white p-3 rounded-full shadow-inner border">
                            <TrendingUp />
                        </div>

                        <div>
                            <p className="font-serif text-6xl mb-4">+32%</p>
                            <p className="font-semibold text-lg">INCREMENTO ROI MEDIO</p>
                            <p className="text-gray-500">Risultato Operativo Netto anno 1 vs gestione autonoma precedente (proprieta comparabili)</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-10 flex flex-col items-center gap-12 mb-20">
                <Badge text="DOMANDE FREQUENTI" />
                <div className="flex flex-col">
                    <FAQs />
                </div>
            </div>

            <div className="px-10 w-full relative">
                <div className="w-full h-150 rounded-lg bg-[url('/interior4.jpg')] bg-center bg-cover relative overflow-hidden flex flex-col justify-end items-center">
                    <div className="z-0 absolute inset-0 backdrop-blur-xs bg-emerald-400/20"></div>
                    <div className="relative flex flex-col items-center z-10 gap-4 mb-12">
                        <Badge text="SU MISURA PER TE" />
                        <div className="text-center flex flex-col items-center gap-2">
                            <p className="text-5xl text-white">I primi passi per un investimento sicuro</p>
                            <p className="text-2xl text-gray-200 max-w-[75%] font-light">Contattaci oggi per scoprire come Rentflow può aiutarti a massimizzare il valore del tuo immobile</p>
                        </div>
                        <div className="pl-4 pr-2 py-2 bg-emerald-950 text-white rounded-full flex gap-3 items-center">
                            <span className="font-semibold">Contattaci</span>
                            <div className="p-1 bg-white text-black rounded-full"><ArrowRight size={20} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
