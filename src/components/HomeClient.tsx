'use client';

import { useState, useEffect, ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface HomeClientProps {
  accentColor?: string;
  children: ReactNode;
}

export const HomeClient = ({ accentColor = "#94C11F", children }: HomeClientProps) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleHashScroll = () => {
      let id = '';
      if (typeof window !== 'undefined') {
        if (window.location.hash) {
          id = window.location.hash.replace('#', '').split('?')[0];
        } else {
          const params = new URLSearchParams(window.location.search);
          if (params.get('producto')) {
            id = 'contacto';
          }
        }
        if (id) {
          const scrollToTarget = () => {
            const el = document.getElementById(id);
            if (el) {
              window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
            }
          };
          scrollToTarget();
          setTimeout(scrollToTarget, 300);
          setTimeout(scrollToTarget, 600);
        }
      }
    };

    handleHashScroll();
    window.addEventListener('popstate', handleHashScroll);
    return () => window.removeEventListener('popstate', handleHashScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'productos', 'nosotros', 'sostenibilidad', 'distribuidores', 'blog', 'contacto'];
    const handler = () => {
      const y = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= y) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <main className="min-h-screen">
      <Header activeSection={activeSection} accentColor={accentColor} />
      {children}
      <Footer accentColor={accentColor} />
    </main>
  );
};
