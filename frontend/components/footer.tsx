import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

const Footer = () => {
    return <div className="w-full flex justify-center bg-slate-950 snap-start">
        <div className="w-full p-10 max-w-7xl flex flex-col lg:flex-row justify-between text-white gap-6">
            <div className="flex flex-col justify-between">
                <div>
                    <div className="text-7xl lg:text-9xl font-bold">rentflow.</div>
                    <div className="font-medium flex flex-col lg:flex-row justify-between">
                        <p>info@rentflow.it</p>
                        <p>+39 075 555 1234</p>
                        <p>Perugia, Umbria</p>
                    </div>
                </div>
                <p className="hidden lg:block">® 2025 Rentflow. Tutti i diritti riservati.</p>
            </div>
            <div className="lg:w-[35%]">
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
                <div className="grid grid-cols-2 grid-rows-2 mt-8 text-sm lg:flex gap-3">
                    <div className="px-3 py-1 border w-fit rounded-full">Facebook</div>
                    <div className="px-3 py-1 border w-fit rounded-full justify-self-end">Instagram</div>
                    <div className="px-3 py-1 border w-fit rounded-full">LinkedIn</div>
                    <div className="px-3 py-1 border w-fit rounded-full justify-self-end">Whatsapp</div>
                </div>
            </div>
            <p className="lg:hidden block">® 2025 Rentflow. Tutti i diritti riservati.</p>
        </div>
    </div>

}

export { Footer }
