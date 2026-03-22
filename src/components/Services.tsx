import { Video, Share2, Users, Smartphone, Printer, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Video,
      number: '1',
      title: 'MÉDIAS TRADITIONNELS',
      description: 'Vous souhaitez être vu par le plus grand nombre ? Nous plaçons votre message sur les supports qui ont fait leurs preuves. Ces canaux offrent crédibilité et portée massive.',
      details: 'Télévision, Radio, Podcast, Affichage, Cinéma, Vidéos institutionnelles, Publicités et Reportages.',
      image: '/images/Média traditionnels.PNG'
    },
    {
      icon: Share2,
      number: '2',
      title: 'DIGITAL & INFLUENCE',
      description: 'Votre audience passe des heures sur son téléphone. Nous allons la chercher là où elle est — réseaux sociaux, campagnes influenceurs et newsletters qui fidélisent.',
      details: 'Réseaux sociaux, Blogging/Campagne d\'influence, Campagne d\'emailing, Newsletter.',
      image: '/images/Digital & influence.PNG'
    },
    {
      icon: Users,
      number: '3',
      title: 'HORS MÉDIAS & TERRAIN',
      description: 'Actions de communication directes et expérientielles qui permettent d\'interagir avec le public sur le terrain et de créer une relation plus proche avec les consommateurs.',
      details: 'Événements, Concerts, Forums, Pop-up, SMS',
      image: '/images/Hors média et terrain.PNG'
    },
    {
      icon: Smartphone,
      number: '4',
      title: 'NOUVEAUX SUPPORTS',
      description: 'Pour surprendre dans un monde saturé de messages, nous utilisons des supports innovants : écrans numériques dynamiques, QR codes interactifs, street art et installations créatives.',
      details: 'Kakémono numérique, QR code, Street art',
      image: '/images/NOUVEAUX SUPPORTS.jpeg'
    },
    {
      icon: Printer,
      number: '5',
      title: 'IMPRESSION / SÉRIGRAPHIE',
      description: 'Un support physique, ça se touche, ça se garde. Nous concevons et produisons tous vos supports imprimés — flyers, signalétique, textiles — pour une présence tangible et professionnelle.',
      details: 'Papier, Signalétique, Textiles, Goodies',
      image: '/images/Impression /Impression-sérigraphie.PNG'
    },
    {
      icon: Palette,
      number: '6',
      title: 'BRANDING & DESIGN',
      description: 'Votre identité visuelle, c\'est votre première impression. Nous créons des univers graphiques forts — logo, charte, supports — qui rendent votre marque immédiatement reconnaissable.',
      details: 'Logo, Charte Graphique, Identité Visuelle',
      image: '/images/Branding & design.PNG'
    }
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
        <p className="text-yellow-500 text-xs tracking-[0.3em] mb-4 uppercase">Ce que nous faisons</p>

        <h2 className="text-5xl md:text-7xl font-black mb-20 leading-tight">
          <span className="text-white">NOS </span>
          <span className="text-yellow-500">6 PÔLES</span>
          <span className="text-white"> DE SERVICES</span>
        </h2>

        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const iconBgColors = ['bg-yellow-500', 'bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500', 'bg-blue-500'];

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video rounded-2xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`w-16 h-16 ${iconBgColors[index]} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-black" strokeWidth={2.5} />
                  </div>

                  <h3 className="text-3xl font-black text-white mb-4">
                    {service.number}. {service.title}
                  </h3>

                  <p className="text-white text-lg mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <p className="text-gray-400 italic">
                    {service.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
