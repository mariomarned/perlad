'use client';

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Sustainability } from "@/components/Sustainability";
import { Testimonials } from "@/components/Testimonials";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const accentColor = "#94C11F";

  useEffect(() => {
    const sections = ['hero', 'productos', 'nosotros', 'sostenibilidad', 'blog', 'contacto'];
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
      <Hero accentColor={accentColor} />
      <Products accentColor={accentColor} />
      <About accentColor={accentColor} />
      <Sustainability accentColor={accentColor} />
      <Testimonials accentColor={accentColor} />
      <Blog accentColor={accentColor} />
      <Contact accentColor={accentColor} />
      <Footer accentColor={accentColor} />
    </main>
  );
}
