"use client"

import { ChevronDown } from "lucide-react"
import { motion } from "motion/react"
import { useId, useState } from "react"

type Props = {
    title: string,
    desc: string
}

// `visibility` is what actually removes the collapsed answer from the accessibility tree and
// from find-in-page — height:0 alone leaves screen readers announcing it. It's held visible
// through the closing animation so the text doesn't vanish before the panel finishes.
const collapsibleVariants = {
    open: { height: "auto", opacity: 1, visibility: "visible" as const },
    closed: { height: 0, opacity: 0, transitionEnd: { visibility: "hidden" as const } }
}

const Collapsible = ({ title, desc }: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const panelId = useId();

    return (
        <div className="w-full border-b border-stone-200 first:border-t">
            <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen(prec => !prec)}
                className="w-full flex justify-between items-start gap-6 text-left py-6 cursor-pointer group"
            >
                <span className="font-serif text-xl font-medium text-slate-900 group-hover:text-slate-600 transition-colors">
                    {title}
                </span>
                <motion.div
                    animate={{ rotate: open ? 180 : 0 }}
                    className="mt-1 shrink-0 text-slate-400 group-hover:text-slate-900 transition-colors"
                >
                    <ChevronDown />
                </motion.div>
            </button>

            <motion.div
                id={panelId}
                className="overflow-hidden"
                variants={collapsibleVariants}
                initial="closed"
                animate={open ? "open" : "closed"}
            >
                <p className="text-slate-600 leading-relaxed pb-6 pr-12 whitespace-pre-line">
                    {desc}
                </p>
            </motion.div>
        </div>
    )
}

export { Collapsible }
