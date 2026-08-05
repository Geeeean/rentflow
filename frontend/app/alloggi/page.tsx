import type { Metadata } from "next";
import { BedDouble, MapPin, Star, TrendingUp, Users } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { CtaPill } from "@/components/cta_pill";
import { ClosingCta } from "@/components/closing_cta";
import { StatsPanel } from "@/components/stats_panel";

export const metadata: Metadata = {
    title: "Alloggi",
    description: "Gli immobili che gestiamo: selezionati, ottimizzati con pricing dinamico e controllo qualità continuo.",
    alternates: { canonical: "/alloggi/" },
    openGraph: { title: "Alloggi", description: "Gli immobili che gestiamo: selezionati, ottimizzati con pricing dinamico e controllo qualità continuo.", url: "/alloggi/" },
};

type Listing = {
    name: string,
    locality: string,
    image: string,
    guests: number,
    rooms: number,
    occupancy: string,
    rating: string,
    text: string,
}

// Placeholder portfolio: there is no properties API or CMS behind the site yet.
// Swap this array for a fetch/import once one exists — the card below is the only consumer.
const LISTINGS: Listing[] = [
    {
        name: "Attico Duomo",
        locality: "Perugia, Centro Storico",
        image: "/interior1.webp",
        guests: 4,
        rooms: 2,
        occupancy: "91%",
        rating: "4.9",
        text: "Ultimo piano con vista sui tetti del centro. Ristrutturato e riposizionato sulla fascia business, ha chiuso l'anno sopra la media di zona.",
    },
    {
        name: "Loft Sant'Ercolano",
        locality: "Perugia, Sant'Ercolano",
        image: "/interior3.webp",
        guests: 2,
        rooms: 1,
        occupancy: "88%",
        rating: "4.8",
        text: "Monolocale open space per soggiorni brevi. Pricing dinamico aggressivo nei weekend e sui periodi fieristici.",
    },
    {
        name: "Casa Borgo XX Giugno",
        locality: "Perugia, Borgo XX Giugno",
        image: "/interior4.webp",
        guests: 6,
        rooms: 3,
        occupancy: "84%",
        rating: "4.9",
        text: "Trilocale vicino all'università, gestito in medio termine su contratti transitori per studenti e docenti in visita.",
    },
    {
        name: "Residenza Monteluce",
        locality: "Perugia, Monteluce",
        image: "/interior2.webp",
        guests: 4,
        rooms: 2,
        occupancy: "86%",
        rating: "4.7",
        text: "Appartamento in complesso recente, arredato dopo la nostra analisi di mercato per intercettare la clientela business.",
    },
    {
        name: "Villa Umbra",
        locality: "Corciano, Umbria",
        image: "/flat.webp",
        guests: 8,
        rooms: 4,
        occupancy: "78%",
        rating: "5.0",
        text: "Immobile fuori città con giardino, posizionato sulla clientela leisure con soggiorni lunghi in alta stagione.",
    },
    {
        name: "Suite Etrusca",
        locality: "Perugia, Porta Sole",
        image: "/interior5.webp",
        guests: 2,
        rooms: 1,
        occupancy: "93%",
        rating: "4.9",
        text: "Il nostro immobile con l'occupazione più alta del portafoglio. Alta rotazione, recensioni costantemente sopra il 4.8.",
    },
];

const PORTFOLIO_STATS = [
    { val: "87%", lab: "Occupazione media" },
    { val: "4.85", lab: "Rating medio" },
    { val: "50+", lab: "Immobili gestiti" },
    { val: "< 1h", lab: "Tempo di risposta" },
];

const ListingCard = ({ listing }: { listing: Listing }) => {
    return (
        <div className="bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
            {/* A real <img>, not a CSS background: these are content, so they need alt text
                and they're the only images Google can index. Lazy loading also stops all six
                multi-MB files racing the critical path. */}
            {/* eslint-disable-next-line @next/next/no-img-element --
                next/image cannot optimise here: next.config.ts sets output:"export" with
                images.unoptimized, so <Image> would add markup for zero benefit. */}
            <img
                src={listing.image}
                srcSet={`${listing.image.replace(".webp", "-800.webp")} 800w, ${listing.image} 1600w`}
                sizes="(min-width: 1024px) 405px, (min-width: 768px) 45vw, 92vw"
                alt={`${listing.name} — ${listing.locality}`}
                width={800}
                height={448}
                loading="lazy"
                decoding="async"
                className="h-56 w-full object-cover"
            />

            <div className="p-8 flex flex-col gap-4 grow">
                <div>
                    <h3 className="font-serif text-2xl font-medium text-slate-900 mb-1">{listing.name}</h3>
                    <p className="text-slate-500 flex items-center gap-1.5 text-sm">
                        <MapPin size={14} />
                        {listing.locality}
                    </p>
                </div>

                <p className="text-slate-600 leading-relaxed grow">{listing.text}</p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-stone-100">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-50 text-slate-600 text-sm">
                        <Users size={14} /> {listing.guests} ospiti
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-50 text-slate-600 text-sm">
                        <BedDouble size={14} /> {listing.rooms} camere
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                        <TrendingUp size={14} /> {listing.occupancy}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-medium">
                        <Star size={14} fill="currentColor" /> {listing.rating}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default function Alloggi() {
    return (
        <>
            <Section>
                <div className="bg-[url('/interior5.webp')] bg-center bg-cover overflow-hidden rounded-2xl min-h-[70vh] w-full relative flex flex-col justify-between p-6 lg:p-10">
                    <div className="absolute inset-0 bg-slate-950/30" />

                    <div className="relative z-10 max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-widest text-white/80 mb-3 block">Il nostro portafoglio</span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white mb-6">
                            Immobili selezionati, <br />
                            <span className="italic">gestiti e ottimizzati.</span>
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium">
                            Ogni alloggio è il risultato di strategie di pricing, cura operativa e analisi dei dati
                            orientate alla massima performance.
                        </p>
                    </div>

                    <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-10">
                        <div className="flex flex-col lg:flex-row gap-2">
                            <div className="max-w-sm bg-slate-50/30 font-medium p-3 rounded-md text-white shadow backdrop-blur-xl">
                                Immobili gestiti secondo standard operativi certificati, con pricing dinamico, controllo qualità continuo e analisi dei dati orientata alla redditività.
                            </div>
                            <div className="max-w-xs hidden lg:block bg-slate-50/30 font-medium p-3 rounded-md text-white shadow-inner backdrop-blur-xl">
                                Il risultato è un portafoglio con occupazione elevata, recensioni eccellenti e rendimenti ottimizzati.
                            </div>
                        </div>

                        <CtaPill label="Affida il tuo immobile" href="/contatti" variant="light" className="shrink-0" />
                    </div>
                </div>
            </Section>

            <Section white>
                <SectionHeading
                    center
                    className="mb-16"
                    eyebrow="Gli alloggi"
                    accent="blue"
                    title="Una selezione dal portafoglio"
                    text="Immobili reali in gestione, con i numeri che producono. Nessuna vetrina: quello che vedi è quello che gestiamo."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {LISTINGS.map(listing => <ListingCard key={listing.name} listing={listing} />)}
                </div>
            </Section>

            <StatsPanel
                eyebrow={<span className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-3 block">Standard operativi</span>}
                title="Come teniamo alti questi numeri."
                text={<>L&rsquo;occupazione media del portafoglio non è fortuna: è la conseguenza di un processo ripetuto su ogni immobile, ogni mese.</>}
                stats={PORTFOLIO_STATS}
            />

            <ClosingCta
                eyebrow="Il prossimo potrebbe essere il tuo"
                title="Quanto renderebbe il tuo immobile?"
                text="Ti diamo una valutazione gratuita entro 24 ore. Se non troviamo margine positivo, te lo diciamo."
                cta="Richiedi la valutazione"
                href="/contatti"
            />
        </>
    );
}
