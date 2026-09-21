import { Hono } from "hono";
import { serve } from "bun";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";
import { secureHeaders } from "hono/secure-headers";
import { validateLead, persistLead, pruneExpiredLeads } from "./leads";
import { sendLeadNotification, mailerConfigured } from "./mailer";

// Railway (and most hosts) assign the port through $PORT; 3001 is the local default.
const PORT = Number(process.env.PORT) || 3001;

// Must match RETENTION_MONTHS in frontend/lib/privacy.ts, which is what the published
// privacy notice tells people.
const RETENTION_MONTHS = 24;

const app = new Hono();

// The frontend is a static export, so Next's headers() can't set these — this process is
// the only place they can come from. Scripts and styles keep 'unsafe-inline' because the
// export hydrates through inline scripts; the policy still blocks third-party origins,
// framing, plugins and off-site form posts.
app.use('*', secureHeaders({
    contentSecurityPolicy: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "data:"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        frameAncestors: ["'self'"],
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    // Social crawlers and chat apps fetch og:image cross-origin; same-origin would block previews.
    crossOriginResourcePolicy: "cross-origin",
    permissionsPolicy: {
        camera: [],
        microphone: [],
        geolocation: [],
    },
}));

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

// Next's image routes (opengraph-image, apple-icon) are exported as extensionless files, which
// serveStatic would send as application/octet-stream — and link previews reject that.
const EXTENSIONLESS_PNG = /\/(opengraph-image|apple-icon)$/;

app.use('/*', serveStatic({
    root: './frontend/',
    onFound: (path, c) => {
        if (EXTENSIONLESS_PNG.test(path)) c.header('Content-Type', 'image/png');
    },
}));

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
