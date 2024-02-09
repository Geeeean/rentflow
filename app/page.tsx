"use client"

import './global.css'

import Image from 'next/image';

import logo from "@/public/logo.svg";
import build from "@/public/build.png"

import Card from './components/Card';
import CompanyFlex from './components/CompanyFlex';

import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { motion } from "framer-motion"
import { useState } from 'react';

const cardCont = [
  {
    tag: "SERVIZIO COMPLETO",
    title: "Rent to Rent",
    subtitle: "Il rendimento sicuro che cercavi",
    desc: "Gestiremo noi i tuoi affitti garantendo un flusso continuo di clienti.",
    btnText: "Scopri ora"
  },
  {
    tag: "",
    title: "Gestione",
    subtitle: "Online e fisica",
    desc: "Gestiremo noi il tuo immobile, garantendo il massimo della resa con il minimo sforzo.",
    btnText: "Scopri ora"
  }
]

const MOBILE_NAV_ITEMS = [
  {
    navTitle: "Servizi"
  },
  {
    navTitle: "Offerte"
  },
  {
    navTitle: "Dicono di noi"
  }
]

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const mobileMenuVariant = {
    open: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }

  const hideNavItemsVariant = {
    open: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  }

  const ulVariant = {
    open: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
  }

  const liVariant = {
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  }

  const fadeInVariant = {
    open: {
      opacity: 1,
      transition: {
        delay: 1.5,
        duration: 1.8
      }
    },
    closed: { opacity: 0 }
  }

  return (
    <main>
      <motion.div className="w-full min-h-screen bg-grey-50 flex flex-col items-center justify-between" animate={isOpen ? "open" : "closed"} >
        <motion.nav
          className="bg-gray-900 h-screen w-screen absolute left-0 index z-10 md:hidden p-4 text-gray-50 font-mono"
          initial={closed}
          variants={mobileMenuVariant}
        >
          <div className="w-full flex justify-end">
            <IoClose onClick={() => setIsOpen(isOpen => !isOpen)} size={24} />
          </div>

          <motion.ul variants={ulVariant} className="list-none mt-10">
            {MOBILE_NAV_ITEMS.map((navItem, index) => (
              <motion.li whileTap={{ scale: 0.95 }} key={index} className="m-5 select-none overflow-y-hidden">
                <motion.div variants={liVariant} className="text-center text-4xl">{navItem.navTitle}</motion.div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeInVariant} className="text-center mt-40 font-medium">
            <div className="text-center text-xl">info@rentflow.com</div>
            <div className="text-center text-xl m-4">+39 1234567890</div>
          </motion.div>
        </motion.nav>

        <motion.div variants={hideNavItemsVariant}
          className="w-full flex items-center justify-between md:px-12 p-4 gap-4 absolute left-0">
          <div className='relative'>
            <Image src={logo} alt='logo' layout="responsive" objectFit="containt" />
          </div>
          <div className='md:flex items-center gap-12 font-sans text-lg font-thin text-gray-600 hidden '>
            {MOBILE_NAV_ITEMS.map((navItem, index) => (
              <button className="hover:text-black" key={index}>{navItem.navTitle}</button>
            ))}
          </div>
          <button className="bg-blue-600 px-4 py-2 text-gray-50 font-bold rounded-md hover:bg-blue-700 hidden md:block" >Contattaci</button>

          <IoMdMenu onClick={() => setIsOpen(isOpen => !isOpen)} size={24} className="md:hidden" />
        </motion.div>

        <div className="w-full grow">
          <div></div>
        </div>
      </motion.div>

      <CompanyFlex />

      <div className="w-full min-h-screen bg-gray-900 flex gap-10 flex-col items-center justify-center p-10">
        <div className="flex flex-col text-center gap-2">
          <p className="font-mono text-2xl md:text-4xl font-bold text-gray-50">I nostri servizi</p>
          <p className="font-sans text-xl md:text-2xl text-gray-400">Forniamo due principali servizi per i tuoi appartamenti.</p>
        </div>

        <div className="flex flex-col gap-5 md:flex-row justify-center">
          {cardCont.map(({ tag, title, subtitle, desc, btnText }, index) => {
            return <Card key={index} tag={tag} title={title} subtitle={subtitle} desc={desc} btnText={btnText} />
          })}
        </div>
      </div>
      <div></div>
    </main>
  );
}
