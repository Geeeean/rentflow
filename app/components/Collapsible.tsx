import { motion } from "framer-motion"
import { useState } from "react"

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


type Props = {
    title: string,
    desc: string
}

const collapsibleVariants = {
    open: {
        height: "auto",
        marginTop: "2rem"
    },
    closed: {
        height: 0,
        marginTop: 0
    }
}

const Collapsible = ({ title, desc }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='text-lg p-4 w-full first:border-t border-b border-white/30 cursor-pointer' onClick={() => {
            setOpen(prec => !prec)
        }}>
            <div className="flex justify-between items-center">
                <span>{title}</span>
                {open ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            <motion.p className="overflow-hidden" variants={collapsibleVariants} initial="closed" animate={open ? "open" : "closed"}>
                {desc}
            </motion.p>
        </div>
    )
}

export default Collapsible