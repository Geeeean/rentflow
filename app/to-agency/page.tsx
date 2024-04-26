"use client"

import { useContext } from 'react'
import { WrapperContext } from '@/app/components/Wrapper'

type Props = {}

const BENEFITS: { title: string, desc: string }[] = [
    {
        title: "Servizio aggiuntivo per i tuoi clienti",
        desc: `Trovare soluzioni per gli
        appartamenti sfitti o per i proprietari indecisi sul tradizionale affitto a lungo termine può essere una sfida.
        Noi ci occupiamo di gestire o affittare questi immobili, risolvendo il problema della vacanza prolungata dell${"'"}unità o
        il rischio di inquilini inaffidabili e morosi.Offriamo una soluzione alternativa che potrebbe soddisfare le esigenze dei tuoi
        clienti, garantendo loro tranquillità e convenienza.`
    },
    {
        title: "Opportunità di guadagno extra",
        desc: `Ogni volta che prendiamo in affitto un immobile,
        tu, come intermediario, ricevi la tua meritata commissione. Immagina di avere subito a disposizione
        un contatto affidabile e interessato per ogni appartamento che proponi in affitto, con la possibilità
        di aprirsi a ulteriori opportunità di affari in futuro. Collaborando con noi, avrai accesso a contatti seri
        ed affidabili, pronti ad acquisire molteplici immobili in tempi più rapidi rispetto a un affittuario normale.
        Insieme, possiamo espandere le nostre opportunità e avrai modo differenziarti dal resto delle agenzie del territorio.
        Unisciti a noi per offrire un servizio più completo ai tuoi clienti e per ampliare le tue opportunità di
        guadagno. Siamo pronti a creare una collaborazione vantaggiosa per entrambi.`
    }
]

const ToAgency = (props: Props) => {
    const { isOpen } = useContext(WrapperContext)

    return (
        <main className={`font-sans bg-gray-50 ${isOpen ? "h-screen overflow-hidden" : ""}`}>
            <section className="pt-20 w-full bg-white  dark:bg-grid-black/[0.05] relative flex items-center justify-center p-8 md:px-12">
                {/* Radial gradient for the container to give a faded look */}
                <div className="z-0 absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

                <div className='md:py-8 text-black z-10 flex flex-col gap-2 md:gap-4 w-fit lg:text-center lg:max-w-4xl lg:items-center'>
                    <div className='px-3 py-1 rounded-full bg-blue-100 text-blue-600 w-fit font-bold'>ALLE AGENZIE</div>
                    <p className='text-3xl md:text-6xl font-medium'>Se sei un{"'"}agenzia immobiliare, sei nel posto giusto.</p>
                    <p className='text-xl md:text-3xl'>Siamo lieti di introdurti al nostro servizio e di illustrarti i due principali benefici che potrai ottenere tramite la nostra collaborazione.</p>
                </div>
            </section>

            <section className='p-8 md:px-12 flex flex-col gap-8 items-center bg-slate-900 text-gray-50'>
                <p className='text-3xl w-full font-medium'>Scopri i vantaggi</p>
                {
                    BENEFITS.map((el, index) => <div className='relative flex gap-6 text-left items-center' key={index}>
                        <span className='absolute text-[10rem] font-black text-transparent opacity-10 top-[-20px] left-[-15px] leading-none' style={{ WebkitTextStrokeWidth: 10, WebkitTextStrokeColor: "white" }}>{index + 1}</span>
                        <div className='flex flex-col'>
                            <p className='text-xl font-bold z-10'>{el.title}</p>
                            <p className='text-gray-300 font-medium md:text-lg'>{el.desc}</p>
                        </div>
                    </div>)
                }
            </section>
        </main>
    )
}

export default ToAgency