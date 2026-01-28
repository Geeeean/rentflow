import { Footer } from "./footer";
import Nav from "./nav";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <main className="snap-y scroll-smooth lg:snap-mandatory h-screen overflow-y-scroll">
                <Nav />
                {children}
                <Footer />
            </main>
        </>
    )
}

export { Layout }
