import Image from "next/image"
import { motion } from "framer-motion"
import { IoMdMenu } from "react-icons/io"

import logo from "@/public/logo.svg";

const NAV_ITEMS = [
  {
    navTitle: "Servizi",
  },
  {
    navTitle: "Dicono di noi",
  }
];

const hideNavItemsVariant = {
  open: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  closed: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 1.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

type Props = {
  setIsOpen: (val: boolean | ((val: boolean) => boolean)) => void;
}

const Nav = ({ setIsOpen }: Props) => {
  return (
    <motion.div
      variants={hideNavItemsVariant}
      className="relative left-0 flex w-full items-center justify-between gap-4 p-4 md:px-12"
    >
      {/* <div className="relative">
        <Image
          src={logo}
          alt="logo"
          layout="responsive"
          objectFit="containt"
        />
      </div> */}
      <button className="font-black text-xl">RENTFLOW</button>
      <div className="hidden items-center gap-12 font-sans text-lg font-medium md:flex ">
        {NAV_ITEMS.map((navItem, index) => (
          <button className="hover:text-black" key={index}>
            {navItem.navTitle}
          </button>
        ))}
      </div>
      <button className="hidden text-xl bg-indigo-950 px-4 py-2 font-medium text-white hover:bg-indigo-900 md:block">
        Contattaci
      </button>

      <IoMdMenu
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        size={24}
        className="md:hidden"
      />
    </motion.div>
  )
}

export default Nav