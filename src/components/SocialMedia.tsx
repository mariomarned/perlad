'use client';

import { SectionTitle } from "./ui/SectionTitle";
import { Hexagon } from "./ui/Hexagon";
import { ExternalLink, Star } from "lucide-react";

const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TikTokIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68a6.34 6.34 0 0 0 10.86 4.49A6.29 6.29 0 0 0 15.86 15v-7a8.2 8.2 0 0 0 4.77 1.52V6.07a4.85 4.85 0 0 1-1.04.62z"/>
  </svg>
);

const YouTubeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const LinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
  </svg>
);

const GoogleIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.545,6.477,2.545,12s4.476,10,10,10c5.772,0,9.588-4.057,9.588-9.761c0-0.722-0.076-1.399-0.198-2H12.545z"/>
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const socialLinks = [
  {
    name: "Instagram",
    handle: "@perlad_sas",
    description: "Fotos, reels e historias con innovaciones en cartón panal.",
    url: "https://www.instagram.com/perlad_sas",
    icon: InstagramIcon,
    color: "#E4405F"
  },
  {
    name: "Facebook",
    handle: "@Perlad SAS",
    description: "Novedades, proyectos y contenido sobre innovación sostenible.",
    url: "https://www.facebook.com/people/Perlad-SAS/61586835339637/?locale=es_LA",
    icon: FacebookIcon,
    color: "#1877F2"
  },
  {
    name: "TikTok",
    handle: "@perladsas",
    description: "Pruebas de resistencia de cartón panal y videos de producción.",
    url: "https://www.tiktok.com/@perladsas",
    icon: TikTokIcon,
    color: "#00F2FE"
  },
  {
    name: "YouTube",
    handle: "@perladsostenible",
    description: "Demostraciones, Shorts y soluciones de empaque ecológico.",
    url: "https://www.youtube.com/@perladsostenible/shorts",
    icon: YouTubeIcon,
    color: "#FF0000"
  },
  {
    name: "LinkedIn",
    handle: "Perlad S.A.S.",
    description: "Conexiones corporativas, alianzas B2B y logística ecológica.",
    url: "https://www.linkedin.com/company/perlad-sas-innovaci%C3%B3n-sostenible/?viewAsMember=true",
    icon: LinkedInIcon,
    color: "#0A66C2"
  },
  {
    name: "Opiniones Google",
    handle: "Reseñas de Clientes",
    description: "Conoce las opiniones y calificaciones verificadas en Google.",
    url: "https://www.google.com/search?sca_esv=db2351f46a6aa745&hl=es-419&sxsrf=AnbL-n4ykR4shBgq6eEulhFeyjCfpmPmbQ:1772137843761&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOYZkqBLTGTbzdjhbosnoHTeHquIGYCubsFkljC4vzYBj0GYVu8ppFwtQ1dmlTGoRyKU6j4_GabSrJaf6B5OOQyDU4AW8&q=Perlad+SAS+Opiniones&sa=X&ved=2ahUKEwi-l671__eSAxXEQTABHYZLDnkQ0bkNegQIJRAH&biw=1517&bih=674&dpr=0.9",
    icon: GoogleIcon,
    color: "#EA4335"
  },
  {
    name: "Todos los accesos",
    handle: "beacons.ai/perladsas",
    description: "Encuentra todos nuestros enlaces y contacto directo en un solo lugar.",
    url: "https://beacons.ai/perladsas",
    icon: ExternalLink,
    color: "#94C11F"
  }
];

export const SocialMedia = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  return (
    <section id="redes" className="py-24 px-6 bg-[#161616] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle 
          sub="Sigue nuestro día a día y conoce más sobre empaques 100% ecológicos en nuestras plataformas oficiales" 
          light 
          accentColor={accentColor}
        >
          Síguenos en Redes Sociales
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {socialLinks.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 p-7 hover:border-accent/60 hover:bg-white/[0.08] transition-all group flex flex-col justify-between"
                style={{ clipPath: 'polygon(16px 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%, 0 16px)' }}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <Hexagon size={42} bg={`${accentColor}22`} className="group-hover:scale-105 transition-transform">
                        <div style={{ color: item.color }}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </Hexagon>
                      <div>
                        <h3 className="font-bold text-lg font-display text-white group-hover:text-accent transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-xs text-white/50">{item.handle}</p>
                      </div>
                    </div>
                    {item.name === "Opiniones Google" && (
                      <div className="flex items-center gap-1 text-amber-400 bg-white/5 px-2 py-1 rounded text-xs border border-white/10">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span className="font-bold">5.0</span>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-white/70 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 text-xs font-semibold uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform">
                  <span>Visitar {item.name}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
