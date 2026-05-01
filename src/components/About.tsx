import { SectionTitle } from "./ui/SectionTitle";
import { Hexagon } from "./ui/Hexagon";

export const About = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  return (
    <section id="nosotros" className="py-24 px-6 bg-brand-dark text-white relative overflow-hidden">
      <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="grid grid-cols-3 gap-2 max-w-[360px] mx-auto md:max-w-none">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className="aspect-[1/1.15] flex items-center justify-center transition-all duration-500"
              style={{ 
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                background: i === 2 ? accentColor : i === 4 ? '#8B6914' : '#333'
              }}
            >
              {i === 2 && <img src="/assets/logo-perlad.png" className="w-1/2 brightness-0" alt="" />}
            </div>
          ))}
        </div>

        <div>
          <SectionTitle light accentColor={accentColor}>Quiénes Somos</SectionTitle>
          <div className="space-y-6 text-white/70 text-lg leading-relaxed">
            <p>
              En Perlad somos pioneros en el desarrollo de estructuras de cartón panal, fabricadas con papel 100% reciclable. Nuestra misión es ofrecer soluciones de empaque innovadoras que protejan tanto tu producto como el medio ambiente.
            </p>
            <p>
              Con más de 15 años de experiencia, hemos desarrollado tecnología propia para crear materiales que reemplazan al plástico y la madera en la industria del embalaje.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 mt-10">
            {['Reciclable', 'Biodegradable', 'Liviano', 'Resistente'].map((v, i) => (
              <div key={i} className="flex items-center gap-3">
                <Hexagon size={24} bg={accentColor}>
                  <span className="text-[10px] text-brand-dark font-bold">✓</span>
                </Hexagon>
                <span className="font-bold text-sm tracking-wide">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
