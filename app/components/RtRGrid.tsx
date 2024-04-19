import Image from "next/image"

import { motion } from "framer-motion"

import shape1 from "@/public/shape1.svg"
import shape2 from "@/public/shape2.svg"
import { FaEye, FaMoneyBill } from "react-icons/fa"
import { MdCleaningServices } from "react-icons/md";
import { FaHouseFire } from "react-icons/fa6";

const cardVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -20, opacity: 0 }
}

const transitionProperties = {
    ease: "anticipate",
    duration: 0.75
}

type Props = {}

const RtRGrid = (props: Props) => {
    return (
        <div className="flex flex-col gap-4 mt-8 md:mt-12 relative">
            <div className="absolute w-[1000px] h-[1000px] left-[-700px] md:left-[-600px] lg:left-[-400px] 2xl:left-[-200px]">
                <Image src={shape1} alt="" fill />
            </div>
            <div className="absolute bottom-[-300px] w-[1000px] h-[1000px] right-[-700px] md:right-[-600px] lg:right-[-400px] 2xl:right-[-200px]">
                <Image src={shape2} alt="" />
            </div>
            <div className="md:grid flex flex-col md:grid-rows-1 md:grid-cols-12 gap-4">
                <motion.div className="backdrop-blur-xl z-10 bg-white/20 md:col-span-7 shadow-lg ring-1 ring-black/5 p-8 flex flex-col justify-start gap-5 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={transitionProperties}
                    variants={cardVariants}
                >
                    <div className="p-3 flex items-center justify-center bg-indigo-600 text-white rounded-full w-fit">
                        <MdCleaningServices />
                    </div>
                    <div className="z-10 border border-black rounded-full w-fit px-2">CONTROLLO CONTINUO</div>
                    <p className="z-10 font-medium text-2xl md:text-4xl">È nel nostro massimo interesse mantenere l’appartamento sempre pulito ed in perfette condizioni. Pronto ad accogliere nuovi ospiti.</p>
                </motion.div>
                <motion.div className="backdrop-blur-xl z-10 bg-white/20 md:col-span-5 shadow-lg ring-1 ring-black/5 p-8 md:pb-20 flex flex-col justify-end gap-5 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={transitionProperties}
                    variants={cardVariants}
                >
                    <div className="p-3 flex items-center justify-center bg-indigo-600 text-white rounded-full w-fit">
                        <FaHouseFire />
                    </div>
                    <div className="z-10 border border-black rounded-full w-fit px-2">ASSICURAZIONE</div>
                    <p className="z-10 font-medium text-2xl md:text-4xl">Certezza di essere assicurati in merito ad eventuali danni alla proprietà.</p>
                </motion.div>
            </div>
            <div className="md:grid flex flex-col md:grid-rows-1 md:grid-cols-12 gap-4">
                <motion.div className="backdrop-blur-xl z-10 bg-white/20 md:col-span-3 shadow-lg ring-1 ring-black/5 p-8 md:pb-20 flex flex-col justify-end gap-5 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={transitionProperties}
                    variants={cardVariants}
                >
                    <div className="p-3 flex items-center justify-center bg-indigo-600 text-white rounded-full w-fit">
                        <FaEye />
                    </div>
                    <div className="z-10 border border-black rounded-full w-fit px-2">FLESSIBILITÀ</div>
                    <p className="z-10 font-medium text-2xl md:text-4xl break-words">Possibilità di visionare l’appartamento con il dovuto preavviso.</p>
                </motion.div>
                <motion.div className="backdrop-blur-xl z-10 bg-white/20 md:col-span-9 shadow-lg ring-1 ring-black/5 p-8 flex flex-col justify-end gap-5 rounded-xl"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={transitionProperties}
                    variants={cardVariants}
                >
                    <div className="p-3 flex items-center justify-center bg-indigo-600 text-white rounded-full w-fit">
                        <FaMoneyBill />
                    </div>
                    <div className="z-10 border border-black rounded-full w-fit px-2">NIENTE MOROSITÀ</div>
                    <p className="z-10 font-medium text-2xl md:text-4xl">Garanzia di ricevere regolarmente il pagamento dell’affitto, a differenza di ciò che potrebbe accadere con gli affitti tradizionali.</p>
                </motion.div>
            </div>
        </div>
    )
}

export default RtRGrid