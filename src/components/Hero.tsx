'use client';

import Image from "next/image";
import Link from "next/link";
import { Hexagon } from "./ui/Hexagon";
import { AnimCounter } from "./ui/AnimCounter";

interface HeroProps {
  accentColor?: string;
}

export const Hero = ({ accentColor = '#94C11F' }: HeroProps) => {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-brand-dark flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/inicio/carton-panal-hero.jpg"
          alt="Fondo Cartón Panal Perlad"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      </div>

      {/* Honeycomb overlay */}
      <div className="honeycomb-bg-dark absolute inset-0 z-10 pointer-events-none opacity-30"></div>

      {/* Floating diamonds */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="absolute animate-float"
            style={{
              left: `${10 + i * 15}%`, 
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.4}s`
            }}
          >
            <Hexagon size={20 + i * 8} bg={accentColor} style={{ opacity: 0.1 + i * 0.03 }} />
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 relative z-10 w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="max-w-2xl flex-1 text-center md:text-left">
          <div 
            className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 px-5 py-2 mb-6 md:mb-8 animate-fade-in"
            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
          >
            <Hexagon size={10} bg={accentColor} />
            <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Empaques 100% Reciclables
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 animate-slide-up">
            Innovación{" "}
            <span className="text-accent relative inline-block">
              Sostenible
              <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12">
                <path d="M0 8 Q50 0 100 8 Q150 16 200 8" fill="none" stroke={accentColor} strokeWidth="2" opacity="0.5" />
              </svg>
            </span>
          </h1>

          <p className="text-white/60 text-base md:text-xl leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 animate-slide-up [animation-delay:200ms]">
            Estructuras de cartón panal fabricadas con papel 100% reciclable. Soluciones de empaque que protegen tu producto y el planeta.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-slide-up [animation-delay:400ms]">
            <button 
              onClick={() => {
                const el = document.getElementById('productos');
                if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
              }}
              className="bg-accent hover:bg-accent-dark text-brand-dark px-8 md:px-10 py-3 md:py-4 font-bold uppercase tracking-wider transition-all text-sm md:text-base flex items-center justify-center cursor-pointer"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              Ver Productos
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('contacto');
                if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
              }}
              className="bg-transparent border border-white/30 text-white hover:bg-white/5 px-8 md:px-10 py-3 md:py-4 font-medium transition-all text-sm md:text-base"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              Contáctanos
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center animate-scale-in w-full max-w-[400px] md:max-w-none">
          <div className="relative group max-w-[440px] md:max-w-[540px] w-full">
            {/* Resplandor ambiental de fondo */}
            <div 
              className="absolute -inset-2 rounded-3xl opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-75"
              style={{ background: `radial-gradient(circle, ${accentColor}55 0%, transparent 70%)` }}
            />
            
            {/* Contenedor principal de la imagen */}
            <div className="relative rounded-2xl overflow-hidden bg-brand-surface shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-accent/20">
              <Image 
                src="/assets/Honeycombprotegemos.jpg" 
                alt="Perlad - Innovación Sostenible en Cartón Panal" 
                width={732} 
                height={488} 
                priority
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
              />
              
              {/* Degradado sutil inferior para suavizar la integración */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Placa decorativa de marca */}
            <div className="absolute -bottom-3 -right-2 hidden sm:flex items-center gap-2 bg-brand-dark/95 border border-accent/30 backdrop-blur-md px-3.5 py-1.5 rounded-lg shadow-xl z-20">
              <Hexagon size={10} bg={accentColor} />
              <span className="text-white text-[11px] font-bold uppercase tracking-wider">Protección Sostenible</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10 w-full">
        <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-20">
          {[
            { n: 15, s: '+', label: 'Años de experiencia' },
            { n: 100, s: '%', label: 'Materiales reciclables' },
            { n: 500, s: '+', label: 'Clientes satisfechos' }
          ].map((d, i) => (
            <div key={i} className="flex items-center gap-4 text-left">
              <Hexagon size={40} bg={`${accentColor}22`} className="shrink-0">
                <Hexagon size={16} bg={accentColor} />
              </Hexagon>
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold text-white">
                  <AnimCounter end={d.n} />{d.s}
                </div>
                <div className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">{d.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
