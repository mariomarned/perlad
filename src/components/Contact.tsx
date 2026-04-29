'use client';

import { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Diamond } from './ui/Diamond';

export const Contact = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const [sent, setSent] = useState(false);

  return (
    <section id="contacto" className="py-[120px] px-10 bg-[#1A1A1A] relative overflow-hidden text-white">
      <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-20 items-start">
        <div className="animate-fade-in">
          <SectionTitle light accentColor={accentColor}>Contáctanos</SectionTitle>
          <p className="font-sans text-[17px] text-white/65 leading-[1.8] mb-10">
            ¿Listo para hacer el cambio hacia empaques sostenibles? Escríbenos y te asesoramos sin compromiso.
          </p>
          <div className="flex flex-col gap-5">
            {[
              { label: 'Email', value: 'contacto@perlad.com' },
              { label: 'Teléfono', value: '+57 (1) 234-5678' },
              { label: 'Ubicación', value: 'Bogotá, Colombia' }
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-4">
                <Diamond size={36} bg={`${accentColor}22`}>
                  <Diamond size={12} bg={accentColor} />
                </Diamond>
                <div>
                  <div className="font-sans text-[12px] text-white/40 uppercase tracking-[0.08em]">{c.label}</div>
                  <div className="font-sans text-[15px] text-white font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="bg-white/[0.04] border border-white/[0.08] p-6 sm:p-10 relative opacity-100 animate-fade-in [animation-delay:200ms]"
          style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}
        >
          {sent ? (
            <div className="text-center py-10">
              <Diamond size={60} bg={accentColor} className="mx-auto mb-5">
                <span className="text-[#1A1A1A] text-[28px] font-bold">✓</span>
              </Diamond>
              <h3 className="font-display text-[24px] font-bold mb-2">¡Mensaje Enviado!</h3>
              <p className="font-sans text-white/60 text-[15px]">Te responderemos pronto.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[12px] text-white/50 uppercase tracking-[0.08em] block mb-2">Nombre</label>
                  <input 
                    type="text" 
                    required 
                    className="w-full bg-white/[0.06] border border-white/[0.1] px-4 py-[14px] text-white font-sans text-[15px] outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[12px] text-white/50 uppercase tracking-[0.08em] block mb-2">Email</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full bg-white/[0.06] border border-white/[0.1] px-4 py-[14px] text-white font-sans text-[15px] outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[12px] text-white/50 uppercase tracking-[0.08em] block mb-2">Empresa</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/[0.06] border border-white/[0.1] px-4 py-[14px] text-white font-sans text-[15px] outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[12px] text-white/50 uppercase tracking-[0.08em] block mb-2">Teléfono</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/[0.06] border border-white/[0.1] px-4 py-[14px] text-white font-sans text-[15px] outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-sans text-[12px] text-white/50 uppercase tracking-[0.08em] block mb-2">Mensaje</label>
                <textarea 
                  rows={4} 
                  required 
                  className="w-full bg-white/[0.06] border border-white/[0.1] px-4 py-[14px] text-white font-sans text-[15px] outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-accent hover:bg-accent-dark text-[#1A1A1A] py-4 font-sans font-bold uppercase tracking-[0.06em] transition-transform active:scale-[0.98]"
                style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
