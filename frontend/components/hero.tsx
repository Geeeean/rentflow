import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/badge";
import { CircleCheck, HeartHandshake, Sparkle, Star } from "lucide-react";

const Hero = () => {
    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-5 h-screen px-10">
            <div className="col-span-3 row-span-3 py-6 ">
                <Badge text={"SOCIO STRATEGICO IMMOBILIARE"} />
                <div className="text-7xl font-serif mt-5">
                    <div>RENTFLOW</div>
                    <div className="italic text-emerald-600">il partner strategico</div>
                    <div>per il tuo immobile.</div>
                </div>
                <p className="text-xl text-gray-500 mt-6">
                    Massimizziamo il rendimento, proteggiamo il valore e riduciamo i rischi.
                    Soluzioni modulabili: full-service o supporto mirato.
                </p>
                <div className="flex flex-col gap-1 text-gray-500">
                    <div className="flex items-start gap-2">
                        <CircleCheck />
                        <p>Entrate certe: pagamenti anticipati OTA e depositi cauzionali</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <CircleCheck />
                        <p>Manutenzione continua: ispezioni e pulizie certificate</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <CircleCheck />
                        <p>Coperture doppie: assicurazioni OTA + polizza Rentflow</p>
                    </div>
                </div>
            </div>

            <div className="col-span-2 row-span-5 grid grid-rows-5 gap-5 *:rounded-lg *:shadow relative">
                <div className="relative row-span-3 bg-[url('/interior1.jpg')] bg-center bg-contain overflow-hidden">
                    <div className="absolute inset-0 backdrop-blur-xs"></div>
                </div>
                <div className="relative row-span-2 bg-[url('/interior4.jpg')] bg-center bg-contain overflow-hidden">
                    <div className="absolute inset-0 backdrop-blur-xs"></div>
                </div>

                <div className="absolute inset-8 bg-gray-50 p-10 rounded-lg shadow-md flex flex-col gap-6 z-10">
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
                        <Button className="w-full bg-emerald-950">Richiedi valutazione gratuita</Button>
                        <p className="text-gray-400 text-sm">Analisi di redditività completa. Nessuna email promozionale.</p>
                    </div>
                </div>
            </div>

            <div className="p-4 relative col-start-1 row-start-4 col-span-3 row-span-2 rounded-lg bg-red-500">
            </div>
        </div>
    );
}

export { Hero }
