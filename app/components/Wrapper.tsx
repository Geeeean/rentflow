"use client"

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
            {children}
        </WrapperContext.Provider>
    )
}

export default Wrapper