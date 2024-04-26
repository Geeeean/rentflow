import Collapsible from '@/app/components/Collapsible'

const FAQS: { title: string, desc: string | React.JSX.Element }[] = [
    { title: "La sublocazione è legale?", desc: "Assolutamente si, sfatiamo questo mito, l’articolo n.1594 del c.c. lo disciplina. Naturalmente ciò dovrà essere specificato all’interno del contratto." },
    { title: "Come fate a garantire i pagamenti?", desc: "Quando un proprietario decide di affidarsi a noi, la garanzia di pagamento è uno dei nostri punti di forza. Visto che per noi l’appartamento rappresenta una vera e propria attività, prima di prenderlo in affitto, analizziamo la zona e i competitors, infine  procederemo con la firma solamente se riteniamo che quella zona/città possa realmente procurarci degli introiti, proprio per questo è nel nostro massimo interesse mantenere l’appartamento per un lungo periodo, in modo tale garantire sicurezza e stabilità al proprietario." },
    {
        title: "Come fate ad assicurare i danni all’appartamento?",
        desc: <>
            <p>Le piattaforme di cui ci serviamo includono un l’assicurazione per eventuali  danni agli ospiti e all’immobile:</p>
            <ul className="list-disc list-inside">
                <li className="ml-2">
                    Protezione per danni all’immobile e al contenuto fino a 3.000.000 USD (se gli ospiti non ti risarciscono per i danni da loro causati al tuo alloggio e ai tuoi beni)
                </li>
                <li className="ml-2">
                    Assicurazione di responsabilità civile fino a 1.000.000 USD (protezione nel raro caso in cui un ospite si faccia male o i suoi effetti personali vengano danneggiati o rubati)
                </li>
            </ul>
            <p className="mt-2">Inoltre qualora il proprietario non si senta abbastanza al sicuro, provvederemo a istituire un’ulteriore polizza assicurativa a suo favore, poiché è nel nostro massimo interesse garantire sicurezza e stabilità.</p>
        </>
    },
    { title: "Cambiando sempre ospiti non c’è il rischio che l’appartamento si rovini prima rispetto ad un affitto tradizionale?", desc: "Assolutamente no, anzi tutto il contrario. Proprio perché è nel nostro interesse mantenerlo pulito e perfetto, pronto ad ospitare nuovi clienti; inoltre, per lo stesso motivo, nel malaugurato caso in cui vengano recati danni all’interno dell’ alloggio, la prima cosa alla quale penseremo noi sarà porvi rimedio. Niente a che vedere con un affitto tradizionale." }
]

type Props = {}

const FAQs = (props: Props) => {
    return <div className="mt-8 w-full">
        {
            FAQS.map(({ title, desc }, index) => {
                return <Collapsible title={title} desc={desc} key={index} />
            })
        }
    </div>
}

export default FAQs