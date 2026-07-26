'use client';

import { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Hexagon } from './ui/Hexagon';

export const Contact = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("https://formsubmit.co/ajax/comercial@perlad.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: "Nuevo mensaje de contacto desde el sitio web Perlad",
          _template: "table",
          ...formData
        })
      });

      if (response.ok) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

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
              { label: 'Email', value: 'comercial@perlad.com', href: 'mailto:comercial@perlad.com' },
              { label: 'Teléfono', value: '302 464 7165- 324 392 9060', href: 'tel:3024647165' },
              { label: 'Ubicación', value: 'Autopista Norte, Kilometro25, Parque industrial del Norte bodega 114' }
            ].map((c, i) => (
              <div key={i} className="flex items-center gap-4">
                <Hexagon size={36} bg={`${accentColor}22`}>
                  <Hexagon size={12} bg={accentColor} />
                </Hexagon>
                <div>
                  <div className="font-sans text-[12px] text-white/40 uppercase tracking-[0.08em]">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="font-sans text-[15px] text-white font-medium hover:underline hover:text-accent transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <div className="font-sans text-[15px] text-white font-medium">{c.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps Integration */}
          <div className="mt-12 group">
            <div 
              className="w-full h-[250px] bg-white/5 border border-white/10 relative overflow-hidden grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)' }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15899.927638350522!2d-73.9569159128418!3d4.942653500000008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4076aac5cc66c7%3A0x23804bd14171206a!2sParque%20Industrial%20del%20Norte!5e0!3m2!1ses-419!2sus!4v1777604731484!5m2!1ses-419!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="mix-blend-lighten"
              ></iframe>
            </div>
            <p className="text-[10px] text-white/30 mt-3 uppercase tracking-widest font-medium">
              Parque Industrial del Norte - Girardota, Antioquia
            </p>
          </div>
        </div>

        <div 
          className="bg-white/[0.04] border border-white/[0.08] p-6 sm:p-10 relative opacity-100 animate-fade-in [animation-delay:200ms]"
          style={{ clipPath: 'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))' }}
        >
          {sent ? (
            <div className="text-center py-10">
              <Hexagon size={60} bg={accentColor} className="mx-auto mb-5">
                <span className="text-[#1A1A1A] text-[28px] font-bold">✓</span>
              </Hexagon>
              <h3 className="font-display text-[24px] font-bold mb-2">¡Mensaje Enviado!</h3>
              <p className="font-sans text-white/60 text-[15px]">Te responderemos pronto a tu correo electrónico.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label className="font-sans text-[12px] text-white/50 uppercase tracking-[0.08em] block mb-2">Nombre</label>
                  <input 
                    type="text" 
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required 
                    className="w-full bg-white/[0.06] border border-white/[0.1] px-4 py-[14px] text-white font-sans text-[15px] outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[12px] text-white/50 uppercase tracking-[0.08em] block mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full bg-white/[0.06] border border-white/[0.1] px-4 py-[14px] text-white font-sans text-[15px] outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[12px] text-white/50 uppercase tracking-[0.08em] block mb-2">Teléfono</label>
                  <input 
                    type="text" 
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full bg-white/[0.06] border border-white/[0.1] px-4 py-[14px] text-white font-sans text-[15px] outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="font-sans text-[12px] text-white/50 uppercase tracking-[0.08em] block mb-2">Mensaje</label>
                <textarea 
                  rows={4} 
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required 
                  className="w-full bg-white/[0.06] border border-white/[0.1] px-4 py-[14px] text-white font-sans text-[15px] outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              {error && (
                <p className="text-red-400 text-xs">
                  Hubo un error al enviar el mensaje. Inténtalo nuevamente o escríbenos directamente a comercial@perlad.com.
                </p>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-accent hover:bg-accent-dark text-[#1A1A1A] py-4 font-sans font-bold uppercase tracking-[0.06em] transition-transform active:scale-[0.98] disabled:opacity-50"
                style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
              >
                {loading ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
