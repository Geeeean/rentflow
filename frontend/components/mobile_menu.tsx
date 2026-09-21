"use client"

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { NAV_LINKS } from "./nav_links";
import { CtaPill } from "./cta_pill";
import { CONTACT, CONTACT_HREF } from "@/lib/contact";

const panel = {
    hidden: { opacity: 0, y: -12 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
}

const item = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0 },
}

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <div className="lg:hidden">
            <button
                type="button"
                aria-label={open ? "Chiudi il menu" : "Apri il menu"}
                aria-expanded={open}
                onClick={() => setOpen(prev => !prev)}
                className="relative z-50 p-3 rounded-full bg-slate-100 text-slate-900 active:scale-95 transition-transform"
            >
                <motion.span key={open ? "close" : "open"} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} className="block">
                    {open ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        key="menu"
                        variants={panel}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        // Sits below the h-20 bar (z-40 < the header's z-50) so the close
                        // button stays reachable, and above every section on the page.
                        className="fixed inset-x-0 top-nav bottom-0 z-40 bg-stone-50 px-6 pt-6 pb-10 flex flex-col overscroll-contain overflow-y-auto"
                    >
                        <div className="flex flex-col">
                            {NAV_LINKS.map(({ label, href, icon: Icon }) => (
                                <motion.div key={href} variants={item}>
                                    <Link
                                        href={href}
                                        onClick={close}
                                        className="flex items-center gap-3 py-5 border-b border-stone-200 text-2xl font-serif text-slate-900 active:text-slate-500 transition-colors"
                                    >
                                        <span className="p-1.5 rounded-full bg-slate-100">
                                            <Icon size={16} />
                                        </span>
                                        {label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div variants={item} onClick={close} className="mt-8">
                                <CtaPill label="Parliamone" href="/contatti" />
                            </motion.div>
                        </div>

                        <div className="mt-auto pt-10 text-slate-500 text-sm flex flex-col gap-1">
                            <a href={CONTACT_HREF.email} className="hover:text-slate-900 transition-colors">{CONTACT.email}</a>
                            <a href={CONTACT_HREF.phone} className="hover:text-slate-900 transition-colors">{CONTACT.phone}</a>
                            <p>{CONTACT.locality}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export { MobileMenu }
