import React from 'react';
import { ArrowRight, CheckCircle2, Phone, Star } from 'lucide-react';
import { AnimateOnScroll, AnimatedCounter } from './OriginalMotion';

interface KeyFeaturesProps {
  onExploreKitchens: () => void;
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = ({ onExploreKitchens }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#f7f5f0] text-[#1a1e21] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Collage (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 items-center">
              
              {/* Feature Image 1 */}
              <AnimateOnScroll animation="fadeInLeft" delay={150}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e5ded0] bg-[#e8e2d3] h-[380px] sm:h-[460px]">
                  <img
                    src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/feature1.png"
                    alt="Modern Modular Kitchen Feature"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/src/assets/images/island_kitchen_suite_1790510326928.jpg';
                    }}
                  />
                </div>
              </AnimateOnScroll>

              {/* Feature Image 2 + 50+ finishes box */}
              <div className="space-y-4">
                <AnimateOnScroll animation="fadeInUp" delay={250}>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-[#e5ded0] bg-[#e8e2d3] h-[260px] sm:h-[300px]">
                    <img
                      src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/feature2.png"
                      alt="Kitchen Detail"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/src/assets/images/minimalist_cabinets_1790510338268.jpg';
                      }}
                    />
                  </div>
                </AnimateOnScroll>

                {/* 50+ Finishes Box */}
                <AnimateOnScroll animation="fadeInUp" delay={400}>
                  <div className="bg-[#1a1e21] text-white p-5 rounded-2xl shadow-xl space-y-1.5 border border-[#2d343a]">
                    <div className="text-[10px] font-bold tracking-wider text-[#e8242d] uppercase">
                      Premium Kitchen Finishes
                    </div>
                    <div className="font-serif-title text-4xl font-bold tabular-nums text-white flex items-baseline">
                      <AnimatedCounter end={50} suffix="+" />
                    </div>
                    <p className="text-xs text-[#a9b2ba] leading-relaxed font-light">
                      Designed to bring lasting beauty and modern style to every kitchen.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>

            </div>

            {/* Spinning Center Badge with zoomIn */}
            <AnimateOnScroll animation="zoomIn" delay={300} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/95 backdrop-blur-md rounded-full shadow-2xl p-1 border border-[#ded5c2] hidden sm:flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full spin text-[#1a1e21]" viewBox="0 0 100 100">
                <path
                  id="circlePathKey"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="none"
                />
                <text className="text-[9.5px] uppercase font-bold tracking-[2.5px] fill-current">
                  <textPath href="#circlePathKey">
                    MODERN • LUXURY • MODULUX •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-[#c4121a] text-white flex items-center justify-center text-xs">
                ★
              </div>
            </AnimateOnScroll>

          </div>

          {/* Right Column: Key Features Copy (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="inline-block text-xs font-bold tracking-[0.2em] text-[#c4121a] uppercase">
                OUR KEY FEAUTERS
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1e21] leading-[1.2]">
                What Makes <span className="text-[#c4121a] italic font-normal">Our Modular</span> Kitchens Stand Out
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <p className="text-sm sm:text-base text-[#525a62] leading-relaxed font-light">
                From smart planning to premium finishes, we create kitchens that combine everyday 
                functionality with timeless design and lasting quality.
              </p>
            </AnimateOnScroll>

            {/* 2 Feature Cards Grid */}
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-[#f0ebe1] p-5 rounded-xl border border-[#e0d8ca] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1e21] text-[#f7f5f0] flex items-center justify-center text-sm font-bold">
                    📐
                  </div>
                  <h3 className="font-serif-title text-base font-bold text-[#1a1e21]">
                    Smart Space Planning For Modern Kitchens
                  </h3>
                </div>

                <div className="bg-[#f0ebe1] p-5 rounded-xl border border-[#e0d8ca] space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1e21] text-[#f7f5f0] flex items-center justify-center text-sm font-bold">
                    💎
                  </div>
                  <h3 className="font-serif-title text-base font-bold text-[#1a1e21]">
                    Premium Materials &amp; Finishes For Lasting Beauty
                  </h3>
                </div>
              </div>
            </AnimateOnScroll>

            {/* 4 Checkmark Items */}
            <AnimateOnScroll animation="fadeInUp" delay={450}>
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-[#454c54]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c4121a] shrink-0" />
                  <span>Designed Around Your Lifestyle, Space &amp; Everyday Needs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c4121a] shrink-0" />
                  <span>Smart Layouts For Maximum Storage, Comfort &amp; Functionality</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c4121a] shrink-0" />
                  <span>Expert Craftsmanship With Precision In Every Detail</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#c4121a] shrink-0" />
                  <span>Premium Materials &amp; Finishes Built For Lasting Beauty</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Bottom Row: Rating + CTAs */}
            <AnimateOnScroll animation="fadeInUp" delay={500}>
              <div className="pt-4 border-t border-[#ded6c5] flex flex-wrap items-center justify-between gap-6">
                
                {/* Rating */}
                <div className="flex items-center gap-2.5">
                  <div className="flex text-[#f5c344]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f5c344]" />
                    ))}
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-[#1a1e21]">4.9/5 </span>
                    <span className="text-[#646c75]">Average Customer Rating</span>
                  </div>
                </div>

                {/* Action Button & Phone Call */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={onExploreKitchens}
                    className="ekit_creative_button px-6 py-3 rounded-full bg-[#1a1e21] hover:bg-[#c4121a] text-white text-xs font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer group shadow-sm"
                  >
                    <span className="relative z-10">Explore Our Kitchens</span>
                    <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <a
                    href="tel:+18001234567"
                    className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#1a1e21] hover:text-[#c4121a] transition"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#f0ebe1] flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5 text-[#c4121a]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#6e757d] uppercase font-normal">Call Us</div>
                      <div>+1 (800) 123 4567</div>
                    </div>
                  </a>
                </div>

              </div>
            </AnimateOnScroll>

          </div>

        </div>
      </div>
    </section>
  );
};
