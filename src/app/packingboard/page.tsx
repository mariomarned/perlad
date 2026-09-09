'use client';

import { useState, useEffect } from 'react';
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
  FileText,
  ChevronRight,
  ChevronLeft,
  PackageCheck,
  Factory,
  Compass,
  Maximize2,
  X,
  Eye,
  Package
} from "lucide-react";

export default function PackingboardPage() {
  const accentColor = '#94C11F';
  const [activeTab, setActiveTab] = useState<'estibas' | 'refrigeracion' | 'fragil' | 'estructural'>('estibas');
  const [selectedGalleryIdx, setSelectedGalleryIdx] = useState<number>(0);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [galleryCategoryFilter, setGalleryCategoryFilter] = useState<'all' | 'Estiba' | 'Guacal'>('all');

  const estibasGallery = [
    {
      id: 'eg2',
      src: '/assets/productos/Packingboard/EstibasyGuacales/EG2.png',
      title: 'Estiba Estándar de Exportación',
      category: 'Estiba',
      badge: '4 Entradas • Carga Certificada 500 kg',
      specs: 'Plataforma completa de cartón panal de ultra bajo peso. Totalmente compatible con montacargas y estibadores manuales, 100% exenta de normativa fitosanitaria NIMF 15.',
    },
    {
      id: 'eg3',
      src: '/assets/productos/Packingboard/EstibasyGuacales/EG3.png',
      title: 'Estibas en Apilamiento Multinivel',
      category: 'Estiba',
      badge: 'Resistencia Máxima a Compresión',
      specs: 'Excelente capacidad de estiba vertical en bodega y contenedor marítimo sin deformación ni aplastamiento de las pestañas.',
    },
    {
      id: 'eg4',
      src: '/assets/productos/Packingboard/EstibasyGuacales/EG4.png',
      title: 'Guacal / Contenedor Pesado Cerrado',
      category: 'Guacal',
      badge: 'Sustituto Integral de Madera',
      specs: 'Estructura rígida de alta absorción de impacto para envíos marítimos y aéreos sin riesgos de astillas, clavos ni sellos térmicos.',
    },
    {
      id: 'eg5',
      src: '/assets/productos/Packingboard/EstibasyGuacales/EG5.png',
      title: 'Guacal con Tapa Superior Abatible',
      category: 'Guacal',
      badge: 'Carga Superior Ergonómica',
      specs: 'Acceso superior optimizado para maquinaria, motores y ensambles industriales de gran volumen con máxima rigidez en sus 6 caras.',
    },
    {
      id: 'eg6',
      src: '/assets/productos/Packingboard/EstibasyGuacales/EG6.png',
      title: 'Bandeja Gran Formato con Tapa',
      category: 'Guacal',
      badge: 'Perfil Bajo Telescópico',
      specs: 'Diseñado a la medida para piezas planas, tableros arquitectónicos, láminas y repuestos de gran dimensión con soporte perimetral.',
    },
    {
      id: 'eg1',
      src: '/assets/productos/Packingboard/EstibasyGuacales/EG1.jpg',
      title: 'Núcleo y Tacos Estructurales',
      category: 'Estiba',
      badge: 'Estructura Celular Reforzada',
      specs: 'Detalle de los tacos macizos de cartón panal que absorben la vibración en ruta y distribuyen uniformemente las cargas dinámicas.',
    },
  ];

  const activeImage = estibasGallery[selectedGalleryIdx] || estibasGallery[0];

  const handlePrevImage = () => {
    setSelectedGalleryIdx((prev) => (prev === 0 ? estibasGallery.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedGalleryIdx((prev) => (prev === estibasGallery.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  const useCases = {
    estibas: {
      title: "Estibas y Guacales para Exportación Pesada",
      badge: "Hasta 500 kg Certificados",
      image: "/assets/productos/Packingboard/EstibasyGuacales/EG2.png",
      items: [
        "Capacidad de carga certificada para pesos de hasta 500 kilos.",
        "Eliminación total de inspecciones fitosanitarias en aduanas internacionales (sin NIMF 15).",
        "Aumento directo de carga útil en contenedores gracias a la reducción radical de la tara.",
        "Ideal para industria alimenticia, manufactura pesada y repuestos industriales."
      ]
    },
    refrigeracion: {
      title: "Geometrías Complejas & Línea Blanca",
      badge: "Reemplazo Directo de EPS / Icopor",
      image: "/assets/imgcategorias/PackingBoard/PackingBoard1.jpg",
      items: [
        "Reemplazo absoluto del poliestireno expandido (EPS/Icopor) en electrodomésticos y refrigeración industrial.",
        "Diseño troquelado a la medida exacta del producto para encaje perfecto.",
        "Absorción superior de impactos en tránsito para proteger equipos de alto valor.",
        "Ensamblaje ultra rápido en líneas de producción automatizadas o manuales."
      ]
    },
    fragil: {
      title: "Protección Inquebrantable para Mercancía Frágil",
      badge: "Premium Unboxing Sostenible",
      image: "/assets/productos/Captura de pantalla 2026-04-30 a la(s) 21.49.04.png",
      items: [
        "Un solo material actúa como estructura rígida exterior y amortiguador interior simultáneo.",
        "Inmovilización total de botellas de vidrio, licores finos, frascos y cosméticos.",
        "Presentación estética impecable que eleva la percepción de valor del producto.",
        "Eliminación total de plásticos de burbuja y rellenos sueltos en empaques."
      ]
    },
    estructural: {
      title: "Aplicaciones Estructurales y Manufactura",
      badge: "Multiuso Industrial",
      image: "/assets/imgcategorias/rellenodepuertas.jpg",
      items: [
        "Núcleos para Puertas: Otorga volumen y alta resistencia al impacto sin recargar peso en las bisagras.",
        "Separadores de Carga: Protección de tableros de melamina, vidrio y mármol contra rayones y fracturas.",
        "Rellenos para Cajas: Bloqueo eficiente de espacios vacíos para evitar desplazamientos durante el transporte."
      ]
    }
  };

  return (
    <main className="bg-[#0D0D0D] min-h-screen text-white selection:bg-accent selection:text-brand-dark">
      <Header accentColor={accentColor} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden border-b border-white/5">
        <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>
        
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 animate-slide-up">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-3.5 py-1.5 rounded-full">
                  <Hexagon size={10} bg={accentColor} />
                  <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Único Fabricante Nacional</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-white/80 text-[11px] font-semibold">
                  <Award className="w-3.5 h-3.5 text-accent" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-white/80 text-[11px] font-semibold">
                  <Recycle className="w-3.5 h-3.5 text-accent" />
                  <span>100% Reciclable</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.08] tracking-tight">
                Packingboard: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-lime-200">
                  Resistencia Extrema
                </span> <br />
                en Cartón Panal
              </h1>

              {/* Subtitle */}
              <p className="text-white/70 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl font-sans">
                Revolucionando la logística y la protección industrial en Colombia. El reemplazo inteligente y 100% sostenible de la madera y el icopor (EPS), reduciendo costos de flete sin restricciones fitosanitarias.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link 
                  href="/#contacto?producto=Packingboard"
                  className="bg-accent text-brand-dark px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(148,193,31,0.3)] text-center flex items-center justify-center gap-3 cursor-pointer group"
                  style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
                >
                  <span>Solicitar Asesoría de Ingeniería</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a 
                  href="/assets/catalogos/PackingboardV1.pdf"
                  download
                  className="bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-4 font-bold text-sm uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 rounded cursor-pointer"
                >
                  <Download className="w-4 h-4 text-accent" />
                  <span>Descargar Catálogo PDF</span>
                </a>
              </div>
            </div>

            {/* Right Card / Visual Showcase (Multi-Image Composition) */}
            <div className="lg:col-span-5 relative animate-scale-in">
              <div className="relative">
                {/* Resplandor ambiental de fondo */}
                <div 
                  className="absolute -inset-4 rounded-3xl opacity-35 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: `radial-gradient(circle, ${accentColor}50 0%, transparent 70%)` }}
                />

                {/* Tarjeta Principal: PackingBoard1.jpg */}
                <div className="relative aspect-[4/4.2] sm:aspect-[4/3.8] rounded-2xl overflow-hidden border border-accent/25 bg-gradient-to-b from-white/10 to-[#141414] p-2 shadow-2xl group">
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#161616] flex items-center justify-center">
                    <Image 
                      src="/assets/imgcategorias/PackingBoard/PackingBoard1.jpg" 
                      alt="Packingboard Perlad - Protección de Electrodomésticos y Cargas Pesadas" 
                      fill 
                      className="object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]" 
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent pointer-events-none"></div>

                    {/* Insignia Superior */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="inline-flex items-center gap-2 bg-brand-dark/90 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-lg text-white text-xs font-bold shadow-lg">
                        <Hexagon size={10} bg={accentColor} />
                        <span>Protección de Alta Carga</span>
                      </div>
                    </div>

                    {/* Placa Inferior Flotante */}
                    <div className="absolute bottom-4 left-4 right-4 sm:right-32 bg-[#161616]/95 backdrop-blur-md border border-white/10 p-3 rounded-xl flex items-center gap-3 z-10 shadow-xl">
                      <div className="bg-accent/20 text-accent p-2 rounded-lg border border-accent/30 shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] text-accent font-bold uppercase tracking-widest">Reemplazo de EPS y Madera</div>
                        <div className="text-xs font-bold text-white">Empaque Estructural a Medida</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tarjeta Flotante Secundaria: PackingBoard2.png (Esquineros de Protección) */}
                <div className="absolute -bottom-5 -right-3 sm:-right-5 w-40 sm:w-48 bg-[#181818]/95 backdrop-blur-md border border-accent/40 p-2.5 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.85)] z-20 group hover:border-accent transition-all duration-300">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 flex items-center justify-center p-1.5 mb-2">
                    <Image 
                      src="/assets/imgcategorias/PackingBoard/PackingBoard2.png" 
                      alt="Esquineros y Protección de Esquinas en Cartón Panal" 
                      fill 
                      className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="px-1 pb-0.5">
                    <div className="text-[9px] sm:text-[10px] text-accent font-bold uppercase tracking-wider flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 shrink-0" />
                      <span>Esquineros Troquelados</span>
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-white mt-0.5">Amortiguación de Impacto</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Slide 2 & 3: The Problem vs Perlad Solution (3 Pillars) */}
      <section className="py-24 px-6 relative bg-gradient-to-b from-[#0D0D0D] via-[#121212] to-[#0D0D0D]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle light sub="Por qué la logística moderna exige abandonar el empaque obsoleto" accentColor={accentColor}>
            El Peso Oculto de la Logística Tradicional
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
            
            {/* Problem: Poliestireno / EPS */}
            <div className="bg-red-950/20 border border-red-500/20 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-6">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Poliestireno (EPS / Icopor)</h3>
                <ul className="space-y-3 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Alto impacto contaminante ambiental.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Nula biodegradabilidad (cientos de años).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>Ocupación excesiva de volumen inútil en bodega.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-red-500/20 text-xs font-semibold text-red-300">
                Pasivo Ambiental Corporativo
              </div>
            </div>

            {/* Problem: Madera */}
            <div className="bg-amber-950/20 border border-amber-500/20 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-6">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Madera Tradicional</h3>
                <ul className="space-y-3 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Peso muerto extremo que infla costos de flete.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Exige tratamientos fitosanitarios (NIMF 15).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>Retenciones y trabas en aduanas de exportación.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-amber-500/20 text-xs font-semibold text-amber-300">
                Elevada Tara y Restricciones
              </div>
            </div>

            {/* Solution: Cartón Panal Perlad */}
            <div className="bg-accent/10 border border-accent/40 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between shadow-[0_0_40px_rgba(148,193,31,0.15)] md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 right-0 bg-accent text-brand-dark font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-bl-xl">
                Solución Perlad
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent mb-6">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Packingboard Perlad</h3>
                <ul className="space-y-3 text-white/80 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>95% más ligero que la madera de igual volumen.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>Sin requerimiento fitosanitario para exportación.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>100% Reciclable y Biodegradable (ESG).</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-accent/30 text-xs font-bold text-accent">
                Eficiencia Logística Garantizada
              </div>
            </div>

          </div>

          {/* Banner 3 Pillars */}
          <div className="mt-16 bg-[#161616] border border-white/10 rounded-2xl p-8 lg:p-12 grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 border border-accent/30 rounded-xl text-accent">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Ingeniería de Empaque</h4>
                <p className="text-white/60 text-xs leading-relaxed">Reemplazo directo de materiales contaminantes con diseños troquelados a medida.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 border border-accent/30 rounded-xl text-accent">
                <Leaf className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Economía Circular</h4>
                <p className="text-white/60 text-xs leading-relaxed">Integración total e inmediata a las metas de sostenibilidad corporativa ESG.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 border border-accent/30 rounded-xl text-accent">
                <Factory className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Producción Local</h4>
                <p className="text-white/60 text-xs leading-relaxed">Agilidad de suministro nacional sin depender de importaciones ni fletes oceánicos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Anatomía de la Resistencia Estructural */}
      <section className="py-24 px-6 bg-white text-brand-dark relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionTitle sub="La ciencia detrás de la dispersión de cargas verticales y máxima absorción de impactos" accentColor={accentColor}>
            Anatomía de la Resistencia Estructural
          </SectionTitle>

          <div className="grid lg:grid-cols-12 gap-12 items-center mt-16">
            
            {/* Tech Image Visual */}
            <div className="lg:col-span-6 relative aspect-[3/2] bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl group">
              <Image 
                src="/assets/imgcategorias/estructuraHoneycomb.png" 
                alt="Estructura Hexagonal Cartón Panal Honeycomb" 
                fill 
                className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Technical Spec Grid */}
            <div className="lg:col-span-6 grid sm:grid-cols-2 gap-6">
              
              <div className="p-6 bg-brand-warm rounded-xl border-l-4 border-accent shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Layers className="w-5 h-5 text-brand-dark" />
                </div>
                <h4 className="font-bold text-brand-dark text-lg mb-2">Estructura Hexagonal</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Dispersa la compresión vertical garantizando rigidez extrema contra apilamiento pesado.
                </p>
              </div>

              <div className="p-6 bg-brand-warm rounded-xl border-l-4 border-accent shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Zap className="w-5 h-5 text-brand-dark" />
                </div>
                <h4 className="font-bold text-brand-dark text-lg mb-2">Ligereza Absoluta</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  <span className="font-extrabold text-brand-dark">95% más liviano</span> que la madera de volumen equivalente.
                </p>
              </div>

              <div className="p-6 bg-brand-warm rounded-xl border-l-4 border-accent shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Box className="w-5 h-5 text-brand-dark" />
                </div>
                <h4 className="font-bold text-brand-dark text-lg mb-2">Calibre Adaptable</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Grosores configurables desde <span className="font-extrabold text-brand-dark">6 mm hasta 70 mm</span> de espesor.
                </p>
              </div>

              <div className="p-6 bg-brand-warm rounded-xl border-l-4 border-accent shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Truck className="w-5 h-5 text-brand-dark" />
                </div>
                <h4 className="font-bold text-brand-dark text-lg mb-2">Dimensiones Industriales</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hasta <span className="font-extrabold text-brand-dark">3000 mm de largo x 1000 mm</span> de ancho.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Slide 5: Matriz de Diagnóstico de Materiales (Comparison Table) */}
      <section className="py-24 px-6 bg-[#0D0D0D] relative">
        <div className="max-w-6xl mx-auto">
          <SectionTitle light sub="Comparativa frente a las alternativas tradicionales del mercado" accentColor={accentColor}>
            Matriz de Diagnóstico de Materiales
          </SectionTitle>

          <div className="mt-14 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-white/50 text-xs uppercase tracking-widest">
                  <th className="py-5 px-6 font-bold">Criterio Logístico</th>
                  <th className="py-5 px-6 font-bold bg-accent/10 text-accent border-x border-accent/20 rounded-t-xl">
                    Cartón Panal Perlad
                  </th>
                  <th className="py-5 px-6 font-bold">Madera</th>
                  <th className="py-5 px-6 font-bold">EPS (Icopor)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                
                <tr>
                  <td className="py-5 px-6 font-semibold text-white">Peso & Tara</td>
                  <td className="py-5 px-6 font-bold text-accent bg-accent/10 border-x border-accent/20">
                    Extremadamente Ligero
                  </td>
                  <td className="py-5 px-6 text-red-400">Pesado (Aumenta Fletes)</td>
                  <td className="py-5 px-6 text-white/70">Ligero</td>
                </tr>

                <tr>
                  <td className="py-5 px-6 font-semibold text-white">Carga para Exportación</td>
                  <td className="py-5 px-6 font-bold text-accent bg-accent/10 border-x border-accent/20">
                    Aumento de carga por contenedor
                  </td>
                  <td className="py-5 px-6 text-red-400">Pérdida de volumen y peso útil</td>
                  <td className="py-5 px-6 text-amber-400">Pérdida de volumen por abultamiento</td>
                </tr>

                <tr>
                  <td className="py-5 px-6 font-semibold text-white">Fitosanitario (Exportación)</td>
                  <td className="py-5 px-6 font-bold text-accent bg-accent/10 border-x border-accent/20 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>No requiere</span>
                  </td>
                  <td className="py-5 px-6 text-red-400">Exige tratamiento riguroso (NIMF 15)</td>
                  <td className="py-5 px-6 text-white/70">No requiere</td>
                </tr>

                <tr>
                  <td className="py-5 px-6 font-semibold text-white">Impacto Ecológico / ESG</td>
                  <td className="py-5 px-6 font-bold text-accent bg-accent/10 border-x border-accent/20 rounded-b-xl">
                    100% Biodegradable / Reciclable
                  </td>
                  <td className="py-5 px-6 text-amber-400">Renovable pero pesado</td>
                  <td className="py-5 px-6 text-red-400">Contaminante crítico no biodegradable</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Slides 6-9: Interactive Use Cases Showcase */}
      <section className="py-24 px-6 bg-[#121212] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionTitle light sub="Diseños de empaque adaptados a sectores clave de la industria" accentColor={accentColor}>
            Soluciones Especializadas por Aplicación
          </SectionTitle>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-10 mb-12">
            {[
              { id: 'estibas', label: 'Estibas y Guacales (Exportación)' },
              { id: 'refrigeracion', label: 'Línea Blanca & Refrigeración' },
              { id: 'fragil', label: 'Mercancía Frágil (Premium)' },
              { id: 'estructural', label: 'Aplicaciones Estructurales' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-accent text-brand-dark shadow-[0_0_20px_rgba(148,193,31,0.4)]'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Tab Content Card */}
          <div className="bg-[#181818] border border-white/10 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6">
                <div className="inline-block bg-accent/20 border border-accent/40 text-accent text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  {useCases[activeTab].badge}
                </div>
                <h3 className="font-display text-2xl md:text-4xl font-bold text-white mb-6">
                  {useCases[activeTab].title}
                </h3>
                
                <ul className="space-y-4">
                  {useCases[activeTab].items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80 text-sm sm:text-base leading-relaxed">
                      <Hexagon size={14} bg={accentColor} className="shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    href="/#contacto?producto=Packingboard"
                    className="inline-flex items-center gap-2 text-accent hover:text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    <span>Solicitar diseño para este sector</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  {activeTab === 'estibas' && (
                    <span className="text-white/50 text-xs font-mono">
                      6 modelos en catálogo
                    </span>
                  )}
                </div>
              </div>

              <div className="lg:col-span-6">
                {activeTab === 'estibas' ? (
                  <div className="relative">
                    {/* Ambient Glow */}
                    <div 
                      className="absolute -inset-2 rounded-3xl opacity-25 blur-xl pointer-events-none"
                      style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
                    />

                    {/* Main Gallery Card */}
                    <div className="relative bg-[#141414] border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl overflow-hidden">
                      
                      {/* Sub-Filters & Counter */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-lg">
                          {[
                            { id: 'all', label: 'Todos (6)' },
                            { id: 'Estiba', label: 'Estibas (3)' },
                            { id: 'Guacal', label: 'Guacales (3)' }
                          ].map((f) => (
                            <button
                              key={f.id}
                              type="button"
                              onClick={() => {
                                setGalleryCategoryFilter(f.id as any);
                                if (f.id === 'Estiba' && !['eg2', 'eg3', 'eg1'].includes(activeImage.id)) {
                                  setSelectedGalleryIdx(0);
                                } else if (f.id === 'Guacal' && !['eg4', 'eg5', 'eg6'].includes(activeImage.id)) {
                                  setSelectedGalleryIdx(2);
                                }
                              }}
                              className={`px-2.5 py-1 text-[11px] font-semibold rounded-md transition-all cursor-pointer ${
                                galleryCategoryFilter === f.id
                                  ? 'bg-accent text-brand-dark shadow-sm'
                                  : 'text-white/60 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {f.label}
                            </button>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono text-white/60 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                            {selectedGalleryIdx + 1} / {estibasGallery.length}
                          </span>
                          <button
                            type="button"
                            onClick={() => setLightboxOpen(true)}
                            className="p-1.5 bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 hover:text-white rounded-md transition-all cursor-pointer"
                            title="Ver en pantalla completa"
                            aria-label="Ver en pantalla completa"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Studio Showcase Stage */}
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-b from-[#FAFBFD] via-[#F4F5F7] to-[#E5E7EB] border border-black/10 shadow-inner group">
                        
                        {/* Category Tag */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="inline-flex items-center gap-1.5 bg-brand-dark/90 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-full text-[10px] font-bold text-white shadow-md">
                            <Hexagon size={8} bg={accentColor} />
                            <span>{activeImage.category}</span>
                          </span>
                        </div>

                        {/* Interactive Main Image */}
                        <div 
                          onClick={() => setLightboxOpen(true)}
                          className="relative w-full h-full cursor-zoom-in flex items-center justify-center p-3 sm:p-4"
                        >
                          <Image
                            key={activeImage.src}
                            src={activeImage.src}
                            alt={activeImage.title}
                            fill
                            className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority
                          />
                        </div>

                        {/* Navigation Arrows */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePrevImage();
                          }}
                          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-110 transition-all z-10 cursor-pointer shadow-lg"
                          aria-label="Anterior imagen"
                        >
                          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextImage();
                          }}
                          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center opacity-85 hover:opacity-100 hover:scale-110 transition-all z-10 cursor-pointer shadow-lg"
                          aria-label="Siguiente imagen"
                        >
                          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>

                        {/* Click to zoom overlay badge on hover */}
                        <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          <span className="inline-flex items-center gap-1 bg-black/75 backdrop-blur-md text-white text-[10px] font-medium px-2 py-0.5 rounded shadow">
                            <Eye className="w-3 h-3 text-accent" /> Clic para ampliar
                          </span>
                        </div>
                      </div>

                      {/* Technical Specs & Title */}
                      <div className="mt-3.5 p-3 rounded-xl bg-white/[0.04] border border-white/10">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                          <h4 className="text-white font-bold text-sm">
                            {activeImage.title}
                          </h4>
                          <span className="text-[10px] font-bold text-accent bg-accent/10 border border-accent/30 px-2 py-0.5 rounded-full">
                            {activeImage.badge}
                          </span>
                        </div>
                        <p className="text-white/70 text-xs leading-relaxed">
                          {activeImage.specs}
                        </p>
                      </div>

                      {/* Thumbnails Row */}
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <div className="grid grid-cols-6 gap-2">
                          {estibasGallery.map((item, index) => {
                            const isSelected = selectedGalleryIdx === index;
                            const isDimmed = galleryCategoryFilter !== 'all' && 
                              (galleryCategoryFilter === 'Estiba' 
                                ? !['eg2', 'eg3', 'eg1'].includes(item.id) 
                                : !['eg4', 'eg5', 'eg6'].includes(item.id));

                            return (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => setSelectedGalleryIdx(index)}
                                className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-white p-1 transition-all duration-200 cursor-pointer ${
                                  isSelected
                                    ? 'ring-2 ring-accent border-accent scale-105 shadow-[0_0_12px_rgba(148,193,31,0.5)] z-10'
                                    : isDimmed
                                    ? 'opacity-30 border border-white/5 hover:opacity-70'
                                    : 'border border-white/15 opacity-70 hover:opacity-100 hover:border-white/40'
                                }`}
                                title={item.title}
                                aria-label={`Ver ${item.title}`}
                              >
                                <Image
                                  src={item.src}
                                  alt={item.title}
                                  fill
                                  className="object-contain p-0.5"
                                  sizes="80px"
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-white/10 bg-black/40">
                    <Image
                      src={useCases[activeTab].image}
                      alt={useCases[activeTab].title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal for Estibas & Guacales Gallery */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-[#141414] border border-white/20 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#181818]">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/40 text-accent text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                  <Hexagon size={10} bg={accentColor} />
                  <span>{activeImage.category}</span>
                </span>
                <h3 className="text-white font-bold text-base sm:text-lg">
                  {activeImage.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-white/60 bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  {selectedGalleryIdx + 1} / {estibasGallery.length}
                </span>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-white transition-colors cursor-pointer"
                  aria-label="Cerrar vista ampliada"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Stage in Lightbox */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-gradient-to-b from-[#FAFBFD] via-[#F4F5F7] to-[#E5E7EB] flex items-center justify-center p-6 sm:p-10">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                className="object-contain p-6 sm:p-10"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />

              {/* Navigation Controls in Modal */}
              <button
                type="button"
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xl hover:scale-110"
                aria-label="Anterior imagen"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center transition-all cursor-pointer shadow-xl hover:scale-110"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Specs & Thumbnails in Lightbox */}
            <div className="p-6 bg-[#161616] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                  {activeImage.badge}
                </div>
                <p className="text-white/70 text-xs sm:text-sm max-w-xl">
                  {activeImage.specs}
                </p>
              </div>

              {/* Mini thumbnails in modal */}
              <div className="flex items-center gap-2 self-center sm:self-auto">
                {estibasGallery.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedGalleryIdx(index)}
                    className={`w-12 h-10 rounded-md overflow-hidden bg-white p-0.5 relative transition-all cursor-pointer ${
                      selectedGalleryIdx === index
                        ? 'ring-2 ring-accent border-accent scale-105'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slide 11: Economía Circular (ESG Cycle) */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0D0D0D] to-[#141414] relative">
        <div className="max-w-7xl mx-auto">
          <SectionTitle light sub="100% Reciclable y 100% Biodegradable" accentColor={accentColor}>
            El Ciclo de la Economía Circular
          </SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            
            {[
              { step: "1", title: "Papel Reciclado", desc: "Materia prima sostenible proveniente de fuentes recicladas verificadas." },
              { step: "2", title: "Manufactura Local", desc: "Transformación en planta Perlad en Colombia con procesos limpios." },
              { step: "3", title: "Uso Industrial", desc: "Protección rigurosa y transporte de carga pesada nacional e internacional." },
              { step: "4", title: "Reciclaje Total", desc: "Reintegración simple a la cadena de papel sin dejar residuos contaminantes." }
            ].map((c, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/10 rounded-xl p-6 relative flex flex-col justify-between group hover:border-accent/50 transition-colors">
                <div>
                  <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 text-accent font-display font-extrabold flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-brand-dark transition-colors">
                    {c.step}
                  </div>
                  <h4 className="font-bold text-white text-lg mb-2">{c.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed">{c.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/5 text-[10px] text-accent font-mono uppercase">
                  Ciclo Cerrado Sostenible
                </div>
              </div>
            ))}

          </div>

          <div className="mt-12 bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <p className="text-white/90 text-sm md:text-base font-medium leading-relaxed">
              &quot;Al adoptar el cartón panal de Perlad, las empresas transforman un pasivo ambiental (disposición de plásticos y maderas) en un activo estratégico para sus reportes de sostenibilidad corporativa (ESG).&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Slide 12: Calidad Certificada & Garantía */}
      <section className="py-20 px-6 bg-white text-brand-dark">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Calidad Garantizada
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-6">
              Calidad Certificada, Agilidad Local
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Operamos bajo los más altos estándares globales para garantizar que cada panel proteja su inversión en logística internacional.
            </p>

            <div className="space-y-4">
              <div className="p-4 bg-brand-warm rounded-lg flex items-start gap-4 border border-gray-200">
                <ShieldCheck className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">Certificación ISO 9001:2015 (SISTEMA-COL/PSP-Q3722)</h4>
                  <p className="text-gray-500 text-xs">Gestión de calidad internacional verificada en diseño, producción y comercialización.</p>
                </div>
              </div>

              <div className="p-4 bg-brand-warm rounded-lg flex items-start gap-4 border border-gray-200">
                <PackageCheck className="w-6 h-6 text-accent shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">Infraestructura para Escalar</h4>
                  <p className="text-gray-500 text-xs">Capacidad industrial garantizada para atender las demandas de grandes volúmenes de exportación.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-brand-dark text-white p-8 rounded-2xl border border-white/10 shadow-2xl">
            <div className="text-accent text-xs font-bold uppercase tracking-widest mb-2">Reporte de Especificación</div>
            <h3 className="text-2xl font-bold mb-4">Certificación de Resistencia</h3>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Norma de Gestión:</span>
                <span className="font-bold text-white">ISO 9001:2015</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Certificado No:</span>
                <span className="font-bold text-white">SISTEMA-COL/PSP-Q3722</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Carga Máxima Estibas:</span>
                <span className="font-bold text-accent">Hasta 500 kg Certificados</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Material:</span>
                <span className="font-bold text-white">100% Cartón Panal (Honeycomb)</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Slide 13: Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-brand-dark via-[#141414] to-brand-dark border-t border-white/10 text-center relative overflow-hidden">
        <div className="honeycomb-bg-dark absolute inset-0 opacity-80 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionTitle light sub="Estandarice sus procesos con la tecnología que impulsa la logística global" accentColor={accentColor}>
            Lidere la Revolución del Empaque Industrial
          </SectionTitle>

          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Diseñemos juntos la arquitectura de su próximo empaque. Contáctenos hoy para recibir muestras técnicas y diagnósticos de ahorro en fletes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/#contacto?producto=Packingboard"
              className="bg-accent text-brand-dark px-10 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(148,193,31,0.4)] cursor-pointer"
              style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
            >
              Contactar Asesoría de Ingeniería
            </Link>

            <a 
              href="/assets/catalogos/PackingboardV1.pdf"
              download
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 font-bold text-sm uppercase tracking-wider transition-all cursor-pointer rounded"
            >
              Descargar Catálogo Completo (PDF)
            </a>
          </div>
        </div>
      </section>

      <Footer accentColor={accentColor} />
    </main>
  );
}

