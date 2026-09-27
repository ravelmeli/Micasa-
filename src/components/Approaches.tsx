import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2, Phone } from 'lucide-react';
import { AnimateOnScroll } from './OriginalMotion';

interface ApproachesProps {
  onExploreApproach: () => void;
}

export const Approaches: React.FC<ApproachesProps> = ({ onExploreApproach }) => {
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          setTimeout(() => {
            setProgress(95);
          }, 300);
        }
      },
      { threshold: 0.25 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-[#f7f5f0] text-[#1a1e21] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <span className="text-xs font-bold tracking-[0.2em] text-[#c4121a] uppercase">
              OUR APPROACHES
            </span>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1e21] leading-[1.2]">
              Why Homeowners Trust <span className="text-[#c4121a] italic font-normal">Modulux for Premium</span> Modular Kitchens
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <p className="text-xs sm:text-sm text-[#525a62] max-w-xl mx-auto leading-relaxed font-light">
              At Modulux, we create modular kitchen solutions that blend intelligent functionality, 
              premium craftsmanship, and timeless luxury aesthetics to transform modern homes into elegant living spaces.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Column 1: Kitchen Excellence (4 cols) */}
          <div className="lg:col-span-4">
            <AnimateOnScroll animation="fadeInUp" delay={250}>
              <div className="bg-[#f0ebe1] rounded-2xl p-6 border border-[#ded5c2] space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif-title text-lg font-bold text-[#1a1e21]">
                    Kitchen Excellence
                  </h3>

                  {/* 5 Avatar Stack */}
                  <div className="flex -space-x-2 overflow-hidden">
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/profile1.png" alt="" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'; }} />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/profile2.png" alt="" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80'; }} />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/profile3.png" alt="" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'; }} />
                    <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/profile4.png" alt="" onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=100&q=80'; }} />
                  </div>
                </div>

                <p className="text-xs text-[#525a62] italic leading-relaxed">
                  “Great kitchens begin with thoughtful design, smart planning, and attention to every detail.”
                </p>

                <div className="space-y-2 pt-2 border-t border-[#ded5c2] text-xs font-medium text-[#1a1e21]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c4121a] shrink-0" />
                    <span>Designed Around Your Space &amp; Lifestyle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#c4121a] shrink-0" />
                    <span>Smart Solutions For Everyday Living</span>
                  </div>
                </div>

                {/* Space Optimized Icon Box */}
                <div className="bg-[#f7f5f0] p-4 rounded-xl border border-[#ded5c2] space-y-1.5">
                  <div className="text-xs font-bold text-[#1a1e21] flex items-center gap-2">
                    <span>📐</span>
                    <span>Space Optimized</span>
                  </div>
                  <p className="text-[11px] text-[#656d77] leading-relaxed">
                    Smart layouts designed to maximize every inch with seamless organization.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Column 2: Blueprint / Layout Map (4 cols) with zoomIn */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <AnimateOnScroll animation="zoomIn" delay={300} className="w-full max-w-[360px]">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#ded5c2] bg-white p-3 w-full">
                <img
                  src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/layout-map.png"
                  alt="Architectural Kitchen Floorplan Layout Map"
                  className="w-full h-auto object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/src/assets/images/minimalist_cabinets_1790510338268.jpg';
                  }}
                />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Column 3: 500+ Counter & Progress Bar (4 cols) */}
          <div className="lg:col-span-4">
            <AnimateOnScroll animation="fadeInUp" delay={350}>
              <div className="bg-[#f0ebe1] rounded-2xl p-6 border border-[#ded5c2] space-y-6" ref={progressRef}>
                <div className="space-y-2">
                  <div className="font-serif-title text-4xl font-bold text-[#1a1e21] tabular-nums flex items-baseline">
                    <span>500</span>
                    <span className="text-[#c4121a]">+</span>
                  </div>
                  <div className="text-xs font-bold text-[#1a1e21] uppercase tracking-wider">
                    Kitchens Designed
                  </div>
                  <p className="text-xs text-[#5a626a] leading-relaxed font-light">
                    From the first idea to final installation, we create functional and beautiful kitchens tailored to modern living.
                  </p>
                </div>

                {/* Animated Progress Bar: Space Optimization 95% */}
                <div className="space-y-2 pt-2 border-t border-[#ded5c2]">
                  <div className="flex items-center justify-between text-xs font-bold text-[#1a1e21]">
                    <span>Space Optimization</span>
                    <span className="text-[#c4121a] tabular-nums transition-all duration-1000">{progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-[#ded5c2] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#c4121a] rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                {/* 4 Tags List */}
                <div className="grid grid-cols-2 gap-2 text-[11px] font-medium text-[#454c54]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4121a]" />
                    <span>Smart Kitchen Design</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4121a]" />
                    <span>Premium Finishes</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4121a]" />
                    <span>Custom Storage</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c4121a]" />
                    <span>Expert Craftsmanship</span>
                  </div>
                </div>

              </div>
            </AnimateOnScroll>
          </div>

        </div>

        {/* Bottom Callout Bar */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <div className="bg-[#f0ebe1] border border-[#ded5c2] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-full bg-[#1a1e21] text-white flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm text-[#1a1e21]">
                <span>Let’s Create Your Dream Kitchen. </span>
                <button
                  onClick={onExploreApproach}
                  className="font-bold underline text-[#1a1e21] hover:text-[#c4121a] transition-colors cursor-pointer ml-1"
                >
                  Explore Our Approach
                </button>
              </div>
            </div>

            <button
              onClick={onExploreApproach}
              className="px-5 py-2 rounded-full bg-[#1a1e21] hover:bg-[#c4121a] text-white text-xs font-semibold tracking-wider transition cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};
