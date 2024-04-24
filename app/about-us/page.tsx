"use client"

import { useContext } from 'react'
import { WrapperContext } from '../components/Wrapper'

type Props = {}

// Eccoci qui: siamo Marco Petrelli e Luca Straccia, due giovani intraprendenti immersi nel mondo 
// dell'immobiliare da quasi tre anni, focalizzati principalmente sugli affitti brevi. 
// Unendo le nostre passioni e competenze, abbiamo dato vita a un progetto a cui crediamo 
// fortemente e che vogliamo far crescere costantemente, con il fine di diventare un punto di riferimento nel settore.

// Originari della provincia di Ascoli Piceno, precisamente di Cupra Marittima e Grottammare, 
// abbiamo iniziato la nostra avventura gestendo appartamenti nelle nostre zone d'origine, ottenendo 
// i primi risultati e imparando dagli incontri con altre realtà del settore che ci hanno 
// affascinato e ispirato per espandere la nostra attività anche in altri territori

// Da un anno entrambi studiamo a Perugia, Marco in Giurisprudenza e Luca in Economia, 
// sfruttando l'esperienza accumulata e comprese le sfide comuni con le quali i 
// proprietari sono costretti ad interfacciarsi durante la gestione dei propri 
// immobili, sappiamo di poter offrire a ogni proprietario la soluzione più 
// adatta alle sue esigenze, garantendo sicurezza, affidabilità ed efficienza.

// Con il trasferimento a Perugia, abbiamo portato con noi la nostra attività 
// e abbiamo subito iniziato a mettere in pratica le nostre conoscenze.
// Siamo determinati a trasformare questa giovane realtà, in 
// un'opportunità di sviluppo e crescita sia per noi che per il territorio.

const AboutUs = (props: Props) => {
    const { isOpen, setIsOpen } = useContext(WrapperContext)

    return (
        <main className={`font-sans bg-gray-50 ${isOpen ? "h-screen overflow-hidden" : ""}`}>

            <section className="md:min-h-screen flex flex-col relative pt-20">

            </section>

        </main>
    )
}

export default AboutUs