import { FaMoneyBill } from "react-icons/fa"
import { FaHouseChimneyUser } from "react-icons/fa6";
import { MdLogout, MdCleaningServices } from "react-icons/md";

import { motion } from "framer-motion"

type Props = {}

const cardVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -20, opacity: 0 }
}

const transitionProperties = {
    ease: "anticipate",
    duration: 0.75
}

const GGrid = (props: Props) => {
    return (
        <div className="flex flex-col gap-4 mt-8 md:mt-12 relative">
            <div className="md:grid flex flex-col md:grid-rows-1 md:grid-cols-12 gap-4">
                <motion.div className="z-10 bg-gray-900 md:col-span-6 shadow-lg ring-1 ring-slate-600 p-8 flex flex-col justify-start gap-5 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={transitionProperties}
                    variants={cardVariants}
                >
                    <div className="p-3 flex items-center justify-center bg-indigo-950 text-indigo-400 rounded-full w-fit">
                        < FaMoneyBill />
                    </div>
                    <div className="z-10 border border-white rounded-full w-fit px-2">PAGAMENTI GARANTITI</div>
                    <p className="z-10 font-medium text-2xl md:text-4xl">I nostri clienti pagano prima di entrare nella struttura.</p>
                </motion.div>
                <motion.div className="z-10 bg-gray-900 md:col-span-6 shadow-lg ring-1 ring-slate-600 p-8  flex flex-col justify-start gap-5 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={transitionProperties}
                    variants={cardVariants}
                >
                    <div className="p-3 flex items-center justify-center bg-indigo-950 text-indigo-400 rounded-full w-fit">
                        <MdLogout />
                    </div>
                    <div className="z-10 border border-white rounded-full w-fit px-2">CONTROLLO PERMANENZA</div>
                    <p className="z-10 font-medium text-2xl md:text-4xl">Sappiamo sempre quando un ospite arriva e quando riparte.</p>
                </motion.div>
            </div>
            <div className="md:grid flex flex-col md:grid-rows-1 md:grid-cols-12 gap-4">
                <motion.div className="z-10 bg-gray-900 md:col-span-6 shadow-lg ring-1 ring-slate-600 p-8  flex flex-col justify-start gap-5 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={transitionProperties}
                    variants={cardVariants}
                >
                    <div className="p-3 flex items-center justify-center bg-indigo-950 text-indigo-400 rounded-full w-fit">
                        <FaHouseChimneyUser />
                    </div>
                    <div className="z-10 border border-white rounded-full w-fit px-2">FLESSIBILITÀ</div>
                    <p className="z-10 font-medium text-2xl md:text-4xl">Puoi riservarti l’uso dell’appartamento quando ne hai bisogno.</p>
                </motion.div>
                <motion.div className="z-10 bg-gray-900 md:col-span-6 shadow-lg ring-1 ring-slate-600 p-8 flex flex-col justify-start gap-5 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={transitionProperties}
                    variants={cardVariants}
                >
                    <div className="p-3 flex items-center justify-center bg-indigo-950 text-indigo-400 rounded-full w-fit">
                        <MdCleaningServices />
                    </div>
                    <div className="z-10 border border-white rounded-full w-fit px-2">CONTROLLO CONTINUO</div>
                    <p className="z-10 font-medium text-2xl md:text-4xl">Ogni qualvolta l’ospite lascia la struttura, questa viene controllata, riordinata e pulita.</p>
                </motion.div>

            </div>
        </div>
    )
}

export default GGrid