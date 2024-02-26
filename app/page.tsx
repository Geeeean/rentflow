"use client";

import "./global.css";

import Image from "next/image";

import * as houseAnimation from "@/public/house_animation.json";
import build from "@/public/build.png";
import italy_build from "@/public/italy_build.jpg";
import rtr from "@/public/rtr.svg";
import pm from "@/public/p_management.svg";

import Card from "./components/Card";
import CompanyFlex from "./components/CompanyFlex";

import {
  FcOvertime,
  FcMindMap,
  FcApproval,
  FcSurvey,
  FcSearch,
  FcHome,
  FcKey,
  FcMoneyTransfer,
} from "react-icons/fc";

import { motion } from "framer-motion";
import { useState } from "react";
import { MobileMenu } from "./components/MobileMenu";
import Nav from "./components/Nav";

const cardCont = [
  {
    tag: "SERVIZIO COMPLETO",
    title: "Rent to Rent",
    subtitle: "Il rendimento sicuro che cercavi",
    desc: "Gestiremo noi i tuoi affitti garantendo un flusso continuo di clienti.",
    btnText: "Scopri ora",
  },
  {
    tag: "",
    title: "Gestione",
    subtitle: "Online e fisica",
    desc: "Gestiremo noi il tuo immobile, garantendo il massimo della resa con il minimo sforzo.",
    btnText: "Scopri ora",
  },
];

const RTR_ITEMS = [
  {
    icon: <FcOvertime />,
    tag: "Zero rischio morosità",
    desc: "Garanzia di ricevere regolarmente il pagamento dell’affitto, a differenza di ciò che potrebbe capitare con gli affitti tradizionali.",
  },
  {
    icon: <FcMindMap />,
    tag: "Flessibilità",
    desc: "Possibilità di visionare l’appartamento con il dovuto preavviso.",
  },
  {
    icon: <FcSurvey />,
    tag: "Assicurazione sull’immobile",
    desc: "La certezza di non subire danni alla proprietà.",
  },
  {
    icon: <FcApproval />,
    tag: "Controllo continuo",
    desc: "È nel nostro massimo interesse mantenere l’appartamento sempre pulito ed in perfette condizioni. Pronto ad accogliere nuovi ospiti.",
  },
];

const PROPERTY_MANAGEMENT_ITEMS = [
  {
    icon: <FcMoneyTransfer />,
    tag: "Pagamenti garantiti",
    desc: "I nostri clienti pagano prima di entrare nella struttura.",
  },
  {
    icon: <FcKey />,
    tag: "Sicurezza della permanenza",
    desc: "Sappiamo sempre quando un ospite arriva e quando riparte.",
  },
  {
    icon: <FcHome />,
    tag: "Flessibilità",
    desc: "Puoi riservarti l’uso dell’appartamento quando ne hai bisogno.",
  },
  {
    icon: <FcSearch />,
    tag: "Controllo continuo",
    desc: "Ogni qualvolta l’ospite lascia la struttura, questa viene controllata, riordinata e pulita.",
  },
];

const PAGE_ITEMS = [
  {
    tag: "Servizio",
    title: "Rent to Rent",
    descStart: "La soluzione",
    descTag: "più sicura",
    descEnd: "per i proprietari",
    image: rtr,
    gridContent: RTR_ITEMS,
  },
  {
    tag: "Servizio di",
    title: "Gestione immobili",
    descStart: "Fai",
    descTag: "fruttare",
    descEnd: "il tuo appartamento",
    image: pm,
    gridContent: PROPERTY_MANAGEMENT_ITEMS,
  },
]

import { FaSmile } from "react-icons/fa"
import { FaSackDollar } from "react-icons/fa6";
import RtRGrid from "./components/RtRGrid";
import GGrid from "./components/GGrid";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={`font-sans bg-gray-50${isOpen ? "h-screen overflow-hidden" : ""}`}>
      <motion.div
        className="w-full flex justify-center"
        animate={isOpen ? "open" : "closed"}
      >
        <MobileMenu setIsOpen={setIsOpen} />

        <Nav setIsOpen={setIsOpen} />
      </motion.div>

      {/* section 1 */}
      <div
        className="flex h-fit pb-4 md:pb-16 flex-col items-center"
      >
        <div className="grow 2xl:grow-0 2xl:h-3/4 w-full p-4 md:px-12 mt-4 flex gap-16 justify-center max-w-screen-2xl items-center">
          <div className="flex flex-col justify-between w-full md:w-3/5 md:max-w-3xl gap-16 md:gap-48">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="font-bold text-4xl md:text-6xl">La soluzione al tuo <span className="text-indigo-900">immobile,</span> in modo <span className="text-indigo-900">semplice</span></p>
                <p className="text-xl md:text-3xl font-light">Con i nostri servizi ti garantiamo una rendita sicura e una massimizzazione del rendimento</p>
              </div>
              <button className="w-fit text-xl bg-indigo-950 px-8 py-2 font-medium text-white hover:bg-indigo-900 md:block">
                Scopri
              </button>
            </div>

            <div className="flex gap-8">
              {[
                { icon: <FaSackDollar />, title: "Massimizza i guadagni", desc: "Ottieni di più dalla locazione e massimizza i profitti con noi." },
                { icon: <FaSmile />, title: "Massima convenienza", desc: "Una gestione immobiliare senza complicazioni, solo risultati." }
              ].map((element, index) => {
                return <div key={index} className="w-fit flex flex-col gap-3">
                  <div className="p-3 flex items-center justify-center bg-indigo-950 text-white rounded-full w-fit">
                    {element.icon}
                  </div>
                  <div>
                    <p className="font-medium text-2xl mb-2">{element.title}</p>
                    <p>{element.desc}</p>
                  </div>
                </div>
              })}
            </div>
          </div>

          <div className="h-96 grow bg-blue-300 hidden md:block relative max-w-3xl">
            {/* <Image src={italy_build} alt="italy build" fill /> */}
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="w-full bg-gray-900 flex gap-10 flex-col items-center justify-center p-10 py-20">
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

      {/* section 3 */}
      <div className="p-10 overflow-hidden">
        <div className='bg-blue-100 font-bold text-blue-600 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO COMPLETO</div>
        <p className="font-bold text-4xl md:text-6xl mt-4">Servizio <span className="text-indigo-900">Rent to Rent</span></p>
        <p className="text-2xl md:text-4xl font-medium">La soluzione più sicura per i proprietari.</p>
        <RtRGrid />
      </div>

      <div className="p-10 overflow-hidden bg-slate-900 text-white">
        <div className='font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO</div>
        <p className="font-bold text-4xl md:text-6xl mt-4">Servizio di Gestione immobili</p>
        <p className="text-2xl md:text-4xl font-medium">Fai fruttare il tuo appartamento.</p>
        <GGrid />
      </div>

    </main>
  );
}
