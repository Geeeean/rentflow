import { Button } from "./ui/button";

const Nav = () => {
    return <div className="flex items-center justify-between py-6 sticky top-0 left-0 bg-stone-50/50 backdrop-blur-2xl px-10">
        <div className="font-bold text-xl">rentflow</div>
        <div className="flex gap-8 items-center">
            <p className="h-fit cursor-pointer">Servizi</p>
            <p className="h-fit cursor-pointer">Alloggi</p>
            <p className="h-fit cursor-pointer">Casi studio</p>
            <p className="h-fit cursor-pointer">Prezzi</p>
            <Button>Parliamone</Button>
        </div>
    </div>
}


export default Nav;
