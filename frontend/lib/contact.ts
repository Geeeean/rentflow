/** Single source for the contact details shown in the nav sheet, footer and contact page. */
const CONTACT = {
    email: "info@rentflow.it",
    phone: "+39 075 555 1234",
    locality: "Perugia, Umbria",
    hours: "Lun–Ven 9:00–19:00",
} as const;

const CONTACT_HREF = {
    email: `mailto:${CONTACT.email}`,
    phone: `tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`,
    whatsapp: `https://wa.me/${CONTACT.phone.replace(/\D/g, "")}`,
} as const;

export { CONTACT, CONTACT_HREF }
