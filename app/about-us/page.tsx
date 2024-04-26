"use client"

import { useContext } from 'react'
import { WrapperContext } from '../components/Wrapper'
import Image from 'next/image'

import self from "@/public/aboutsUs.jpeg"

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

const BIOGRAPHY: { title: string, content: string }[] = [
    {
        title: "IDEA",
        content: "Unendo le nostre passioni e competenze, abbiamo dato vita a un progetto a cui crediamo fortemente e che vogliamo far crescere costantemente, con il fine di diventare un punto di riferimento nel settore."
    },
    {
        title: "ORIGINI",
        content: `Originari della provincia di Ascoli Piceno, precisamente di Cupra Marittima e Grottammare,
        abbiamo iniziato la nostra avventura gestendo appartamenti nelle nostre zone d${"'"}origine, ottenendo
        i primi risultati e imparando dagli incontri con altre realtà del settore che ci hanno
        affascinato e ispirato per espandere la nostra attività anche in altri territori.`
    },
    {
        title: "LATO ACCADEMICO",
        content: `Da un anno entrambi studiamo a Perugia, Marco in Giurisprudenza e Luca in Economia,
        sfruttando l${"'"}esperienza accumulata e comprese le sfide comuni con le quali i
        proprietari sono costretti ad interfacciarsi durante la gestione dei propri
        immobili, sappiamo di poter offrire a ogni proprietario la soluzione più
        adatta alle sue esigenze, garantendo sicurezza, affidabilità ed efficienza.`
    },
    {
        title: "MISSIONE",
        content: `Con il trasferimento a Perugia, abbiamo portato con noi la nostra attività
        e abbiamo subito iniziato a mettere in pratica le nostre conoscenze.
        Siamo determinati a trasformare questa giovane realtà, in
        un${"'"}opportunità di sviluppo e crescita sia per noi che per il territorio.`
    },
]

const AboutUs = (props: Props) => {
    const { isOpen } = useContext(WrapperContext)

    return (
        <main className={`font-sans bg-gray-50 ${isOpen ? "h-screen overflow-hidden" : ""}`}>
            <section className="pt-20 w-full bg-white dark:bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                <div className='relative max-w-screen-2xl p-8 pt-0 md:pt-4 md:px-12 text-black z-10 flex flex-col lg:flex-row items-center gap-4 md:gap-8'>
                    <div className='flex flex-col gap-2 md:gap-4 w-fit'>
                        <div className='px-3 py-1 rounded-full bg-blue-100 text-blue-600 w-fit font-bold'>CHI SIAMO</div>
                        <p className='text-3xl md:text-6xl font-medium'>Marco Petrelli e Luca Straccia, due giovani intraprendenti immersi nel mondo
                            dell{"'"}immobiliare da quasi tre anni, focalizzati principalmente sugli affitti brevi.
                        </p>
                    </div>

                    <div className='rounded-lg overflow-hidden'>
                        <Image alt='' src={self} width={1000} />
                    </div>
                </div>

            </section>

            <section className='flex flex-col gap-8 items-center bg-slate-900 text-gray-50 py-8'>
                {
                    BIOGRAPHY.map((el, index) => <div className='max-w-screen-2xl md:px-12 w-full px-8' key={index}>
                        <div className='px-3 py-1 rounded-full ring-1 ring-white text-white w-fit font-medium'>{el.title}</div>
                        <p className='mt-3 text-xl'>
                            {el.content}
                        </p>
                        <div className='w-full border-t mt-4 border-white/30'></div>
                    </div>)
                }
            </section>
        </main>
    )
}

export default AboutUs