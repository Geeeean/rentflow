import { Section } from "./section";
import { CtaPill } from "./cta_pill";

type Props = {
    eyebrow: string,
    title: string,
    text: string,
    cta: string,
    href: string,
}

const ClosingCta = ({ eyebrow, title, text, cta, href }: Props) => {
    return (
        <Section white full={false}>
            <div className="w-full bg-slate-900 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-24 px-6">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-10 max-w-2xl flex flex-col items-center">
                    <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm mb-4 block">{eyebrow}</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-6">{title}</h2>
                    <p className="text-lg sm:text-xl text-slate-300 mb-10 font-light">{text}</p>

                    <CtaPill label={cta} href={href} variant="light" />
                </div>
            </div>
        </Section>
    )
}

export { ClosingCta }
