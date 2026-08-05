# rentflow

Sito di Rentflow — gestione immobiliare per affitti brevi e medio termine.

Monorepo Bun con due workspace:

- `frontend/` — Next.js 16 (App Router) esportato come sito statico (`output: "export"`)
- `backend/` — server Hono che serve l'export statico e riceve le richieste di contatto

## Setup

```bash
bun install
```

## Sviluppo

Servono due processi: il frontend gira su `:3000`, il backend su `:3001`.

```bash
cd frontend && bun run dev    # http://localhost:3000
cd backend  && bun run dev    # http://localhost:3001
```

In sviluppo il form di contatto invia a `http://localhost:3001/api/leads` (il backend
autorizza via CORS solo `http://localhost:3000`). In produzione frontend e backend stanno
sulla stessa origine, quindi la chiamata è relativa. Per puntare altrove:
`NEXT_PUBLIC_API_BASE=https://...`.

## Build e produzione

```bash
bun run build   # backend -> dist/index.js, frontend -> dist/frontend/
bun run start   # http://localhost:3001
```

## Pagine

`/` · `/servizi` · `/alloggi` · `/contatti` · `/per-agenzie` · `/about-us` · `/privacy-policy`

## Richieste di contatto

`POST /api/leads` valida i campi (`name`, `email`, `telephone`, `locality` obbligatori,
`note` facoltativo), **richiede il consenso privacy** (`consent: true` +
`privacyPolicyVersion`) e accoda una riga JSON in `leads.jsonl`. Il percorso è relativo alla
working directory del processo — quindi `dist/leads.jsonl` con `bun run start`.
Sovrascrivibile con `LEADS_FILE`: **puntalo fuori da `dist/`**, altrimenti un deploy che
ricrea la cartella cancella i lead.

Ogni lead accettato viene inoltrato via SMTP a `LEAD_NOTIFY_TO`. Copia
`backend/.env.example` in `backend/.env` e compila le credenziali. Senza SMTP configurato il
server parte comunque, salva su file e lo dichiara all'avvio.

### Privacy / GDPR

- Il modulo ha una checkbox di consenso non pre-selezionata che blocca l'invio; il consenso
  è verificato anche lato server.
- Con ogni lead vengono salvati timestamp e versione dell'informativa accettata
  (`frontend/lib/privacy.ts` → `PRIVACY_POLICY_VERSION`): incrementala a ogni modifica
  sostanziale del testo.
- I lead più vecchi di `RETENTION_MONTHS` (24) vengono cancellati all'avvio e ogni 24 ore.
  Il valore è duplicato in `backend/src/index.ts` e deve restare allineato all'informativa.
- I log del server non contengono dati personali (solo data e località).
- `app/privacy-policy/page.tsx` contiene due sezioni marcate **"Da completare prima della
  pubblicazione"**: dati identificativi del titolare ed elenco dei fornitori. Vanno compilate
  e il testo va rivisto da un legale.

## Verifiche

```bash
cd frontend && bunx tsc --noEmit
cd frontend && bun run lint
```
