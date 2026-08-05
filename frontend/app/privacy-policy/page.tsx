import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/section";
import { CONTACT, CONTACT_HREF } from "@/lib/contact";
import { PRIVACY_POLICY_VERSION, RETENTION_MONTHS } from "@/lib/privacy";

const DESCRIPTION = "Informativa privacy di Rentflow ai sensi degli artt. 13 e 14 del Regolamento UE 2016/679 (GDPR).";

export const metadata: Metadata = {
    title: "Informativa privacy",
    description: DESCRIPTION,
    alternates: { canonical: "/privacy-policy/" },
    openGraph: { title: "Informativa privacy", description: DESCRIPTION, url: "/privacy-policy/" },
};

const H2 = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 mt-12 mb-4">{children}</h2>
);

const P = ({ children }: { children: React.ReactNode }) => (
    <p className="text-slate-600 leading-relaxed mb-4">{children}</p>
);

const LI = ({ children }: { children: React.ReactNode }) => (
    <li className="text-slate-600 leading-relaxed mb-2">{children}</li>
);

export default function PrivacyPolicy() {
    return (
        <Section>
            <article className="max-w-3xl mx-auto">
                <span className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-3 block">Privacy</span>
                <h1 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-4">Informativa privacy</h1>
                <p className="text-slate-500 mb-2">
                    Versione {PRIVACY_POLICY_VERSION}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Informativa resa ai sensi degli artt. 13 e 14 del Regolamento UE 2016/679 (GDPR) a chi
                    invia una richiesta tramite i moduli di questo sito.
                </p>

                <H2>1. Titolare del trattamento</H2>
                <P>
                    Il titolare del trattamento è Rentflow, con sede in Perugia (Umbria).
                    Per qualsiasi questione relativa ai tuoi dati puoi scrivere a{" "}
                    <a href={CONTACT_HREF.email} className="font-semibold text-slate-900 underline underline-offset-2">{CONTACT.email}</a>{" "}
                    o telefonare al{" "}
                    <a href={CONTACT_HREF.phone} className="font-semibold text-slate-900 underline underline-offset-2">{CONTACT.phone}</a>.
                </P>
                <P>
                    <strong className="text-slate-900">Da completare prima della pubblicazione:</strong> ragione
                    sociale completa, indirizzo della sede legale, P.IVA e codice fiscale, ed eventuale
                    responsabile della protezione dei dati (DPO), se nominato.
                </P>

                <H2>2. Quali dati raccogliamo</H2>
                <P>Tramite il modulo di richiesta valutazione raccogliamo esclusivamente:</P>
                <ul className="list-disc pl-6 mb-4">
                    <LI>nome e cognome;</LI>
                    <LI>indirizzo email;</LI>
                    <LI>numero di telefono;</LI>
                    <LI>località dell&apos;immobile;</LI>
                    <LI>eventuali note che scegli di inserire liberamente.</LI>
                </ul>
                <P>
                    Registriamo inoltre la data e l&apos;ora dell&apos;invio e la versione di questa informativa
                    che hai accettato, per poter dimostrare il consenso prestato.
                </P>
                <P>
                    Non raccogliamo categorie particolari di dati (art. 9 GDPR). Ti chiediamo di non inserire
                    nel campo note informazioni sensibili o dati di terzi.
                </P>

                <H2>3. Perché li trattiamo e su quale base giuridica</H2>
                <P>
                    I dati sono trattati per rispondere alla tua richiesta e fornirti la valutazione gratuita
                    dell&apos;immobile. La base giuridica è il tuo <strong className="text-slate-900">consenso</strong>{" "}
                    (art. 6.1.a GDPR), che presti spuntando la casella nel modulo, e l&apos;esecuzione di misure
                    precontrattuali adottate su tua richiesta (art. 6.1.b GDPR).
                </P>
                <P>
                    Non utilizziamo i tuoi dati per invio di comunicazioni commerciali non richieste, né per
                    profilazione o processi decisionali automatizzati.
                </P>

                <H2>4. Per quanto tempo li conserviamo</H2>
                <P>
                    Conserviamo i dati per <strong className="text-slate-900">{RETENTION_MONTHS} mesi</strong> dalla
                    data di invio della richiesta, dopodiché vengono cancellati. Se dalla richiesta nasce un
                    rapporto contrattuale, i dati relativi a quel rapporto sono conservati per i termini
                    previsti dalla legge (in particolare per obblighi fiscali e contabili).
                </P>

                <H2>5. A chi vengono comunicati</H2>
                <P>
                    I dati sono trattati dal personale autorizzato del titolare e non sono ceduti né venduti a
                    terzi. Possono essere trattati dai fornitori tecnici che ospitano il sito e il servizio di
                    posta elettronica, nominati responsabili del trattamento ai sensi dell&apos;art. 28 GDPR.
                </P>
                <P>
                    <strong className="text-slate-900">Da completare prima della pubblicazione:</strong> elenco
                    dei fornitori effettivamente utilizzati (hosting e posta), con indicazione di eventuali
                    trasferimenti di dati al di fuori dello Spazio Economico Europeo e delle relative garanzie.
                </P>

                <H2>6. I tuoi diritti</H2>
                <P>In qualsiasi momento puoi esercitare i diritti previsti dagli artt. 15-22 GDPR:</P>
                <ul className="list-disc pl-6 mb-4">
                    <LI>accedere ai tuoi dati e ottenerne una copia;</LI>
                    <LI>chiederne la rettifica o la cancellazione;</LI>
                    <LI>chiedere la limitazione del trattamento o opporti ad esso;</LI>
                    <LI>ricevere i dati in formato strutturato e leggibile (portabilità);</LI>
                    <LI>revocare il consenso in qualsiasi momento, senza che ciò pregiudichi la liceità del trattamento effettuato prima della revoca.</LI>
                </ul>
                <P>
                    Per esercitarli scrivi a{" "}
                    <a href={CONTACT_HREF.email} className="font-semibold text-slate-900 underline underline-offset-2">{CONTACT.email}</a>.
                    Rispondiamo entro un mese dalla richiesta.
                </P>
                <P>
                    Hai inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali
                    (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 underline underline-offset-2">garanteprivacy.it</a>).
                </P>

                <H2>7. Cookie</H2>
                <P>
                    Questo sito non utilizza cookie di profilazione, né strumenti di analisi o tracciamento di
                    terze parti. Non viene quindi mostrato alcun banner di consenso ai cookie.
                </P>
                <P>
                    <strong className="text-slate-900">Nota:</strong> se in futuro verranno aggiunti strumenti
                    di analisi, pixel pubblicitari o servizi di terze parti, questa sezione dovrà essere
                    aggiornata e sarà necessario un banner di consenso preventivo.
                </P>

                <H2>8. Modifiche</H2>
                <P>
                    Eventuali aggiornamenti di questa informativa saranno pubblicati su questa pagina con una
                    nuova data di versione. La versione accettata al momento dell&apos;invio viene registrata
                    insieme alla richiesta.
                </P>

                <div className="mt-12 pt-8 border-t border-stone-200">
                    <Link href="/contatti" className="font-semibold text-slate-900 underline underline-offset-4">
                        Torna ai contatti
                    </Link>
                </div>
            </article>
        </Section>
    );
}
