'use client';

import { SectionTitle } from "./ui/SectionTitle";
import Image from "next/image";

export const Clients = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const clients = [
    { name: "Districarnaval", logo: "/assets/Clientes/Districarnaval.png" },
    { name: "Craft", logo: "/assets/Clientes/craft.png" },
    { name: "El Río", logo: "/assets/Clientes/elrio.png" },
    { name: "J Empaques", logo: "/assets/Clientes/jempaques.png" },
  ];

  // Repetimos la lista para lograr un scroll infinito continuo y fluido
  const marqueeClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section id="clientes" className="py-20 bg-brand-warm border-y border-gray-100 relative overflow-hidden">
      <div className="honeycomb-bg absolute inset-0 opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle sub="Algunas de las empresas y marcas que confían en nuestras soluciones de empaque sostenible" accentColor={accentColor}>
          Nuestros Clientes
        </SectionTitle>
        
        <div className="relative overflow-hidden mt-12 py-4">
          <div className="flex animate-marquee gap-8 sm:gap-10 items-center">
            {marqueeClients.map((client, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 flex items-center justify-center h-28 sm:h-32 w-52 sm:w-64 group"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src={client.logo} 
                    alt={`Logo ${client.name}`} 
                    width={200} 
                    height={100} 
                    className="max-h-16 sm:max-h-20 max-w-[150px] sm:max-w-[180px] w-auto h-auto object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Degradados laterales para suavizar la entrada y salida */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-brand-warm to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-brand-warm to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
