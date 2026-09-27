import React, { useState } from 'react';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { AnimateOnScroll } from './OriginalMotion';

interface FaqHome2Props {
  onTalkToExpert: () => void;
}

const FAQS = [
  {
    q: 'Q1. How long does a modular kitchen installation take?',
    a: 'Find inspiration for creating a clean, organized, and stylish modular kitchen with smart planning, modern materials, and efficient storage solutions.',
  },
  {
    q: 'Q2. What kitchen layouts do you offer?',
    a: 'Find inspiration for creating a clean, organized, and stylish modular kitchen with smart planning, modern materials, and efficient storage solutions.',
  },
  {
    q: 'Q3. How long does a modular kitchen installation take?',
    a: 'Find inspiration for creating a clean, organized, and stylish modular kitchen with smart planning, modern materials, and efficient storage solutions.',
  },
  {
    q: 'Q4. Can modular kitchens be designed for small spaces?',
    a: 'Find inspiration for creating a clean, organized, and stylish modular kitchen with smart planning, modern materials, and efficient storage solutions.',
  },
];

export const FaqHome2: React.FC<FaqHome2Props> = ({ onTalkToExpert }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#f0ebe1] text-[#1a1e21] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image & Floating Expert Box (5 cols) */}
          <div className="lg:col-span-5 relative">
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#ded5c2] bg-[#e8e2d3] h-[460px] sm:h-[540px]">
                <img
                  src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/faq-hm2.png"
                  alt="Modulux Designer Consultation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/src/assets/images/island_kitchen_suite_1790510326928.jpg';
                  }}
                />
              </div>
            </AnimateOnScroll>

            {/* Floating Blurbox with fadeInUp */}
            <AnimateOnScroll animation="fadeInUp" delay={400} className="absolute -bottom-6 -right-4 sm:right-6 max-w-xs w-full">
              <div className="bg-[#1a1e21]/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl space-y-3 border border-[#2f363c]">
                <h3 className="font-serif-title text-lg font-bold text-white leading-snug">
                  Have More Questions?
                </h3>
                <p className="text-xs text-[#cbd4c5] leading-relaxed font-light">
                  Our kitchen design experts are here to help you make confident decisions at every step.
                </p>
                <button
                  onClick={onTalkToExpert}
                  className="ekit_creative_button w-full py-2.5 rounded-full bg-[#c4121a] hover:bg-[#dc1822] text-white text-xs font-semibold tracking-wider transition flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span className="relative z-10">Talk To An Expert</span>
                  <ArrowRight className="relative z-10 w-3.5 h-3.5" />
                </button>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: FAQ Accordions (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <AnimateOnScroll animation="fadeInUp" delay={100}>
                <span className="text-xs font-bold tracking-[0.2em] text-[#c4121a] uppercase">
                  QUESTIONS &amp; ANSWERS
                </span>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1e21] leading-[1.2]">
                  Everything You Need To <span className="text-[#c4121a] italic font-normal">Know About Your New Kitchen</span>
                </h2>
              </AnimateOnScroll>
            </div>

            {/* Accordion List with fadeInUp */}
            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <div className="space-y-3">
                {FAQS.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-[#f7f5f0] rounded-xl border border-[#ded5c2] overflow-hidden transition-all shadow-sm"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif-title text-base sm:text-lg font-bold text-[#1a1e21] hover:text-[#c4121a] transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <div className="w-7 h-7 rounded-full bg-[#f0ebe1] flex items-center justify-center shrink-0 text-[#1a1e21]">
                          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 text-xs sm:text-sm text-[#5a626a] leading-relaxed font-light border-t border-[#f0ede6] pt-3 animate-in fade-in duration-200">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </AnimateOnScroll>

          </div>

        </div>
      </div>
    </section>
  );
};
