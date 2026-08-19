'use client';

import Link from "next/link";
import { Hexagon } from "./ui/Hexagon";
import { ExternalLink, Star } from "lucide-react";

const FacebookIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68a6.34 6.34 0 0 0 10.86 4.49A6.29 6.29 0 0 0 15.86 15v-7a8.2 8.2 0 0 0 4.77 1.52V6.07a4.85 4.85 0 0 1-1.04.62z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.545,6.477,2.545,12s4.476,10,10,10c5.772,0,9.588-4.057,9.588-9.761c0-0.722-0.076-1.399-0.198-2H12.545z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/perlad_sas", icon: InstagramIcon },
    { name: "Facebook", href: "https://www.facebook.com/people/Perlad-SAS/61586835339637/?locale=es_LA", icon: FacebookIcon },
    { name: "TikTok", href: "https://www.tiktok.com/@perladsas", icon: TikTokIcon },
    { name: "YouTube", href: "https://www.youtube.com/@perladsostenible/shorts", icon: YouTubeIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/perlad-sas-innovaci%C3%B3n-sostenible/?viewAsMember=true", icon: LinkedInIcon },
    { name: "Opiniones Google", href: "https://www.google.com/search?sca_esv=db2351f46a6aa745&hl=es-419&sxsrf=AnbL-n4ykR4shBgq6eEulhFeyjCfpmPmbQ:1772137843761&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYZkqBLTGTbzdjhbosnoHTeHquIGYCubsFkljC4vzYBj0GYVu8ppFwtQ1dmlTGoRyKU6j4_GabSrJaf6B5OOQyDU4AW8&q=Perlad+SAS+Opiniones&sa=X&ved=2ahUKEwi-l671__eSAxXEQTABHYZLDnkQ0bkNegQIJRAH&biw=1517&bih=674&dpr=0.9", icon: GoogleIcon },
    { name: "Beacons (Links)", href: "https://beacons.ai/perladsas", icon: ExternalLink }
  ];

  return (
    <footer className="bg-brand-dark py-20 px-6 border-t border-white/5 relative overflow-hidden text-white">
      <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <div className="col-span-1 lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-6 w-fit group">
            <Hexagon size={36} bg={accentColor}>
              <img src="/assets/logo-perlad.png" alt="P" className="w-1/2 brightness-0" />
            </Hexagon>
            <span className="text-white font-display text-xl font-bold tracking-tight group-hover:text-accent transition-colors">PERLAD</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs mb-6">
            Líderes en soluciones de empaque sostenible en cartón panal. Protegiendo tus productos y el futuro de nuestro planeta.
          </p>

          {/* Beacons Highlight Badge */}
          <a
            href="https://beacons.ai/perladsas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 hover:border-accent text-xs text-white/80 hover:text-white transition-all rounded"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span>Todos los enlaces en Beacons</span>
            <ExternalLink className="w-3 h-3 text-accent" />
          </a>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Secciones</h4>
          <ul className="space-y-3 text-white/50 text-sm">
            <li><Link href="/#hero" className="hover:text-accent transition-colors">Inicio</Link></li>
            <li><Link href="/#productos" className="hover:text-accent transition-colors">Productos</Link></li>
            {/* <li><Link href="/catalogos" className="hover:text-accent transition-colors">Catálogos</Link></li> */}
            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
            <li><Link href="/#nosotros" className="hover:text-accent transition-colors">Nosotros</Link></li>
            <li><Link href="/#contacto" className="hover:text-accent transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Síguenos</h4>
          <ul className="space-y-3 text-white/50 text-sm">
            {socials.map((s, idx) => {
              const Icon = s.icon;
              return (
                <li key={idx}>
                  <a 
                    href={s.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 hover:text-accent transition-colors group"
                  >
                    <span className="p-1.5 rounded bg-white/5 border border-white/10 group-hover:border-accent/40 group-hover:bg-accent/10 transition-colors">
                      <Icon />
                    </span>
                    <span>{s.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-xs relative z-10">
        <p>© 2026 Perlad S.A.S. Todos los derechos reservados.</p>
        
        {/* Social Icons Strip */}
        <div className="flex items-center gap-3">
          {socials.map((s, idx) => {
            const Icon = s.icon;
            return (
              <a
                key={idx}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:border-accent hover:text-accent hover:bg-accent/10 transition-all text-white/70"
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

