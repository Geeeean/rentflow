const Nav = () => {
    return <div className="flex justify-between py-6">
        <div>rentflow</div>
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
