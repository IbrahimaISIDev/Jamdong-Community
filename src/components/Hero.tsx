
export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <div className="mb-8">
          <img 
            src="/images/Logo.PNG" 
            alt="Jamdong Community Logo" 
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
        </div>
        
        <p className="text-yellow-500 text-sm tracking-[0.3em] mb-12 uppercase font-light">
          Agence créative • Dakar, Sénégal • Depuis 2015
        </p>

        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none">
          <span className="text-white">JAMDONG</span>
          <br />
          <span className="text-yellow-500">COMMUNITY</span>
        </h1>

        <p className="text-white text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
          Nous racontons vos histoires, amplifions votre voix et
          connectons votre marque aux audiences qui
          comptent — en Afrique et au-delà.
        </p>

        <button className="px-12 py-4 border-2 border-yellow-500 text-yellow-500 rounded-full font-bold tracking-wider hover:bg-yellow-500 hover:text-black transition-all duration-300 uppercase text-sm">
          Communication 360°
        </button>
      </div>

    </section>
  );
}
