import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { AnimateOnScroll, AnimatedCounter } from './OriginalMotion';

interface HeroHome2Props {
  onOpenEstimate: () => void;
  onExploreDesigns: () => void;
}

export const HeroHome2: React.FC<HeroHome2Props> = ({ onOpenEstimate, onExploreDesigns }) => {
  return (
    <section id="home" className="relative min-h-[680px] lg:min-h-[820px] flex items-center bg-[#15181a] text-white overflow-hidden">
      
      {/* Background Hero Photography with Charcoal Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_modular_kitchen_1790510314763.jpg"
          alt="Beautiful Modular Kitchens"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121416]/92 via-[#121416]/75 to-[#121416]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121416] via-transparent to-transparent opacity-85" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          {/* Main Headline & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="inline-block text-[#e8242d] font-semibold text-sm sm:text-base tracking-wide">
                Where Design Meets Everyday Living.
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={250}>
              <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.18] tracking-tight">
                Beautiful Kitchens Designed Around The Way You Live
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <p className="text-sm sm:text-base text-[#cfd5db] max-w-xl leading-relaxed font-light">
                We create thoughtfully designed modular kitchens that combine smart functionality, 
                premium materials, and timeless aesthetics to make everyday living more beautiful.
              </p>
            </AnimateOnScroll>

            {/* Two Action Buttons with Brand Red */}
            <AnimateOnScroll animation="fadeInUp" delay={550}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenEstimate}
                  className="ekit_creative_button px-6 py-3.5 rounded-full bg-[#c4121a] hover:bg-[#dc1822] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#c4121a]/25 active:scale-95 cursor-pointer group"
                >
                  <span className="relative z-10">Get Free Estimate</span>
                  <div className="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>

                <button
                  onClick={onExploreDesigns}
                  className="ekit_creative_button px-6 py-3.5 rounded-full bg-[#23272a]/90 hover:bg-[#23272a] text-white border border-[#3b4045] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 active:scale-95 cursor-pointer group"
                >
                  <span className="relative z-10">Explore Kitchen Designs</span>
                  <div className="relative z-10 w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>
              </div>
            </AnimateOnScroll>

          </div>

          {/* Right Floating Stats & Blurboxes (5 cols) */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
            
            {/* Box 1: Counter 500+ Happy Homeowners */}
            <AnimateOnScroll animation="fadeInUp" delay={300} className="w-full">
              <div className="bg-[#1b1f22]/85 backdrop-blur-md border border-[#2e3438] rounded-2xl p-6 shadow-xl flex items-center gap-5">
                <div className="font-serif-title text-4xl sm:text-5xl font-bold text-white tabular-nums flex items-baseline">
                  <AnimatedCounter end={500} suffix="" />
                  <span className="text-[#c4121a]">+</span>
                </div>
                <div className="text-xs sm:text-sm text-[#cbd2d8] font-medium leading-snug">
                  Happy Homeowners<br />Across The USA
                </div>
              </div>
            </AnimateOnScroll>

            {/* Box 2: Quote, Award & Rating */}
            <AnimateOnScroll animation="fadeInUp" delay={450} className="w-full">
              <div className="bg-[#1b1f22]/85 backdrop-blur-md border border-[#2e3438] rounded-2xl p-6 shadow-xl space-y-4">
                <p className="text-xs sm:text-sm text-[#e0e5ea] italic leading-relaxed">
                  “Thoughtful design, exceptional craftsmanship, and a kitchen made truly for you.”
                </p>

                {/* Award with red accent */}
                <div className="flex items-center gap-3 pt-2 text-xs text-[#e8242d]">
                  <div className="w-8 h-8 rounded-full bg-[#c4121a]/15 border border-[#c4121a]/30 flex items-center justify-center shrink-0">
                    <span className="text-base">🏆</span>
                  </div>
                  <div className="font-semibold text-white text-[12px] leading-snug">
                    Best Modular Kitchen Design 2026 Design Excellence Award
                  </div>
                </div>

                <div className="border-t border-[#2e3438]" />

                {/* 4.9/5 Rating */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#e0e5ea]">4.9/5 Rating</span>
                  <div className="flex items-center gap-1 text-[#f5c344]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#f5c344]" />
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

          </div>

        </div>
      </div>
    </section>
  );
};
