import { SectionTitle } from "./ui/SectionTitle";
import Image from "next/image";

export const Clients = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  // Estos son placeholders, puedes reemplazarlos con los logos reales
  const clients = [
    { name: "Cliente 1", logo: "/assets/logo-perlad.png" },
    { name: "Cliente 2", logo: "/assets/logo-perlad.png" },
    { name: "Cliente 3", logo: "/assets/logo-perlad.png" },
    { name: "Cliente 4", logo: "/assets/logo-perlad.png" },
    { name: "Cliente 5", logo: "/assets/logo-perlad.png" },
    { name: "Cliente 6", logo: "/assets/logo-perlad.png" },
  ];

  return (
    <section id="clientes" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle sub="Empresas que confían en nuestra innovación sostenible" accentColor={accentColor}>
          Nuestros Clientes
        </SectionTitle>
        
        <div className="relative overflow-hidden mt-12 py-4">
          <div className="flex animate-marquee gap-20 items-center">
            {/* Duplicamos la lista para el efecto infinito */}
            {[...clients, ...clients].map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 flex justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
              >
                <Image 
                  src={client.logo} 
                  alt={client.name} 
                  width={140} 
                  height={70} 
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Degradados laterales para suavizar la entrada/salida */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
