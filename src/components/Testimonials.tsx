'use client';

import { useState, useEffect } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Hexagon } from './ui/Hexagon';
import { cn } from '@/lib/utils';

export const Testimonials = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const [active, setActive] = useState(0);
  const testimonials = [
    { text: 'Perlad transformó nuestra cadena de embalaje. Redujimos costos y nuestro impacto ambiental simultáneamente.', author: 'Carlos Méndez', role: 'Director de Logística, Alimentos del Valle' },
    { text: 'La calidad del cartón panal superó nuestras expectativas. Nuestros productos llegan intactos y sin plástico.', author: 'María Fernández', role: 'Gerente de Compras, TechPack' },
    { text: 'Excelente servicio y compromiso con la sostenibilidad. Son nuestro aliado estratégico en empaques.', author: 'Roberto Silva', role: 'CEO, EcoExport' }
  ];

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  return (
    <section className="py-24 px-6 bg-brand-dark relative overflow-hidden">
      <div className="honeycomb-bg-dark absolute inset-0 opacity-100"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <SectionTitle light accentColor={accentColor}>Lo que dicen nuestros clientes</SectionTitle>
        
        <div className="relative min-h-[250px] mt-12">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={cn(
                "absolute top-0 left-0 w-full transition-all duration-700 ease-in-out",
                i === active ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-8 pointer-events-none"
              )}
            >
              <p className="font-display text-2xl md:text-3xl text-white italic leading-relaxed mb-10">
                "{t.text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <Hexagon size={48} bg={accentColor}>
                  <span className="text-brand-dark font-bold text-xl">{t.author[0]}</span>
                </Hexagon>
                <div className="text-left">
                  <div className="font-bold text-white text-lg">{t.author}</div>
                  <div className="text-white/40 text-sm">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActive(i)}
              className={cn(
                "h-2 transition-all duration-300",
                i === active ? "w-8 bg-accent" : "w-2 bg-white/20"
              )}
              style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};
