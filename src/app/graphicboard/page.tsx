'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hexagon } from "@/components/ui/Hexagon";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GraphicboardCarousel } from "@/components/GraphicboardCarousel";
import Image from "next/image";
import Link from "next/link";
import {
  Printer,
  Sparkles,
  Layers,
  Zap,
  Box,
  Scale,
  AlertTriangle,
  Leaf,
  ChevronRight,
  ArrowRight,
  Download,
  CheckCircle2,
  XCircle,
  Maximize2,
  Wrench,
  PackageCheck,
  Grid,
  Palette,
  LayoutGrid
} from "lucide-react";

export default function GraphicboardPage() {
  const accentColor = '#94C11F';

  return (
    <main className="bg-[#0D0D0D] min-h-screen text-white selection:bg-accent selection:text-brand-dark">
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
                  <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Litografía Estructural</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-white/80 text-[11px] font-semibold">
                  <Printer className="w-3.5 h-3.5 text-accent" />
                  <span>Impresión Directa UV</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-white/80 text-[11px] font-semibold">
                  <Leaf className="w-3.5 h-3.5 text-accent" />
                  <span>100% Reciclable</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.08] tracking-tight">
                Graphicboard: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-lime-200">
                  Tableros Rígidos
                </span> <br />
                de Alta Gama
              </h1>

              {/* Subtitle */}
              <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl font-sans">
                El sustrato revolucionario que se imprime con la precisión gráfica del papel y construye con la solidez de la madera. Diseñado para litografía moderna, impresión UV directa y arquitectura POP 3D.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link 
                  href="/#contacto?producto=Graphicboard"
                  className="bg-accent text-brand-dark px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(148,193,31,0.3)] text-center flex items-center justify-center gap-3 cursor-pointer group"
                  style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
                >
                  <span>Cotizar Graphicboard</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a 
                  href="/assets/catalogos/GRAPHICBOARDV1.pdf"
                  download
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-4 font-bold text-sm uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 rounded cursor-pointer"
                >
                  <Download className="w-4 h-4 text-accent" />
                  <span>Descargar Catálogo PDF</span>
                </a>
              </div>
            </div>

            {/* Visual Card Showcase */}
            <div className="lg:col-span-5 relative animate-scale-in">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-accent/20 bg-gradient-to-b from-white/10 to-brand-dark p-2 shadow-2xl group">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#161616] flex items-center justify-center">
                  <Image 
                    src="/assets/imgcategorias/GRAPHICBOARD/GRAPHICBOARD4.png" 
                    alt="Graphicboard Perlad - Muestras con Impresión UV Directa" 
                    fill 
                    className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#161616]/95 backdrop-blur-md border border-white/10 p-3.5 rounded-xl flex items-center justify-between z-10 shadow-lg">
                    <div>
                      <div className="text-[11px] text-accent font-bold uppercase tracking-widest">Impresión UV Directa</div>
                      <div className="text-xs sm:text-sm font-bold text-white">Liner Blanco Estucado de Alta Fidelidad</div>
                    </div>
                    <div className="bg-accent/20 text-accent p-2 rounded-lg border border-accent/30 shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Slide 2: El Dilema de la Impresión Estructural */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-[#0D0D0D] via-[#121212] to-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle light sub="Por qué la industria gráfica exige superar los sustratos pesados y deformables" accentColor={accentColor}>
            El Dilema de la Impresión Estructural
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            
            {/* Demanda */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center text-accent mb-6">
                  <Box className="w-6 h-6" />
                </div>
                <div className="text-accent text-xs font-bold uppercase tracking-widest mb-1">La Exigencia del Mercado</div>
                <h3 className="text-2xl font-bold text-white mb-4">Demanda de Volumetría 3D</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  El cliente final ya no busca solo piezas planas; exige volumen impactante: displays POP 3D, stands modulares, tótems de gran formato y mobiliario corporativo rígido.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-semibold text-accent flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Oportunidad de productos de alto margen</span>
              </div>
            </div>

            {/* Limitación de Materiales Tradicionales */}
            <div className="bg-red-950/20 border border-red-500/20 p-8 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div className="text-red-400 text-xs font-bold uppercase tracking-widest mb-1">La Restricción Actual</div>
                <h3 className="text-2xl font-bold text-white mb-4">Materiales Obsoletos</h3>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Madera / MDF:</strong> Extremadamente pesado, fletes costosos, requiere sierra/CNC y carpintería pesada.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Cartón Corrugado Estándar:</strong> Pobre planimetría, se pandea (warping) y destruye cabezales UV.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-red-500/20 text-xs font-semibold text-red-300">
                Límite de Rentabilidad para Litografías
              </div>
            </div>

          </div>

          {/* Core Key Phrase Banner */}
          <div className="mt-12 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent border border-accent/30 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-lg md:text-2xl font-display font-extrabold text-white leading-relaxed">
              &quot;La litografía moderna necesita un sustrato que se imprima como el papel, pero construya como la madera.&quot;
            </h3>
          </div>
        </div>
      </section>

      {/* Slide 3 & 4: ¿Por qué Cartón Panal Blanco Perlad? + Planimetría */}
      <section className="py-24 px-6 bg-white text-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle sub="Superficie estucada premium y planimetría perfecta para proteger sus impresoras UV" accentColor={accentColor}>
            ¿Por qué elegir Graphicboard Blanco?
          </SectionTitle>

          <div className="grid lg:grid-cols-12 gap-12 items-center mt-16">
            
            {/* Visual Diagram */}
            <div className="lg:col-span-6 relative aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-xl p-8 flex flex-col justify-between group">
              <Image 
                src="/assets/imgcategorias/GRAPHICBOARD2.jpg" 
                alt="Estructura de Graphicboard Perlad" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

              <div className="relative z-10 text-white mt-auto">
                <div className="inline-flex items-center gap-2 bg-accent text-brand-dark text-xs font-extrabold uppercase px-3 py-1 rounded mb-3">
                  Sustrato Rígido Estucado
                </div>
                <h3 className="text-2xl font-bold mb-2">Construcción en 3 Capas de Alta Tensión</h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  Liner blanco estucado + Núcleo estructural hexagonal Kraft + Liner blanco de contención.
                </p>
              </div>
            </div>

            {/* Feature Bullet Points */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="p-6 bg-brand-warm rounded-xl border-l-4 border-accent shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Palette className="w-5 h-5 text-accent" />
                  <h4 className="font-bold text-brand-dark text-lg">Superficie Estucada Premium</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Acabado de blancura brillante superior que evita la absorción excesiva de tinta, manteniendo colores vibrantes y nitidez gráfica original.
                </p>
              </div>

              <div className="p-6 bg-brand-warm rounded-xl border-l-4 border-accent shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Printer className="w-5 h-5 text-accent" />
                  <h4 className="font-bold text-brand-dark text-lg">Anclaje UV Perfecto</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Diseñado específicamente para impresión digital directa de cama plana y secado inmediato de tintas UV sin sangrado ni distorsión.
                </p>
              </div>

              <div className="p-6 bg-brand-warm rounded-xl border-l-4 border-accent shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <Layers className="w-5 h-5 text-accent" />
                  <h4 className="font-bold text-brand-dark text-lg">Planimetría Cero Deformación (No Warping)</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Al intercalar el núcleo alveolar entre dos liners de alta tensión, se elimina por completo la curvatura. Impresiones impecables de extremo a extremo que protegen sus cabezales.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Slide 5: Formatos Estratégicos */}
      <section className="py-24 px-6 bg-[#0D0D0D] relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle light sub="Dimensiones optimizadas para mesas de corte digital y prensas cama plana" accentColor={accentColor}>
            Formatos Estratégicos para la Industria Gráfica
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            
            {/* Formato Gran Volumen */}
            <div className="bg-[#161616] border border-white/10 rounded-2xl p-8 flex flex-col justify-between group hover:border-accent/50 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-accent/10 border border-accent/30 rounded-xl text-accent">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                  <div className="bg-accent/20 text-accent font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                    Gran Formato
                  </div>
                </div>
                
                <h3 className="font-display text-3xl font-extrabold text-white mb-2">122 x 244 cm</h3>
                <div className="text-accent text-sm font-semibold mb-4">Formato Gran Volumen</div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Optimizado para arquitectura efímera, escenografías, stands completos de feria y mobiliario corporativo de gran envergadura.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/50 flex items-center justify-between">
                <span>Aprovechamiento máximo de plancha</span>
                <span className="font-bold text-white">4 x 8 pies</span>
              </div>
            </div>

            {/* Formato Personalizado / A Medida */}
            <div className="bg-[#161616] border border-white/10 rounded-2xl p-8 flex flex-col justify-between group hover:border-accent/50 transition-colors">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-accent/10 border border-accent/30 rounded-xl text-accent">
                    <Grid className="w-6 h-6" />
                  </div>
                  <div className="bg-accent/20 text-accent font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                    A Medida
                  </div>
                </div>
                
                <h3 className="font-display text-3xl font-extrabold text-white mb-2">Medidas Personalizadas</h3>
                <div className="text-accent text-sm font-semibold mb-4">Según la Necesidad del Cliente</div>
                <p className="text-white/70 text-sm leading-relaxed">
                  Ofrecemos diferentes medidas y cortes especiales adaptados a los requerimientos específicos de tu cliente, optimizando el uso de material y el rendimiento en mesas de corte digital.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 text-xs text-white/50 flex items-center justify-between">
                <span>Formatos y dimensiones bajo pedido</span>
                <span className="font-bold text-white">100% Personalizable</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Slide 6 & 10: De la 2D a la 3D + Ensamblaje sin Herramientas */}
      <section className="py-24 px-6 bg-[#121212] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle light sub="No solo imprima. Construya estructuras volumétricas de alto margen." accentColor={accentColor}>
            De la Segunda a la Tercera Dimensión
          </SectionTitle>

          {/* Workflow Steps 1-2-3 */}
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            
            <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 relative">
              <div className="w-10 h-10 rounded-full bg-accent text-brand-dark font-display font-extrabold flex items-center justify-center mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Diseño Inteligente</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                El mismo archivo digital impreso en superficie plana con líneas de V-cut y hendidos precisos en mesa digital.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 relative">
              <div className="w-10 h-10 rounded-full bg-accent text-brand-dark font-display font-extrabold flex items-center justify-center mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fricción y Anclaje</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Pliegue fácil sin agrietar el liner estucado. Pestañas de encastre directo para acople perfecto entre piezas.
              </p>
            </div>

            <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 relative">
              <div className="w-10 h-10 rounded-full bg-accent text-brand-dark font-display font-extrabold flex items-center justify-center mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Estructura Rígida 3D</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Resultado final: Mueble, exhibidor o stand rígido autoportante de alto valor percibido para su cliente final.
              </p>
            </div>

          </div>

          {/* Visual Application Showcases */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Card 1: 3D Tree / Flat pack */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden group hover:border-accent/40 transition-all flex flex-col justify-between">
              <div className="relative aspect-[4/3] bg-[#141414] flex items-center justify-center p-4 overflow-hidden border-b border-white/5">
                <Image 
                  src="/assets/imgcategorias/GRAPHICBOARD/GRAPHICBOARD1.png"
                  alt="Estructura 3D de Graphicboard cortada y ensamblada"
                  fill
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-2 bg-brand-dark/90 backdrop-blur-md border border-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                    <Hexagon size={10} bg={accentColor} />
                    <span>Encastre 3D sin adhesivos</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">Transformación de Plancha a Volumen</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Corte por hendido y ranurado de precisión en mesa digital para figuras volumétricas, packaging de alta gama y displays modulares.
                </p>
              </div>
            </div>

            {/* Card 2: Fair Stand */}
            <div className="bg-[#181818] border border-white/10 rounded-2xl overflow-hidden group hover:border-accent/40 transition-all flex flex-col justify-between">
              <div className="relative aspect-[4/3] bg-[#141414] flex items-center justify-center p-4 overflow-hidden border-b border-white/5">
                <Image 
                  src="/assets/imgcategorias/GRAPHICBOARD/GRAPHICBOARD3.png"
                  alt="Stand de feria y mobiliario corporativo construido en Graphicboard"
                  fill
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-2 bg-brand-dark/90 backdrop-blur-md border border-white/15 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow">
                    <Hexagon size={10} bg={accentColor} />
                    <span>Arquitectura Efímera y Stands</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">Stands y Mobiliario Ferial Completo</h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  Pabellones, estanterías hexagonales, muros para pantallas y asientos autoportantes con estética moderna y montaje ultrarrápido.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-accent/20 text-accent rounded-xl">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Cero Tornillos, Cero Pegamentos, Cero Herramientas</h4>
                <p className="text-white/60 text-xs">Entregue productos flat-pack que se ensamblan en minutos por simple encastre manual.</p>
              </div>
            </div>
            <Link 
              href="/#contacto?producto=Graphicboard"
              className="bg-accent text-brand-dark font-bold text-xs uppercase tracking-wider px-6 py-3 rounded hover:bg-white transition-colors shrink-0"
            >
              Solicitar Muestras de Corte
            </Link>
          </div>
        </div>
      </section>

      {/* Galería de Aplicaciones Reales en Modo Carrusel */}
      <GraphicboardCarousel accentColor={accentColor} />

      {/* Slide 11: La evolución del sustrato rígido (Comparison Table) */}
      <section className="py-24 px-6 bg-[#121212] relative border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <SectionTitle light sub="Comparación directa frente a cartón corrugado y MDF" accentColor={accentColor}>
            La Evolución del Sustrato Rígido
          </SectionTitle>

          <div className="mt-14 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-white/50 text-xs uppercase tracking-widest">
                  <th className="py-5 px-6 font-bold">Propiedad Técnica</th>
                  <th className="py-5 px-6 font-bold bg-accent/10 text-accent border-x border-accent/20 rounded-t-xl">
                    Cartón Panal Blanco Perlad
                  </th>
                  <th className="py-5 px-6 font-bold">Madera / MDF</th>
                  <th className="py-5 px-6 font-bold">Cartón Corrugado Estándar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                
                <tr>
                  <td className="py-5 px-6 font-semibold text-white">Calidad de Impresión UV</td>
                  <td className="py-5 px-6 font-bold text-accent bg-accent/10 border-x border-accent/20">
                    Perfecta (Estucado Blanco)
                  </td>
                  <td className="py-5 px-6 text-amber-400">Media (Requiere fondeo)</td>
                  <td className="py-5 px-6 text-red-400">Baja (Se deforma y transparenta)</td>
                </tr>

                <tr>
                  <td className="py-5 px-6 font-semibold text-white">Resistencia Estructural</td>
                  <td className="py-5 px-6 font-bold text-accent bg-accent/10 border-x border-accent/20">
                    Alta (Estructura Alveolar)
                  </td>
                  <td className="py-5 px-6 text-white/80">Alta</td>
                  <td className="py-5 px-6 text-red-400">Baja</td>
                </tr>

                <tr>
                  <td className="py-5 px-6 font-semibold text-white">Facilidad de Corte</td>
                  <td className="py-5 px-6 font-bold text-accent bg-accent/10 border-x border-accent/20">
                    Alta (Mesa Digital / V-Cut)
                  </td>
                  <td className="py-5 px-6 text-red-400">Baja (Sierra / CNC Pesado)</td>
                  <td className="py-5 px-6 text-white/80">Alta</td>
                </tr>

                <tr>
                  <td className="py-5 px-6 font-semibold text-white">Peso Logístico</td>
                  <td className="py-5 px-6 font-bold text-accent bg-accent/10 border-x border-accent/20 rounded-b-xl">
                    Ultraligero (1/6 de la madera)
                  </td>
                  <td className="py-5 px-6 text-red-400">Muy Pesado</td>
                  <td className="py-5 px-6 text-white/80">Ligero</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Slide 12: El futuro en 3 Pilares */}
      <section className="py-24 px-6 bg-white text-brand-dark">
        <div className="max-w-7xl mx-auto">
          <SectionTitle sub="Rentabilidad, innovación y sostenibilidad para su imprenta o agencia" accentColor={accentColor}>
            El Futuro de su Negocio en 3 Pilares
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            
            <div className="p-8 bg-brand-warm rounded-2xl border-t-4 border-accent shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-brand-dark mb-6 font-bold">
                  01
                </div>
                <h3 className="font-display text-xl font-bold text-brand-dark mb-3">Planimetría y Calidad</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Resultados impecables. La superficie estucada maximiza el gamut cromático de sus tintas UV y protege la vida útil de sus cabezales de impresión.
                </p>
              </div>
            </div>

            <div className="p-8 bg-brand-warm rounded-2xl border-t-4 border-accent shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-brand-dark mb-6 font-bold">
                  02
                </div>
                <h3 className="font-display text-xl font-bold text-brand-dark mb-3">Ahorro Logístico Radical</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Con tan solo 1/6 del peso de la madera maciza o MDF, reduzca drásticamente los costos de flete, almacenamiento y manipulado en punto de venta.
                </p>
              </div>
            </div>

            <div className="p-8 bg-brand-warm rounded-2xl border-t-4 border-accent shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-brand-dark mb-6 font-bold">
                  03
                </div>
                <h3 className="font-display text-xl font-bold text-brand-dark mb-3">Sostenibilidad Exigida</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Cumpla con creces la demanda corporativa actual de grandes clientes. Un sustrato 100% reciclable, biodegradable y libre de plásticos.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Slide 13: Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-brand-dark via-[#141414] to-brand-dark border-t border-white/10 text-center relative overflow-hidden">
        <div className="honeycomb-bg-dark absolute inset-0 opacity-80 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionTitle light sub="Transforme su portafolio impreso hoy mismo" accentColor={accentColor}>
            Llevando la Impresión a una Nueva Dimensión Estructural
          </SectionTitle>

          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Hable con nuestros especialistas técnicos para solicitar muestras de material, perfiles de corte y cotizaciones personalizadas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/#contacto?producto=Graphicboard"
              className="bg-accent text-brand-dark px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(148,193,31,0.4)] cursor-pointer"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              Contactar un Asesor Comercial
            </Link>

            <a 
              href="/assets/catalogos/GRAPHICBOARDV1.pdf"
              download
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all cursor-pointer rounded"
            >
              Descargar Catálogo Graphicboard (PDF)
            </a>
          </div>
        </div>
      </section>

      <Footer accentColor={accentColor} />
    </main>
  );
}
