import { SectionTitle } from "./ui/SectionTitle";
import { Hexagon } from "./ui/Hexagon";
import { MapPin, Phone, Mail } from "lucide-react";

export const Distributors = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const distributors = [
    { 
      name: "Distribuidora del Norte", 
      location: "Zona Guajira",
      phone: "+52 (81) 0000-0000",
      email: "norte@perlad.com"
    },
    { 
      name: "Soluciones de Empaque Centro", 
      location: "Zona costa Atlantica",
      phone: "+52 (958) 123 4567",
      email: "[EMAIL_ADDRESS]"
    },
    { 
      name: "Logística Sustentable", 
      location: "Zona Centro",
      phone: "+52 (33) 0000-0000",
      email: "occidente@perlad.com"
    }
  ];

  return (
    <section id="distribuidores" className="py-24 px-6 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle sub="Encuentra nuestros productos cerca de ti a través de nuestra red oficial" light accentColor={accentColor}>
          Distribuidores Autorizados
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {distributors.map((dist, i) => (
            <div 
              key={i} 
              className="bg-white/5 border border-white/10 p-8 hover:border-accent/50 transition-all group"
              style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Hexagon size={40} bg={accentColor} className="opacity-20 group-hover:opacity-100 transition-opacity">
                  <MapPin size={18} className="text-white" />
                </Hexagon>
                <h3 className="text-xl font-bold font-display">{dist.name}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin size={16} className="text-accent" />
                  <span className="text-sm">{dist.location}</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Phone size={16} className="text-accent" />
                  <span className="text-sm">{dist.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Mail size={16} className="text-accent" />
                  <span className="text-sm">{dist.email}</span>
                </div>
              </div>

              <button className="mt-8 w-full py-3 border border-white/20 text-xs uppercase tracking-widest font-bold hover:bg-white hover:text-brand-dark transition-all">
                Contactar Distribuidor
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
