import { Collapsible } from "./collapsible"

const FAQS: { title: string, desc: string | React.JSX.Element }[] = [
    {
        title: "La sublocazione è legale?",
        desc: "Sì, la sublocazione è perfettamente legale. È disciplinata dall’art. 1594 del Codice Civile, che ne consente l’utilizzo purché sia espressamente autorizzata dal proprietario dell’immobile."
    },
    {
        title: "Come fate a garantire i pagamenti?",
        desc: "I pagamenti sono sempre sicuri e anticipati. Le prenotazioni tramite piattaforme OTA vengono incassate prima dell’arrivo dell’ospite, mentre per le prenotazioni dirette richiediamo pagamento anticipato e deposito cauzionale. In questo modo il proprietario ha entrate certe, zero insoluti e una gestione completamente senza pensieri."
    },
    {
        title: "Come siete coperti in caso di danni?",
        desc: "Le principali OTA prevedono polizze per danni e responsabilità; noi integriamo questa copertura con un’ulteriore polizza a favore del proprietario e gestiamo l’intero procedimento di sinistro. In pratica abbassiamo al minimo qualsiasi rischio economico per il proprietario.",
    },
    {
        title: "Il continuo ricambio di ospiti non aumenta l’usura dell’appartamento?",
        desc: `
Escludiamo il rischio sistemico di degrado: il nostro modello prevede controlli e pulizie professionali ad ogni check-out, ispezioni regolari e interventi manutentivi rapidi.

A differenza di un inquilino a lungo termine che può trascurare la manutenzione, la nostra routine operativa mantiene l’appartamento pulito, funzionante e pronto per ospiti di qualità.
Vantaggio per il proprietario: maggiore cura quotidiana, manutenzione preventiva e tempestiva risoluzione di problemi, il risultato è un immobile più preservato e rendimento più stabile.
        `,
    },
]

type Props = {}

const FAQs = (props: Props) => {
    return <>
        {
            FAQS.map(({ title, desc }, index) => {
                return <Collapsible title={title} desc={desc} key={index} />
            })
        }
    </>
}

export { FAQs }
