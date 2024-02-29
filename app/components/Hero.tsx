import { motion } from "framer-motion"

import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

type Props = {}

const fadeIn = {
    initial: { y: -20 },
    animate: { y: 0 }
}

const transitionProperties = {
    ease: "anticipate",
    duration: 0.2,
}

const Hero = (props: Props) => {
    return (
        <div className="p-8 md:px-12  flex flex-col grow gap-16 justify-between z-10">
            <div className="text-center flex flex-col items-center lg:mt-12">
                <p className="text-5xl md:text-7xl font-black">Rent Flow</p>
                <p className="text-2xl md:w-1/2 mt-4 md:mt-6">Vuoi una rendita sicura e
                    garantita dal tuo immobile o vuoi
                    massimizzarne il suo
                    rendimento?</p>
                <button className="md:text-xl bg-indigo-600 px-6 py-2 font-medium text-white hover:bg-indigo-500 rounded-full mt-4 md:mt-8">
                    Inizia ora
                </button>
            </div>

            <div>
                <motion.p className="text-2xl font-medium mb-4 md:mb-8"
                    {...fadeIn}
                    transition={{ ...transitionProperties }}
                >I nostri Servizi</motion.p>
                <div className="flex flex-col md:flex-row gap-4 text-indigo-950 select-none">
                    <motion.div
                        className="grow ring-1 ring-gray-300 p-6 rounded-2xl shadow-md hover:translate-y-[-0.5rem] transition-all bg-gray-50"
                        {...fadeIn}
                        transition={{ ...transitionProperties }}
                    >
                        <p className="text-sm">SERVIZIO</p>
                        <p className="text-2xl mt-2">Gestione online</p>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto earum maiores est.</p>
                        <Link href="#gi" className="hover:gap-4 transition-all flex items-center gap-2">
                            <span>Scopri di più</span>
                            <FaArrowRightLong />
                        </Link>
                    </motion.div>

                    <motion.div
                        className="gZrow bg-indigo-600 p-6 rounded-2xl shadow-md text-gray-50 hover:translate-y-[-0.5rem] transition-all"
                        {...fadeIn}
                        transition={{ ...transitionProperties, delay: 0.1 }}

                    >
                        <p className="text-sm font-light">SERVIZIO COMPLETO</p>
                        <p className="text-3xl mt-2 mb-1 font-medium">Rent to Rent</p>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto earum maiores est.</p>
                        <Link href="#rtr" className="hover:gap-4 transition-all flex items-center gap-2">
                            <span>Scopri di più</span>
                            <FaArrowRightLong />
                        </Link>
                    </motion.div>

                    <motion.div
                        className="grow ring-1 ring-gray-300 p-6 rounded-2xl shadow-md hover:translate-y-[-0.5rem] transition-all bg-gray-50"
                        {...fadeIn}
                        transition={{ ...transitionProperties, delay: 0.2 }}
                    >
                        <p className="text-sm">SERVIZIO</p>
                        <p className="text-2xl mt-2">Gestione Fisica</p>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum architecto earum maiores est.</p>
                        <Link href="#gi" className="hover:gap-4 transition-all flex items-center gap-2">
                            <span>Scopri di più</span>
                            <FaArrowRightLong />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default Hero