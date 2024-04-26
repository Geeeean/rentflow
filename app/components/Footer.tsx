"use client"

import { useContext } from "react"
import { WrapperContext } from "./Wrapper"
import Link from "next/link"

type Props = {}

const Footer = (props: Props) => {
    const { isOpen, setIsOpen } = useContext(WrapperContext)

    return (
        <footer className={`w-full ${isOpen && "hidden"} flex justify-center bg-slate-950/95 text-gray-50`} id="contacts">
            <div className="flex flex-col items-center gap-4 max-w-screen-2xl w-full p-8 md:px-12">
                <Link href="/" className="font-black text-5xl mr-auto">RENTFLOW</Link>
                <div className="w-full">
                    <div className="border-b border-white/30 flex justify-between w-full py-4">
                        <span>Telefono</span>
                        <div className="flex flex-col">
                            <span>+39 334 180 5336</span>
                            <span>+39 339 883 6017</span>
                        </div>
                    </div>
                    <div className="border-b border-white/30 flex justify-between w-full py-4">
                        <span>Email</span>
                        <span>info@rentflow.it</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer