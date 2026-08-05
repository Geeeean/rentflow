import { Footer } from "./footer";
import Nav from "./nav";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            {/* Single scroll container for the whole site.
                `scroll-pt-20` insets the snapport by the sticky nav's height, so every snap
                position — and every in-page anchor — lands below the bar instead of behind it.
                Mandatory snapping is a desktop behaviour: on mobile, sections routinely run
                longer than the screen and it would fight the user mid-section. */}
            <main className="h-screen overflow-y-scroll overflow-x-hidden snap-y snap-proximity lg:snap-mandatory scroll-pt-nav scroll-smooth">
                <Nav />
                {children}
                <Footer />
            </main>
        </>
    )
}

export { Layout }
