"use client";

import { useContext } from "react";
import { WrapperContext } from "@/app/components/Wrapper";

import { BackgroundGradientAnimation } from "@/app/components/BackgroundGradientAnimation";

import RtRGrid from "@/app/components/RtRGrid";
import GGrid from "@/app/components/GGrid";
import Hero from "@/app/components/Hero";
import FvsO from "@/app/components/FvsO";
import FAQs from "@/app/components/FAQs";


export default function Home() {
  const { isOpen } = useContext(WrapperContext)

  return (
    <main className={`font-sans bg-gray-50 ${isOpen ? "h-screen overflow-hidden" : ""}`}>
      <section className="flex flex-col relative items-center pt-20">
        {/* background */}
        <div className="absolute h-full w-full top-0 left-0 z-0">
          <BackgroundGradientAnimation />
        </div>

        {/* section 1: hero section (servizi) */}
        <Hero />
      </section>

      {/* section 2: servizio rent to rent */}
      <section className="relative overflow-hidden flex justify-center w-full" id="rtr">
        <div className="max-w-screen-2xl p-8 md:px-12">
          <div className='bg-blue-100 font-bold text-blue-600 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO COMPLETO</div>
          <p className="font-bold text-4xl md:text-6xl mt-4">Servizio <span className="text-indigo-700">Rent to Rent</span></p>
          <p className="text-2xl md:text-4xl font-medium">La soluzione più sicura per i proprietari</p>
          <RtRGrid />
        </div>
      </section>

      {/* section 3: servizio di gestione */}
      <section className="flex justify-center w-full overflow-hidden bg-slate-900 text-gray-50" id="gi">
        <div className="max-w-screen-2xl p-8 md:px-12">
          <div className='font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO</div>
          <p className="font-bold text-4xl md:text-6xl mt-4">Servizio di Gestione immobili</p>
          <p className="text-2xl md:text-4xl font-medium">Fai fruttare il tuo appartamento</p>
          <GGrid />
        </div>
      </section>

      {/* section 4: gestione online / gestione fisica */}
      <section className="p-8 md:px-12 overflow-hidden bg-slate-900 text-gray-50">
        <p className="font-bold text-4xl md:text-6xl text-center">Gestione <span className="text-indigo-300">Online</span> vs <span className="text-indigo-300">Fisica</span></p>
        <p className="text-2xl md:text-4xl font-medium text-center">Confronta i pacchetti</p>
        <FvsO />
      </section>

      {/* section 5: faqs */}
      <section className="overflow-hidden bg-slate-900 text-gray-50 flex flex-col items-center" id="faqs">
        <div className="max-w-screen-2xl p-8 md:px-12">
          <p className="font-bold text-4xl md:text-6xl text-center">FAQs</p>
          <p className="text-2xl md:text-4xl font-medium text-center">Domande frequenti</p>
          <FAQs />
        </div>
      </section>

      {/* todo: recensioni */}
    </main>
  );
}
