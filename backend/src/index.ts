import { Hono } from "hono";
import { serve } from "bun";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";
import { validateLead, persistLead, pruneExpiredLeads } from "./leads";
import { sendLeadNotification, mailerConfigured } from "./mailer";

const PORT = 3001

// Must match RETENTION_MONTHS in frontend/lib/privacy.ts, which is what the published
// privacy notice tells people.
const RETENTION_MONTHS = 24;

const app = new Hono();

// Dev only: `next dev` serves the frontend from :3000, so the POST below is cross-origin.
// In production this same process serves the static export, so requests are same-origin.
app.use('/api/*', cors({ origin: ['http://localhost:3000'] }));

app.post('/api/leads', async (c) => {
    let body: unknown;

    try {
        body = await c.req.json();
    } catch {
        return c.json({ message: "Richiesta non valida." }, 400);
    }

    const result = validateLead(body);

    if (!result.ok) {
        return c.json({
            message: result.message ?? "Controlla i campi evidenziati.",
            errors: result.errors,
        }, 400);
    }

    try {
        await persistLead(result.lead, result.consent);
    } catch (error) {
        console.error("[lead] failed to persist:", error);
        return c.json({ message: "Errore interno. Riprova tra poco." }, 500);
    }

    // The lead is already safely on disk, so a mail outage must not turn into a failed
    // submission the visitor is asked to retry — that would only duplicate the record.
    try {
        await sendLeadNotification(result.lead, result.consent);
    } catch (error) {
        console.error("[mail] notification failed, lead is still saved:", error);
    }

    return c.json({ message: "Richiesta ricevuta." });
});

app.use('/*', serveStatic({ root: './frontend/' }));

// This is a multi-page static export, not an SPA: serving index.html for unmatched paths
// would answer every typo and stale link with the home page under HTTP 200, which hides
// broken links from crawlers and users alike. Serve the exported 404 page, with a 404.
app.get('*', async (c) => {
    const notFound = Bun.file('./frontend/404.html');

    if (!(await notFound.exists())) return c.text('Not Found', 404);

    return c.html(await notFound.text(), 404);
});

// Enforce the published retention period on startup and once a day thereafter.
const prune = async () => {
    try {
        const { kept, deleted } = await pruneExpiredLeads(RETENTION_MONTHS);
        if (deleted > 0) console.log(`[retention] deleted ${deleted} lead(s) older than ${RETENTION_MONTHS} months, ${kept} kept`);
    } catch (error) {
        console.error("[retention] prune failed:", error);
    }
};

await prune();
setInterval(prune, 24 * 60 * 60 * 1000);

console.log(`Running server on port: ${PORT}`);
console.log(`Lead email: ${mailerConfigured ? "SMTP configured" : "SMTP NOT configured — leads saved to file only"}`);

serve({ port: PORT, fetch: app.fetch })
