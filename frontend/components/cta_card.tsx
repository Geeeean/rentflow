import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
    title: string,
    text: string,
    cta: string,
    href: string,
}

const CtaCard = ({ title, text, cta, href }: Props) => {
    return (
        <div className="bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-start justify-between h-full text-white">
            <div>
                <h3 className="font-serif text-2xl font-medium mb-3">{title}</h3>
                <p className="text-slate-300 mb-6">{text}</p>
            </div>
            <Button asChild variant="secondary" className="w-full bg-white text-slate-900 hover:bg-stone-100">
                <Link href={href}>{cta}</Link>
            </Button>
        </div>
    )
}

export { CtaCard }
