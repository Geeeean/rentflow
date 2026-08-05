import { appendFile } from "node:fs/promises";

const LEADS_FILE = process.env.LEADS_FILE ?? "./leads.jsonl";

const MAX_FIELD_LENGTH = 2000;

const REQUIRED_FIELDS = ["name", "email", "telephone", "locality"] as const;

type RequiredField = (typeof REQUIRED_FIELDS)[number];
type LeadField = RequiredField | "note";

type Lead = Record<LeadField, string>;

/** Consent evidence stored beside the data it authorises, per GDPR Art. 7(1). */
type Consent = {
    consent: true,
    privacyPolicyVersion: string,
    consentedAt: string,
};

type ValidationResult =
    | { ok: true, lead: Lead, consent: Consent }
    | { ok: false, errors: Partial<Record<LeadField, string>>, message?: string };

const MESSAGES: Record<RequiredField, string> = {
    name: "Inserisci il tuo nome.",
    email: "Inserisci la tua email.",
    telephone: "Inserisci un recapito telefonico.",
    locality: "Indica la località dell'immobile.",
};

const asString = (value: unknown) => typeof value === "string" ? value.trim() : "";

const validateLead = (body: unknown): ValidationResult => {
    const errors: Partial<Record<LeadField, string>> = {};

    // asString() coerces anything non-string to "", so a non-object body simply fails
    // every required field below — no separate guard needed.
    const input = (body ?? {}) as Record<string, unknown>;
    const lead = { note: asString(input.note) } as Lead;

    for (const field of REQUIRED_FIELDS) {
        const value = asString(input[field]);

        if (!value) errors[field] = MESSAGES[field];
        else if (value.length > MAX_FIELD_LENGTH) errors[field] = "Valore troppo lungo.";

        lead[field] = value;
    }

    if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
        errors.email = "Email non valida.";
    }

    if (lead.note.length > MAX_FIELD_LENGTH) {
        errors.note = "La nota è troppo lunga.";
    }

    if (Object.keys(errors).length > 0) return { ok: false, errors };

    // Server-side consent check: the client gates the button, but a request can be sent
    // without ever touching the UI, and storing personal data without a lawful basis is
    // the failure this prevents.
    if (input.consent !== true) {
        return { ok: false, errors: {}, message: "Consenso al trattamento dei dati mancante." };
    }

    const privacyPolicyVersion = asString(input.privacyPolicyVersion);
    if (!privacyPolicyVersion) {
        return { ok: false, errors: {}, message: "Versione dell'informativa mancante." };
    }

    return {
        ok: true,
        lead,
        consent: { consent: true, privacyPolicyVersion, consentedAt: new Date().toISOString() },
    };
}

// Appends one JSON object per line. Deliberately minimal: there is no database or mail
// provider wired up in this project, so leads land in a file that someone has to read.
// Replacing this body with an email/CRM call is the only change needed to route them elsewhere.
//
// appendFile is one O_APPEND write: constant cost whatever the file already weighs, and
// it can't lose existing records the way a read-then-rewrite can. Bun.write and
// Bun.file().writer() both truncate, so neither is usable here.
const persistLead = async (lead: Lead, consent: Consent) => {
    const record = { receivedAt: new Date().toISOString(), ...lead, ...consent };

    await appendFile(LEADS_FILE, JSON.stringify(record) + "\n");

    // Deliberately no name, email, phone or note in the log. Server logs are copied,
    // shipped and retained on their own schedule, which would put personal data somewhere
    // the retention policy below cannot reach.
    console.log(`[lead] ${record.receivedAt} received (locality: ${lead.locality})`);
}

/**
 * Deletes leads older than the retention window by rewriting the file without them.
 * Run on startup and daily — the privacy notice promises deletion, so it has to actually
 * happen rather than depend on someone remembering.
 */
const pruneExpiredLeads = async (retentionMonths: number) => {
    const file = Bun.file(LEADS_FILE);
    if (!(await file.exists())) return { kept: 0, deleted: 0 };

    const cutoff = new Date();
    cutoff.setMonth(cutoff.getMonth() - retentionMonths);

    const lines = (await file.text()).split("\n").filter(Boolean);
    const kept = lines.filter(line => {
        try {
            return new Date(JSON.parse(line).receivedAt) >= cutoff;
        } catch {
            return true; // never drop a line we failed to parse
        }
    });

    const deleted = lines.length - kept.length;
    if (deleted > 0) await Bun.write(LEADS_FILE, kept.join("\n") + "\n");

    return { kept: kept.length, deleted };
}

export { validateLead, persistLead, pruneExpiredLeads }
export type { Lead, Consent }
