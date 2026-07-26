import { SectionTitle } from "./ui/SectionTitle";
import { Hexagon } from "./ui/Hexagon";
import { MapPin, Phone, Mail, User, Smartphone, Building2 } from "lucide-react";

export const Distributors = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const distributors = [
    { 
      name: "EDIVACOSTA S.A.", 
      city: "Barranquilla",
      address: "CL 110 No. 6-335 M1 BG 8 METROPARQUE",
      phone: "(605) 3851788",
      contactName: "Santiago Arango",
      mobile: "316 8756152",
    },
    { 
      name: "EDIVA", 
      city: "Cali, Valle del Cauca",
      address: "CRA 6 No 45-120 bodega 15 plataforma logística Salomia",
      contact: "350 810 77 13- (604) 4480232",
      email: "servicioalcliente@ediva.com.co"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
          {distributors.map((dist, i) => (
            <div 
              key={i} 
              className="bg-white/5 border border-white/10 p-8 hover:border-accent/50 transition-all group"
              style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <Hexagon size={44} bg={accentColor} className="opacity-20 group-hover:opacity-100 transition-opacity shrink-0">
                  <Building2 size={20} className="text-white" />
                </Hexagon>
                <div>
                  <h3 className="text-xl font-bold font-display">{dist.name}</h3>
                  <p className="text-sm font-semibold" style={{ color: accentColor }}>{dist.city}</p>
                </div>
              </div>
              
              <div className="space-y-3.5 text-white/80">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0" style={{ color: accentColor }} />
                  <span className="text-sm">
                    <strong className="text-white/90">Dirección:</strong> {dist.address}
                  </span>
                </div>

                {dist.phone && (
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="shrink-0" style={{ color: accentColor }} />
                    <span className="text-sm">
                      <strong className="text-white/90">Teléfono:</strong> {dist.phone}
                    </span>
                  </div>
                )}

                {dist.contactName && (
                  <div className="flex items-center gap-3">
                    <User size={18} className="shrink-0" style={{ color: accentColor }} />
                    <span className="text-sm">
                      <strong className="text-white/90">Contacto:</strong> {dist.contactName}
                    </span>
                  </div>
                )}

                {dist.mobile && (
                  <div className="flex items-center gap-3">
                    <Smartphone size={18} className="shrink-0" style={{ color: accentColor }} />
                    <span className="text-sm">
                      <strong className="text-white/90">Celular:</strong> {dist.mobile}
                    </span>
                  </div>
                )}

                {dist.contact && (
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="shrink-0" style={{ color: accentColor }} />
                    <span className="text-sm">
                      <strong className="text-white/90">Contacto:</strong> {dist.contact}
                    </span>
                  </div>
                )}

                {dist.email && (
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="shrink-0" style={{ color: accentColor }} />
                    <span className="text-sm">
                      <strong className="text-white/90">Correo Electrónico:</strong>{" "}
                      <a href={`mailto:${dist.email}`} className="hover:underline text-white">
                        {dist.email}
                      </a>
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

