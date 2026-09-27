import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { AnimateOnScroll, AnimatedCounter } from './OriginalMotion';

interface InsideVideoMetricsProps {
  onOpenVideo: () => void;
  onStartProject: () => void;
}

export const InsideVideoMetrics: React.FC<InsideVideoMetricsProps> = ({
  onOpenVideo,
  onStartProject,
}) => {
  return (
    <section id="video" className="py-20 lg:py-28 bg-[#16191c] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Interactive Video Trigger (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <AnimateOnScroll animation="zoomIn" delay={200}>
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
                
                {/* Pulsing Glow Rings */}
                <div className="absolute inset-0 rounded-full bg-[#c4121a]/20 animate-ping opacity-60 pointer-events-none" />
                <div className="absolute inset-4 rounded-full bg-[#c4121a]/15 pointer-events-none" />

                {/* Spinning Circular Text */}
                <svg className="w-full h-full spin text-[#cfd6dc]" viewBox="0 0 200 200">
                  <path
                    id="circlePathVideo"
                    d="M 100, 100 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                    fill="none"
                  />
                  <text className="text-[11.5px] uppercase font-bold tracking-[4.5px] fill-current">
                    <textPath href="#circlePathVideo">
                      WATCH OUR FULL VIDEO • WATCH OUR FULL VIDEO •
                    </textPath>
                  </text>
                </svg>

                {/* Play Button Trigger */}
                <button
                  onClick={onOpenVideo}
                  aria-label="Play Video"
                  className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#c4121a] hover:bg-[#dc1822] text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer z-10 group"
                >
                  <Play className="w-8 h-8 fill-current ml-1 group-hover:scale-105 transition-transform" />
                </button>

              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Copy & 4 Metrics (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-3">
              <AnimateOnScroll animation="fadeInUp" delay={100}>
                <span className="text-xs font-bold tracking-[0.2em] text-[#e8242d] uppercase">
                  INSIDE MODULUX
                </span>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInUp" delay={200}>
                <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.2]">
                  See How We Bring Your <span className="text-[#c4121a] italic">Dream Kitchen To Life</span>
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInUp" delay={300}>
                <p className="text-xs sm:text-sm text-[#cbd4c5] font-light leading-relaxed max-w-xl">
                  Explore our design process, premium materials, and expert craftsmanship through the Modulux experience.
                </p>
              </AnimateOnScroll>
            </div>

            {/* CTA Button */}
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <button
                onClick={onStartProject}
                className="ekit_creative_button px-6 py-3.5 rounded-full bg-[#c4121a] hover:bg-[#dc1822] text-white text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#c4121a]/25 cursor-pointer group"
              >
                <span className="relative z-10">Start Your Kitchen Project</span>
                <div className="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            </AnimateOnScroll>

            {/* 4 Metric Counters Grid with Original Elementor animations */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#2d3338]">
              
              <AnimateOnScroll animation="rotateInDownLeft" delay={200}>
                <div className="bg-[#1f2428] border border-[#2f353c] rounded-xl p-4 space-y-1">
                  <div className="font-serif-title text-3xl font-bold text-white tabular-nums flex items-baseline">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-[11px] text-[#b0b8c0] font-medium">Kitchens Designed</div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="rotateInDownRight" delay={300}>
                <div className="bg-[#1f2428] border border-[#2f353c] rounded-xl p-4 space-y-1">
                  <div className="font-serif-title text-3xl font-bold text-white tabular-nums flex items-baseline">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <div className="text-[11px] text-[#b0b8c0] font-medium">Years Of Experience</div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="rotateInDownLeft" delay={400}>
                <div className="bg-[#1f2428] border border-[#2f353c] rounded-xl p-4 space-y-1">
                  <div className="font-serif-title text-3xl font-bold text-white tabular-nums flex items-baseline">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-[11px] text-[#b0b8c0] font-medium">Premium Finishes</div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="rotateInDownRight" delay={500}>
                <div className="bg-[#1f2428] border border-[#2f353c] rounded-xl p-4 space-y-1">
                  <div className="font-serif-title text-3xl font-bold text-white tabular-nums flex items-baseline">
                    <AnimatedCounter end={20} suffix="+" />
                  </div>
                  <div className="text-[11px] text-[#b0b8c0] font-medium">Cities Served</div>
                </div>
              </AnimateOnScroll>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
