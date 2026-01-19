import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowRightFromLine, CircleCheck, Key, Shield, TrendingUp } from "lucide-react";
import Badge from "@/components/badge";
import TimelineCard from "@/components/timeline_card";
import { Card1 } from "@/components/card1";
import { CardProof } from "@/components/card_proof";

export default function Home() {
    return (
        <div>
            {
                // hero
            }
            <div className="flex items-center justify-between px-10">
                <div className="flex flex-col gap-4 w-[40%]">
                    <Badge text={"SOCIO STRATEGICO IMMOBILIARE"} />
                    <div className="text-7xl font-serif">
                        <div>RENTFLOW</div>
                        <div className="italic text-blue-500">il partner strategico </div>
                        <div>per il tuo immobile</div>
                    </div>
                    <p className="text-lg text-gray-500">Massimizziamo il rendimento, proteggiamo il valore e riduciamo i rischi. Soluzioni modulabili: full-service o supporto mirato.</p>
                    <div className="flex flex-col gap-1">
                        <div className="flex items-start gap-2">
                            <CircleCheck />
                            <p className="text-gray-500">
                                Entrate certe: pagamenti anticipati OTA e depositi cauzionali su prenotazioni dirette
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CircleCheck />
                            <p className="text-gray-500">
                                Manutenzione continua: ispezioni e pulizie certificate, ad ogni checkout per ridurre l'usura
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <CircleCheck />
                            <p className="text-gray-500">
                                Coperture doppie: assicurazioni OTA + polizza integrativa Rentflow per sinistri e danni
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bg-[url('/flat.jpg')] w-[55%] bg-center bg-cover rounded-md p-16">
                    <div className="bg-gray-50 p-10 rounded-lg max-w-lg shadow-md flex flex-col gap-6">
                        <div className="mb-1">
                            <p className="font-serif text-3xl">Richiedi la valutazione <span className="font-medium">gratuita</span></p>
                            <p className="text-gray-400 font-medium">
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

                        <div className="w-full">
                            <Button className="w-full">Richiedi valutazione gratuita</Button>
                            <p className="text-gray-400 text-sm">Analisi di redditività completa. Nessuna email promozionale.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-24 py-24 bg-gray-100 rounded-lg my-36">
                <div className="flex flex-col items-center">
                    <p className="font-serif text-7xl">85%</p>
                    <p className="text-gray-500 font-semibold">OCCUPAZIONE MEDIA</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-serif text-7xl">4.8/5</p>
                    <p className="text-gray-500 font-semibold">VALUTAZIONE OSPITI</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="font-serif text-7xl">50+</p>
                    <p className="text-gray-500 font-semibold">IMMOBILI GESTITI</p>
                </div>

                <div className="flex flex-col items-center">
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
                            <Shield />
                        </div>
                        <div>
                            <p className="font-serif text-3xl">Riduzione del rischio</p>
                            <p className="text-gray-500 text-lg">Pagamenti anticipati, depositi cauzionali e gestione sinistri.</p>
                        </div>
                    </div>

                    <div className="p-10 flex flex-col flex-1 bg-gray-100 gap-6 rounded-md border shadow">
                        <div className="p-3 bg-white rounded-full w-fit border shadow">
                            <Shield />
                        </div>
                        <div>
                            <p className="font-serif text-3xl">Riduzione del rischio</p>
                            <p className="text-gray-500 text-lg">Pagamenti anticipati, depositi cauzionali e gestione sinistri.</p>
                        </div>
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
                <Button size="lg" type="button">Scopri il servizio completo</Button>
            </div>

            <div className="bg-gray-100 py-24 flex flex-col items-center gap-12 px-12 mb-56">
                <Badge text="SOLUZIONI MODULARI COMPLETE" />
                <div className="max-w-2xl text-center">
                    <p className="text-7xl font-serif">Cinque servizi, infinite combinazioni</p>
                    <p className="text-gray-500 text-xl">Dal full-service al supporto mirato: scegli la soluzione che massimizza il rendimento del tuo immobile</p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <Card1 icon={<Key />} title="Gestioni brevi" text="Listing ottimizzati, revenue management, check-in/out e pulizie certificate" />
                    <Card1 icon={<Key />} title="Gestioni brevi" text="Listing ottimizzati, revenue management, check-in/out e pulizie certificate" />
                    <Card1 icon={<Key />} title="Gestioni brevi" text="Listing ottimizzati, revenue management, check-in/out e pulizie certificate" />
                    <Card1 icon={<Key />} title="Gestioni brevi" text="Listing ottimizzati, revenue management, check-in/out e pulizie certificate" />
                    <Card1 icon={<Key />} title="Gestioni brevi" text="Listing ottimizzati, revenue management, check-in/out e pulizie certificate" />
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
        </div>
    );
}
