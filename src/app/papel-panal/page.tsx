'use client';

import { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hexagon } from "@/components/ui/Hexagon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Recycle,
  Truck,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Download,
  Sparkles,
  Layers,
  Zap,
  Box,
  Scale,
  AlertTriangle,
  Leaf,
  ChevronRight,
  PackageCheck,
  Maximize2,
  Gift,
  Shield,
  Globe,
  Sliders,
  Scissors,
  Feather,
  RefreshCw,
  Sparkle
} from "lucide-react";

export default function PapelPanalPage() {
  const accentColor = '#94C11F';
  const [activeTab, setActiveTab] = useState<'ecommerce' | 'cosmetica' | 'cristaleria' | 'industrial'>('cosmetica');

  const useCases = {
    cosmetica: {
      title: "Cosmética y Cuidado Personal",
      badge: "Estética Premium & Protección",
      image: "/assets/imgcategorias/papelpanalysususos.jpg",
      description: "Ideal para marcas que buscan proyectar una imagen limpia, moderna y profesional desde el primer contacto táctil.",
      items: [
        "Protección acolchada perfecta para frascos de vidrio, perfumes, sueros y cremas.",
        "Experiencia táctil y estética orgánica que deleita al cliente al abrir el empaque.",
        "Elevación directa del valor percibido de la marca (Unboxing Premium).",
        "Opción de capa interna de papel blanco para prevenir arañazos en envases delicados."
      ]
    },
    ecommerce: {
      title: "Comercio Electrónico y D2C Premium",
      badge: "Alta Velocidad de Despacho",
      image: "/assets/imgcategorias/papelpanalysususos.jpg",
      description: "Optimice el embalaje de sus envíos diarios garantizando llegada en perfecto estado y cero uso de plásticos.",
      items: [
        "Aumento de la velocidad de empaque de hasta un 30% con dispensadores ergonómicos.",
        "Eliminación total del uso de cintas adhesivas gracias al autocierre por entrelazado.",
        "Reducción del volumen del paquete, disminuyendo costos logísticos de transporte.",
        "Empaque 100% compostable y reciclable que enamora a los consumidores eco-conscientes."
      ]
    },
    cristaleria: {
      title: "Cristalería Fina, Cerámica y Botellas",
      badge: "Amortiguación Superior",
      image: "/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.49.04.png",
      description: "Estructura tridimensional hexagonal diseñada para inmovilizar piezas frágiles y absorber impactos en tránsito.",
      items: [
        "Inmovilización absoluta de botellas de licor, jarrones, vajillas y esculturas.",
        "La malla 3D se amolda de forma natural a cualquier contorno irregular o complejo.",
        "Disipación y absorción continua de impactos y vibraciones durante el transporte.",
        "Reemplazo total del plástico de burbuja (Bubble Wrap) sin perder protección."
      ]
    },
    industrial: {
      title: "Piezas Industriales y Hardware de Precisión",
      badge: "Relleno Eficiente de Vacíos",
      image: "/assets/imgcategorias/packingboard.jpg",
      description: "Solución versátil para proteger partes mecánicas, moldes y herramientas delicadas dentro de cajas de exportación.",
      items: [
        "Excelente capacidad para amortiguar repuestos mecánicos y componentes electrónicos.",
        "Previene fricciones metálicas y desplazamientos internos en contenedores.",
        "Corte manual ultra rápido directamente en la mesa de embalaje sin herramientas.",
        "Cumplimiento total con inspecciones ambientales y aduaneras verdes en destino."
      ]
    }
  };

  return (
    <main className="bg-[#0D0D0D] min-h-screen text-white selection:bg-accent selection:text-brand-dark font-sans">
      <Header accentColor={accentColor} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden border-b border-white/5">
        <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>
        
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 animate-slide-up">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-3.5 py-1.5 rounded-full">
                  <Hexagon size={10} bg={accentColor} />
                  <span className="text-accent text-[11px] font-bold uppercase tracking-wider">El Futuro del Embalaje</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-white/80 text-[11px] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-accent" />
                  <span>Unboxing Premium</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-white/80 text-[11px] font-semibold">
                  <Leaf className="w-3.5 h-3.5 text-accent" />
                  <span>100% Biodegradable y Compostable</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.08] tracking-tight">
                Papel Panal: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-lime-200">
                  Proteja sus Productos.
                </span> <br />
                Eleve su Marca.
              </h1>

              {/* Subtitle */}
              <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl">
                El embalaje es mucho más que protección; es una declaración de intenciones. El papel panal de Perlad transforma el acto de desempacar en una experiencia táctil y visual memorable, demostrando que la excelencia operativa y la responsabilidad ambiental van de la mano.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link 
                  href="/#contacto?producto=Papel+Panal"
                  className="bg-accent text-brand-dark px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(148,193,31,0.3)] text-center flex items-center justify-center gap-3 cursor-pointer group"
                  style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
                >
                  <span>Cotizar Papel Panal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a 
                  href="/assets/catalogos/PAPELPANALV1.pdf"
                  download
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-4 font-bold text-sm uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 rounded cursor-pointer"
                >
                  <Download className="w-4 h-4 text-accent" />
                  <span>Descargar Catálogo PDF</span>
                </a>
              </div>
            </div>

            {/* Visual Showcase Card */}
            <div className="lg:col-span-5 relative animate-scale-in">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-accent/20 bg-gradient-to-b from-white/10 to-brand-dark p-2 shadow-2xl group">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#121212]">
                  <Image 
                    src="/assets/imgcategorias/papelpanalysususos.jpg" 
                    alt="Papel Panal Perlad Embalaje Ecológico" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-[#161616]/90 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <div className="text-xs text-accent font-bold uppercase tracking-widest">Estructura Hexagonal 3D</div>
                      <div className="text-sm font-bold text-white">Expansión Dinámica hasta 30%</div>
                    </div>
                    <div className="bg-accent/20 text-accent p-2 rounded-lg border border-accent/30">
                      <Sparkles className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1 */}
              <div className="absolute -top-6 -left-6 bg-[#181818]/90 backdrop-blur-md border border-white/15 p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Protección Activa</div>
                  <div className="text-sm font-bold text-white">Sin Cintas ni Adhesivos</div>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div className="absolute -bottom-6 -right-6 bg-[#181818]/90 backdrop-blur-md border border-white/15 p-4 rounded-xl shadow-xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Recycle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/50">Cero Residuos</div>
                  <div className="text-sm font-bold text-white">100% Reciclable x7</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Metrics Banner */}
      <section className="py-12 bg-white/[0.02] border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="border-l-2 border-accent/50 pl-5">
              <div className="text-3xl sm:text-4xl font-extrabold text-accent mb-1">+30%</div>
              <div className="text-sm font-bold text-white">Expansión Dinámica</div>
              <div className="text-xs text-white/50 mt-1">Aumenta su tamaño al estirarse creando anclaje natural</div>
            </div>

            <div className="border-l-2 border-accent/50 pl-5">
              <div className="text-3xl sm:text-4xl font-extrabold text-accent mb-1">20% - 30%</div>
              <div className="text-sm font-bold text-white">Ahorro de Espacio</div>
              <div className="text-xs text-white/50 mt-1">Menos volumen en almacén y costos de transporte</div>
            </div>

            <div className="border-l-2 border-accent/50 pl-5">
              <div className="text-3xl sm:text-4xl font-extrabold text-accent mb-1">+30%</div>
              <div className="text-sm font-bold text-white">Velocidad de Empaque</div>
              <div className="text-xs text-white/50 mt-1">Optimización del flujo de trabajo con dispensador</div>
            </div>

            <div className="border-l-2 border-accent/50 pl-5">
              <div className="text-3xl sm:text-4xl font-extrabold text-accent mb-1">100%</div>
              <div className="text-sm font-bold text-white">Biodegradable y Compostable</div>
              <div className="text-xs text-white/50 mt-1">Pulpa de madera kraft reciclable hasta 7 veces</div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Innovation Sections: Protección e Ingeniería Natural */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <SectionTitle 
            sub="La ciencia de la malla hexagonal en favor de la seguridad de sus productos" 
            light
            accentColor={accentColor} 
          >
            Ingeniería Natural para una Máxima Protección
          </SectionTitle>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            
            {/* Feature Card 1 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Estructura de Alto Rendimiento</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                La capacidad de resistencia proviene de su arquitectura inteligente. La malla tridimensional hexagonal se expande para absorber impactos, vibraciones y caídas durante el transporte.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Núcleo de panal y capas actuando en conjunto</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Amortiguación continua multiaxial</span>
                </li>
              </ul>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Maximize2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fijación Segura & Adaptable</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Las celdas al estirarse se entrelazan entre sí formando un sistema de anclaje natural. Proporcionan una sujeción firme sin dejar huecos y eliminan por completo el uso de cintas plásticas.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Expansión de hasta un 30% al estirarse</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Cero necesidad de adhesivos ni cintas adicionales</span>
                </li>
              </ul>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-accent/40 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                <Scissors className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Velocidad & Ergonomía</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Diseñado para simplificar el trabajo del operador. Fácil de rasgar directamente a mano sin necesidad de tijeras o bisturís, aumentando la seguridad operacional y la rapidez.
              </p>
              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Corte manual fácil y seguro sin herramientas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>Compatible con dispensadores de mesa y piso</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Operative Efficiency Section */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-3.5 py-1.5 rounded-full">
                <Truck className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Optimización Logística</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Eficiencia Operativa que <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-lime-200">
                  Transforma su Almacén
                </span>
              </h2>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                Optimice su cadena de suministro desde la estantería hasta el envío. El formato de rollo plano es altamente comprimible y ofrece un rendimiento excepcional en almacenes y centros de distribución.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                    <Box className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Ahorro Masivo de Espacio</h4>
                    <p className="text-white/60 text-sm mt-1">
                      Ocupa un espacio mínimo de almacenamiento antes de su uso en comparación con voluminosos rollos de plástico de burbuja.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent flex-shrink-0 mt-1">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Aumento de Productividad en Línea</h4>
                    <p className="text-white/60 text-sm mt-1">
                      Integrado con dispensadores ergonómicos, permite envolver rápidamente e incrementar la velocidad de embalaje hasta en un 30%.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-[#141414] p-3 shadow-2xl">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image 
                    src="/assets/imgcategorias/papelpanalysususos.jpg" 
                    alt="Dispensador y Rollo de Papel Panal Perlad" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#161616]/90 backdrop-blur-md border border-white/10 text-white">
                    <div className="text-xs text-accent font-bold uppercase tracking-wider">Formato en Rollo Plano</div>
                    <div className="text-sm font-semibold mt-1">Comprimible, Ligero y de Rendimiento Superior</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Unboxing & Brand Aesthetics Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-accent/30 bg-[#141414] p-3 shadow-2xl group">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image 
                    src="/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.49.04.png" 
                    alt="Experiencia Unboxing Premium Papel Panal" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-3.5 py-1.5 rounded-full">
                <Gift className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Unboxing Memorable</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Una Experiencia de Unboxing <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-lime-200">
                  Verdaderamente Premium
                </span>
              </h2>

              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                El papel de panal no solo protege, sino que eleva el valor percibido de sus productos. Su textura natural y orgánica crea una presentación limpia y sofisticada que los clientes aprecian al instante.
              </p>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                <h4 className="font-bold text-white text-lg">La estética que su marca merece</h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  Perfecto para marcas centradas en la experiencia de usuario que proyectan una imagen responsable, moderna y distinguida.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Cosmética & Cuidado Personal</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Joyería y Artículos de Diseño</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Cristalería Fina y Cerámica</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Comercio Electrónico D2C</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Adaptability by Industry - Interactive Tabs */}
      <section className="py-24 bg-white/[0.02] border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <SectionTitle 
            sub="Desde pequeños envíos de e-commerce hasta la protección de piezas industriales" 
            light
            accentColor={accentColor} 
          >
            Adaptabilidad Total para Cualquier Industria
          </SectionTitle>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 mb-12">
            {(Object.keys(useCases) as Array<keyof typeof useCases>).map((key) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive 
                      ? 'bg-accent text-brand-dark shadow-[0_0_20px_rgba(148,193,31,0.4)] scale-105' 
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <Hexagon size={8} bg={isActive ? '#1A1A1A' : accentColor} />
                  <span>{useCases[key].title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Tab Content */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-3xl p-8 sm:p-12 transition-all">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block bg-accent/10 border border-accent/30 text-accent text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                  {useCases[activeTab].badge}
                </div>
                
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {useCases[activeTab].title}
                </h3>

                <p className="text-white/70 text-base leading-relaxed">
                  {useCases[activeTab].description}
                </p>

                <div className="space-y-3 pt-2">
                  {useCases[activeTab].items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="p-1 rounded-full bg-accent/20 text-accent mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm text-white/90 font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link 
                    href={`/#contacto?producto=Papel+Panal+${encodeURIComponent(useCases[activeTab].title)}`}
                    className="inline-flex items-center gap-2 bg-accent text-brand-dark px-6 py-3 font-bold text-xs uppercase tracking-wider rounded hover:bg-white transition-colors"
                  >
                    <span>Cotizar para esta aplicación</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image 
                    src={useCases[activeTab].image} 
                    alt={useCases[activeTab].title} 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Customized Options & Multilayer Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4 hover:border-accent/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Anchos Personalizables</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Disponible en formatos de <strong>33 cm y 50 cm</strong> de ancho para adecuarse exactamente al tamaño de sus productos y estaciones de trabajo.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4 hover:border-accent/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Opciones Multicapa Anti-rayones</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Capacidad de dispensar papel kraft de panal emparejado con una <strong>capa interna de papel de revestimiento blanco</strong> para protección extra contra fricción en superficies sensibles.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4 hover:border-accent/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                <PackageCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Dispensadores Eficientes</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Equipos y dispensadores mecánicos adaptables para mesas de empaque que maximizan la tensión del papel y agilizan el embalaje masivo.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Sustainability & Circularity (Cero Residuos) */}
      <section className="py-24 bg-gradient-to-b from-[#12180B] to-[#0D0D0D] border-t border-accent/20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-3.5 py-1.5 rounded-full mb-6">
            <Leaf className="w-3.5 h-3.5 text-accent" />
            <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Cero Residuos. 100% Responsabilidad.</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white mb-6">
            El Compromiso Perlad: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-lime-200">
              Innovación Sostenible
            </span>
          </h2>

          <p className="text-white/70 text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-16">
            Fabricado íntegramente a partir de pulpa de madera y papel kraft renovable. Elegir nuestro papel de panal es adoptar una estrategia de embalaje que cumple con las normativas medioambientales más estrictas a nivel mundial.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            
            <div className="bg-[#141810] border border-accent/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="text-accent font-extrabold text-2xl mb-2">100%</div>
              <h3 className="text-lg font-bold text-white mb-2">Biodegradable y Compostable</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Se reintegra a la naturaleza sin dejar huella ni generar microplásticos nocivos en los ecosistemas.
              </p>
            </div>

            <div className="bg-[#141810] border border-accent/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="text-accent font-extrabold text-2xl mb-2">Hasta 7x</div>
              <h3 className="text-lg font-bold text-white mb-2">Altamente Reciclable</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                El papel kraft de fibra larga puede reciclarse continuamente hasta 7 veces dentro de la cadena papelera circular.
              </p>
            </div>

            <div className="bg-[#141810] border border-accent/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="text-accent font-extrabold text-2xl mb-2">A base de agua</div>
              <h3 className="text-lg font-bold text-white mb-2">Adhesivos Limpios</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Elaborado exclusivamente con adhesivos acuosos no tóxicos ni contaminantes, libres de solutos sintéticos.
              </p>
            </div>

          </div>

          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto text-center">
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">
              Ayuda a las empresas a crear una <strong>&quot;imagen de marca ecológica&quot;</strong> genuina, superando sin problemas las inspecciones de aduanas verdes en mercados internacionales exigentes y fortaleciendo sus metas de sostenibilidad (ESG).
            </p>
          </div>

        </div>
      </section>

      {/* Beneficios del Papel Panal */}
      <section className="py-24 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <SectionTitle 
            sub="Una alternativa sostenible para reducir el uso de plástico en tus empaques" 
            light
            accentColor={accentColor} 
          >
            Beneficios del Papel Panal Perlad
          </SectionTitle>

          <div className="mt-16 bg-[#121212]/90 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02] text-xs font-bold uppercase tracking-wider text-white/50">
                    <th className="py-5 px-6 sm:px-8 w-1/3">Característica</th>
                    <th className="py-5 px-6 sm:px-8 text-accent">Papel Panal Perlad</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🌱</span>
                        <span>Material</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-white/80 leading-relaxed">
                      Fabricado a base de papel, una alternativa para reducir el uso de materiales plásticos en el empaque.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">♻️</span>
                        <span>Fin de vida</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-white/80 leading-relaxed">
                      Biodegradable, facilitando una gestión más responsable del material después de su uso.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">📦</span>
                        <span>Almacenamiento</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-white/80 leading-relaxed">
                      Su presentación en rollo permite optimizar el espacio de almacenamiento y transporte.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">✂️</span>
                        <span>Facilidad de uso</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-white/80 leading-relaxed">
                      Se corta y rasga fácilmente a mano, agilizando las operaciones de empaque.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🛡️</span>
                        <span>Protección</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-white/80 leading-relaxed">
                      Su estructura tipo panal permite envolver, separar y proteger productos durante su manipulación y transporte.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🧴</span>
                        <span>Reducción de plástico</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-white/80 leading-relaxed">
                      Permite sustituir o disminuir el uso de materiales plásticos en diferentes aplicaciones de protección y embalaje.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🎀</span>
                        <span>Presentación</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-white/80 leading-relaxed">
                      Aporta una apariencia natural, limpia y premium al empaque.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🛍️</span>
                        <span>Experiencia del cliente</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-white/80 leading-relaxed">
                      Convierte el empaque en parte de la experiencia de compra, transmitiendo una imagen de responsabilidad y cuidado.
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 sm:px-8 font-semibold text-white">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🌍</span>
                        <span>Imagen de marca</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-white/80 leading-relaxed">
                      Ayuda a las empresas a avanzar hacia estrategias de empaque más sostenibles.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-t from-brand-dark via-brand-dark to-white/[0.02] border-t border-white/10 relative overflow-hidden">
        <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Eleve su Embalaje. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-lime-200">
              Proteja el Planeta.
            </span>
          </h2>

          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            La excelencia en la protección, la máxima eficiencia operativa y una estética impecable, unidas por un compromiso inquebrantable con el medio ambiente. Descubra el estándar premium en embalaje.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/#contacto?producto=Papel+Panal"
              className="bg-accent text-brand-dark px-10 py-5 font-bold text-base uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(148,193,31,0.4)] flex items-center gap-3 cursor-pointer group"
              style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}
            >
              <span>Solicitar Cotización de Papel Panal</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a 
              href="/assets/catalogos/PAPELPANALV1.pdf"
              download
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-5 font-bold text-base uppercase tracking-wider transition-all flex items-center gap-3 rounded cursor-pointer"
            >
              <Download className="w-5 h-5 text-accent" />
              <span>Descargar Catálogo PDF</span>
            </a>
          </div>

        </div>
      </section>

      <Footer accentColor={accentColor} />
    </main>
  );
}
