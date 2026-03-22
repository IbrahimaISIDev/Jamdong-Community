export default function Identity() {
  const stats = [
    { number: '10+', label: 'ANS D\'EXPÉRIENCE', color: 'border-yellow-500' },
    { number: '15+', label: 'CLIENTS MAJEURS', color: 'border-blue-500' },
    { number: '6', label: 'PÔLES DE SERVICES', color: 'border-red-500' },
    { number: '360°', label: 'VISION GLOBALE', color: 'border-green-500' }
  ];

  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #444 1px, transparent 1px)',
          backgroundSize: '15px 15px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-yellow-500 text-xs tracking-[0.3em] mb-4 uppercase">Notre identité</p>

        <h2 className="text-5xl md:text-7xl font-black mb-16 leading-tight">
          <span className="text-white">UNE AGENCE FAITE<br />POUR </span><span className="text-yellow-500">L'AFRIQUE D'AUJOURD'HUI</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 border-4 ${stat.color} transform hover:scale-105 transition-transform duration-300`}
            >
              <div className="text-6xl md:text-7xl font-black text-black mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-bold text-black tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-gray-800">
          <h3 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight">
            QU'EST-CE QUE LA<br />
            <span className="text-yellow-500">COMMUNICATION 360°</span> ?
          </h3>

          <p className="text-white text-lg mb-12 leading-relaxed max-w-4xl">
            Imaginez votre message comme une lumière : une ampoule seule n'éclaire qu'une partie de la pièce. La communication 360°, c'est mettre des projecteurs dans chaque coin — pour que votre audience ne puisse pas vous rater, où qu'elle regarde.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-5xl font-black text-black mx-auto mb-6">
                1
              </div>
              <h4 className="text-2xl font-black text-white mb-4">ON VOUS VOIT</h4>
              <p className="text-gray-300 leading-relaxed">
                Télévision, radio, affichage, presse — vos messages atteignent le plus grand nombre via les canaux établis et crédibles.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-5xl font-black text-black mx-auto mb-6">
                2
              </div>
              <h4 className="text-2xl font-black text-white mb-4">ON VOUS SUIT</h4>
              <p className="text-gray-300 leading-relaxed">
                Réseaux sociaux, influenceurs, newsletters — votre communauté s'engage, partage et devient ambassadrice de votre marque.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-5xl font-black text-black mx-auto mb-6">
                3
              </div>
              <h4 className="text-2xl font-black text-white mb-4">ON VOUS RENCONTRE</h4>
              <p className="text-gray-300 leading-relaxed">
                Événements, activations terrain, pop-up, goodies — votre audience vous vit en vrai, ce qui crée un lien durable et mémorable.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
