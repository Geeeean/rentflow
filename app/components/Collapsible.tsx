import { motion } from "framer-motion"
import { useState } from "react"

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";


type Props = {
    title: string,
    desc: string | React.JSX.Element
}

const collapsibleVariants = {
    open: {
        height: "auto",
        marginTop: "1rem"
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
            <div className="flex justify-between items-start gap-2">
                <span>{title}</span>
                <div className="mt-1">
                    {open ? <FaAngleUp /> : <FaAngleDown />}
                </div>
            </div>
            <motion.div className="overflow-hidden" variants={collapsibleVariants} initial="closed" animate={open ? "open" : "closed"}>
                {desc}
            </motion.div>
        </div>
    )
}

export default Collapsible