const Nav = () => {
    return <div className="flex items-center justify-between py-6 sticky top-0 left-0 bg-stone-50/50 backdrop-blur-2xl px-10">
        <div className="font-bold text-xl">rentflow</div>
        <div className="flex gap-8 items-center">
            <p className="h-fit">Servizi</p>
            <p className="h-fit">Alloggi</p>
            <p className="h-fit">Casi studio</p>
            <p className="h-fit">Prezzi</p>
            <div className="rounded-lg px-6 py-3 bg-black/80 text-white">Parliamone</div>
        </div>
    </div>
}


export default Nav;
