import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';
import { AnimateOnScroll } from './OriginalMotion';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#f7f5f0] text-[#1a1e21] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Why Choose Copy & Google Reviews (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <div className="inline-block text-xs font-bold tracking-[0.2em] text-[#c4121a] uppercase">
                WHY CHOOSE MODULUX
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1e21] leading-[1.2]">
                Kitchens That Deliver Style,{' '}
                <span className="text-[#c4121a] italic font-normal">Function &amp; Lasting Quality</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <p className="text-sm sm:text-base text-[#525a62] leading-relaxed font-light">
                We combine thoughtful design, premium materials, and expert craftsmanship to create kitchens 
                that look beautiful, work effortlessly, and fit your lifestyle.
              </p>
            </AnimateOnScroll>

            {/* Smart Kitchen Design Feature Box */}
            <AnimateOnScroll animation="fadeInUp" delay={350}>
              <div className="bg-[#f0ebe1] rounded-2xl p-6 border border-[#ded5c2] space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1a1e21] text-white flex items-center justify-center text-sm font-bold">
                    ⚡
                  </div>
                  <h3 className="font-serif-title text-lg font-bold text-[#1a1e21]">
                    Smart Kitchen Design
                  </h3>
                </div>
                <p className="text-xs text-[#5a626a] leading-relaxed font-light">
                  We create practical layouts that make the most of your space while keeping everyday cooking and storage simple.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Google Reviews Trust Box */}
            <AnimateOnScroll animation="fadeInUp" delay={450}>
              <div className="bg-[#f0ebe1] rounded-2xl p-6 border border-[#ded5c2] space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <span className="font-bold text-sm text-[#4285F4]">G</span>
                    </div>
                    <div>
                      <div className="font-serif-title font-bold text-base text-[#1a1e21] flex items-center gap-2">
                        <span>4.9 / 5</span>
                        <div className="flex text-[#f5c344]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#f5c344]" />
                          ))}
                        </div>
                      </div>
                      <div className="text-[11px] text-[#6b737d]">Google Verified Reviews</div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#525a62] leading-relaxed font-light">
                  Trusted by homeowners for thoughtful design, quality materials, and seamless kitchen solutions.
                </p>

                <div className="pt-2 border-t border-[#ded5c2] space-y-2 text-xs font-medium text-[#1a1e21]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c4121a] shrink-0" />
                    <span>Thoughtful Designs Made Just For You</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c4121a] shrink-0" />
                    <span>Precision Craftsmanship You Can Trust</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

          </div>

          {/* Right Column: Visual Showcase (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#ded5c2] bg-[#e8e2d3] h-[450px] sm:h-[540px]">
                  <img
                    src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/whychoose-img1.png"
                    alt="Craftsmanship Quality"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/src/assets/images/hero_modular_kitchen_1790510314763.jpg';
                    }}
                  />
                </div>
              </AnimateOnScroll>

              {/* Floating Overlap Card Image */}
              <AnimateOnScroll animation="fadeInLeft" delay={400} className="hidden sm:block absolute -bottom-8 -left-8 w-60 h-72">
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-[#f7f5f0]">
                  <img
                    src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/why-choose-img2.png"
                    alt="Precision Crafting"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/src/assets/images/minimalist_cabinets_1790510338268.jpg';
                    }}
                  />
                </div>
              </AnimateOnScroll>

              {/* Spinning Badge with zoomIn */}
              <AnimateOnScroll animation="zoomIn" delay={300} className="absolute -top-6 -right-6 w-20 h-20 bg-white/95 backdrop-blur-md rounded-full shadow-2xl p-1 border border-[#ded5c2] hidden sm:flex items-center justify-center pointer-events-none">
                <svg className="w-full h-full spin text-[#1a1e21]" viewBox="0 0 100 100">
                  <path
                    id="circlePathWhy"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] uppercase font-bold tracking-[2.5px] fill-current">
                    <textPath href="#circlePathWhy">
                      MODERN • LUXURY • MODULUX •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute inset-0 m-auto w-6 h-6 rounded-full bg-[#c4121a] text-white flex items-center justify-center text-xs">
                  ★
                </div>
              </AnimateOnScroll>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
