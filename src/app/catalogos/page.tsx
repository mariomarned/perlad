import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionTitle } from '@/components/ui/SectionTitle';
import Image from 'next/image';

interface Catalogo {
  id: string;
  name: string;
  description: string;
  image: string;
  pdfUrl: string;
}

const catalogos: Catalogo[] = [
  {
    id: 'packingboard',
    name: 'Packingboard',
    description: 'Catálogo completo de soluciones robustas de cartón para empaques industriales de alta resistencia.',
    image: '/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.48.47.png',
    pdfUrl: '/catalogos/packingboard.pdf'
  },
  {
    id: 'graphicboard',
    name: 'Graphicboard',
    description: 'Tablero de cartón ideal para la industria gráfica, impresión y exhibición publicitaria de alta calidad.',
    image: '/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.49.04.png',
    pdfUrl: '/catalogos/graphicboard.pdf'
  },
  {
    id: 'papel-panal',
    name: 'Papel Panal',
    description: 'Material de amortiguación biodegradable versátil y ecológico para protección de productos.',
    image: '/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.49.19.png',
    pdfUrl: '/catalogos/papel-panal.pdf'
  },
  {
    id: 'relleno-puertas',
    name: 'Relleno de puertas',
    description: 'Estructura interna de cartón panal para la fabricación de puertas ligeras y resistentes.',
    image: '/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.49.26.png',
    pdfUrl: '/catalogos/relleno-puertas.pdf'
  },
  {
    id: 'polietileno',
    name: 'Polietileno',
    description: 'Películas y espumas de polietileno para protección adicional, embalaje y sellado industrial.',
    image: '/assets/productos/placeholder.png', // Assuming we might need a placeholder
    pdfUrl: '/catalogos/polietileno.pdf'
  },
  {
    id: 'separadores',
    name: 'Separadores - Estabilizadores',
    description: 'Láminas diseñadas para estabilizar cargas y separar productos durante el transporte y almacenaje.',
    image: '/assets/productos/placeholder.png',
    pdfUrl: '/catalogos/separadores.pdf'
  }
];

export default function CatalogosPage() {
  const accentColor = '#94C11F';

  return (
    <main className="min-h-screen bg-brand-warm">
      <Header activeSection="catalogos" forceBackground={true} />
      
      <div className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="honeycomb-bg absolute inset-0 opacity-50 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle 
            sub="Descarga nuestra información técnica y comercial" 
            accentColor={accentColor}
          >
            Catálogos Digitales
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {catalogos.map((cat) => (
              <div 
                key={cat.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
              >
                <div className="h-64 relative overflow-hidden bg-gray-50">
                  {cat.image !== '/assets/productos/placeholder.png' ? (
                    <Image 
                      src={cat.image} 
                      alt={cat.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-gray-400 font-bold text-lg opacity-30">PERLAD</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4 bg-accent text-brand-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    PDF
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-xl font-bold text-brand-dark mb-3 group-hover:text-accent transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1">
                    {cat.description}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-50">
                    <a 
                      href={cat.pdfUrl}
                      download
                      className="flex items-center gap-2 text-brand-dark font-bold text-xs uppercase tracking-widest hover:text-accent transition-colors"
                    >
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Descargar PDF
                    </a>
                    
                    <a 
                      href={cat.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-[11px] font-medium"
                    >
                      Ver en línea
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer accentColor={accentColor} />
    </main>
  );
}
