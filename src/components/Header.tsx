'use client';

import { useState, useEffect } from 'react';
import { Diamond } from './ui/Diamond';
import { cn } from '@/lib/utils';

interface HeaderProps {
  activeSection: string;
  accentColor?: string;
}

export const Header = ({ activeSection, accentColor = '#94C11F' }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Inicio' },
    { id: 'productos', label: 'Productos' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'sostenibilidad', label: 'Sostenibilidad' },
    { id: 'blog', label: 'Blog' },
    { id: 'contacto', label: 'Contacto' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-brand-dark/90 backdrop-blur-md py-4" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Diamond size={32} bg={accentColor}>
             <img src="/assets/logo-perlad.png" alt="P" className="w-1/2 brightness-0" />
          </Diamond>
          <span className="text-white font-display text-xl font-bold tracking-tight">PERLAD</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                activeSection === link.id ? "text-accent" : "text-white/80"
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="bg-accent hover:bg-accent-dark text-brand-dark px-6 py-2 text-sm font-bold uppercase tracking-wider transition-all"
          style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}
        >
          Presupuesto
        </a>
      </div>
    </header>
  );
};
