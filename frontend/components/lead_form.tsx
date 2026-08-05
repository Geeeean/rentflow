"use client"

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PRIVACY_POLICY_VERSION, RETENTION_MONTHS } from "@/lib/privacy";

// In production the Hono backend serves this static export itself, so the POST is
// same-origin and the base stays empty. Under `next dev` the frontend is on :3000 and the
// backend on :3001, hence the dev fallback. Override with NEXT_PUBLIC_API_BASE if needed.
const API_BASE = process.env.NEXT_PUBLIC_API_BASE
    ?? (process.env.NODE_ENV === "development" ? "http://localhost:3001" : "");

type FieldId = "name" | "email" | "telephone" | "locality" | "note";

const FIELDS: { id: FieldId, label: string, placeholder: string, type?: string }[] = [
    { id: "name", label: "NOME E COGNOME", placeholder: "Mario Rossi" },
    { id: "email", label: "EMAIL", placeholder: "mario.rossi@gmail.com", type: "email" },
    { id: "telephone", label: "TELEFONO", placeholder: "+39 3335004460" },
    { id: "locality", label: "LOCALITA'", placeholder: "Perugia, Centro" },
];

const EMPTY: Record<FieldId, string> = { name: "", email: "", telephone: "", locality: "", note: "" };

// Kept in step with MAX_FIELD_LENGTH in backend/src/leads.ts — without it, an overlong
// note only fails after a round trip, through a different error path than every other rule.
const MAX_FIELD_LENGTH = 2000;

const validate = (values: Record<FieldId, string>) => {
    const errors: Partial<Record<FieldId, string>> = {};

    for (const [id, value] of Object.entries(values) as [FieldId, string][]) {
        if (value.length > MAX_FIELD_LENGTH) errors[id] = "Valore troppo lungo.";
    }

    if (!values.name.trim()) errors.name = "Inserisci il tuo nome.";
    if (!values.email.trim()) errors.email = "Inserisci la tua email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Email non valida.";
    if (!values.telephone.trim()) errors.telephone = "Inserisci un recapito telefonico.";
    if (!values.locality.trim()) errors.locality = "Indica la località dell'immobile.";

    return errors;
}

type Props = {
    className?: string,
}

const LeadForm = ({ className }: Props) => {
    const [values, setValues] = useState<Record<FieldId, string>>(EMPTY);
    const [errors, setErrors] = useState<Partial<Record<FieldId, string>>>({});
    const [consent, setConsent] = useState(false);
    const [consentError, setConsentError] = useState<string>("");
    const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
    const [message, setMessage] = useState<string>("");

    const set = (id: FieldId, value: string) => {
        setValues(prev => ({ ...prev, [id]: value }));
        setErrors(prev => ({ ...prev, [id]: undefined }));
        // Without this a server error stays pinned under the button while the user is busy
        // fixing the very fields it complained about.
        setStatus(prev => prev === "error" ? "idle" : prev);
        setMessage("");
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const found = validate(values);
        setErrors(found);

        // Consent must be an affirmative act (Art. 4(11)) — so it gates submission rather
        // than being assumed, and the box is never pre-ticked.
        setConsentError(consent ? "" : "Devi accettare l'informativa privacy per procedere.");

        if (Object.keys(found).length > 0 || !consent) return;

        setStatus("pending");
        setMessage("");

        try {
            const res = await fetch(`${API_BASE}/api/leads`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // The consent evidence travels with the data it authorises.
                body: JSON.stringify({ ...values, consent, privacyPolicyVersion: PRIVACY_POLICY_VERSION }),
            });

            if (!res.ok) {
                const body = await res.json().catch(() => null);
                if (body?.errors) setErrors(body.errors);
                setStatus("error");
                setMessage(body?.message ?? "Non siamo riusciti a inviare la richiesta. Riprova tra poco.");
                return;
            }

            setValues(EMPTY);
            setConsent(false);
            setStatus("success");
            setMessage("Richiesta inviata. Ti ricontattiamo entro 24 ore.");
        } catch {
            setStatus("error");
            setMessage("Non siamo riusciti a inviare la richiesta. Riprova tra poco.");
        }
    }

    if (status === "success") {
        return (
            <div className={cn("bg-white border border-stone-100 p-6 sm:p-10 rounded-2xl shadow-lg flex flex-col gap-4 justify-center", className)}>
                <p className="font-serif text-2xl text-slate-900">Grazie, ci siamo.</p>
                <p className="text-slate-600">{message}</p>
                <button
                    type="button"
                    onClick={() => { setStatus("idle"); setMessage(""); }}
                    className="text-sm font-semibold text-slate-900 underline underline-offset-4 w-fit"
                >
                    Invia un&apos;altra richiesta
                </button>
            </div>
        )
    }

    return (
        <form noValidate onSubmit={onSubmit} className={cn("@container bg-white border border-stone-100 p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col gap-5", className)}>
            <div className="mb-1">
                <p className="font-serif text-2xl text-slate-900">Richiedi la valutazione <span className="font-medium">gratuita</span></p>
                <p className="text-slate-400 font-medium text-sm">
                    Ricevi il report Pal. personalizzato entro 24 ore. Se non troviamo margine positivo, ti diciamo perché. Zero perdite di tempo
                </p>
            </div>

            <div className="grid grid-cols-1 @sm:grid-cols-2 gap-x-4 gap-y-5">
            {FIELDS.map(field => (
                <div key={field.id} className="flex flex-col gap-2">
                    <Label htmlFor={field.id} className="font-semibold">{field.label}</Label>
                    <Input
                        id={field.id}
                        type={field.type ?? "text"}
                        placeholder={field.placeholder}
                        value={values[field.id]}
                        onChange={e => set(field.id, e.target.value)}
                        aria-invalid={Boolean(errors[field.id])}
                        aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                    />
                    {errors[field.id] && (
                        <p id={`${field.id}-error`} className="text-destructive text-sm">{errors[field.id]}</p>
                    )}
                </div>
            ))}
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="note" className="font-semibold">NOTA (FACOLTATIVA)</Label>
                <Textarea
                    id="note"
                    rows={2}
                    placeholder="Tipo immobile, metratura, camere, ..."
                    value={values.note}
                    onChange={e => set("note", e.target.value)}
                    className="min-h-0"
                />
            </div>

            {/* Art. 13 requires the essentials to be given *at* collection, not only behind
                a link — hence the short notice here plus the full informativa linked out. */}
            <div className="flex flex-col gap-2 border-t border-stone-100 pt-5">
                <label htmlFor="consent" className="flex gap-3 items-start cursor-pointer group">
                    <input
                        id="consent"
                        type="checkbox"
                        checked={consent}
                        onChange={e => { setConsent(e.target.checked); setConsentError(""); }}
                        aria-invalid={Boolean(consentError)}
                        aria-describedby={consentError ? "consent-error" : "consent-note"}
                        className="mt-1 size-4 shrink-0 accent-slate-900 cursor-pointer"
                    />
                    <span className="text-sm text-slate-600 leading-relaxed">
                        Ho letto l&apos;<Link href="/privacy-policy" className="font-semibold text-slate-900 underline underline-offset-2">informativa privacy</Link>{" "}
                        e acconsento al trattamento dei miei dati per essere ricontattato in merito a questa richiesta.
                    </span>
                </label>

                {consentError
                    ? <p id="consent-error" className="text-destructive text-sm">{consentError}</p>
                    : (
                        <p id="consent-note" className="text-slate-400 text-xs leading-relaxed">
                            Titolare: Rentflow, Perugia (info@rentflow.it). Dati usati solo per rispondere alla
                            tua richiesta, conservati {RETENTION_MONTHS} mesi, mai ceduti a terzi. Puoi accedere,
                            rettificare o cancellare i tuoi dati in qualsiasi momento.
                        </p>
                    )}
            </div>

            <div className="w-full text-center">
                <Button type="submit" disabled={status === "pending"} className="w-full bg-slate-900">
                    {status === "pending" ? "Invio in corso..." : "Richiedi valutazione gratuita"}
                </Button>
                {message
                    ? <p className="text-destructive text-sm mt-1">{message}</p>
                    : <p className="text-slate-400 text-sm">Nessuna email promozionale.</p>}
            </div>
        </form>
    )
}

export { LeadForm }
