/** Single source for the contact details shown in the nav sheet, footer and contact page. */
const CONTACT = {
    email: "info@rentflow.it",
    phone: "+39 339 883 6017",
    locality: "Perugia, Umbria",
    hours: "Lun–Ven 9:00–19:00",
    /** Machine-readable twin of `hours`, for the JSON-LD — keep the two in step. */
    openingHours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    vat: "02597000443",
} as const;

const CONTACT_HREF = {
    email: `mailto:${CONTACT.email}`,
    phone: `tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`,
    whatsapp: `https://wa.me/${CONTACT.phone.replace(/\D/g, "")}`,
} as const;

export { CONTACT, CONTACT_HREF }
