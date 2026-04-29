'use client';

import { useState, useEffect } from 'react';
import { Diamond } from './ui/Diamond';
import { cn } from '@/lib/utils';

interface HeaderProps {
  activeSection: string;
  accentColor?: string;
}

export const Header = ({ activeSection, accentColor = '#94C11F' }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { name: 'Empaques y embalajes', sub: ['Contenedores (Octabines, Guacales)', 'Estibas de cartón', 'Relleno cartón panal', 'Esquinas y punteras'] },
    { name: 'Tablero industria gráfica' },
    { name: 'Rollo de papel panal' },
    { name: 'Bolsa bio' }
  ];

  const navLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Productos', id: 'productos', hasDropdown: true },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Sostenibilidad', id: 'sostenibilidad' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contacto', id: 'contacto' }
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-[1000] transition-all duration-400",
      scrolled ? "bg-[#1A1A1A]/95 backdrop-blur-md border-b border-accent/20" : "bg-transparent border-b border-transparent"
    )}>
      <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between">
        <img 
          src="/assets/logo-perlad.png" 
          alt="Perlad" 
          className="h-9 cursor-pointer brightness-0 invert" 
          onClick={() => scrollTo('hero')} 
        />
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.id} 
              className="relative py-2"
              onMouseEnter={() => link.hasDropdown && setProdOpen(true)}
              onMouseLeave={() => link.hasDropdown && setProdOpen(false)}
            >
              <a
                onClick={() => scrollTo(link.id)}
                className={cn(
                  "font-sans text-[14px] font-medium uppercase tracking-[0.03em] cursor-pointer transition-colors flex items-center gap-1",
                  activeSection === link.id ? "text-accent" : "text-white hover:text-accent"
                )}
              >
                {link.label}
                {link.hasDropdown && <span className="text-[10px] ml-1">▼</span>}
              </a>

              {link.hasDropdown && prodOpen && (
                <div className="absolute top-full left-[-20px] pt-3 min-w-[280px] animate-fade-in">
                  <div className="bg-[#1A1A1A]/97 backdrop-blur-[20px] rounded-xl p-4 border border-accent/15 shadow-2xl">
                    {products.map((p, i) => (
                      <div key={i} className={cn("group", p.sub ? "mb-3" : "mb-1")}>
                        <div className="text-white font-sans text-[14px] font-semibold py-1.5 px-2 flex items-center rounded-md hover:bg-white/5 transition-colors cursor-pointer">
                          <Diamond size={8} bg={accentColor} className="mr-2" />
                          {p.name}
                        </div>
                        {p.sub && p.sub.map((s, j) => (
                          <div 
                            key={j} 
                            className="text-white/60 font-sans text-[13px] py-1 pl-7 hover:text-white transition-colors cursor-pointer"
                          >
                            {s}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <a
            onClick={() => scrollTo('contacto')}
            className="bg-accent hover:scale-[1.02] text-[#1A1A1A] px-6 py-2.5 text-[13px] font-bold uppercase tracking-[0.05em] transition-all cursor-pointer"
            style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
          >
            Ver Catálogo
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={cn("w-6 h-0.5 bg-white transition-all", menuOpen && "rotate-45 translate-y-2")} />
          <div className={cn("w-6 h-0.5 bg-white transition-all", menuOpen && "opacity-0")} />
          <div className={cn("w-6 h-0.5 bg-white transition-all", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A1A1A]/98 p-6 border-t border-accent/20 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block text-white font-sans text-[18px] py-3 cursor-pointer hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
