import './global.css'

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen bg-black"></div>
      <div className="w-screen min-h-screen bg-gray-900 flex gap-10 flex-col items-center justify-center p-10">

        <div className="flex flex-col text-center gap-2">
          <p className="font-mono text-2xl md:text-4xl font-bold text-gray-50">I nostri servizi</p>
          <p className="font-sans text-xl md:text-2xl text-gray-400">Forniamo due principali servizi per i tuoi appartamenti.</p>
        </div>
        
        <div className="flex flex-col gap-5 md:flex-row justify-center">

          <div className='shrink bg-gray-50 shadow-sm p-5 flex flex-col items-center rounded-xl gap-4 w-80'>
            <div className='h-16 flex justify-center items-center'>
              <div className='bg-blue-100 font-bold text-blue-600 px-3 py-1 rounded-full tracking-wide h-fit w-fit'>SERVIZIO COMPLETO</div>
            </div>
            <p className='bold text-5xl font-bold mb-2'>Rent to Rent</p>
            <p className='mb-5 text-xl font-light text-gray-700'>Il rendimento sicuro che cercavi</p>
            <p className='text-center mb-8 text-xl'>Gestiremo noi i tuoi affitti garantendo un flusso continuo di clienti.</p>
            <button className='font-bold text-gray-50 w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700'>Scopri ora</button>
          </div>

          <div className='shrink bg-gray-50 shadow-sm p-5 flex flex-col items-center rounded-xl gap-4 w-80'>
            <div className='h-16 hidden md:flex justify-center items-center'></div>
            <p className='bold text-5xl font-bold mb-2'>Gestione</p>
            <p className='mb-5 text-xl font-light text-gray-700'>Online e fisica</p>
            <p className='text-center mb-8 text-xl'>Gestiremo noi il tuo immobile, garantendo il massimo della resa con il minimo sforzo.</p>
            <button className='font-bold text-gray-50 w-full py-4 rounded-lg bg-blue-600 hover:bg-blue-700'>Scopri ora</button>
          </div>

        </div>
      </div>
      <div></div>
    </main>
  );
}
