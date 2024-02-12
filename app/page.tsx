"use client"

import './global.css'

import Image from 'next/image';

import logo from "@/public/logo.svg";
import build from "@/public/build.png"
import rtr from "@/public/rtr.svg"
import pm from "@/public/p_management.svg"

import Card from './components/Card';
import CompanyFlex from './components/CompanyFlex';
import Grid2x2 from './components/Grid2x2';

import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FcOvertime, FcMindMap, FcApproval, FcSurvey, FcSearch, FcHome, FcKey, FcMoneyTransfer } from "react-icons/fc";


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
  },
  {
    navTitle: "Contatti"
  }
]

const RTR_ITEMS = [
  {
    icon: <FcOvertime />,
    tag: "Zero rischio morosità",
    desc: "Garanzia di ricevere regolarmente il pagamento dell’affitto, a differenza di ciò che potrebbe capitare con gli affitti tradizionali."
  },
  {
    icon: <FcMindMap />,
    tag: "Flessibilità",
    desc: "Possibilità di visionare l’appartamento con il dovuto preavviso."
  },
  {
    icon: <FcSurvey />,
    tag: "Assicurazione sull’immobile",
    desc: "La certezza di non subire danni alla proprietà."
  },
  {
    icon: <FcApproval />,
    tag: "Controllo continuo",
    desc: "È nel nostro massimo interesse mantenere l’appartamento sempre pulito ed in perfette condizioni. Pronto ad accogliere nuovi ospiti."
  },
]

const PROPERTY_MANAGEMENT_ITEMS = [
  {
    icon: <FcMoneyTransfer />,
    tag: "Pagamenti garantiti",
    desc: "I nostri clienti pagano prima di entrare nella struttura."
  },
  {
    icon: <FcKey />,
    tag: "Sicurezza della permanenza",
    desc: "Sappiamo sempre quando un ospite arriva e quando riparte."
  },
  {
    icon: <FcHome />,
    tag: "Flessibilità",
    desc: "Puoi riservarti l’uso dell’appartamento quando ne hai bisogno."
  },
  {
    icon: <FcSearch />,
    tag: "Controllo continuo",
    desc: "Ogni qualvolta l’ospite lascia la struttura, questa viene controllata, riordinata e pulita."
  },
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
    <main className={isOpen ? "overflow-hidden h-screen" : ""}>
      <motion.div className="w-full min-h-screen bg-grey-50 flex flex-col items-center justify-between" animate={isOpen ? "open" : "closed"} >
        <motion.nav
          className="bg-gray-900 h-screen w-screen absolute left-0 index z-10 md:hidden p-4 text-gray-50 font-mono"
          initial={mobileMenuVariant.closed}
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
          <div className='md:flex items-center gap-12 font-sans text-lg font-medium text-gray-600 hidden '>
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

      {
        [
          { tag: "Servizio", title: "Rent to Rent", descStart: "La soluzione", descTag: "più sicura", descEnd: "per i proprietari", image: rtr, gridContent: RTR_ITEMS },
          { tag: "Servizio di", title: "Gestione immobili", descStart: "Fai", descTag: "fruttare", descEnd: "il tuo appartamento", image: pm, gridContent: PROPERTY_MANAGEMENT_ITEMS }
        ].map((item, index) => {
          return <div key={index} className="w-full min-h-screen bg-gray-50 flex gap-10 flex-col items-center justify-center p-4 md:p-10 md:px-24">
            <div className='flex justify-center md:justify-between w-full text-center md:text-left'>
              <div className='flex flex-col justify-center'>

                <div className='hidden md:flex flex-col gap-2'>
                  <p className='text-7xl font-medium'>{item.tag}</p>
                  <span className='text-7xl text-blue-600 font-bold'>{item.title}</span>
                </div>

                <p className='text-3xl font-medium md:hidden'>{item.tag} <span className='text-blue-600 font-bold'>{item.title}</span></p>

                <p className='text-xl md:text-3xl text-gray-800 mt-4'>{item.descStart} <span className='text-blue-600'>{item.descTag}</span> {item.descEnd}</p>


                {/* <div className='mt-10'>
                  <button className="bg-blue-600 px-10 py-2 text-xl text-gray-50 font-medium rounded-md hover:bg-blue-700">Inizia ora</button>
                </div> */}
              </div>
              <div className='hidden md:block'>
                <Image src={item.image} alt='Rent to Rent' />
              </div>
            </div>
            <Grid2x2 content={item.gridContent} />
          </div>
        })
      }
    </main>
  );
}
