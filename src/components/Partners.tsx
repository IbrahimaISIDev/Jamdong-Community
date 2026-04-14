export default function Partners() {
  const partners = [
    { name: 'DAKAR 2026', logo: '/partners/Dakar 2026.png' },
    { name: 'UN', logo: '/partners/Flag_of_the_United_Nations.png' },
    { name: 'EU', logo: '/partners/DER_NEW.png' },
    { name: 'GIZ', logo: '/partners/Giz.png' },
    { name: 'Adepme', logo: '/partners/Logo_NEW.PNG' },
    { name: 'KIRENE ORANGE', logo: '/partners/Kirène avec orange.png' },
    { name: 'SAMSUNG', logo: '/partners/samsung_NEW.png' },
    { name: 'Orange', logo: '/partners/Orange logo.png' },
    { name: 'GROUPE KIRENE', logo: '/partners/Groupe Kirène.png' },
    { name: 'Emirates', logo: '/partners/Emirates_banner_logo.png' },
    { name: 'YAMAHA', logo: '/partners/YAMAHA_NEW.png' },
    { name: 'Pressea FRESH', logo: '/partners/pressea fresh.png' },
    { name: 'UBA', logo: '/partners/UBA.png' },
    { name: 'EIFFAGE', logo: '/partners/Eiffage-Logo.png' }
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
        <p className="text-yellow-500 text-xs tracking-[0.3em] mb-4 uppercase">Nos partenaires</p>

        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
          <span className="text-white">ILS NOUS ONT </span>
          <span className="text-yellow-500">TOUS FAIT CONFIANCE</span>
        </h2>

        <p className="text-gray-400 text-lg mb-16 leading-relaxed max-w-4xl">
          Notre portefeuille clients témoigne de notre capacité à répondre aux exigences les plus élevées 
          dans des secteurs variés. Nous accompagnons des multinationales, des institutions internationales 
          et des entrepreneurs africains avec la même exigence créative.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 sm:p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300 group min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-16 sm:h-20 lg:h-24 object-contain opacity-95 group-hover:opacity-100 transition-all duration-300 filter brightness-110 group-hover:brightness-125"
                onError={(e) => {
                  // Fallback si l'image n'existe pas
                  e.currentTarget.src = `data:image/svg+xml,%3Csvg width='120' height='48' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='48' fill='%23333'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23666' font-family='Arial' font-size='10'%3E${partner.name}%3C/text%3E%3C/svg%3E`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
