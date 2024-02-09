import './global.css'

import Card from './components/Card';

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

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-screen bg-red-500"></div>
      <div className="w-full min-h-screen bg-gray-900 flex gap-10 flex-col items-center justify-center p-10">

        <div className="flex flex-col text-center gap-2">
          <p className="font-mono text-2xl md:text-4xl font-bold text-gray-50">I nostri servizi</p>
          <p className="font-sans text-xl md:text-2xl text-gray-400">Forniamo due principali servizi per i tuoi appartamenti.</p>
        </div>
        
        <div className="flex flex-col gap-5 md:flex-row justify-center">      
          {cardCont.map(({tag, title, subtitle, desc, btnText}, index) => {
            return <Card key={index} tag={tag} title={title} subtitle={subtitle} desc={desc} btnText={btnText} />
          })}
        </div>
      </div>
      <div></div>
    </main>
  );
}
