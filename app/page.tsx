"use client";

import "./global.css";

import Image from "next/image";

import * as houseAnimation from "@/public/house_animation.json";
import build from "@/public/build.png";
import rtr from "@/public/rtr.svg";
import pm from "@/public/p_management.svg";

import Card from "./components/Card";
import CompanyFlex from "./components/CompanyFlex";
import Grid2x2 from "./components/Grid2x2";

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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={`font-sans ${isOpen ? "h-screen overflow-hidden" : ""}`}>
      <motion.div
        className="bg-grey-50 flex min-h-screen w-full flex-col items-center justify-between"
        animate={isOpen ? "open" : "closed"}
      >
        <MobileMenu setIsOpen={setIsOpen} />

        <Nav setIsOpen={setIsOpen} />

        <div className="grow w-full p-4 md:px-12 mt-4 flex gap-8 justify-center">
          <div className="flex flex-col justify-center w-full md:w-1/2 md:max-w-3xl gap-48">
            <div>
              <p className="font-bold text-4xl md:text-6xl">La soluzione al tuo <span className="text-indigo-900">immobile,</span> in modo <span className="text-indigo-900">semplice</span></p>
              <p className="text-xl md:text-3xl mt-4 font-light">Con i nostri servizi ti garantiamo una rendita sicura e una massimizzazione del rendimento</p>
            </div>

            <div className="flex gap-8">
              <div className="w-fit flex flex-col gap-3">
                <div className="p-3 flex items-center justify-center bg-indigo-950 text-white rounded-full w-fit">
                  <FaSackDollar />
                </div>
                <div>
                  <p className="font-medium text-2xl mb-2">Massimizza i guadagni</p>
                  <p>Ottieni di più dalla locazione e massimizza i profitti con noi.</p>
                </div>
              </div>
              <div className="w-fit flex flex-col gap-3">
                <div className="p-3 flex items-center justify-center bg-indigo-950 text-white rounded-full w-fit">
                  <FaSmile />
                </div>
                <div>
                  <p className="font-medium text-2xl mb-2">Massima convenienza</p>
                  <p>Una gestione immobiliare senza complicazioni, solo risultati.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-full grow bg-blue-300 hidden md:block"></div>
        </div>
      </motion.div>

    </main>
  );
}
