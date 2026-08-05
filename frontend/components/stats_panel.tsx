import { ReactNode } from "react";
import { Section } from "./section";

type Stat = {
    val: string,
    lab: string,
}

type Props = {
    /** Rendered above the title — a plain span or a badge pill, caller's choice. */
    eyebrow: ReactNode,
    title: string,
    text: ReactNode,
    stats: Stat[],
}

const StatsPanel = ({ eyebrow, title, text, stats }: Props) => {
    return (
        <Section full={false}>
            <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 lg:p-16 text-white flex flex-col lg:flex-row items-center gap-10 shadow-lg">
                <div className="lg:w-1/2">
                    {eyebrow}
                    <h2 className="text-3xl lg:text-4xl font-serif font-medium mb-4">{title}</h2>
                    <p className="text-slate-300 text-lg leading-relaxed">{text}</p>
                </div>

                <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                    {stats.map(stat => (
                        <div key={stat.lab}>
                            <p className="text-4xl font-serif text-white mb-1">{stat.val}</p>
                            <p className="text-slate-400 text-sm uppercase tracking-wider">{stat.lab}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export { StatsPanel }
