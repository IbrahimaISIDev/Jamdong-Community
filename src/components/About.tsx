export default function About() {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-600 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-red-600 rounded-full blur-[150px] opacity-30"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
          JAMDONG<br />COMMUNITY
        </h2>

        <div className="space-y-8 text-white text-lg leading-relaxed">
          <p>
            est une agence créative fondée en 2015, spécialisée dans la communication globale pour les marques, institutions et porteurs de projets qui veulent marquer les esprits.
          </p>

          <p className="text-xl font-light">
            Notre force ? Combiner la puissance des médias traditionnels (TV, radio, presse) avec la précision du digital (réseaux sociaux, influence, emailing) et l'impact du terrain (événements, activations, goodies). Le tout, avec une vision 360° —c'est-à-dire que nous couvrons tous les angles de votre communication, sans exception.
          </p>

          <p>
            Depuis 10 ans, nous accompagnons des multinationales, des institutions internationales et des entrepreneurs africains avec la même exigence créative : Samsung, Orange, Emirates, l'ONU, l'Union Européenne, les JOJ Dakar 2026...autant de noms qui témoignent de notre niveau d'exigence.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <img 
            src="/images/Logo.PNG" 
            alt="Jamdong Community Logo" 
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}
