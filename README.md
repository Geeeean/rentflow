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

Il server ascolta sulla porta `$PORT` se definita, altrimenti `3001`.

## Deploy su Railway

La configurazione di build e avvio è versionata in `railway.json`: Railway la legge a ogni
deploy, quindi non va ripetuta nel pannello. Build con `bun run build`, avvio con
`bun run start`, healthcheck su `/`.

### Primo setup (una volta sola)

1. **New Project → Deploy from GitHub repo** → `Geeeean/rentflow`. Lascia la *Root Directory*
   vuota: il build parte dalla radice del monorepo.
2. **Settings → Source → Branch**: `master`. Con il repo collegato, *ogni push su `master`
   avvia un deploy automatico*. Gli altri branch non vengono deployati.
3. **Volume** (tasto destro sul servizio → *Attach Volume*), mount path `/data`. Senza volume
   il filesystem è effimero e **ogni deploy cancella i lead**.
4. **Variables**:

   | Variabile | Valore |
   |---|---|
   | `LEADS_FILE` | `/data/leads.jsonl` |
   | `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | credenziali SMTP (vedi `backend/.env.example`) |
   | `LEAD_NOTIFY_TO`, `LEAD_NOTIFY_FROM` | destinatario e mittente delle notifiche |

   `PORT` la imposta Railway: non definirla.
5. **Settings → Networking → Custom Domain**: aggiungi `rentflow.it` (e `www.rentflow.it`) e
   crea presso il registrar i record DNS che Railway indica. Il certificato HTTPS è automatico.

### Dopo ogni deploy

```bash
bun run indexnow   # notifica a Bing & co. gli URL della sitemap pubblicata
```

### Note

- La sitemap ricava `lastmod` dalla cronologia git di ogni pagina. Se l'ambiente di build non
  ha la cartella `.git`, la sitemap esce senza `lastmod` (vedi `frontend/app/sitemap.ts`):
  meglio nessuna data che una sbagliata.
- Gli header di sicurezza (CSP, HSTS, ecc.) li imposta il backend Hono, non Railway: se
  aggiungi script o risorse di terze parti (analytics, mappe, font esterni) va aggiornata la
  CSP in `backend/src/index.ts`, altrimenti il browser li blocca.

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
