import React from 'react';
import { ArrowRight, Quote, Star } from 'lucide-react';
import { AnimateOnScroll } from './OriginalMotion';

interface TestimonialsHome2Props {
  onViewAllReviews: () => void;
}

export const TestimonialsHome2: React.FC<TestimonialsHome2Props> = ({ onViewAllReviews }) => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#f7f5f0] text-[#1a1e21] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Sticky) (5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-3">
              <AnimateOnScroll animation="fadeInUp" delay={100}>
                <span className="text-xs font-bold tracking-[0.2em] text-[#c4121a] uppercase">
                  OUR TESTIMONIALS
                </span>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1e21] leading-[1.2]">
                  Where Homeowners <span className="text-[#c4121a] italic font-normal">Find Their Dream Kitchen</span>
                </h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={300}>
                <p className="text-xs sm:text-sm text-[#525a62] font-light leading-relaxed">
                  From smart layouts to beautiful finishes, our clients trust Modulux to create kitchens 
                  that look stunning and work beautifully every day.
                </p>
              </AnimateOnScroll>
            </div>

            {/* CTA & Rating Block */}
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={onViewAllReviews}
                  className="ekit_creative_button px-6 py-3 rounded-full bg-[#1a1e21] hover:bg-[#c4121a] text-white text-xs font-semibold tracking-wider transition flex items-center gap-2 cursor-pointer group shadow-sm"
                >
                  <span className="relative z-10">View All Reviews</span>
                  <div className="relative z-10 w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </button>

                <div className="flex items-center gap-2 text-xs">
                  <span className="font-serif-title font-bold text-lg text-[#1a1e21]">4.9/5</span>
                  <Star className="w-4 h-4 fill-[#f5c344] text-[#f5c344]" />
                  <span className="text-[#646c75] font-medium">• 500+ Happy Homeowners</span>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Client Logos Grid */}
            <AnimateOnScroll animation="fadeInUp" delay={500}>
              <div className="pt-6 border-t border-[#ded5c2] space-y-3">
                <div className="text-[11px] font-bold text-[#6a727c] uppercase tracking-wider">
                  Featured Partners &amp; Architectural Suppliers
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs font-bold tracking-wider text-[#79818b] uppercase">
                  <div className="p-3 rounded-lg bg-[#f0ebe1] text-center border border-[#ded5c2]">BLUM®</div>
                  <div className="p-3 rounded-lg bg-[#f0ebe1] text-center border border-[#ded5c2]">DEKTON®</div>
                  <div className="p-3 rounded-lg bg-[#f0ebe1] text-center border border-[#ded5c2]">MIELE®</div>
                  <div className="p-3 rounded-lg bg-[#f0ebe1] text-center border border-[#ded5c2]">HETTICH®</div>
                  <div className="p-3 rounded-lg bg-[#f0ebe1] text-center border border-[#ded5c2]">FENIX®</div>
                  <div className="p-3 rounded-lg bg-[#f0ebe1] text-center border border-[#ded5c2]">GAGGENAU®</div>
                </div>
              </div>
            </AnimateOnScroll>

          </div>

          {/* Right Column: 2 Cards (7 cols) with fadeInUp */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Testimonial 1: Emily Carter */}
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div className="bg-[#f0ebe1] rounded-2xl p-7 sm:p-8 border border-[#ded5c2] shadow-sm space-y-5 relative">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#f5c344]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f5c344]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#c9c0b1] opacity-70" />
                </div>

                <h3 className="font-serif-title text-2xl font-bold text-[#1a1e21]">
                  “A Kitchen We Truly Love”
                </h3>

                <p className="text-xs sm:text-sm text-[#525a62] leading-relaxed italic font-light">
                  “Modulux transformed our outdated kitchen into a beautiful, functional space. Every detail was thoughtfully designed, and the final result exceeded our expectations.”
                </p>

                <div className="pt-4 border-t border-[#ded5c2] flex items-center gap-3.5">
                  <img
                    src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/06/testuser3.png"
                    alt="Emily Carter"
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-white"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80';
                    }}
                  />
                  <div>
                    <div className="font-bold text-sm text-[#1a1e21]">Emily Carter</div>
                    <div className="text-xs text-[#6e7680]">New York, NY</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Testimonial 2: Michael Anderson */}
            <AnimateOnScroll animation="fadeInUp" delay={350}>
              <div className="bg-[#f0ebe1] rounded-2xl p-7 sm:p-8 border border-[#ded5c2] shadow-sm space-y-5 relative">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#f5c344]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f5c344]" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[#c9c0b1] opacity-70" />
                </div>

                <h3 className="font-serif-title text-2xl font-bold text-[#1a1e21]">
                  “Beautiful Design &amp; Excellent Quality”
                </h3>

                <p className="text-xs sm:text-sm text-[#525a62] leading-relaxed italic font-light">
                  “From the first consultation to installation, the entire experience was smooth and professional. Our new kitchen feels perfectly designed for our family.”
                </p>

                <div className="pt-4 border-t border-[#ded5c2] flex items-center gap-3.5">
                  <img
                    src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/06/testuser1.png"
                    alt="Michael Anderson"
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-white"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80';
                    }}
                  />
                  <div>
                    <div className="font-bold text-sm text-[#1a1e21]">Michael Anderson</div>
                    <div className="text-xs text-[#6e7680]">Los Angeles, CA</div>
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
