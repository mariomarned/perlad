import { SectionTitle } from "./ui/SectionTitle";
import { AnimCounter } from "./ui/AnimCounter";

export const Sustainability = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  const pillars = [
    { icon: '♻', title: 'Materiales Reciclables', desc: 'Todos nuestros productos están fabricados con papel 100% reciclable y reciclado.' },
    { icon: '🌱', title: 'Huella de Carbono', desc: 'Procesos optimizados para minimizar emisiones y consumo energético.' },
    { icon: '📦', title: 'Cero Desperdicio', desc: 'Diseño eficiente que aprovecha al máximo cada hoja de material.' },
    { icon: '🔄', title: 'Economía Circular', desc: 'Nuestros empaques se reintegran al ciclo productivo después de su uso.' }
  ];

  return (
    <section id="sostenibilidad" className="py-24 px-6 bg-gradient-to-b from-brand-warm to-white">
      <div className="max-w-7xl mx-auto">
        <SectionTitle sub="Nuestro compromiso con el planeta" accentColor={accentColor}>
          Sostenibilidad
        </SectionTitle>

        <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-8 md:gap-y-12 max-w-5xl mx-auto mt-12">
          {pillars.map((p, i) => (
            <div 
              key={i} 
              className={`w-[220px] sm:w-64 h-64 sm:h-72 relative group transition-all duration-500 hover:scale-105 ${i % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              <div 
                className="absolute inset-0 bg-white group-hover:bg-brand-warm transition-colors duration-300 shadow-sm"
                style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              ></div>
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 115">
                <polygon 
                  points="50,0 100,25 100,75 50,100 0,75 0,25"
                  fill="none" 
                  stroke={accentColor} 
                  strokeWidth="0.5" 
                  className="opacity-20 group-hover:opacity-100 transition-opacity duration-300"
                />
              </svg>
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                <div 
                  className="w-14 h-14 mb-4 flex items-center justify-center text-2xl transition-colors duration-300 bg-accent/10 group-hover:bg-accent"
                  style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                >
                  <span className="group-hover:brightness-0 group-hover:invert transition-all">{p.icon}</span>
                </div>
                <h3 className="font-display text-sm font-bold text-brand-dark mb-2">{p.title}</h3>
                <p className="text-[11px] leading-relaxed text-gray-500">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-brand-dark p-12 relative overflow-hidden flex flex-wrap justify-around gap-8"
             style={{ clipPath: 'polygon(16px 0%, calc(100% - 16px) 0%, 100% 16px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 16px 100%, 0% calc(100% - 16px), 0% 16px)' }}>
          <div className="honeycomb-bg-dark absolute inset-0 opacity-20"></div>
          {[
            { n: 2000, s: '+', label: 'Toneladas de plástico evitadas' },
            { n: 95, s: '%', label: 'Material reciclado utilizado' },
            { n: 30, s: '%', label: 'Reducción huella de carbono' }
          ].map((d, i) => (
            <div key={i} className="text-center relative z-10">
              <div className="font-display text-4xl font-bold text-accent">
                <AnimCounter end={d.n} />{d.s}
              </div>
              <div className="text-white/50 text-[11px] uppercase tracking-widest mt-2">{d.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
