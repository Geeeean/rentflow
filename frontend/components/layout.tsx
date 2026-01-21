import { Footer } from "./footer";
import Nav from "./nav";

const Layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className="bg-blue-50/30">
            <Nav />
            {children}
            <Footer />
        </main>
    )
}

export { Layout }
