'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Hexagon } from './ui/Hexagon';
import { cn } from '@/lib/utils';

interface HeaderProps {
  activeSection: string;
  accentColor?: string;
}

export const Header = ({ activeSection, accentColor = '#94C11F' }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prodOpen, setProdOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { name: 'Empaques y embalajes', sub: ['Contenedores (Octabines, Guacales)', 'Estibas de cartón', 'Relleno cartón panal', 'Esquinas y punteras'] },
    { name: 'Tablero industria gráfica', href: '/tablero-industria-grafica' },
    { name: 'Rollo de papel panal' },
    { name: 'Bolsa bio' }
  ];

  const navLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Productos', id: 'productos', hasDropdown: true },
    { label: 'Nosotros', id: 'nosotros' },
    { label: 'Distribuidores', id: 'distribuidores' },
    { label: 'Blog', id: 'blog' },
    { label: 'Contacto', id: 'contacto' }
  ];

  const scrollTo = (id: string) => {
    if (pathname !== '/') {
      router.push(`/#${id}`);
      setMenuOpen(false);
      return;
    }
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-[1000] transition-all duration-400",
      (scrolled || menuOpen) ? "bg-[#0D0D0D] border-b border-accent/20 shadow-lg" : "bg-transparent border-b border-transparent"
    )}>
      <div className="max-w-[1280px] mx-auto px-8 py-4 flex items-center justify-between">
        <Link href="/">
          <img 
            src="/assets/logo-perlad.png" 
            alt="Perlad" 
            className="h-9 cursor-pointer brightness-0 invert" 
          />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.id} 
              className="relative py-2"
              onMouseEnter={() => link.hasDropdown && setProdOpen(true)}
              onMouseLeave={() => link.hasDropdown && setProdOpen(false)}
            >
              {link.href ? (
                <Link
                  href={link.href}
                  className={cn(
                    "font-sans text-[14px] font-medium uppercase tracking-[0.03em] cursor-pointer transition-colors flex items-center gap-1",
                    activeSection === link.id ? "text-accent" : "text-white hover:text-accent"
                  )}
                >
                  {link.label}
                  {link.hasDropdown && <span className="text-[10px] ml-1">▼</span>}
                </Link>
              ) : (
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
              )}

              {link.hasDropdown && prodOpen && (
                <div className="absolute top-full left-[-20px] pt-3 min-w-[300px] animate-fade-in">
                  <div className="bg-[#121212] rounded-xl p-5 border border-accent/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {products.map((p, i) => (
                      <div key={i} className={cn("group", p.sub ? "mb-3" : "mb-1")}>
                        {p.href ? (
                          <Link 
                            href={p.href}
                            className="text-white font-sans text-[14px] font-semibold py-1.5 px-2 flex items-center rounded-md hover:bg-white/5 transition-colors cursor-pointer"
                            onClick={() => setProdOpen(false)}
                          >
                            <Hexagon size={8} bg={accentColor} className="mr-2" />
                            {p.name}
                          </Link>
                        ) : (
                          <div className="text-white font-sans text-[14px] font-semibold py-1.5 px-2 flex items-center rounded-md hover:bg-white/5 transition-colors cursor-pointer">
                            <Hexagon size={8} bg={accentColor} className="mr-2" />
                            {p.name}
                          </div>
                        )}
                        
                        {p.sub && p.sub.map((s, j) => (
                          <div 
                            key={j} 
                            className="text-white/80 font-sans text-[13px] py-1.5 pl-7 hover:text-accent hover:pl-8 transition-all cursor-pointer border-l border-white/5 ml-2.5"
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
        <div className="md:hidden fixed inset-x-0 top-[70px] bottom-0 bg-[#0D0D0D] p-8 overflow-y-auto animate-fade-in z-[999]">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.id} className="border-b border-white/5">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setProdOpen(!prodOpen)}
                      className="w-full text-white font-display text-[22px] font-bold py-5 cursor-pointer hover:text-accent transition-colors flex justify-between items-center"
                    >
                      {link.label}
                      <span className={cn("text-accent transition-transform", prodOpen && "rotate-90")}>→</span>
                    </button>
                    {prodOpen && (
                      <div className="pb-6 pl-4 space-y-4 animate-fade-in">
                        {products.map((p, i) => (
                          <div key={i}>
                            {p.href ? (
                              <Link 
                                href={p.href} 
                                onClick={() => { setMenuOpen(false); setProdOpen(false); }}
                                className="text-white/80 font-sans text-lg flex items-center gap-3"
                              >
                                <Hexagon size={10} bg={accentColor} />
                                {p.name}
                              </Link>
                            ) : (
                              <div className="text-white/60 font-sans text-lg flex items-center gap-3">
                                <Hexagon size={10} bg={accentColor} className="opacity-30" />
                                {p.name}
                              </div>
                            )}
                            {p.sub && (
                              <div className="mt-3 ml-6 space-y-3 border-l border-white/10 pl-4">
                                {p.sub.map((s, j) => (
                                  <div key={j} className="text-white/40 text-sm">{s}</div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : link.href ? (
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-white font-display text-[22px] font-bold py-5 cursor-pointer hover:text-accent transition-colors flex justify-between items-center"
                  >
                    {link.label}
                    <span className="text-accent">→</span>
                  </Link>
                ) : (
                  <a
                    onClick={() => scrollTo(link.id)}
                    className="block text-white font-display text-[22px] font-bold py-5 cursor-pointer hover:text-accent transition-colors flex justify-between items-center"
                  >
                    {link.label}
                    <span className="text-accent">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <button 
              className="w-full bg-accent text-[#0D0D0D] py-4 font-bold uppercase tracking-widest"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              Ver Catálogo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
