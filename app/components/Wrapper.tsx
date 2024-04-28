"use client"

import "@/app/global.css"
import Script from "next/script";
import { createContext, useContext, useState } from 'react';

export const WrapperContext = createContext({ isOpen: false, setIsOpen: (val: boolean | ((val: boolean) => boolean)) => { } })

const Wrapper = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <WrapperContext.Provider value={{ isOpen, setIsOpen }}>
            <Script strategy='beforeInteractive' defer data-domain="rentflow.it" src="https://plausible.io/js/script.js" />
            {children}
        </WrapperContext.Provider>
    )
}

export default Wrapper