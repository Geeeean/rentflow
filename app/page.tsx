"use client";

import { useContext, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { PiPhone } from "react-icons/pi";

import NavWrapper from "./components/NavWrapper";
import RtRGrid from "@/app/components/RtRGrid";
import GGrid from "@/app/components/GGrid";
import Hero from "@/app/components/Hero";
import FvsO from "@/app/components/FvsO";
import ContactCard from "@/app/components/ContactCard";
import Collapsible from "@/app/components/Collapsible";
import { BackgroundGradientAnimation } from "@/app/components/BackgroundGradientAnimation";
import { WrapperContext } from "./components/Wrapper";
import FAQs from "./components/Faqs";

export default function Home() {
  const { isOpen, setIsOpen } = useContext(WrapperContext)

  return (
    <main className={`font-sans bg-gray-50 ${isOpen ? "h-screen overflow-hidden" : ""}`}>
      <section className="md:min-h-screen flex flex-col relative pt-20">
        {/* background */}
        <div className="absolute h-full w-full top-0 left-0 z-0">
          <BackgroundGradientAnimation />
        </div>

        {/* section 1: hero section (servizi) */}
        <Hero />
      </section>

      {/* section 2: servizio rent to rent */}
      <section className="p-8 md:px-12  overflow-hidden" id="rtr">
        <div className='bg-blue-100 font-bold text-blue-600 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO COMPLETO</div>
        <p className="font-bold text-4xl md:text-6xl mt-4">Servizio <span className="text-indigo-700">Rent to Rent</span></p>
        <p className="text-2xl md:text-4xl font-medium">La soluzione più sicura per i proprietari</p>
        <RtRGrid />
      </section>

      {/* section 3: servizio di gestione */}
      <section className="p-8 md:px-12  overflow-hidden bg-slate-900 text-gray-50" id="gi">
        <div className='font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO</div>
        <p className="font-bold text-4xl md:text-6xl mt-4">Servizio di Gestione immobili</p>
        <p className="text-2xl md:text-4xl font-medium">Fai fruttare il tuo appartamento</p>
        <GGrid />
      </section>

      {/* section 4: gestione online / gestione fisica */}
      <section className="p-8 md:px-12  overflow-hidden bg-slate-900 text-gray-50">
        <p className="font-bold text-4xl md:text-6xl text-center">Gestione <span className="text-indigo-300">Online</span> vs <span className="text-indigo-300">Fisica</span></p>
        <p className="text-2xl md:text-4xl font-medium text-center">Confronta i pacchetti</p>
        <FvsO />
      </section>

      {/* section 5: faqs */}
      <section className="p-8 md:px-12  overflow-hidden bg-slate-900 text-gray-50 flex flex-col items-center" id="faqs">
        <p className="font-bold text-4xl md:text-6xl text-center">FAQs</p>
        <p className="text-2xl md:text-4xl font-medium text-center">Domande frequenti</p>
        <FAQs />
      </section>

      {/* todo: recensioni */}
    </main>
  );
}
