'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  X, 
  Play, 
  Pause, 
  Sparkles, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { Hexagon } from './ui/Hexagon';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: string;
  desc: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: '/assets/productos/GB/GB1.jpeg',
    title: 'Exhibidor POP de Piso Autoportante',
    category: 'Exhibidor POP',
    desc: 'Estructura rígida de alto impacto para punto de venta con ranurado y hendido de alta resistencia.'
  },
  {
    id: 2,
    src: '/assets/productos/GB/GB2.jpeg',
    title: 'Display Estructural con Encastre',
    category: 'Estructura 3D',
    desc: 'Diseño modular flat-pack ensamblable por fricción sin requerir pegamentos ni tornillería.'
  },
  {
    id: 3,
    src: '/assets/productos/GB/GB3.jpeg',
    title: 'Stand Ferial y Mostrador Promocional',
    category: 'Mobiliario Ferial',
    desc: 'Módulo comercial ultraligero y resistente con capacidad de carga para exhibición en ferias.'
  },
  {
    id: 4,
    src: '/assets/productos/GB/GB4.jpeg',
    title: 'Isla de Producto para Retail',
    category: 'Retail',
    desc: 'Exhibidor perimetral de 360 grados con acabados gráficos impecables en impresión directa UV.'
  },
  {
    id: 5,
    src: '/assets/productos/GB/GB5.jpeg',
    title: 'Tótem Publicitario de Gran Formato',
    category: 'Gran Formato',
    desc: 'Planimetría absoluta que previene el pandeo y resalta la identidad corporativa.'
  },
  {
    id: 6,
    src: '/assets/productos/GB/GB6.jpeg',
    title: 'Estantería Hexagonal de Exhibición',
    category: 'Mobiliario Ferial',
    desc: 'Geometría alveolar aprovechada al máximo para repisas y módulos de soporte rígido.'
  },
  {
    id: 7,
    src: '/assets/productos/GB/GB7.jpeg',
    title: 'Corte V-Cut y Plegado de Precisión',
    category: 'Corte Digital',
    desc: 'Muestra de dobles a 90 y 45 grados sin agrietar el liner estucado blanco de alta fidelidad.'
  },
  {
    id: 8,
    src: '/assets/productos/GB/GB8.jpeg',
    title: 'Exhibidor de Mesón y Punto de Pago',
    category: 'Exhibidor POP',
    desc: 'Display compacto para venta por impulso con gráficos de máxima vivacidad cromática.'
  },
  {
    id: 9,
    src: '/assets/productos/GB/GB9.jpeg',
    title: 'Muro Escenográfico y Panel Divisorio',
    category: 'Gran Formato',
    desc: 'Paneles de gran formato (122 x 244 cm) con estabilidad dimensional superior al MDF.'
  },
  {
    id: 10,
    src: '/assets/productos/GB/GB10.jpeg',
    title: 'Módulo de Marca y Activación BTL',
    category: 'Eventos',
    desc: 'Pieza volumétrica ligera para transportación económica y armado exprés en eventos de marca.'
  },
  {
    id: 11,
    src: '/assets/productos/GB/GB11.jpeg',
    title: 'Packaging Estructural de Lujo',
    category: 'Packaging',
    desc: 'Estuche rígido ecológico 100% reciclable con protección perimetral y rigidez excepcional.'
  },
  {
    id: 12,
    src: '/assets/productos/GB/GB12.jpeg',
    title: 'Encastres y Uniones Geométricas',
    category: 'Ingeniería',
    desc: 'Detalle de uniones machihembradas en cartón panal blanco de alta tensión.'
  },
  {
    id: 13,
    src: '/assets/productos/GB/GB13.jpeg',
    title: 'Expositor Ranurado Escalonado',
    category: 'Retail',
    desc: 'Niveles de exhibición escalonados que maximizan la visibilidad del producto en góndola.'
  },
  {
    id: 14,
    src: '/assets/productos/GB/GB14.jpeg',
    title: 'Display Tipo Tótem con Portafolletos',
    category: 'Punto de Venta',
    desc: 'Solución combinada de branding visual y compartimento dispensador de folletos informativos.'
  },
  {
    id: 15,
    src: '/assets/productos/GB/GB15.jpeg',
    title: 'Mobiliario Desarmable Eco-Friendly',
    category: 'Mobiliario Ferial',
    desc: 'Sillas, banquetas y mesas para stands corporativos que eliminan el uso de madera pesada.'
  },
  {
    id: 16,
    src: '/assets/productos/GB/GB16.jpeg',
    title: 'Estructura Volumétrica Publicitaria',
    category: 'Estructura 3D',
    desc: 'Construcción tridimensional de líneas limpias con blancura pura estucada.'
  },
  {
    id: 17,
    src: '/assets/productos/GB/GB17.jpeg',
    title: 'Figura Troquelada en Gran Escala',
    category: 'Impresión UV',
    desc: 'Corte perimetral en mesa digital CNC con anclaje perfecto de tintas UV sin sangrado.'
  },
  {
    id: 18,
    src: '/assets/productos/GB/GB18.jpeg',
    title: 'Display Portaproducto Personalizado',
    category: 'Exhibidor POP',
    desc: 'Cavidades y troqueles adaptados al packaging específico para una presentación premium.'
  },
  {
    id: 19,
    src: '/assets/productos/GB/GB19.jpeg',
    title: 'Podio Promocional y Peana',
    category: 'Eventos',
    desc: 'Base autoportante con acabado satinado diseñada para soportar productos de exhibición.'
  },
  {
    id: 20,
    src: '/assets/productos/GB/GB20.jpeg',
    title: 'Mostrador de Recepción Ferial',
    category: 'Mobiliario Ferial',
    desc: 'Mostrador frontal curvo o recto para recepción en ferias de negocios y congresos.'
  },
  {
    id: 21,
    src: '/assets/productos/GB/GB21.jpeg',
    title: 'Display Alveolar con Acabado Premium',
    category: 'Punto de Venta',
    desc: 'Calidad litográfica impecable que sustituye al plástico corrugado y láminas plásticas.'
  },
  {
    id: 22,
    src: '/assets/productos/GB/GB22.jpeg',
    title: 'Caja Estructural y Contenedor Rígido',
    category: 'Packaging',
    desc: 'Cajas de alta gama para envíos corporativos especiales con interior alveolar amortiguado.'
  },
  {
    id: 23,
    src: '/assets/productos/GB/GB23.jpeg',
    title: 'Torre de Señalización para Grandes Superficies',
    category: 'Gran Formato',
    desc: 'Señalética aérea y de piso de fácil suspensión gracias a su peso ultraligero.'
  },
  {
    id: 24,
    src: '/assets/productos/GB/GB24.jpeg',
    title: 'Detalle de Acabado e Impresión Digital',
    category: 'Impresión UV',
    desc: 'Superficie estucada que resalta los degradados y la saturación del color sin desvanecimiento.'
  }
];

const CATEGORIES = ['Todos', 'Exhibidor POP', 'Mobiliario Ferial', 'Estructura 3D', 'Gran Formato', 'Retail', 'Packaging'];

export const GraphicboardCarousel = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [modalImageIndex, setModalImageIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const startDragX = useRef<number>(0);
  const scrollLeftStart = useRef<number>(0);

  const filteredItems = selectedCategory === 'Todos' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  // Sync scroll position when index changes
  const scrollToIndex = useCallback((index: number) => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const cards = container.querySelectorAll<HTMLElement>('.carousel-card');
    if (cards[index]) {
      const card = cards[index];
      const targetScroll = card.offsetLeft - container.offsetLeft - (container.clientWidth - card.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev <= 0 ? filteredItems.length - 1 : prev - 1;
      scrollToIndex(newIndex);
      return newIndex;
    });
  }, [filteredItems.length, scrollToIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev >= filteredItems.length - 1 ? 0 : prev + 1;
      scrollToIndex(newIndex);
      return newIndex;
    });
  }, [filteredItems.length, scrollToIndex]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || isHovered || modalImageIndex !== null) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, isHovered, modalImageIndex, handleNext]);

  // Update current index on manual scroll
  const handleScroll = () => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const cards = container.querySelectorAll<HTMLElement>('.carousel-card');
    const containerCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, i) => {
      const cardCenter = card.offsetLeft - container.offsetLeft + card.clientWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    if (closestIndex !== currentIndex && closestIndex < filteredItems.length) {
      setCurrentIndex(closestIndex);
    }
  };

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalImageIndex === null) return;
      if (e.key === 'Escape') setModalImageIndex(null);
      if (e.key === 'ArrowRight') {
        setModalImageIndex((prev) => (prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setModalImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImageIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startDragX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftStart.current = trackRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startDragX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section 
      id="galeria-graphicboard" 
      className="py-24 px-6 bg-[#0E0E0E] relative border-t border-white/5 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseUp();
      }}
    >
      {/* Ambient background glow */}
      <div className="honeycomb-bg-dark absolute inset-0 opacity-70 pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header with Title and Global Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-3.5 py-1 rounded-full">
                <Hexagon size={9} bg={accentColor} />
                <span className="text-accent text-[11px] font-bold uppercase tracking-wider">
                  Galería de Aplicaciones Reales (24 Proyectos)
                </span>
              </div>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Inspiración y Estructuras en <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-lime-200">
                Graphicboard Blanco
              </span>
            </h2>
            <p className="text-white/60 text-sm sm:text-base mt-3 max-w-2xl">
              Descubra la versatilidad de nuestro sustrato estucado en displays POP, mobiliario ferial, packaging estructural y piezas de impresión UV directa.
            </p>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            
            {/* Play / Pause Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-accent hover:border-accent/40 transition-all cursor-pointer"
              title={isPlaying ? "Pausar reproducción automática" : "Activar reproducción automática"}
              aria-label="Reproducción automática"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>

            {/* Slide Index Counter */}
            <div className="bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-xs font-mono font-bold text-white/80">
              <span className="text-accent">{String(currentIndex + 1).padStart(2, '0')}</span>
              <span className="text-white/30 mx-1">/</span>
              <span>{String(filteredItems.length).padStart(2, '0')}</span>
            </div>

            {/* Prev / Next Buttons */}
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-accent hover:text-brand-dark hover:border-accent transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-accent hover:text-brand-dark hover:border-accent transition-all duration-200 cursor-pointer shadow-lg active:scale-95"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                  if (trackRef.current) {
                    trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-accent text-brand-dark shadow-[0_0_15px_rgba(148,193,31,0.4)] scale-105'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Carousel Track */}
        <div className="relative group/carousel">
          
          <div
            ref={trackRef}
            onScroll={handleScroll}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 scroll-smooth cursor-grab active:cursor-grabbing no-scrollbar"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {filteredItems.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setModalImageIndex(GALLERY_ITEMS.findIndex(g => g.id === item.id))}
                  className={`carousel-card flex-shrink-0 snap-center w-[85vw] sm:w-[360px] md:w-[400px] lg:w-[380px] rounded-2xl overflow-hidden bg-[#161616] border transition-all duration-500 flex flex-col justify-between group cursor-pointer ${
                    isActive 
                      ? 'border-accent/70 shadow-[0_10px_35px_rgba(148,193,31,0.2)] ring-1 ring-accent/30' 
                      : 'border-white/10 hover:border-white/30 hover:shadow-xl'
                  }`}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full bg-[#111111] overflow-hidden flex items-center justify-center p-2">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 400px, 380px"
                      className="object-contain p-3 transition-transform duration-700 group-hover:scale-108"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-black/20 opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

                    {/* Badge top-left */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-black/70 backdrop-blur-md border border-white/15 text-accent">
                        <Hexagon size={8} bg={accentColor} />
                        {item.category}
                      </span>
                    </div>

                    {/* Number badge top-right */}
                    <div className="absolute top-3 right-3 z-10 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-0.5 rounded-lg text-[10px] font-mono text-white/70">
                      #{String(item.id).padStart(2, '0')}
                    </div>

                    {/* Hover Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 pointer-events-none">
                      <div className="bg-brand-dark/90 border border-accent/40 text-accent px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2 shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                        <Maximize2 className="w-4 h-4" />
                        <span className="text-xs font-bold text-white uppercase tracking-wider">Ampliar</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-5 flex flex-col justify-between flex-1 border-t border-white/5 bg-[#161616]">
                    <div>
                      <h3 className="font-bold text-white text-base sm:text-lg mb-1.5 group-hover:text-accent transition-colors line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform">
                      <span className="flex items-center gap-1">
                        <span>Ver detalle técnico</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-white/40 text-[11px]">Alta Definición</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Side navigation arrow overlays for desktop */}
          <button
            onClick={handlePrev}
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-dark/90 border border-white/20 text-white hover:bg-accent hover:text-brand-dark hover:border-accent items-center justify-center shadow-2xl transition-all cursor-pointer z-20 group-hover/carousel:opacity-100 opacity-60 hover:scale-110 active:scale-95"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-dark/90 border border-white/20 text-white hover:bg-accent hover:text-brand-dark hover:border-accent items-center justify-center shadow-2xl transition-all cursor-pointer z-20 group-hover/carousel:opacity-100 opacity-60 hover:scale-110 active:scale-95"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar & Jump Dots */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Visual Track Progress Bar */}
          <div className="w-full sm:w-1/2 bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-accent to-emerald-400 transition-all duration-300 rounded-full"
              style={{ width: `${((currentIndex + 1) / filteredItems.length) * 100}%` }}
            />
          </div>

          {/* Quick Info & CTA */}
          <div className="flex items-center gap-4 text-xs text-white/60">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Haz clic en cualquier imagen para ampliar en alta definición</span>
            </span>

            <Link
              href="/#contacto?producto=Graphicboard"
              className="text-accent font-bold hover:underline flex items-center gap-1 shrink-0"
            >
              <span>Solicitar asesoría</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {modalImageIndex !== null && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Visualizador de imagen en alta resolución"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={() => setModalImageIndex(null)}
        >
          {/* Modal Top Bar */}
          <div 
            className="flex items-center justify-between z-30 max-w-7xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-accent/20 border border-accent/30 rounded-xl text-accent">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white font-bold text-base sm:text-lg flex items-center gap-2">
                  <span>{GALLERY_ITEMS[modalImageIndex].title}</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-accent/20 text-accent font-mono border border-accent/30">
                    {GALLERY_ITEMS[modalImageIndex].category}
                  </span>
                </div>
                <div className="text-white/50 text-xs">
                  Muestra {modalImageIndex + 1} de {GALLERY_ITEMS.length} • Graphicboard Perlad
                </div>
              </div>
            </div>

            <button
              onClick={() => setModalImageIndex(null)}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-accent transition-all cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Main Image & Navigation Arrows */}
          <div 
            className="relative flex-1 w-full max-w-5xl mx-auto my-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Image in Modal */}
            <button
              onClick={() => setModalImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_ITEMS.length - 1))}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-accent hover:text-brand-dark border border-white/20 text-white transition-all cursor-pointer z-30 shadow-2xl"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* High-res Image Display */}
            <div className="relative w-full h-[60vh] sm:h-[68vh] rounded-2xl overflow-hidden bg-[#111111] border border-white/10 shadow-2xl flex items-center justify-center p-4">
              <Image
                src={GALLERY_ITEMS[modalImageIndex].src}
                alt={GALLERY_ITEMS[modalImageIndex].title}
                fill
                sizes="100vw"
                className="object-contain p-4"
                priority
              />
            </div>

            {/* Next Image in Modal */}
            <button
              onClick={() => setModalImageIndex((prev) => (prev !== null && prev < GALLERY_ITEMS.length - 1 ? prev + 1 : 0))}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-accent hover:text-brand-dark border border-white/20 text-white transition-all cursor-pointer z-30 shadow-2xl"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Bottom Controls: Description & Thumbnail Strip */}
          <div 
            className="max-w-5xl mx-auto w-full z-30 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#161616]/90 border border-white/10 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/80 text-sm text-center sm:text-left leading-relaxed max-w-2xl">
                {GALLERY_ITEMS[modalImageIndex].desc}
              </p>
              
              <Link
                href="/#contacto?producto=Graphicboard"
                className="bg-accent text-brand-dark font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-white transition-colors shrink-0 flex items-center gap-2"
                onClick={() => setModalImageIndex(null)}
              >
                <span>Cotizar Este Diseño</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Thumbnails list */}
            <div className="flex gap-2 overflow-x-auto py-2 scrollbar-none justify-center">
              {GALLERY_ITEMS.map((thumb, idx) => (
                <button
                  key={thumb.id}
                  onClick={() => setModalImageIndex(idx)}
                  className={`relative w-12 h-12 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                    idx === modalImageIndex 
                      ? 'border-accent scale-110 ring-2 ring-accent/40' 
                      : 'border-white/20 opacity-50 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.title}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
