import Nav from "./nav";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="bg-stone-50/50">
            <Nav />
            {children}
        </main>
    )
}

export { Layout }
