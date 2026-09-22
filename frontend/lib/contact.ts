/** Single source for the contact details shown in the nav sheet, footer and contact page. */
const CONTACT = {
    email: "info@rentflow.it",
    /** First entry is the primary line: JSON-LD `telephone` and the WhatsApp link use it. */
    phones: [
        { name: "Luca", number: "+39 375 777 4031" },
        { name: "Marco", number: "+39 375 994 6494" },
    ],
    locality: "Perugia, Umbria",
    hours: "Lun–Ven 9:00–19:00",
    /** Machine-readable twin of `hours`, for the JSON-LD — keep the two in step. */
    openingHours: { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    vat: "02597000443",
} as const;

const telHref = (number: string) => `tel:${number.replace(/[^+\d]/g, "")}`;

const PRIMARY_PHONE = CONTACT.phones[0].number;

const CONTACT_HREF = {
    email: `mailto:${CONTACT.email}`,
    whatsapp: `https://wa.me/${PRIMARY_PHONE.replace(/\D/g, "")}`,
} as const;

export { CONTACT, CONTACT_HREF, PRIMARY_PHONE, telHref }
