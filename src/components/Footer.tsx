import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/images/Logo.PNG" 
                alt="Jamdong Community Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="text-white font-black text-lg">JAMDONG</div>
                <div className="text-yellow-500 font-black text-lg">COMMUNITY</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Agence créative spécialisée dans la communication 360° pour l'Afrique d'aujourd'hui.
            </p>
          </div>

          <div>
            <h3 className="text-white font-black text-xl mb-6">CONTACT</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-500 mt-1" />
                <p className="text-gray-400">Dakar, Sénégal</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-yellow-500 mt-1" />
                <p className="text-gray-400">contact@jamdongcommunity.com</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-yellow-500 mt-1" />
                <p className="text-gray-400">+22178 172 50 41</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black text-xl mb-6">SERVICES</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Médias Traditionnels</li>
              <li>Digital & Influence</li>
              <li>Hors Médias & Terrain</li>
              <li>Nouveaux Supports</li>
              <li>Impression / Sérigraphie</li>
              <li>Branding & Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2015-2026 Jamdong Community. Tous droits réservés.
            </p>
            <p className="text-yellow-500 text-sm font-bold tracking-wider">
              COMMUNICATION 360°
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}
