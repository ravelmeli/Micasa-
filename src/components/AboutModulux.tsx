import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimateOnScroll, AnimatedCounter } from './OriginalMotion';

interface AboutModuluxProps {
  onLearnMore: () => void;
}

export const AboutModulux: React.FC<AboutModuluxProps> = ({ onLearnMore }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f7f5f0] text-[#1a1e21] relative overflow-hidden">
      
      {/* Decorative top-right graphic */}
      <div className="absolute top-10 right-8 w-24 h-24 opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#c4121a]">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage (5 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-end">
              
              {/* Image 1 with floating 10+ Years badge */}
              <div className="relative space-y-4">
                <AnimateOnScroll animation="fadeInLeft" delay={150}>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e6decb] bg-[#e8e2d3] h-[340px] sm:h-[420px]">
                    <img
                      src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/about1-hm2.png"
                      alt="Modulux Cabinetry Craftsmanship"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/src/assets/images/island_kitchen_suite_1790510326928.jpg';
                      }}
                    />
                  </div>
                </AnimateOnScroll>

                {/* Floating 10+ Experience Counter with fadeInLeft */}
                <AnimateOnScroll animation="fadeInLeft" delay={300}>
                  <div className="bg-[#1a1e21] text-white p-5 rounded-2xl shadow-xl space-y-2 border border-[#2d343a]">
                    <div className="font-serif-title text-4xl font-bold tabular-nums text-white flex items-baseline">
                      <AnimatedCounter end={10} suffix="+" />
                    </div>
                    <div className="text-xs font-semibold text-[#d0d7de] uppercase tracking-wider">
                      Years Of Design Experience
                    </div>
                    <p className="text-[11px] text-[#9fa9b3] leading-relaxed font-light">
                      Happy Homeowners Smart layouts, premium finishes, timeless kitchen design.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>

              {/* Image 2 taller */}
              <div className="relative">
                <AnimateOnScroll animation="fadeInUp" delay={200}>
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-[#e6decb] bg-[#e8e2d3] h-[420px] sm:h-[500px]">
                    <img
                      src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/about2-hm2.png"
                      alt="Modern Kitchen Space"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/src/assets/images/minimalist_cabinets_1790510338268.jpg';
                      }}
                    />
                  </div>
                </AnimateOnScroll>
              </div>

            </div>
          </div>

          {/* Right Column: Copy & Content (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="inline-block text-xs font-bold tracking-[0.2em] text-[#c4121a] uppercase">
                ABOUT MODULUX
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1e21] leading-[1.2]">
                Designing Kitchens That Bring Style,{' '}
                <span className="text-[#c4121a] italic font-normal">Function &amp; Life Together</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <p className="text-sm sm:text-base text-[#525a62] leading-relaxed font-light">
                At Modulux, we create stylish modular kitchens with smart layouts, premium finishes, 
                and thoughtful details designed around your lifestyle.
              </p>
            </AnimateOnScroll>

            {/* Smart Kitchen Design Feature Box */}
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <div className="bg-[#f0ebe1] rounded-2xl p-6 border border-[#dfd7c7] space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1a1e21] text-[#f7f5f0] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif-title text-xl font-bold text-[#1a1e21]">
                      Smart Kitchen Design
                    </h3>
                    <p className="text-xs text-[#5a636c] leading-relaxed font-light">
                      We create intelligent layouts that maximize space, improve organization, and make everyday cooking effortless.
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#dfd7c7]" />

                <div className="flex items-center gap-2 text-xs font-medium text-[#1a1e21]">
                  <CheckCircle2 className="w-4 h-4 text-[#c4121a] shrink-0" />
                  <span>Thoughtful planning, premium finishes, made for you.</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Button & Ratings Row with Spinning Badge */}
            <AnimateOnScroll animation="fadeInUp" delay={500}>
              <div className="flex flex-wrap items-center justify-between gap-6 pt-3">
                
                <button
                  onClick={onLearnMore}
                  className="ekit_creative_button px-6 py-3 rounded-full bg-[#1a1e21] hover:bg-[#c4121a] text-white text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 shadow-sm cursor-pointer group"
                >
                  <span className="relative z-10">More About Us</span>
                  <div className="relative z-10 w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>

                {/* Customer Avatar Pile & 4.9/5 Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5 overflow-hidden">
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-[#f7f5f0] object-cover"
                      src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/profile1.png"
                      alt="Customer avatar"
                      referrerPolicy="no-referrer"
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'; }}
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-[#f7f5f0] object-cover"
                      src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/profile2.png"
                      alt="Customer avatar"
                      referrerPolicy="no-referrer"
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'; }}
                    />
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-[#f7f5f0] object-cover"
                      src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/profile3.png"
                      alt="Customer avatar"
                      referrerPolicy="no-referrer"
                      onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'; }}
                    />
                  </div>

                  <div className="text-xs">
                    <div className="font-serif-title font-bold text-base text-[#1a1e21] tabular-nums">
                      4.9 / 5
                    </div>
                    <div className="text-[11px] text-[#5e6670]">
                      Average Customer Rating
                    </div>
                  </div>
                </div>

                {/* Spinning Circular Badge with zoomIn */}
                <AnimateOnScroll animation="zoomIn" delay={400} className="relative w-18 h-18 hidden sm:flex items-center justify-center">
                  <svg className="w-full h-full spin text-[#1a1e21]" viewBox="0 0 100 100">
                    <path
                      id="circlePathAbout"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                      fill="none"
                    />
                    <text className="text-[9.5px] uppercase font-bold tracking-[2.5px] fill-current">
                      <textPath href="#circlePathAbout">
                        MODERN • LUXURY • MODULUX •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 m-auto w-7 h-7 rounded-full bg-[#c4121a] text-white flex items-center justify-center text-xs font-bold">
                    ★
                  </div>
                </AnimateOnScroll>

              </div>
            </AnimateOnScroll>

          </div>

        </div>
      </div>
    </section>
  );
};
