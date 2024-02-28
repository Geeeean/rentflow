"use client";

import "./global.css";

import { FaArrowRight } from "react-icons/fa"

import { motion } from "framer-motion";
import { useState } from "react";
import { MobileMenu } from "./components/MobileMenu";
import Nav from "./components/Nav";

import RtRGrid from "./components/RtRGrid";
import GGrid from "./components/GGrid";
import Hero from "./components/Hero";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={`font-sans bg-gray-50${isOpen ? "h-screen overflow-hidden" : ""}`}>
      <div className="md:h-screen flex flex-col">
        
        {/* Navbar */}
        <motion.div
          className="w-full flex justify-center"
          animate={isOpen ? "open" : "closed"}
        >
          <MobileMenu setIsOpen={setIsOpen} />

          <Nav setIsOpen={setIsOpen} />
        </motion.div>

        {/* section 1 */}
        <Hero />
      </div>

      {/* section 2 */}
      <section className="p-8 md:px-12  overflow-hidden">
        <div className='bg-blue-100 font-bold text-blue-600 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO COMPLETO</div>
        <p className="font-bold text-4xl md:text-6xl mt-4">Servizio <span className="text-indigo-700">Rent to Rent</span></p>
        <p className="text-2xl md:text-4xl font-medium">La soluzione più sicura per i proprietari.</p>
        <RtRGrid />
      </section>

      {/* section 3 */}
      <section className="p-8 md:px-12  overflow-hidden bg-slate-900 text-white">
        <div className='font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO</div>
        <p className="font-bold text-4xl md:text-6xl mt-4">Servizio di Gestione immobili</p>
        <p className="text-2xl md:text-4xl font-medium">Fai fruttare il tuo appartamento.</p>
        <GGrid />
      </section>

      {/* todo: gestione online vs fisica, recensioni, contatti */}
    </main>
  );
}
