import { Diamond } from "./ui/Diamond";

export const Footer = ({ accentColor = '#94C11F' }: { accentColor?: string }) => {
  return (
    <footer className="bg-brand-dark py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <Diamond size={32} bg={accentColor}>
              <img src="/assets/logo-perlad.png" alt="P" className="w-1/2 brightness-0" />
            </Diamond>
            <span className="text-white font-display text-xl font-bold tracking-tight">PERLAD</span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Líderes en soluciones de empaque sostenible en cartón panal. Protegiendo tus productos y el futuro de nuestro planeta.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Secciones</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li><a href="#hero" className="hover:text-accent transition-colors">Inicio</a></li>
            <li><a href="#productos" className="hover:text-accent transition-colors">Productos</a></li>
            <li><a href="#nosotros" className="hover:text-accent transition-colors">Nosotros</a></li>
            <li><a href="#blog" className="hover:text-accent transition-colors">Blog</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Legal</h4>
          <ul className="space-y-4 text-white/40 text-sm">
            <li><a href="#" className="hover:text-accent transition-colors">Términos y Condiciones</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-accent transition-colors">Cookies</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Newsletter</h4>
          <p className="text-white/40 text-sm mb-6">Suscríbete para recibir noticias sobre sostenibilidad.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Tu email" 
              className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white outline-none flex-1 focus:border-accent" 
            />
            <button className="bg-accent px-4 py-3 text-brand-dark">
              <span className="sr-only">Suscribirse</span>
              →
            </button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-xs">
        <p>© 2026 Perlad S.A.S. Todos los derechos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
};
