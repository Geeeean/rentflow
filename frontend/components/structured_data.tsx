import { CONTACT, CONTACT_HREF, PRIMARY_PHONE } from "@/lib/contact";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { FAQS } from "./faqs";

/**
 * JSON-LD is data, not executable page script, so dangerouslySetInnerHTML is the
 * standard way to emit it — React would otherwise escape the quotes.
 */
const JsonLd = ({ data }: { data: object }) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
);

/** RealEstateAgent is the LocalBusiness subtype that matches this business. */
const OrganizationSchema = () => (
    <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        image: `${SITE_URL}/opengraph-image`,
        email: CONTACT.email,
        telephone: PRIMARY_PHONE,
        vatID: CONTACT.vat,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Perugia",
            addressRegion: "Umbria",
            addressCountry: "IT",
        },
        areaServed: [
            { "@type": "City", name: "Perugia" },
            { "@type": "AdministrativeArea", name: "Umbria" },
        ],
        openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: CONTACT.openingHours.days,
            opens: CONTACT.openingHours.opens,
            closes: CONTACT.openingHours.closes,
        },
        knowsLanguage: "it-IT",
        sameAs: [
            "https://facebook.com",
            "https://instagram.com",
            "https://linkedin.com",
            CONTACT_HREF.whatsapp,
        ],
    }} />
);

/**
 * Built from the same FAQS array the page renders, so the markup can't drift from the
 * visible text — the rule Google enforces for FAQ markup.
 */
const FaqSchema = () => (
    <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map(({ title, desc }) => ({
            "@type": "Question",
            name: title,
            acceptedAnswer: {
                "@type": "Answer",
                text: desc.trim(),
            },
        })),
    }} />
);

/** One per inner page: Home › {name}. `path` is the page's canonical path, trailing slash included. */
const BreadcrumbSchema = ({ name, path }: { name: string, path: string }) => (
    <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
        ],
    }} />
);

/**
 * The services on /servizi, each tied back to the organization by @id. Takes the same array
 * the page renders, so the markup can't drift from the visible text.
 */
const ServicesSchema = ({ services }: { services: { id: string, title: string, text: string }[] }) => (
    <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: services.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
                "@type": "Service",
                "@id": `${SITE_URL}/servizi/#${service.id}`,
                name: service.title,
                description: service.text,
                url: `${SITE_URL}/servizi/#${service.id}`,
                provider: { "@id": `${SITE_URL}/#organization` },
                areaServed: { "@type": "AdministrativeArea", name: "Umbria" },
            },
        })),
    }} />
);

export { OrganizationSchema, FaqSchema, BreadcrumbSchema, ServicesSchema }
