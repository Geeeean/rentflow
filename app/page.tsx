"use client";

// import "./global.css";
import "@/app/global.css"

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
        <p className="text-2xl md:text-4xl font-medium">La soluzione più sicura per i proprietari.</p>
        <RtRGrid />
      </section>

      {/* section 3: servizio di gestione */}
      <section className="p-8 md:px-12  overflow-hidden bg-slate-900 text-gray-50" id="gi">
        <div className='font-bold bg-gray-100 text-gray-800 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO</div>
        <p className="font-bold text-4xl md:text-6xl mt-4">Servizio di Gestione immobili</p>
        <p className="text-2xl md:text-4xl font-medium">Fai fruttare il tuo appartamento.</p>
        <GGrid />
      </section>

      {/* section 4: gestione online / gestione fisica */}
      <section className="p-8 md:px-12  overflow-hidden bg-slate-900 text-gray-50">
        <p className="font-bold text-4xl md:text-6xl text-center">Gestione <span className="text-indigo-300">Online</span> vs <span className="text-indigo-300">Fisica</span></p>
        <p className="text-2xl md:text-4xl font-medium text-center">Confronta i pacchetti.</p>
        <FvsO />
      </section>

      {/* section 5: faqs */}
      <section className="p-8 md:px-12  overflow-hidden bg-slate-900 text-gray-50 flex flex-col items-center" id="faqs">
        <p className="font-bold text-4xl md:text-6xl text-center">FAQs</p>
        <div className="mt-8 w-full">
          {
            [
              { title: "La sublocazione è legale?", desc: "Assolutamente si, sfatiamo questo mito, l’articolo n.1594 del c.c. lo disciplina. Naturalmente ciò dovrà essere specificato all’interno del contratto." },
              { title: "Come fate a garantire i pagamenti?", desc: "Quando un proprietario decide di affidarsi a noi, la garanzia di pagamento è uno dei nostri punti di forza. Visto che per noi l’appartamento rappresenta una vera e propria attività, prima di prenderlo in affitto, analizziamo la zona e i competitors, infine  procederemo con la firma solamente se riteniamo che quella zona/città possa realmente procurarci degli introiti, proprio per questo è nel nostro massimo interesse mantenere l’appartamento per un lungo periodo, in modo tale garantire sicurezza e stabilità al proprietario." },
              {
                title: "Come fate ad assicurare i danni all’appartamento?",
                desc: <>
                  <p>Le piattaforme di cui ci serviamo includono un l’assicurazione per eventuali  danni agli ospiti e all’immobile:</p>
                  <ul className="list-disc list-inside">
                    <li className="ml-2">
                      Protezione per danni all’immobile e al contenuto fino a 3.000.000 USD (se gli ospiti non ti risarciscono per i danni da loro causati al tuo alloggio e ai tuoi beni)
                    </li>
                    <li className="ml-2">
                      Assicurazione di responsabilità civile fino a 1.000.000 USD (protezione nel raro caso in cui un ospite si faccia male o i suoi effetti personali vengano danneggiati o rubati)
                    </li>
                  </ul>
                  <p className="mt-2">Inoltre qualora il proprietario non si senta abbastanza al sicuro, provvederemo a istituire un’ulteriore polizza assicurativa a suo favore, poiché è nel nostro massimo interesse garantire sicurezza e stabilità.</p>
                </>
              },
              { title: "Cambiando sempre ospiti non c’è il rischio che l’appartamento si rovini prima rispetto ad un affitto tradizionale?", desc: "Assolutamente no, anzi tutto il contrario. Proprio perché è nel nostro interesse mantenerlo pulito e perfetto, pronto ad ospitare nuovi clienti; inoltre, per lo stesso motivo, nel malaugurato caso in cui vengano recati danni all’interno dell’ alloggio, la prima cosa alla quale penseremo noi sarà porvi rimedio. Niente a che vedere con un affitto tradizionale." }
            ].map(({ title, desc }, index) => {
              return <Collapsible title={title} desc={desc} key={index} />
            })
          }
        </div>
      </section>

      {/* todo: recensioni */}

      <section className="p-8 md:px-12  overflow-hidden bg-slate-900 text-gray-50 flex flex-col items-center" id="contacts">
        <p className="font-bold text-4xl md:text-6xl text-center">Contattaci</p>
        <motion.div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8 justify-center ring-1 ring-slate-600 bg-black/10 rounded-xl p-6 md:p-8 w-full md:w-fit text-sm md:text-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            ease: "anticipate",
            duration: 0.75
          }}
          variants={{
            visible: { x: 0, opacity: 1 },
            hidden: { x: -20, opacity: 0 }
          }}
        >
          <ContactCard title="Telefono" content="+39 334 180 5336" icon={<PiPhone size={22} />} />
          <div className="md:w-[1px] md:h-20 hidden bg-slate-500"></div>
          <ContactCard title="Email" content="petrellistracciaacquisizioni@gmail.com" icon={<MdEmail size={22} />} />
        </motion.div>
      </section>

      <footer>

      </footer>
    </main>
  );
}
