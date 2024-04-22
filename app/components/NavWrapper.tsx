"use client"

import { motion } from 'framer-motion'
import { useContext } from 'react'

type Props = {}

import MobileMenu from "@/app/components/MobileMenu";
import Nav from "@/app/components/Nav";
import { WrapperContext } from './Wrapper';

const NavWrapper = (props: Props) => {
    const { isOpen, setIsOpen } = useContext(WrapperContext)

    return (
        <motion.div
            className="w-full flex justify-center relative z-20"
            animate={isOpen ? "open" : "closed"}
        >
            <MobileMenu setIsOpen={setIsOpen} />

            <Nav setIsOpen={setIsOpen} />
        </motion.div>
    )
}

export default NavWrapper