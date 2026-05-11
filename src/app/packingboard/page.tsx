'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hexagon } from "@/components/ui/Hexagon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";

export default function PackingboardPage() {
  const accentColor = '#94C11F';

  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-accent selection:text-brand-dark">
      <Header accentColor={accentColor} />

      {/* Product Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 mb-6">
                <Hexagon size={12} bg={accentColor} />
                <span className="text-accent text-[10px] font-bold uppercase tracking-widest">Empaque Industrial</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                Packingboard de <br />
                <span className="text-accent">Alta Resistencia</span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                La solución definitiva para empaques industriales que requieren máxima protección. Estructuras de cartón panal diseñadas para soportar las condiciones más exigentes.
              </p>
              <button 
                className="bg-accent text-brand-dark px-10 py-4 font-bold uppercase tracking-wider hover:bg-white transition-all"
                style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
              >
                Solicitar Cotización
              </button>
            </div>
            
            <div className="relative aspect-[16/9] md:aspect-[2/1] animate-scale-in flex items-center justify-center group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full opacity-30"></div>
              
              {/* Decorative Frames */}
              <div className="absolute -inset-6 border border-white/5 rounded-2xl"></div>
              <div className="absolute -inset-3 border border-white/10 rounded-xl"></div>
              
              {/* Image Container with Frame */}
              <div className="relative w-full h-full p-[1px] bg-gradient-to-br from-accent via-accent/20 to-transparent rounded-xl overflow-hidden shadow-2xl">
                <div className="relative w-full h-full bg-brand-dark rounded-[10px] overflow-hidden">
                   <Image 
                     src="/assets/imgcategorias/packingboard.png" 
                     alt="Packingboard Perlad" 
                     fill 
                     className="object-cover transition-transform duration-700 group-hover:scale-110"
                     quality={80}
                     priority
                   />
                </div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-accent -translate-x-3 -translate-y-3 opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent translate-x-3 translate-y-3 opacity-50 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-24 bg-white text-brand-dark relative overflow-hidden">
        <div className="honeycomb-bg absolute inset-0 opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle sub="Características técnicas para protección superior" accentColor={accentColor}>
            Especificaciones
          </SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Resistencia Mecánica", desc: "Soporta grandes cargas y presiones, ideal para el apilamiento en almacenes." },
              { title: "Peso Ligero", desc: "Optimiza los costos de transporte sin comprometer la seguridad del producto." },
              { title: "Sostenible", desc: "Material 100% reciclable y biodegradable, alineado con políticas de economía circular." }
            ].map((s, i) => (
              <div key={i} className="p-8 bg-brand-warm border-l-4 border-accent">
                <h3 className="font-display text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 px-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/5] bg-white/5 relative" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)' }}>
                <Image src="/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.49.04.png" alt="Packingboard App 1" fill className="object-cover opacity-50" />
              </div>
              <div className="aspect-[4/5] bg-white/5 relative mt-8" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20%)' }}>
                <Image src="/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.49.19.png" alt="Packingboard App 2" fill className="object-cover opacity-50" />
              </div>
            </div>
            <div>
              <SectionTitle light sub="Soluciones versátiles para la industria" accentColor={accentColor}>
                Aplicaciones Principales
              </SectionTitle>
              <ul className="space-y-6 mt-10">
                {[
                  "Embalajes de exportación de alta exigencia.",
                  "Protección perimetral para maquinaria y equipos.",
                  "Cajas a medida para productos pesados.",
                  "Separadores de carga para transporte marítimo y terrestre."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white/70">
                    <Hexagon size={16} bg={accentColor} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer accentColor={accentColor} />
    </main>
  );
}
