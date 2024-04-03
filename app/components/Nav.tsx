import Image from "next/image"
import { motion } from "framer-motion"
import { IoMdMenu } from "react-icons/io"

import logo from "@/public/logo.svg";
import Link from "next/link";

export const NAV_ITEMS = [
  {
    navTitle: "Servizi",
    href: "#"
  },
  // {
  //   navTitle: "Dicono di noi",
  //   href: "#"
  // },
  {
    navTitle: "FAQs",
    href: "#faqs"
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
    <motion.nav
      variants={hideNavItemsVariant}
      className="flex w-full items-center justify-between gap-4 p-8 md:px-12 max-w-screen-2xl relative"
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
          <Link href={navItem.href} className="hover:text-black" key={index}>
            {navItem.navTitle}
          </Link>
        ))}
      </div>
      <Link href="#contacts" className="hidden text-xl bg-indigo-600 px-6 py-2 font-medium text-white hover:bg-indigo-500 md:block rounded-full">
        Contattaci
      </Link>

      <IoMdMenu
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        size={24}
        className="md:hidden"
      />
    </motion.nav>
  )
}

export default Nav