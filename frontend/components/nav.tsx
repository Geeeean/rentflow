import { ArrowRight, House, Layers, UsersRound } from "lucide-react";

const Nav = () => {
    return <div className="pb-4 sticky top-0 left-0 z-50  py-4 px-4 lg:px-0 snap-none h-20 flex justify-center items-center bg-stone-50/50 backdrop-blur-2xl ">
        <div className="flex items-center justify-between z-50 w-7xl">
            <a className="font-bold text-xl" href="/">rentflow</a>
            <div className="hidden lg:flex gap-16 items-center ">
                <div className="h-fit cursor-pointer flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-slate-100">
                        <Layers size={16} />
                    </div>
                    <span>Servizi</span>
                </div>
                <div className="h-fit cursor-pointer flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-slate-100">
                        <House size={16} />
                    </div>
                    <span>Alloggi</span>
                </div>
                <div className="h-fit cursor-pointer flex items-center gap-2">
                    <div className="p-1.5 rounded-full bg-slate-100">
                        <UsersRound size={16} />
                    </div>
                    <a href="/about-us">Chi siamo</a>
                </div>
            </div>
            <div className="pl-4 pr-2 py-2 bg-slate-950 text-white rounded-full flex gap-3 items-center">
                <span className="font-semibold">Parliamone</span>
                <div className="p-1 bg-white text-black rounded-full"><ArrowRight size={20} /></div>
            </div>
        </div>
    </div>
}


export default Nav;
