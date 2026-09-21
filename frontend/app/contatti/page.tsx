import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { LeadForm } from "@/components/lead_form";
import { FAQs } from "@/components/faqs";
import { BreadcrumbSchema, FaqSchema } from "@/components/structured_data";
import { CONTACT, CONTACT_HREF } from "@/lib/contact";

const TITLE = "Contatti e valutazione gratuita a Perugia";
const DESCRIPTION = "Richiedi la valutazione gratuita del tuo immobile a Perugia o in Umbria: rispondiamo entro 24 ore. Email, telefono e WhatsApp, dal lunedì al venerdì.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/contatti/" },
    openGraph: { title: TITLE, description: DESCRIPTION, url: "/contatti/" },
};

const CONTACTS = [
    { icon: Mail, label: "Email", value: CONTACT.email, href: CONTACT_HREF.email },
    { icon: Phone, label: "Telefono", value: CONTACT.phone, href: CONTACT_HREF.phone },
    { icon: MessageCircle, label: "Whatsapp", value: "Scrivici in chat", href: CONTACT_HREF.whatsapp },
];

const STEPS = [
    { num: "01", title: "Ci scrivi", text: "Compila il modulo con due informazioni di base sull'immobile. Bastano due minuti." },
    { num: "02", title: "Analizziamo", text: "Incrociamo i dati di mercato della tua zona con le caratteristiche dell'immobile." },
    { num: "03", title: "Ti rispondiamo", text: "Entro 24 ore ricevi la valutazione. Se non c'è margine positivo, te lo diciamo chiaramente." },
];

export default function Contatti() {
    return (
        <>
            <Section>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
                    <div className="lg:w-1/2 lg:sticky lg:top-32 flex flex-col">
                        <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-4 block">Parliamone</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-slate-900 mb-6 leading-[1.05]">
                            Il primo passo <br />
                            <span className="italic text-blue-950">non costa nulla.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg">
                            Raccontaci del tuo immobile e ti diciamo quanto può rendere, con quale formula e in
                            quanto tempo. Nessun impegno, nessuna email promozionale.
                        </p>

                        {/* Understated list rather than heavy cards — the form is the focus here. */}
                        <div className="mt-10 lg:mt-12 flex flex-col border-t border-stone-200">
                            {CONTACTS.map(({ icon: Icon, label, value, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="group flex items-center gap-4 py-5 border-b border-stone-200"
                                >
                                    <Icon className="size-5 text-slate-400 group-hover:text-emerald-600 transition-colors shrink-0" />
                                    <span className="text-xs uppercase tracking-widest text-slate-400 w-24 shrink-0 hidden sm:block">{label}</span>
                                    <span className="font-serif text-lg sm:text-xl text-slate-900 grow">{value}</span>
                                    <ArrowUpRight className="size-5 text-slate-300 group-hover:text-slate-900 group-hover:-translate-y-0.5 transition-all shrink-0" />
                                </a>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-slate-500 text-sm mt-6">
                            <p className="flex items-center gap-2">
                                <MapPin size={16} className="text-slate-400" />
                                {CONTACT.locality}
                            </p>
                            <p className="flex items-center gap-2">
                                <Clock size={16} className="text-slate-400" />
                                {CONTACT.hours}
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <LeadForm />
                    </div>
                </div>
            </Section>

            <Section white>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    <div className="lg:w-1/3">
                        <SectionHeading
                            eyebrow="Cosa succede dopo"
                            accent="blue"
                            title={<>Tre passaggi, <br /><span className="italic font-light text-slate-600">ventiquattro ore.</span></>}
                            text="Nessun funnel infinito, nessuna chiamata a freddo la settimana dopo."
                        />
                    </div>

                    {/* Vertical rule threads the three steps together instead of three loose cards. */}
                    <div className="lg:w-2/3 relative flex flex-col">
                        <div className="absolute left-[19px] top-3 bottom-3 w-px bg-stone-200" aria-hidden />

                        {STEPS.map(step => (
                            <div key={step.num} className="relative flex gap-6 pb-10 last:pb-0">
                                <div className="size-10 rounded-full border border-stone-200 bg-white shrink-0 flex items-center justify-center text-sm font-serif font-bold text-slate-400 z-10">
                                    {step.num}
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-xl sm:text-2xl font-serif font-medium text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-slate-600 leading-relaxed max-w-xl">{step.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                    <div className="lg:w-1/3">
                        <SectionHeading
                            eyebrow="Domande Frequenti"
                            accent="orange"
                            title={<>Prima di scriverci, <br /> <span className="italic font-light text-slate-600">forse ti chiedi questo.</span></>}
                            text="Se la tua domanda non è qui, usa il modulo qui sopra: rispondiamo a tutto, anche alle domande scomode."
                        />
                    </div>

                    <div className="lg:w-2/3 flex flex-col">
                        <FAQs />
                        <FaqSchema />
                    </div>
                </div>
            </Section>

            <BreadcrumbSchema name="Contatti" path="/contatti/" />
        </>
    );
}
