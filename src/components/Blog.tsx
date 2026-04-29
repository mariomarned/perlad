import { SectionTitle } from "./ui/SectionTitle";

export const Blog = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const posts = [
    { title: '¿Por qué el cartón panal es el futuro del empaque?', cat: 'Innovación', date: 'Mar 2026' },
    { title: '5 formas de reducir plástico en tu cadena de suministro', cat: 'Sostenibilidad', date: 'Feb 2026' },
    { title: 'Estibas de cartón vs. madera: comparativa completa', cat: 'Productos', date: 'Ene 2026' }
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-brand-warm">
      <div className="max-w-7xl mx-auto">
        <SectionTitle sub="Conoce las últimas tendencias en empaques sostenibles" accentColor={accentColor}>
          Blog
        </SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map((p, i) => (
            <article 
              key={i} 
              className="group bg-white border border-gray-200 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-52 bg-accent/5 relative overflow-hidden flex items-center justify-center">
                <div className="honeycomb-bg absolute inset-0 opacity-10 transition-transform duration-700 group-hover:scale-110"></div>
                <span className="text-gray-400 font-mono text-xs z-10">blog image</span>
              </div>
              <div className="p-8">
                <div className="flex gap-4 mb-4">
                  <span className="text-accent text-[10px] font-bold uppercase tracking-widest">{p.cat}</span>
                  <span className="text-gray-400 text-[10px]">{p.date}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-brand-dark group-hover:text-accent transition-colors duration-300">
                  {p.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
