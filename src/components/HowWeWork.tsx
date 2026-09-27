import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { AnimateOnScroll } from './OriginalMotion';

interface HowWeWorkProps {
  onStartProject: () => void;
}

export const HowWeWork: React.FC<HowWeWorkProps> = ({ onStartProject }) => {
  const steps = [
    {
      step: 'Step 01',
      title: 'Discover & Plan',
      desc: 'We understand your space, lifestyle, preferences, and kitchen requirements.',
      bullet: 'Space & Lifestyle Assessment',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 62 62" fill="none" className="text-[#1a1e21]">
          <path d="M12.9 43.9C11.5 43.9 10.3 43.4 9.3 42.4 8.3 41.4 7.8 40.2 7.8 38.8V23.2C7.8 21.8 8.3 20.6 9.3 19.6 10.3 18.6 11.5 18.1 12.9 18.1H49.1C50.5 18.1 51.7 18.6 52.7 19.6 53.7 20.6 54.2 21.8 54.2 23.2V38.8C54.2 40.2 53.7 41.4 52.7 42.4 51.7 43.4 50.5 43.9 49.1 43.9H12.9Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      step: 'Step 02',
      title: 'Design & Customize',
      desc: 'Our experts create a personalized kitchen concept with smart layouts and stylish finishes.',
      bullet: 'Customized Kitchen Layout',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 62 62" fill="none" className="text-[#1a1e21]">
          <path d="M5.2 48.8V24C5.2 23.2 5.5 22.5 6 21.9 6.6 21.3 7.3 21.1 8.1 21.1H13.1V13.2C13.1 12.4 13.4 11.7 14 11.2 14.5 10.6 15.2 10.3 16 10.3H24.7C25.5 10.3 26.2 10.6 26.8 11.2 27.4 11.7 27.6 12.4 27.6 13.2V21.1H34.4V13.2C34.4 12.4 34.6 11.7 35.2 11.2 35.8 10.6 36.5 10.3 37.3 10.3H46C46.8 10.3 47.5 10.6 48 11.2 48.6 11.7 48.9 12.4 48.9 13.2V21.1H53.9C54.7 21.1 55.4 21.3 56 21.9 56.6 22.5 56.8 23.2 56.8 24V48.8C56.8 49.6 56.6 50.3 56 50.8 55.4 51.4 54.7 51.7 53.9 51.7H8.1C7.3 51.7 6.6 51.4 6 50.8 5.5 50.3 5.2 49.6 5.2 48.8Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      step: 'Step 03',
      title: 'Build & Install',
      desc: 'Our skilled craftsmen bring your kitchen to life with precise manufacturing and professional installation.',
      bullet: 'Precision Manufacturing',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 72 72" fill="none" className="text-[#1a1e21]">
          <path d="M54.4 62L49.4 57C49.1 56.7 48.8 56.6 48.6 56.6 48.3 56.6 48.1 56.7 47.8 57 47.6 57.2 47.5 57.5 47.5 57.8 47.5 58.1 47.6 58.3 47.8 58.6L53.9 64.7C54.2 65 54.4 65.1 54.7 65.2 54.9 65.3 55.2 65.4 55.5 65.4 55.8 65.4 56.1 65.3 56.3 65.2 56.6 65.1 56.8 65 57.1 64.7L63.2 58.6C63.5 58.3 63.6 58.1 63.6 57.8 63.6 57.5 63.5 57.2 63.2 57 63 56.7 62.7 56.6 62.4 56.6 62.2 56.6 61.9 56.7 61.6 57L56.6 62V50.3C56.6 50 56.5 49.8 56.3 49.5 56.1 49.3 55.8 49.2 55.5 49.2 55.2 49.2 54.9 49.3 54.7 49.5 54.5 49.8 54.4 50 54.4 50.3V62Z" fill="currentColor"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#f0ebe1] text-[#1a1e21] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#ded5c2]">
          <div className="space-y-3 max-w-2xl">
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <span className="text-xs font-bold tracking-[0.2em] text-[#c4121a] uppercase">
                HOW WE WORK
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1e21] leading-[1.2]">
                Every Beautiful Kitchen Begins With A <span className="text-[#c4121a] italic font-normal">Thoughtful Design Process</span>
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="space-y-4 max-w-md">
            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <p className="text-xs sm:text-sm text-[#525a62] font-light leading-relaxed">
                A seamless process from initial concept to final installation, designed around your space and lifestyle.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <button
                onClick={onStartProject}
                className="ekit_creative_button px-6 py-3 rounded-full bg-[#1a1e21] hover:bg-[#c4121a] text-white text-xs font-semibold tracking-wider transition flex items-center gap-2 cursor-pointer group shadow-sm"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="relative z-10 w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            </AnimateOnScroll>
          </div>
        </div>

        {/* 3 Step Boxes with fadeInUp and fadeInDown on arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((st, idx) => (
            <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 150}>
              <div className="bg-[#f7f5f0] rounded-2xl p-7 border border-[#ded5c2] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs uppercase tracking-widest text-[#c4121a]">
                      {st.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#f0ebe1] flex items-center justify-center shadow-inner">
                      {st.icon}
                    </div>
                  </div>

                  <h3 className="font-serif-title text-2xl font-bold text-[#1a1e21]">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5a626a] leading-relaxed font-light">
                    {st.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e2d8c5] flex items-center gap-2 text-xs font-semibold text-[#1a1e21]">
                  <span className="w-2 h-2 rounded-full bg-[#c4121a]" />
                  <span>{st.bullet}</span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom Homeowners Loved Rating */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <div className="pt-2 flex items-center justify-center gap-4 text-center">
            <div className="flex -space-x-2">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#f0ebe1] object-cover" src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/profile1.png" alt="" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'; }} />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-[#f0ebe1] object-cover" src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/profile5.png" alt="" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'; }} />
            </div>
            <div className="flex text-[#f5c344]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#f5c344]" />
              ))}
            </div>
            <span className="font-bold text-xs sm:text-sm text-[#1a1e21]">4.9/5</span>
            <span className="text-xs text-[#5a626a]">Loved By Modern Homeowners</span>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};
