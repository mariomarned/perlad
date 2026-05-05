import { SectionTitle } from "./ui/SectionTitle";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  desc: string;
  image?: string;
  accentColor: string;
}

const ProductCard = ({ name, desc, image, accentColor }: ProductCardProps) => (
  <div className="group relative w-full aspect-[1/1.1] transition-all duration-500 hover:-translate-y-2 cursor-pointer">
    <div 
      className="absolute inset-0 bg-white border border-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500"
      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
    >
      {/* Product Image Area */}
      <div className="h-[48%] relative overflow-hidden bg-gray-100">
        {image ? (
          <Image 
            src={image} 
            alt={name} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20 honeycomb-bg"></div>
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
            className="bg-accent hover:bg-accent-dark text-brand-dark px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-all"
            style={{ clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)' }}
          >
            Cotizar
          </button>
        </div>
      </div>
    </div>
  </div>
);

export const Products = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const products = [
    { 
      name: 'Packingboard', 
      desc: 'Solución robusta de cartón para empaques industriales de alta resistencia y máxima protección.',
      image: '/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.48.47.png'
    },
    { 
      name: 'Graphicboard', 
      desc: 'Tablero de cartón ideal para la industria gráfica, impresión y exhibición publicitaria.',
      image: '/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.49.04.png'
    },
    { 
      name: 'Papel Panal', 
      desc: 'Material de amortiguación biodegradable en rollo o lámina, versátil y ecológico.',
      image: '/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.49.19.png'
    },
    { 
      name: 'Relleno de puertas', 
      desc: 'Estructura interna de cartón panal para la fabricación de puertas ligeras, resistentes y acústicas.',
      image: '/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.49.26.png'
    },
    { 
      name: 'Polietileno', 
      desc: 'Películas y espumas de polietileno para protección adicional, embalaje y sellado.' 
    },
    { 
      name: 'Separadores - Estabilizadores', 
      desc: 'Láminas y componentes diseñados para estabilizar cargas y separar productos en el transporte.' 
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
