import type { Metadata } from "next";
import { ArrowUpRight, BedDouble, MapPin, Star, Users } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { CtaPill } from "@/components/cta_pill";
import { ClosingCta } from "@/components/closing_cta";
import { StatsPanel } from "@/components/stats_panel";
import { BreadcrumbSchema } from "@/components/structured_data";

const TITLE = "Alloggi in gestione a Perugia";
const DESCRIPTION = "Gli appartamenti e i casali che gestiamo a Perugia, con valutazioni e recensioni reali degli ospiti Airbnb. Occupazione media del portafoglio 87%.";

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: "/alloggi/" },
    openGraph: { title: TITLE, description: DESCRIPTION, url: "/alloggi/" },
};

type Listing = {
    name: string,
    locality: string,
    image: string,
    guests: number,
    rooms: number,
    rating: string,
    reviews: number,
    url: string,
    text: string,
}

// Mirrors the live Airbnb listings: rating and review counts are copied by hand, so refresh
// them from each `url` when they drift. Photos are local copies in /public/alloggi.
const LISTINGS: Listing[] = [
    {
        name: "Suite Porta Sole",
        locality: "Perugia, Porta Sole",
        image: "/alloggi/suite-porta-sole.webp",
        guests: 4,
        rooms: 2,
        rating: "5.0",
        reviews: 7,
        url: "https://www.airbnb.it/rooms/1707290393334522926",
        text: "Appartamento elegante in un palazzo storico del centro, con due camere matrimoniali, due bagni completi e terrazza privata.",
    },
    {
        name: "Loft di Design",
        locality: "Perugia, Centro Storico",
        image: "/alloggi/loft-di-design.webp",
        guests: 6,
        rooms: 2,
        rating: "4.85",
        reviews: 46,
        url: "https://www.airbnb.it/rooms/1577498915137579718",
        text: "Loft luminoso a soffitti alti con camere sul soppalco. Parcheggio privato fuori dalla ZTL, raro in pieno centro.",
    },
    {
        name: "Casa Sunflower",
        locality: "Perugia, Pellini",
        image: "/alloggi/casa-sunflower.webp",
        guests: 6,
        rooms: 3,
        rating: "4.71",
        reviews: 113,
        url: "https://www.airbnb.it/rooms/1194832013256886000",
        text: "Su due livelli, con finiture in legno e balcone vista valle. Parcheggio privato e aria condizionata, a 5 minuti dal centro con le scale mobili.",
    },
    {
        name: "Appartamento San Francesco",
        locality: "Perugia, San Francesco",
        image: "/alloggi/appartamento-san-francesco.webp",
        guests: 6,
        rooms: 2,
        rating: "4.52",
        reviews: 50,
        url: "https://www.airbnb.it/rooms/1458798616243619265",
        text: "Nel centro storico a due passi da San Francesco al Prato: due camere matrimoniali, divano letto e due bagni moderni.",
    },
    {
        name: "Casale Strozzacapponi",
        locality: "Strozzacapponi, Perugia",
        image: "/alloggi/casale-strozzacapponi.webp",
        guests: 4,
        rooms: 1,
        rating: "5.0",
        reviews: 6,
        url: "https://www.airbnb.it/rooms/1729085681034357980",
        text: "Casale umbro appena ristrutturato con vista sulla campagna, a 5 minuti dall'ospedale. Parcheggio privato gratuito.",
    },
];

const PORTFOLIO_STATS = [
    { val: "87%", lab: "Occupazione media" },
    { val: "4.82", lab: "Rating medio" },
    { val: "50+", lab: "Immobili gestiti" },
    { val: "< 1h", lab: "Tempo di risposta" },
];

const ListingCard = ({ listing }: { listing: Listing }) => {
    return (
        <div className="bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
            {/* A real <img>, not a CSS background: these are content, so they need alt text
                and they're the only images Google can index. Lazy loading also stops all six
                files racing the critical path. */}
            {/* eslint-disable-next-line @next/next/no-img-element --
                next/image cannot optimise here: next.config.ts sets output:"export" with
                images.unoptimized, so <Image> would add markup for zero benefit. */}
            <img
                src={listing.image}
                srcSet={`${listing.image.replace(".webp", "-800.webp")} 800w, ${listing.image} 1440w`}
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
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-sm font-medium">
                        <Star size={14} fill="currentColor" /> {listing.rating} · {listing.reviews} recensioni
                    </span>
                </div>

                <a
                    href={listing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-slate-900 hover:text-slate-600 transition-colors w-fit"
                >
                    Vedi su Airbnb <ArrowUpRight size={16} />
                </a>
            </div>
        </div>
    )
}

export default function Alloggi() {
    return (
        <>
            <Section>
                <div className="overflow-hidden rounded-2xl min-h-[70vh] w-full relative flex flex-col justify-between p-6 lg:p-10">
                    {/* A real <img> rather than a CSS background: this is the LCP element, and only
                        markup lets the preload scanner find it early and fetch it at high priority. */}
                    {/* eslint-disable-next-line @next/next/no-img-element -- see ListingCard */}
                    <img
                        src="/interior5.webp"
                        srcSet="/interior5-800.webp 800w, /interior5.webp 1600w"
                        sizes="(min-width: 1280px) 1200px, 94vw"
                        alt=""
                        fetchPriority="high"
                        decoding="async"
                        className="absolute inset-0 size-full object-cover"
                    />
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
                    text="Immobili reali in gestione, con le recensioni dei loro ospiti. Nessuna vetrina: quello che vedi è quello che gestiamo."
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

            <BreadcrumbSchema name="Alloggi" path="/alloggi/" />
        </>
    );
}
