import { SectionTitle } from "./ui/SectionTitle";

interface ProductCardProps {
  name: string;
  desc: string;
  accentColor: string;
}

const ProductCard = ({ name, desc, accentColor }: ProductCardProps) => (
  <div className="group bg-white border border-gray-200 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
       style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}>
    <div className="h-56 bg-gradient-to-br from-amber-700 to-amber-900 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 honeycomb-bg"></div>
      <span className="text-white/40 font-mono text-sm">product photo</span>
    </div>
    <div className="p-8">
      <h3 className="font-display text-xl font-bold text-brand-dark mb-2">{name}</h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
      <div className="flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-wider">
        Ver más 
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </div>
  </div>
);

export const Products = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const products = [
    { name: 'Empaques Personalizados', desc: 'Soluciones a medida en cartón panal para proteger cualquier tipo de producto con máxima eficiencia.' },
    { name: 'Estibas de Cartón', desc: 'Alternativa liviana y resistente a las estibas de madera. 100% reciclables y libres de fumigación.' },
    { name: 'Esquinas y Punteras', desc: 'Protección perimetral para tus productos durante el transporte y almacenamiento.' },
    { name: 'Relleno Cartón Panal', desc: 'Material de relleno expandible que se adapta a la forma del producto, reemplazando el plástico.' },
    { name: 'Rollo de Papel Panal', desc: 'Papel panal en rollo para envolver y proteger. Biodegradable y con excelente amortiguación.' },
    { name: 'Bolsa Bio', desc: 'Bolsas biodegradables y compostables para un empaque responsable con el medio ambiente.' }
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
