'use client';

import Image from "next/image";
import { SectionTitle } from "./ui/SectionTitle";
import { Hexagon } from "./ui/Hexagon";

export const About = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  return (
    <section id="nosotros" className="py-24 px-6 bg-[#141414] text-white relative overflow-hidden">
      <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none" />
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Team Photo Container - Full uncropped view */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white/15 group bg-brand-surface">
            <div className="relative w-full aspect-[870/588] overflow-hidden">
              <Image 
                src="/assets/equipoperlad.jpg" 
                alt="Equipo de Trabajo Perlad" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Subtitle tag below image */}
          <div className="mt-4 flex items-center justify-between px-2">
            <div className="flex items-center gap-2.5">
              <Hexagon size={10} bg={accentColor} />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Equipo Humano Perlad</span>
            </div>
            <span className="text-[11px] text-accent font-medium">Compromiso & Innovación Sostenible</span>
          </div>

          {/* Decorative Corner Hexagon */}
          <div className="absolute -top-3 -right-3 hidden sm:block animate-float pointer-events-none">
            <Hexagon size={40} bg={`${accentColor}25`} className="backdrop-blur-sm border border-accent/30">
              <Hexagon size={14} bg={accentColor} />
            </Hexagon>
          </div>
        </div>

        {/* Text and Values Column */}
        <div className="lg:col-span-6">
          <SectionTitle light accentColor={accentColor}>Quiénes Somos</SectionTitle>
          <div className="space-y-6 text-white/70 text-base sm:text-lg leading-relaxed mt-6">
            <p>
              En <strong className="text-white font-semibold">Perlad</strong> somos pioneros en el desarrollo de estructuras de cartón panal fabricadas con papel 100% reciclable. Nuestra misión es ofrecer soluciones de empaque innovadoras que protejan tanto tu producto como el medio ambiente.
            </p>
            <p>
              Con más de 15 años de experiencia, contamos con un equipo humano y tecnología especializada para crear materiales de alta ingeniería que sustituyen eficazmente al plástico y la madera en la industria del embalaje y la logística moderna.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {[
              { label: 'Reciclable', desc: '100% Celulosa' },
              { label: 'Biodegradable', desc: 'Cero residuos' },
              { label: 'Liviano', desc: 'Ahorro en fletes' },
              { label: 'Resistente', desc: 'Alta compresión' }
            ].map((v, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 hover:border-accent/30 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <Hexagon size={18} bg={accentColor}>
                    <span className="text-[8px] text-brand-dark font-bold">✓</span>
                  </Hexagon>
                  <span className="font-bold text-sm text-white">{v.label}</span>
                </div>
                <p className="text-[11px] text-white/40 pl-6">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
