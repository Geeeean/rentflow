import { motion } from "framer-motion"

import { FaCircleCheck } from 'react-icons/fa6'
import { HiOutlineStatusOnline } from 'react-icons/hi'
import { PiHouseLineFill } from 'react-icons/pi'
import { TiLockClosed } from 'react-icons/ti'

const CARDS_CONTENT = [
    {
        icon: <HiOutlineStatusOnline />,
        title: "Gestione online",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        benefits: [
            { provided: true, desc: "Nuova descrizione" },
            { provided: true, desc: "Nuove foto" },
            { provided: true, desc: "Gestione prezzi" },
            { provided: true, desc: "Messaggi programmati" },
            { provided: true, desc: "Recensioni 5 stelle" },
            { provided: true, desc: "Consigli pratici su come gestire l’accoglienza" },
            { provided: false, desc: "Gestione staff delle pulizie" },
            { provided: false, desc: "Gestione chek-in e chek-out, eventuale automatizzazione" },
            { provided: false, desc: "Risoluzione eventuali problematiche in merito agli ospiti durante il loro soggiorno" },
        ]
    },
    {
        icon: <PiHouseLineFill />,
        title: "Gestione fisica",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        benefits: [
            { provided: true, desc: "Nuova descrizione" },
            { provided: true, desc: "Nuove foto" },
            { provided: true, desc: "Gestione prezzi" },
            { provided: true, desc: "Messaggi programmati" },
            { provided: true, desc: "Recensioni 5 stelle" },
            { provided: true, desc: "Consigli pratici su come gestire l’accoglienza" },
            { provided: true, desc: "Gestione staff delle pulizie" },
            { provided: true, desc: "Gestione chek-in e chek-out, eventuale automatizzazione" },
            { provided: true, desc: "Risoluzione eventuali problematiche in merito agli ospiti durante il loro soggiorno" },
        ]
    }
]

type Props = {}

const FvsO = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 mt-8 justify-center w-full">
            {
                CARDS_CONTENT.map((cont, index) => {
                    return <motion.div key={index} className="z-10 bg-gray-900 shadow-lg ring-1 ring-slate-600 p-8 flex flex-col justify-start rounded-xl md:w-96"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{
                            ease: "anticipate",
                            duration: 0.75
                        }}
                        variants={{
                            visible: { y: 0, opacity: 1 },
                            hidden: { y: 20, opacity: 0 }
                        }}
                    >
                        <div className="p-3 flex items-center justify-center bg-indigo-950 text-indigo-400 rounded-full w-fit mb-4">
                            {cont.icon}
                        </div>
                        <p className="text-xl font-medium text-gray-50">{cont.title}</p>
                        <p className="text-gray-600">{cont.desc}</p>

                        <div className="flex flex-col gap-2 mt-4">
                            {cont.benefits.map((element, index) => {
                                return <div className={`flex gap-2 items-start ${!element.provided ? "text-red-400" : "text-indigo-400"}`} key={index}>
                                    {element.provided ? <FaCircleCheck className="mt-1" size={18} /> : <TiLockClosed size={22} />}
                                    <span className="w-[90%]">{element.desc}</span>
                                </div>
                            })}
                        </div>
                    </motion.div>
                })
            }

        </div>
    )
}

export default FvsO