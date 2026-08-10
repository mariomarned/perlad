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
  Zap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Download,
  Sparkles,
  Layers,
  Box,
  Scale,
  Flame,
  Volume2,
  Wrench,
  Package,
  Ruler,
  Cpu,
  Lock,
  Feather,
  Phone,
  Mail,
  Check,
  Building,
  ChevronRight,
  Shield,
  FileCheck2,
  Video,
  MapPin
} from "lucide-react";

export default function RellenoPuertasPage() {
  const accentColor = '#94C11F';

  // Calculator State for Door Manufacturers
  const [doorQuantity, setDoorQuantity] = useState<number>(100);
  const [doorHeight, setDoorHeight] = useState<number>(2.20);
  
  // Consumption logic: ~1.4kg average per standard 2.20m door
  const estimatedWeightKg = Math.round((doorQuantity * 1.4 * (doorHeight / 2.20)) * 10) / 10;
  const estimatedTons = Math.round((estimatedWeightKg / 1000) * 100) / 100;

  return (
    <main className="bg-[#0A0A0A] min-h-screen text-white selection:bg-accent selection:text-brand-dark font-sans">
      <Header accentColor={accentColor} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden border-b border-white/10">
        {/* Honeycomb pattern overlay */}
        <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-accent/15 blur-[140px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 animate-slide-up">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(148,193,31,0.2)]">
                  <Hexagon size={10} bg={accentColor} />
                  <span className="text-accent text-[11px] font-bold uppercase tracking-wider">Sector Metalmecánico & Constructor</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 px-3.5 py-1.5 rounded-full text-white/90 text-[11px] font-semibold backdrop-blur-md">
                  <Flame className="w-3.5 h-3.5 text-accent" />
                  <span>Apto para Puertas Cortafuego</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/15 px-3.5 py-1.5 rounded-full text-white/90 text-[11px] font-semibold backdrop-blur-md">
                  <Award className="w-3.5 h-3.5 text-accent" />
                  <span>6+ Años Proveedor FORTIS</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.08] tracking-tight text-white">
                El Futuro del Relleno para <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-lime-200">
                  Puertas Metálicas
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-white/80 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl font-sans">
                Soluciones eficientes, ligeras y sostenibles para fabricantes de puertas en Colombia. Desarrollamos núcleos estructurales de cartón panal diseñados para sustituir rellenos tradicionales, ofreciendo una resistencia a la compresión excepcional con una fracción del peso.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link 
                  href="/#contacto?producto=Relleno+de+puertas"
                  className="bg-accent text-brand-dark px-8 py-4 font-extrabold text-sm uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(148,193,31,0.35)] text-center flex items-center justify-center gap-3 cursor-pointer group"
                  style={{ clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)' }}
                >
                  <span>Solicitar Muestras Físicas</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <a 
                  href="/assets/catalogos/RELLENO DE PUERTASV1.pdf"
                  download
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-4 font-bold text-sm uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 rounded-lg backdrop-blur-md cursor-pointer"
                >
                  <Download className="w-4 h-4 text-accent" />
                  <span>Ficha Técnica PDF</span>
                </a>
              </div>
            </div>

            {/* Visual Showcase Box */}
            <div className="lg:col-span-5 relative animate-scale-in">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-accent/30 bg-gradient-to-b from-white/10 via-[#141414] to-[#0A0A0A] p-3 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#121212] flex items-center justify-center">
                  <Image 
                    src="/assets/imgcategorias/rellenodepuertas.png" 
                    alt="Núcleo de Cartón Panal Perlad para Puertas Metálicas" 
                    fill 
                    className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80 pointer-events-none"></div>
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#161616]/95 backdrop-blur-md border border-accent/40 p-4 rounded-xl flex items-center justify-between shadow-2xl">
                    <div>
                      <div className="text-[11px] text-accent font-extrabold uppercase tracking-widest">Núcleo Estructural Celda Tipo B</div>
                      <div className="text-xs sm:text-sm font-bold text-white mt-0.5">Espesor Operativo: 20 mm - 50 mm</div>
                    </div>
                    <div className="bg-accent/20 text-accent p-2 rounded-lg border border-accent/30 flex-shrink-0">
                      <Lock className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card 1 */}
              <div className="absolute -top-6 -left-6 bg-[#181818]/95 backdrop-blur-md border border-accent/30 p-4 rounded-xl shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-accent tracking-wider">Enrutamiento Limpio</div>
                  <div className="text-xs font-extrabold text-white">Cerraduras Inteligentes</div>
                </div>
              </div>

              {/* Floating Stat Card 2 */}
              <div className="absolute -bottom-6 -right-6 bg-[#181818]/95 backdrop-blur-md border border-accent/30 p-4 rounded-xl shadow-2xl hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wider">Adherencia Total</div>
                  <div className="text-xs font-extrabold text-white">Paredes Metálicas</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Slide 4: Especificaciones Técnicas (Celda Tipo B) */}
      <section className="py-24 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <SectionTitle 
            sub="Rendimiento y geometría certificada para la industria manufacturera" 
            light
            accentColor={accentColor} 
          >
            Especificaciones Técnicas (Celda Tipo B)
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            
            {/* Spec Card 1 */}
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-accent/15 border border-accent/40 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(148,193,31,0.2)]">
                <Hexagon size={26} bg={accentColor} />
              </div>
              <div className="text-3xl font-black text-accent mb-1">18 - 20 mm</div>
              <div className="text-xs text-white/90 font-bold uppercase tracking-wider mb-3">Diámetro de Celda</div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Geometría celular hexagonal calibrada para brindar máxima resistencia a la compresión sin vencer la lámina metálica.
              </p>
            </div>

            {/* Spec Card 2 */}
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-accent/15 border border-accent/40 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(148,193,31,0.2)]">
                <Ruler className="w-7 h-7" />
              </div>
              <div className="text-3xl font-black text-accent mb-1">20 - 50 mm</div>
              <div className="text-xs text-white/90 font-bold uppercase tracking-wider mb-3">Rango de Espesor Operativo</div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Formato totalmente personalizable según el calibre interior exacto de su hoja metálica o puerta cortafuego.
              </p>
            </div>

            {/* Spec Card 3 */}
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-accent/15 border border-accent/40 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(148,193,31,0.2)]">
                <Scale className="w-7 h-7" />
              </div>
              <div className="text-3xl font-black text-accent mb-1">88 Gramos</div>
              <div className="text-xs text-white/90 font-bold uppercase tracking-wider mb-3">Papel Kraft Fibra Virgen</div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Material de fibra virgen de alta resistencia a la tensión, garantizando rigidez estructural de largo plazo.
              </p>
            </div>

            {/* Spec Card 4 */}
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-14 h-14 rounded-xl bg-accent/15 border border-accent/40 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(148,193,31,0.2)]">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="text-3xl font-black text-accent mb-1">Adhesivo PVA</div>
              <div className="text-xs text-white/90 font-bold uppercase tracking-wider mb-3">Pegamento Base Agua</div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                100% libre de compuestos tóxicos o solventes sintéticos, garantizando cero emanaciones y seguridad operacional.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Slide 5: La Ventaja Competitiva - Instalación Inteligente */}
      <section className="py-24 bg-gradient-to-r from-brand-dark via-[#131B0E] to-brand-dark border-y border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 px-3.5 py-1.5 rounded-full">
                <Cpu className="w-3.5 h-3.5 text-accent" />
                <span className="text-accent text-[11px] font-extrabold uppercase tracking-wider">La Ventaja Competitiva</span>
              </div>

              <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Instalación Inteligente & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-lime-200">
                  Enrutamiento de Cableados
                </span>
              </h2>

              {/* Highlighted Banner Box matching Presentation Slide 5 */}
              <div className="p-5 rounded-2xl bg-accent text-brand-dark font-extrabold text-base sm:text-lg shadow-[0_0_30px_rgba(148,193,31,0.3)]">
                Facilidad superior para la instalación de componentes electrónicos y cerraduras inteligentes.
              </div>

              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-sans">
                A diferencia del poliuretano inyectado (EPS/PU) que bloquea por completo la hoja metálica, la estructura celular del cartón panal permite enrutar cableados internos de forma natural y rápida, eliminando perforaciones destructivas y reduciendo drásticamente los tiempos de ensamblaje.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-2 rounded-lg bg-accent/20 text-accent mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Cero perforaciones destructivas</h4>
                    <p className="text-white/60 text-xs sm:text-sm mt-1">Los cables avanzan sin obstáculos a través de las celdas hexagonales sin romper el relleno.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="p-2 rounded-lg bg-accent/20 text-accent mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Optimización del tiempo de ensamble</h4>
                    <p className="text-white/60 text-xs sm:text-sm mt-1">Permite armar líneas de puertas biométricas, de acceso restringido y electromecánicas a mayor velocidad.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Smart Lock Cable Routing Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-accent/40 bg-[#161616] p-3 shadow-2xl group">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#101010] flex items-center justify-center">
                  <Image 
                    src="/assets/imgcategorias/rellenodepuertas.png" 
                    alt="Instalación de cerraduras inteligentes con núcleo de cartón panal" 
                    fill 
                    className="object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90"></div>
                  
                  {/* Lock Wire Glow Overlay Representation */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 pointer-events-none">
                    <div className="self-end bg-accent/20 border border-accent/40 text-accent text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                      Enrutamiento sin Barreras
                    </div>
                    <div className="bg-[#161616]/95 backdrop-blur-md border border-accent/40 p-4 rounded-xl">
                      <div className="flex items-center gap-2 text-accent font-bold text-sm mb-1">
                        <Lock className="w-4 h-4" />
                        <span>Cerraduras Biométricas & Digitales</span>
                      </div>
                      <p className="text-xs text-white/70">
                        Paso natural de conexiones eléctricas de 12V/24V a través de la retícula hexagonal.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Slide 6: Valor Agregado para su Producto Final */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <SectionTitle 
            sub="Propiedades mecánicas y físicas que potencian el valor comercial de su marca" 
            light
            accentColor={accentColor} 
          >
            Valor Agregado para su Producto Final
          </SectionTitle>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            
            {/* Value Card 1 */}
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-accent/15 border-2 border-accent/40 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_25px_rgba(148,193,31,0.2)]">
                <Box className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Estabilidad Dimensional</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                No se expande ni se contrae con los cambios bruscos de temperatura o humedad exterior, manteniendo la hoja de la puerta perfectamente plana.
              </p>
              <div className="text-xs text-accent font-bold flex items-center gap-2 border-t border-white/10 pt-4">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Cero alabeos o abombamientos metálicos</span>
              </div>
            </div>

            {/* Value Card 2 */}
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-accent/15 border-2 border-accent/40 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_25px_rgba(148,193,31,0.2)]">
                <Feather className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Ligereza Estructural</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Reduce el peso total de la hoja conservando resistencia al impacto. Facilita el transporte, la instalación en obra y prolonga la vida útil de los herrajes.
              </p>
              <div className="text-xs text-accent font-bold flex items-center gap-2 border-t border-white/10 pt-4">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Menor desgaste en bisagras y marcos</span>
              </div>
            </div>

            {/* Value Card 3 */}
            <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 group hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-accent/15 border-2 border-accent/40 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform shadow-[0_0_25px_rgba(148,193,31,0.2)]">
                <Volume2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Propiedades Termoacústicas</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Las cámaras de aire hexagonales cerradas actúan como un aislante térmico y acústico natural contra el ruido ambiente y la radiación de calor.
              </p>
              <div className="text-xs text-accent font-bold flex items-center gap-2 border-t border-white/10 pt-4">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Amortiguación acústica de alto confort</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Slide 7: Éxito Comprobado en la Industria (Fortis Highlight) */}
      <section className="py-24 bg-white/[0.02] border-y border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-accent/20 via-emerald-500/10 to-accent/20 border-2 border-accent/50 shadow-[0_0_60px_rgba(148,193,31,0.2)] overflow-hidden">
            <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-6">
                <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 px-4 py-1.5 rounded-full text-accent text-xs font-extrabold uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Éxito Comprobado en la Industria</span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                  Más de 6 Años de Experiencia Suministrando en Colombia
                </h3>

                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  Desarrollamos soluciones para aplicaciones de alta exigencia en puertas metálicas de seguridad y uso pesado.
                </p>

                {/* Highlighted Fortis Box from Slide 7 */}
                <div className="p-6 sm:p-8 rounded-2xl bg-black/60 border-2 border-accent/60 shadow-xl backdrop-blur-md">
                  <div className="text-accent font-extrabold text-xl sm:text-2xl mb-2">Proveedor de Confianza para FORTIS</div>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                    Integración exitosa en la fabricación de puertas metálicas generales y <strong>puertas cortafuego certificadas</strong>, garantizando adherencia perfecta a las paredes metálicas interiores y resistencia uniforme.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-4 text-center">
                <div className="inline-block p-8 rounded-3xl bg-[#141414]/90 border border-accent/40 text-center shadow-2xl backdrop-blur-md">
                  <div className="text-6xl font-black text-accent mb-2">6+ Años</div>
                  <div className="text-xs uppercase tracking-widest text-white/80 font-extrabold">Trayectoria Industrial</div>
                  <div className="text-xs text-white/50 mt-3 max-w-[200px] mx-auto">Suministro garantizado para fabricantes a nivel nacional</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Slide 8: Información Comercial y Logística (Matching Slide 8 Cards Layout) */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <SectionTitle 
            sub="Parámetros clave de procuraduría para su planta de producción" 
            light
            accentColor={accentColor} 
          >
            Información Comercial y Logística
          </SectionTitle>

          <div className="grid lg:grid-cols-3 gap-8 mt-16">
            
            {/* Slide 8 Item 1: MOQ */}
            <div className="bg-[#141414] border border-white/15 rounded-2xl overflow-hidden flex flex-col hover:border-accent/50 transition-all shadow-xl">
              <div className="bg-accent text-brand-dark p-6 flex items-center justify-between">
                <div>
                  <div className="text-4xl font-black tracking-tight">1 Tonelada</div>
                  <div className="text-xs uppercase font-extrabold tracking-wider mt-1 opacity-90">Pedido Mínimo (MOQ)</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-dark/15 flex items-center justify-center text-brand-dark">
                  <Package className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-white text-base mb-2">Procuraduría Industrial</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Cantidad de pedido mínimo configurada para optimizar logística de transporte y abastecimiento continuo en planta.
                </p>
              </div>
            </div>

            {/* Slide 8 Item 2: Width */}
            <div className="bg-[#141414] border border-white/15 rounded-2xl overflow-hidden flex flex-col hover:border-accent/50 transition-all shadow-xl">
              <div className="bg-accent text-brand-dark p-6 flex items-center justify-between">
                <div>
                  <div className="text-4xl font-black tracking-tight">1.50 Metros</div>
                  <div className="text-xs uppercase font-extrabold tracking-wider mt-1 opacity-90">Ancho de Formato</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-dark/15 flex items-center justify-center text-brand-dark">
                  <Ruler className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-white text-base mb-2">Formato Sin Estirar</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  Ancho del formato de material antes de estirar, adaptable a las guías de corte estándar en mesas de trabajo.
                </p>
              </div>
            </div>

            {/* Slide 8 Item 3: Consumption */}
            <div className="bg-[#141414] border border-white/15 rounded-2xl overflow-hidden flex flex-col hover:border-accent/50 transition-all shadow-xl">
              <div className="bg-accent text-brand-dark p-6 flex items-center justify-between">
                <div>
                  <div className="text-4xl font-black tracking-tight">1.200 a 1.600 g</div>
                  <div className="text-xs uppercase font-extrabold tracking-wider mt-1 opacity-90">Consumo por Puerta</div>
                </div>
                <div className="w-12 h-12 rounded-xl bg-brand-dark/15 flex items-center justify-center text-brand-dark">
                  <Scale className="w-6 h-6" />
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-white text-base mb-2">Puerta Estándar (2.20 m)</h4>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                  El consumo promedio por hoja de 2.20 m de altura oscila entre 1.200 y 1.600 gramos, optimizando el costo directo por unidad.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Calculator for Door Manufacturers */}
      <section className="py-24 bg-white/[0.02] border-t border-white/10 relative">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="bg-gradient-to-b from-white/10 to-white/5 border-2 border-accent/40 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.6)]">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 px-3.5 py-1.5 rounded-full text-accent text-xs font-extrabold uppercase tracking-wider mb-3">
                <Wrench className="w-3.5 h-3.5" />
                <span>Simulador para Fabricantes</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white">Calculadora de Requerimiento de Planta</h3>
              <p className="text-white/70 text-sm sm:text-base mt-2">Estime el consumo exacto de material para su lote de fabricación.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase text-white/80 tracking-wider flex items-center gap-2">
                  <Building className="w-4 h-4 text-accent" />
                  <span>Cantidad de Puertas a Fabricar</span>
                </label>
                <input 
                  type="number" 
                  min="10" 
                  max="10000" 
                  value={doorQuantity}
                  onChange={(e) => setDoorQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                  className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3.5 text-white font-black text-xl focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold uppercase text-white/80 tracking-wider flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-accent" />
                  <span>Altura Promedio por Hoja</span>
                </label>
                <select 
                  value={doorHeight}
                  onChange={(e) => setDoorHeight(parseFloat(e.target.value))}
                  className="w-full bg-[#161616] border border-white/20 rounded-xl px-4 py-3.5 text-white font-black text-xl focus:outline-none focus:border-accent transition-colors"
                >
                  <option value={2.00}>2.00 Metros (Residencial Estándar)</option>
                  <option value={2.20}>2.20 Metros (Institucional & Oficina)</option>
                  <option value={2.40}>2.40 Metros (Alta Exigencia / Industrial)</option>
                </select>
              </div>
            </div>

            {/* Results Output Box */}
            <div className="bg-[#121212] border border-accent/40 rounded-2xl p-6 sm:p-8 grid sm:grid-cols-2 gap-6 items-center shadow-xl">
              <div>
                <div className="text-xs text-white/50 uppercase font-bold tracking-wider">Consumo Estimado de Planta</div>
                <div className="text-4xl sm:text-5xl font-black text-accent mt-1">{estimatedWeightKg.toLocaleString()} kg</div>
                <div className="text-xs text-white/70 font-semibold mt-1">({estimatedTons} Toneladas aproximadas)</div>
              </div>

              <div className="text-left sm:text-right">
                <Link 
                  href={`/#contacto?producto=Relleno+de+puertas&cantidad=${doorQuantity}&peso=${estimatedWeightKg}kg`}
                  className="inline-flex items-center gap-2 bg-accent text-brand-dark px-8 py-4 font-extrabold text-xs uppercase tracking-wider rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(148,193,31,0.3)]"
                >
                  <span>Solicitar Cotización de este Lote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Table: Cartón Panal vs Poliuretano (PU) vs Lana de Roca */}
      <section className="py-24 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <SectionTitle 
            sub="Compare el impacto operativo y ambiental de las alternativas de relleno" 
            light
            accentColor={accentColor} 
          >
            Cartón Panal vs Poliuretano (PU) vs Lana de Roca
          </SectionTitle>

          <div className="mt-16 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/15 text-xs font-bold uppercase tracking-wider text-white/60">
                  <th className="py-4 px-6">Criterio de Evaluación</th>
                  <th className="py-4 px-6 text-accent bg-accent/10">Cartón Panal Perlad</th>
                  <th className="py-4 px-6 text-white/50">Poliuretano Inyectado (PU)</th>
                  <th className="py-4 px-6 text-white/50">Lana de Roca / Vidrio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Cableado para Cerraduras Inteligentes</td>
                  <td className="py-4 px-6 bg-accent/5 text-accent font-extrabold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Enrutamiento libre entre celdas
                  </td>
                  <td className="py-4 px-6 text-white/50 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400" /> Obstrucción total por inyección
                  </td>
                  <td className="py-4 px-6 text-white/50 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400" /> Complejo por desprendimiento
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Peso de la Hoja Metálica</td>
                  <td className="py-4 px-6 bg-accent/5 text-accent font-extrabold">Ultra ligero (1.2 - 1.6 kg)</td>
                  <td className="py-4 px-6 text-white/50">Medio / Variable</td>
                  <td className="py-4 px-6 text-white/50">Pesado</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Estabilidad de Plano (Cero Alabeo)</td>
                  <td className="py-4 px-6 bg-accent/5 text-accent font-extrabold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Plano perfecto permanente
                  </td>
                  <td className="py-4 px-6 text-white/50 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400" /> Expansión puede abombar metal
                  </td>
                  <td className="py-4 px-6 text-white/50">Sujeto a decantación</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-bold text-white">Impacto Ambiental & ESG</td>
                  <td className="py-4 px-6 bg-accent/5 text-accent font-extrabold">100% Reciclable y Biodegradable</td>
                  <td className="py-4 px-6 text-white/50">Químico sintético no reciclable</td>
                  <td className="py-4 px-6 text-white/50">Residuo peligroso de manejo especial</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Slide 9 & 10: Próximos Pasos - Valide su Proceso */}
      <section className="py-24 bg-gradient-to-b from-[#12190B] to-[#0A0A0A] border-t border-accent/30 relative">
        <div className="max-w-7xl mx-auto px-6">
          
          <SectionTitle 
            sub="Ruta directa para la integración técnica en su línea de producción" 
            light
            accentColor={accentColor} 
          >
            Próximos Pasos: Valide su Proceso
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            
            {/* Step 1 Card (Matching Slide 9 Icon Card) */}
            <div className="bg-[#141810] border-2 border-accent/40 rounded-2xl p-8 relative space-y-4 hover:border-accent transition-colors shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-accent text-brand-dark font-black text-2xl flex items-center justify-center shadow-[0_0_20px_rgba(148,193,31,0.4)]">
                1
              </div>
              <h3 className="text-xl font-bold text-white">Envío de Muestras Físicas</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Material para pruebas de concepto y validación técnica directa en las prensas y mesas de su planta.
              </p>
            </div>

            {/* Step 2 Card (Matching Slide 9 Icon Card) */}
            <div className="bg-[#141810] border-2 border-accent/40 rounded-2xl p-8 relative space-y-4 hover:border-accent transition-colors shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-accent text-brand-dark font-black text-2xl flex items-center justify-center shadow-[0_0_20px_rgba(148,193,31,0.4)]">
                2
              </div>
              <h3 className="text-xl font-bold text-white">Reuniones Presenciales</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Asesoría técnica directa y acompañamiento en el Área Metropolitana de Medellín / Bogotá.
              </p>
            </div>

            {/* Step 3 Card (Matching Slide 9 Icon Card) */}
            <div className="bg-[#141810] border-2 border-accent/40 rounded-2xl p-8 relative space-y-4 hover:border-accent transition-colors shadow-xl">
              <div className="w-14 h-14 rounded-xl bg-accent text-brand-dark font-black text-2xl flex items-center justify-center shadow-[0_0_20px_rgba(148,193,31,0.4)]">
                3
              </div>
              <h3 className="text-xl font-bold text-white">Reuniones Virtuales</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Sesiones vía Microsoft Teams para rápida coordinación comercial y logística con el resto del país.
              </p>
            </div>

          </div>

          {/* Direct Contact Banner matching Slide 10 */}
          <div className="mt-16 bg-[#161616] border-2 border-accent/40 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <div className="text-xs text-accent font-extrabold uppercase tracking-widest mb-1">Contacto Directo con Ingeniería</div>
              <h4 className="text-2xl font-black text-white">Hablemos de su próxima línea de producción</h4>
              <p className="text-white/60 text-sm mt-1">Atención personalizada para departamentos de procuraduría y planta.</p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="tel:+573024647165" 
                className="flex items-center gap-2.5 bg-accent/15 hover:bg-accent text-accent hover:text-brand-dark border border-accent/40 px-5 py-3 rounded-xl text-sm font-extrabold transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>+57 3024647165</span>
              </a>

              <a 
                href="mailto:comercial@perlad.com" 
                className="flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-3 rounded-xl text-sm font-bold text-white transition-all"
              >
                <Mail className="w-4 h-4 text-accent" />
                <span>comercial@perlad.com</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-t from-brand-dark via-brand-dark to-white/[0.02] border-t border-white/10 relative overflow-hidden">
        <div className="honeycomb-bg-dark absolute inset-0 opacity-100 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Optimice sus Puertas. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-400 to-lime-200">
              Fortalezca su Producción.
            </span>
          </h2>

          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
            Consiga máxima adherencia, ligereza estructural y facilidad de cableado para cerraduras inteligentes con el núcleo de cartón panal Perlad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/#contacto?producto=Relleno+de+puertas"
              className="bg-accent text-brand-dark px-10 py-5 font-extrabold text-base uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(148,193,31,0.4)] flex items-center gap-3 cursor-pointer group"
              style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}
            >
              <span>Solicitar Cotización & Muestras</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a 
              href="/assets/catalogos/RELLENO DE PUERTASV1.pdf"
              download
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-5 font-bold text-base uppercase tracking-wider transition-all flex items-center gap-3 rounded-lg backdrop-blur-md cursor-pointer"
            >
              <Download className="w-5 h-5 text-accent" />
              <span>Descargar Ficha Técnica PDF</span>
            </a>
          </div>

        </div>
      </section>

      <Footer accentColor={accentColor} />
    </main>
  );
}
