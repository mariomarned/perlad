'use client';

import { useState } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  desc: string;
  image?: string;
  images?: string[];
  accentColor: string;
  href?: string;
}

const ProductCard = ({ name, desc, image, images, accentColor, href }: ProductCardProps) => {
  const allImages = images || (image ? [image] : []);
  const [currentIdx, setCurrentIdx] = useState(0);

  const displayImage = allImages.length > 0 ? allImages[currentIdx] : undefined;

  const CardContent = (
    <div 
      className="group relative w-full aspect-[1/1.1] transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => {
        if (allImages.length > 1) {
          setCurrentIdx((prev) => (prev + 1) % allImages.length);
        }
      }}
    >
      <div 
        className="absolute inset-0 bg-white border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500"
        style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
      >
        {/* Product Image Area */}
        <div className="h-[48%] relative overflow-hidden bg-gray-100">
          {displayImage ? (
            <Image 
              src={displayImage} 
              alt={name} 
              fill 
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              quality={75}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 honeycomb-bg"></div>
            </div>
          )}

          {allImages.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
              {allImages.map((_, idx) => (
                <span 
                  key={idx} 
                  className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIdx ? 'bg-white scale-125' : 'bg-white/50'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 flex flex-col items-center text-center">
          <h3 className="font-display text-base sm:text-lg font-bold text-brand-dark mb-2 leading-tight">{name}</h3>
          <p className="text-[10px] sm:text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3 px-2">{desc}</p>
          
          <div className="flex flex-col items-center gap-3">
            <div className="text-accent font-bold text-[10px] uppercase tracking-wider flex items-center gap-1">
              Detalles <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const targetUrl = `/#contacto?producto=${encodeURIComponent(name)}`;
                if (typeof window !== 'undefined') {
                  if (window.location.pathname === '/') {
                    const el = document.getElementById('contacto');
                    window.history.pushState({}, '', targetUrl);
                    window.dispatchEvent(new Event('popstate'));
                    if (el) {
                      window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
                    }
                  } else {
                    window.location.href = targetUrl;
                  }
                }
              }}
              className="bg-accent hover:bg-accent-dark text-brand-dark px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-all z-20 relative cursor-pointer"
              style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}
            >
              Cotizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{CardContent}</Link>;
  }

  return CardContent;
};

export const Products = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const products = [
    { 
      name: 'Packingboard', 
      desc: 'Solución robusta de cartón para empaques industriales de alta resistencia y máxima protección.',
      image: '/assets/imgcategorias/packingboard.jpg',
      href: '/packingboard'
    },
    { 
      name: 'Graphicboard', 
      desc: 'Tablero de cartón ideal para la industria gráfica, impresión y exhibición publicitaria.',
      image: '/assets/imgcategorias/GRAPHICBOARD2.jpg',
      href: '/graphicboard'
    },
    { 
      name: 'Papel Panal', 
      desc: 'Material de amortiguación biodegradable en rollo o lámina, versátil y ecológico.',
      image: '/assets/imgcategorias/papelpanalysususos.jpg',
      href: '/papel-panal'
    },
    { 
      name: 'Relleno de puertas', 
      desc: 'Estructura interna de cartón panal para la fabricación de puertas ligeras, resistentes y acústicas.',
      image: '/assets/imgcategorias/rellenodepuertas.jpg',
      href: '/relleno-puertas'
    },
    { 
      name: 'Bolsas de basura', 
      desc: 'Bolsas de alta resistencia para la gestión de residuos, embalaje y protección industrial.',
      image: '/assets/productos/bosasdebasura/Imagen1.jpg',
      images: [
        '/assets/productos/bosasdebasura/Imagen1.jpg',
        '/assets/productos/bosasdebasura/Imagen2.jpg',
        '/assets/productos/bosasdebasura/Imagen3.jpg'
      ]
    }
  ];

  return (
    <section id="productos" className="py-24 px-6 bg-brand-warm relative">
      <div className="honeycomb-bg absolute inset-0 opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle sub="Soluciones de empaque sustentables para cada necesidad" accentColor={accentColor}>
          Nuestros Productos
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} accentColor={accentColor} />
          ))}
        </div>
      </div>
    </section>
  );
};
