import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Footer = () => {
    return <div className="mt-20 w-full p-10 bg-emerald-900 flex justify-between text-white">
        <div className="flex flex-col justify-between">
            <div>
                <div className="text-9xl font-bold">rentflow.</div>
                <div className="font-medium flex justify-between">
                    <p>info@rentflow.it</p>
                    <p>+39 075 555 1234</p>
                    <p>Perugia, Umbria</p>
                </div>
            </div>
            <p>® 2025 Rentflow. Tutti i diritti riservati.</p>
        </div>
        <div className="w-[35%]">
            <div className="flex flex-col gap-4">
                <p className="text-3xl font-medium">Iscriviti alla nostra newsletter per gli ultimi aggiornamenti.</p>
                <div className="flex w-full max-w-md items-center rounded-full bg-zinc-800/80 p-1 pl-5 pr-2 shadow-sm ring-offset-zinc-900 focus-within:ring-1 focus-within:ring-zinc-500">
                    <Input
                        type="email"
                        placeholder="mario.rossi@gmail.com"
                        className="w-full border-none bg-transparent p-0 text-white placeholder:text-zinc-400 shadow-none focus-visible:ring-0"
                    />

                    <Button
                        type="submit"
                        size="sm"
                        className="ml-2 rounded-full bg-zinc-100 text-zinc-900 hover:bg-white px-6 flex items-center gap-2"
                    >
                        <span className="ml-1">
                            Iscriviti
                        </span>
                        <ArrowRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className="mt-8 text-sm flex gap-3">
                <div className="px-3 py-1 border w-fit rounded-full">Facebook</div>
                <div className="px-3 py-1 border w-fit rounded-full">Instagram</div>
                <div className="px-3 py-1 border w-fit rounded-full">LinkedIn</div>
                <div className="px-3 py-1 border w-fit rounded-full">Whatsapp</div>
            </div>
        </div>
    </div>
}

export { Footer }
