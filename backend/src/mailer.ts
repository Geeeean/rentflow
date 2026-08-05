import { createTransport, type Transporter } from "nodemailer";
import type { Consent, Lead } from "./leads";

/**
 * Sends each lead to the team mailbox over SMTP.
 *
 * Uses your own mail host rather than a transactional provider on purpose: it keeps
 * personal data inside infrastructure you already control, so there's no additional
 * processor to name in the privacy notice or sign a DPA with.
 *
 * Unconfigured is a valid state — in dev, or before credentials exist, the lead is still
 * persisted and the send is skipped rather than failing the request.
 */
const {
    SMTP_HOST,
    SMTP_PORT = "587",
    SMTP_USER,
    SMTP_PASS,
    LEAD_NOTIFY_TO = "info@rentflow.it",
    LEAD_NOTIFY_FROM,
} = process.env;

const configured = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

let transporter: Transporter | null = null;

const getTransporter = () => {
    if (!configured) return null;
    // Built once and reused: a transporter keeps a connection pool, so creating one per
    // request would open a new SMTP session for every submission.
    transporter ??= createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    return transporter;
}

const body = (lead: Lead, consent: Consent) => [
    `Nome:      ${lead.name}`,
    `Email:     ${lead.email}`,
    `Telefono:  ${lead.telephone}`,
    `Località:  ${lead.locality}`,
    ``,
    `Note:`,
    lead.note || "(nessuna)",
    ``,
    `—`,
    `Consenso prestato: ${consent.consentedAt}`,
    `Informativa versione: ${consent.privacyPolicyVersion}`,
].join("\n");

const sendLeadNotification = async (lead: Lead, consent: Consent) => {
    const mail = getTransporter();

    if (!mail) {
        console.warn("[mail] SMTP not configured — lead saved to file only");
        return false;
    }

    await mail.sendMail({
        from: LEAD_NOTIFY_FROM ?? SMTP_USER,
        to: LEAD_NOTIFY_TO,
        // Lets the team hit reply and land in the prospect's inbox directly.
        replyTo: `${lead.name} <${lead.email}>`,
        subject: `Nuova richiesta di valutazione — ${lead.locality}`,
        text: body(lead, consent),
    });

    return true;
}

export { sendLeadNotification, configured as mailerConfigured }
