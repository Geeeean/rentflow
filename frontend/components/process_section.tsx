import Link from "next/link";
import { Button } from "./ui/button";
import { Section } from "./section";
import { StepCard } from "./step_card";

const PROCESS = [
    { num: "01", title: "Fotografia Professionale", text: "Shooting di alta gamma e copywriting strategico. Le immagini influenzano direttamente il CTR e le conversioni." },
    { num: "02", title: "Distribuzione Multi-Canale", text: "Airbnb, Booking.com e OTA strategiche. Sincronizzazione calendari perfetta e prezzi ottimizzati per canale." },
    { num: "03", title: "Guest Experience", text: "Comunicazione proattiva 24/7. Le recensioni a 5 stelle aumentano la visibilità organica e l'ADR." },
    { num: "04", title: "Pricing Dinamico", text: "Algoritmi Real-time basati su domanda, eventi locali e competitor. Massimizziamo il RevPAR ogni notte." },
    { num: "05", title: "Reporting Mensile", text: "Dashboard chiara con NOI, occupazione e ripartizione costi. Trasparenza totale sui tuoi guadagni." },
];

type Props = {
    ctaLabel: string,
    ctaHref: string,
}

const ProcessSection = ({ ctaLabel, ctaHref }: Props) => {
    return (
        <Section>
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                    <span className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-3 block">Come Funziona</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-900 mb-4 lg:mb-6">
                        Processo <br /> <span className="italic font-light text-slate-600">efficiente e scalabile.</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
                        Cinque fasi operative collaudate per ottimizzare le prestazioni e massimizzare il tuo reddito operativo netto fin dal primo mese.
                    </p>
                    <Button asChild variant="outline" className="border-slate-900 text-slate-900 hover:bg-slate-100">
                        <Link href={ctaHref}>{ctaLabel}</Link>
                    </Button>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {PROCESS.map(step => <StepCard key={step.num} {...step} />)}
                </div>
            </div>
        </Section>
    )
}

export { ProcessSection }
