'use client';

import { useState } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { Hexagon } from "./ui/Hexagon";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, ExternalLink } from "lucide-react";

interface ProductCardProps {
  name: string;
  desc: string;
  image?: string;
  images?: string[];
  accentColor: string;
  href?: string;
  pdfUrl?: string;
  imageFit?: 'cover' | 'contain';
  imageClassName?: string;
}

const ProductCard = ({ 
  name, 
  desc, 
  image, 
  images, 
  accentColor, 
  href, 
  pdfUrl,
  imageFit = 'cover',
  imageClassName
}: ProductCardProps) => {
  const allImages = images || (image ? [image] : []);
  const [currentIdx, setCurrentIdx] = useState(0);

  const displayImage = allImages.length > 0 ? allImages[currentIdx] : undefined;

  const handleCotizar = (e: React.MouseEvent) => {
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
  };

  const ImageWrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return <Link href={href} className="block h-full w-full">{children}</Link>;
    }
    if (pdfUrl) {
      return (
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
          {children}
        </a>
      );
    }
    return <div className="h-full w-full">{children}</div>;
  };

  const TitleWrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return <Link href={href}>{children}</Link>;
    }
    if (pdfUrl) {
      return (
        <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return <>{children}</>;
  };

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full hover:-translate-y-2 relative"
      onMouseEnter={() => {
        if (allImages.length > 1) {
          setCurrentIdx((prev) => (prev + 1) % allImages.length);
        }
      }}
    >
      {/* Product Image Area */}
      <div className={`h-64 sm:h-60 relative overflow-hidden ${imageFit === 'contain' ? 'bg-white' : 'bg-gray-100'}`}>
        <ImageWrapper>
          {displayImage ? (
            <Image 
              src={displayImage} 
              alt={name} 
              fill 
              className={`${imageFit === 'contain' ? 'object-contain p-2.5' : 'object-cover'} transition-transform duration-700 group-hover:scale-105 ${imageClassName || ''}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={85}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 honeycomb-bg"></div>
            </div>
          )}
        </ImageWrapper>

        {/* Honeycomb hover watermark */}
        <div className="honeycomb-bg absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

        {/* Badge with Hexagon accent */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-brand-dark text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gray-100 shadow-sm flex items-center gap-2 pointer-events-none">
          <Hexagon size={8} bg={accentColor} />
          <span>Perlad</span>
        </div>

        {/* Top-Right Catalog Badge / Link */}
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-4 right-4 z-20 bg-brand-dark/85 hover:bg-accent text-white hover:text-brand-dark backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 shadow-sm flex items-center gap-1.5 transition-all group/cat"
            title="Ver catálogo en línea (PDF)"
          >
            <FileText className="w-3 h-3 text-accent group-hover/cat:text-brand-dark transition-colors" />
            <span>Catálogo</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover/cat:opacity-100" />
          </a>
        )}

        {allImages.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10 pointer-events-none">
            {allImages.map((_, idx) => (
              <span 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentIdx ? 'bg-white scale-125 shadow' : 'bg-white/60'}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-7 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold text-brand-dark mb-2.5 group-hover:text-accent transition-colors leading-snug">
          <TitleWrapper>{name}</TitleWrapper>
        </h3>
        
        <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
          {desc}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100 gap-2">
          {href ? (
            <Link 
              href={href}
              className="inline-flex items-center gap-1.5 text-accent-dark hover:text-accent font-bold text-xs uppercase tracking-wider hover:translate-x-1 transition-all"
            >
              <span>Detalles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            pdfUrl ? (
              <a 
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent-dark hover:text-accent font-bold text-xs uppercase tracking-wider hover:translate-x-1 transition-all"
              >
                <span>Ver Catálogo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : <span />
          )}

          <div className="flex items-center gap-2">
            {pdfUrl && href && (
              <a 
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-gray-700 hover:text-brand-dark hover:bg-gray-100 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all border border-gray-200"
                title="Ver catálogo en línea (PDF)"
              >
                <FileText className="w-3.5 h-3.5 text-accent-dark" />
                <span className="text-[11px]">Catálogo</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
            )}

            <button 
              type="button"
              onClick={handleCotizar}
              className="bg-accent hover:bg-accent-dark text-brand-dark px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all shadow-sm hover:shadow-md cursor-pointer shrink-0"
              style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}
            >
              Cotizar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

type ProductItem = Omit<ProductCardProps, 'accentColor'>;

export const Products = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const products: ProductItem[] = [
    { 
      name: 'Packingboard', 
      desc: 'Solución robusta de cartón para empaques industriales de alta resistencia y máxima protección.',
      image: '/assets/imgcategorias/PackingBoard/PackingBoard1.jpg',
      imageFit: 'contain',
      href: '/packingboard',
      pdfUrl: '/assets/catalogos/PackingboardV1.pdf'
    },
    { 
      name: 'Graphicboard', 
      desc: 'Tablero de cartón ideal para la industria gráfica, impresión y exhibición publicitaria.',
      image: '/assets/imgcategorias/GRAPHICBOARD2.jpg',
      href: '/graphicboard',
      pdfUrl: '/assets/catalogos/GRAPHICBOARDV1.pdf'
    },
    { 
      name: 'Papel Panal', 
      desc: 'Material de amortiguación biodegradable en rollo o lámina, versátil y ecológico.',
      image: '/assets/imgcategorias/papelpanalysususos.jpg',
      href: '/papel-panal',
      pdfUrl: '/assets/catalogos/PAPELPANALV1.pdf'
    },
    { 
      name: 'Relleno de puertas', 
      desc: 'Estructura interna de cartón panal para la fabricación de puertas ligeras, resistentes y acústicas.',
      image: '/assets/imgcategorias/rellenodepuertas.jpg',
      href: '/relleno-puertas',
      pdfUrl: '/assets/catalogos/RELLENO DE PUERTASV1.pdf'
    },
    { 
      name: 'Bolsas de basura', 
      desc: 'Bolsas de alta resistencia para la gestión de residuos, embalaje y protección industrial.',
      image: '/assets/imgcategorias/imgbolsas.jpg',
      pdfUrl: '/assets/catalogos/PRESENTACI%C3%93N%20COMERCIALbolsas.pdf'
    },
    { 
      name: 'Cubrepallets', 
      desc: 'Protección superior y estabilización para estibas y carga paletizada durante el almacenamiento y transporte.',
      image: '/assets/imgcategorias/cubrepallets1.jpg',
      pdfUrl: '/assets/catalogos/PRESENTACIONCOMERCIALCUBREPALLETS.pdf'
    }
  ];

  return (
    <section id="productos" className="py-24 px-6 bg-brand-warm relative">
      <div className="honeycomb-bg absolute inset-0 opacity-40 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle sub="Soluciones de empaque sustentables para cada necesidad" accentColor={accentColor}>
          Nuestros Productos
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} accentColor={accentColor} />
          ))}
        </div>
      </div>
    </section>
  );
};

