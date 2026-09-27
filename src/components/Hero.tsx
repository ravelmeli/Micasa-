import React from 'react';
import { ArrowRight, CheckCircle2, Sliders, Shield, Award, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreCollections: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreCollections }) => {
  return (
    <section id="hero" className="relative bg-[#0d0f12] text-white pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background Architectural Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[450px] bg-[#c5a880]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-[#222733]/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Architectural Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1b1f28] border border-[#2e3444] text-[#c5a880] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-ping" />
              <span>Édition Signature • Modulux Home 2</span>
            </div>

            <h1 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.15]">
              L’Art Culinaire Réinventé par le{' '}
              <span className="italic font-normal text-[#c5a880]">Sur-Mesure</span>{' '}
              Architectural.
            </h1>

            <p className="text-base sm:text-lg text-[#a8adb8] max-w-2xl leading-relaxed font-light">
              La rencontre entre la précision d&apos;ingénierie allemande Blum® et l&apos;élégance 
              intemporelle des ateliers italiens. Meubles suspendus sans poignée, îlots en quartz 
              massif et agencements personnalisés pensés pour durer des générations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 rounded bg-[#c5a880] hover:bg-[#d6b991] text-[#0d0f12] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-xl shadow-[#c5a880]/15 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Concevoir Mon Projet 3D</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreCollections}
                className="px-7 py-3.5 rounded bg-[#161a22] hover:bg-[#202530] text-white border border-[#2b3140] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sliders className="w-4 h-4 text-[#c5a880]" />
                <span>Explorer les Collections</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#1f2430] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="space-y-1">
                <div className="font-serif-display text-2xl font-bold text-white tabular-nums">15 Ans</div>
                <div className="text-[#848a97]">Garantie intégrale</div>
              </div>
              <div className="space-y-1">
                <div className="font-serif-display text-2xl font-bold text-[#c5a880] tabular-nums">2 850+</div>
                <div className="text-[#848a97]">Cuisines installées</div>
              </div>
              <div className="space-y-1">
                <div className="font-serif-display text-2xl font-bold text-white tabular-nums">100%</div>
                <div className="text-[#848a97]">Sur-mesure certifié</div>
              </div>
              <div className="space-y-1">
                <div className="font-serif-display text-2xl font-bold text-[#c5a880] tabular-nums">4 Sem.</div>
                <div className="text-[#848a97]">Délai moyen de pose</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#2d3240] shadow-2xl bg-[#171b23] group">
              <img
                src="/src/assets/images/hero_modular_kitchen_1790510314763.jpg"
                alt="Cuisine modulaire de luxe Modulux avec îlot en marbre Calacatta et façades noir mat"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-transparent to-transparent opacity-80" />

              {/* Floating Spec Box */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0f1217]/90 backdrop-blur-md border border-[#2b303c] text-xs space-y-1.5 shadow-lg">
                <div className="flex items-center justify-between text-[#c5a880] font-semibold text-[11px] tracking-wider uppercase">
                  <span>Modèle Vedette Home-2</span>
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Édition 2026</span>
                  </span>
                </div>
                <div className="text-white font-medium text-sm">
                  Suite Modulaire Milano Noir Carbone &amp; Calacatta
                </div>
                <div className="text-[#8e94a2] text-[11px] flex items-center gap-2">
                  <span>Chêne fumé texturé</span>
                  <span>•</span>
                  <span>Systèmes Blum Servo-Drive</span>
                  <span>•</span>
                  <span>Éclairage LED 2700K intégré</span>
                </div>
              </div>
            </div>

            {/* Floating Decorative Accent Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-[#c5a880] text-[#0d0f12] px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider shadow-xl items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Design Award 2026</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
