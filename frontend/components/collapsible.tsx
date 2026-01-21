"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"

// import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


type Props = {
    title: string,
    desc: string | React.JSX.Element
}

const collapsibleVariants = {
    open: {
        height: "auto",
        marginTop: "0"
    },
    closed: {
        height: 0,
        marginTop: 0
    }
}

const Collapsible = ({ title, desc }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='text-lg w-full first:border-t py-2 border-b border-white/30 cursor-pointer' onClick={() => {
            setOpen(prec => !prec)
        }}>
            <div className="flex justify-between items-start">
                <span className="text-md font-semibold">{title}</span>
                <div className="mt-1">
                    {open ? <ChevronUp /> : <ChevronDown />}
                </div>
            </div>
            <motion.div className="overflow-hidden text-gray-800" variants={collapsibleVariants} initial="closed" animate={open ? "open" : "closed"}>
                {desc}
            </motion.div>

            <div className="w-full bg-gray-200 h-px mt-2" />
        </div>
    )
}

export { Collapsible }
