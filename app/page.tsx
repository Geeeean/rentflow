"use client";

import "./global.css";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

import MobileMenu from "./components/MobileMenu";
import Nav from "./components/Nav";
import RtRGrid from "./components/RtRGrid";
import GGrid from "./components/GGrid";
import Hero from "./components/Hero";
import FvsO from "./components/FvsO";

import backg from "@/public/backg.svg"

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={`font-sans bg-gray-50 ${isOpen ? "h-screen overflow-hidden" : ""}`}>
      <div className="md:h-screen flex flex-col relative 
      // bg-gradient-to-r from-gray-50 to-violet-100
      ">
        {/* background */}
        <div className="absolute h-full w-full top-0 left-0 rotate-180 z-0">
          <Image src={backg} fill alt="" />
        </div>

        {/* Navbar */}
        <motion.div
          className="w-full flex justify-center relative z-10"
          animate={isOpen ? "open" : "closed"}
        >
          <MobileMenu setIsOpen={setIsOpen} />

          <Nav setIsOpen={setIsOpen} />
        </motion.div>

        {/* section 1 */}
        <Hero />
      </div>

      {/* section 2 */}
      <section className="p-8 md:px-12  overflow-hidden" id="rtr">
        <div className='bg-blue-100 font-bold text-blue-600 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO COMPLETO</div>
        <p className="font-bold text-4xl md:text-6xl mt-4">Servizio <span className="text-indigo-700">Rent to Rent</span></p>
        <p className="text-2xl md:text-4xl font-medium">La soluzione più sicura per i proprietari.</p>
        <RtRGrid />
      </section>

      {/* section 3 */}
      <section className="p-8 md:px-12  overflow-hidden bg-slate-900 text-white" id="gi">
        <div className='font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO</div>
        <p className="font-bold text-4xl md:text-6xl mt-4">Servizio di Gestione immobili</p>
        <p className="text-2xl md:text-4xl font-medium">Fai fruttare il tuo appartamento.</p>
        <GGrid />
      </section>

      {/* section 4 */}
      <section className="p-8 md:px-12  overflow-hidden bg-slate-900 text-white" id="gi">
        <p className="font-bold text-4xl md:text-6xl text-center">Gestione <span className="text-indigo-300">Online</span> vs <span className="text-indigo-300">Fisica</span></p>
        <p className="text-2xl md:text-4xl font-medium text-center">Confronta i pacchetti.</p>
        <FvsO />

      </section>

      {/* todo: gestione online vs fisica, recensioni, contatti */}
    </main>
  );
}
