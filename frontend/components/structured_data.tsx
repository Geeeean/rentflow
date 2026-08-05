import { CONTACT, CONTACT_HREF } from "@/lib/contact";
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
        telephone: CONTACT.phone,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Perugia",
            addressRegion: "Umbria",
            addressCountry: "IT",
        },
        areaServed: {
            "@type": "AdministrativeArea",
            name: "Umbria",
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

export { OrganizationSchema, FaqSchema }
