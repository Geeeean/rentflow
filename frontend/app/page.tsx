import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"
import { DotIcon } from "lucide-react";

export default function Home() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col gap-4 w-[40%]">
                <div className="flex border rounded-md pl-2 pr-3 py-1 shadow-xl items-center w-fit">
                    <DotIcon className="text-black/80" />
                    <span className="text-xs font-bold text-black/80">SOCIO STRATEGICO IMMOBILIARE</span>
                </div>
                <div className="text-7xl font-serif">
                    <div>RENTFLOW</div>
                    <div className="italic text-blue-500">il partner strategico </div>
                    <div>per il tuo immobile</div>
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
    );
}
