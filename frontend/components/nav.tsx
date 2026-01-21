import { ArrowRight, House, Layers, UsersRound } from "lucide-react";

const Nav = () => {
    return <div className="py-2 sticky top-0 left-0 z-50">
        <div className="flex items-center justify-between py-2 bg-stone-50/50 backdrop-blur-2xl px-10 z-50">
            <div className="font-bold text-xl">rentflow</div>
            <div className="flex gap-16 items-center">
                <div className="h-fit cursor-pointer flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-emerald-100">
                        <Layers size={16} />
                    </div>
                    <span>Servizi</span>
                </div>
                <div className="h-fit cursor-pointer flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-emerald-100">
                        <House size={16} />
                    </div>
                    <span>Alloggi</span>
                </div>
                <div className="h-fit cursor-pointer flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-emerald-100">
                        <UsersRound size={16} />
                    </div>
                    <span>Chi siamo</span>
                </div>
            </div>
            <div className="pl-4 pr-2 py-2 bg-emerald-950 text-white rounded-full flex gap-3 items-center">
                <span className="font-semibold">Parliamone</span>
                <div className="p-1 bg-white text-black rounded-full"><ArrowRight size={20} /></div>
            </div>
        </div>
    </div>
}


export default Nav;
