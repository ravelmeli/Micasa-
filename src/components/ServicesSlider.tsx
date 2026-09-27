import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import { AnimateOnScroll } from './OriginalMotion';

interface ServicesSliderProps {
  onSelectService: (serviceName: string) => void;
  onOpenContact: () => void;
}

const SERVICES_DATA = [
  {
    id: 1,
    title: 'Smart Kitchen Accessories',
    excerpt: 'Modern pull-out systems, corner organizers, and smart storage solutions crafted to maximize space.',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/service-detail4.png',
    fallback: '/src/assets/images/island_kitchen_suite_1790510326928.jpg',
  },
  {
    id: 2,
    title: 'Countertop Solutions',
    excerpt: 'Durable and stylish countertop designs crafted with premium sintered stone, quartz, and marble.',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/service-detail5.png',
    fallback: '/src/assets/images/minimalist_cabinets_1790510338268.jpg',
  },
  {
    id: 3,
    title: 'Custom Cabinet Installation',
    excerpt: 'Precision-crafted cabinet installations designed for modern storage, durability, and smooth soft-close mechanics.',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/service-detail6.png',
    fallback: '/src/assets/images/hero_modular_kitchen_1790510314763.jpg',
  },
  {
    id: 4,
    title: 'Interior Styling & Finishes',
    excerpt: 'Modern colors, textures, and premium finishes designed to create a cohesive luxury atmosphere.',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/service-detail7.png',
    fallback: '/src/assets/images/luxury_penthouse_kitchen_1790510349448.jpg',
  },
  {
    id: 5,
    title: 'Built-In Appliance Integration',
    excerpt: 'Seamless integration of modern kitchen appliances for a clean, uninterrupted architectural aesthetic.',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/service-detail8.png',
    fallback: '/src/assets/images/island_kitchen_suite_1790510326928.jpg',
  },
  {
    id: 6,
    title: 'Complete Kitchen Consultation',
    excerpt: 'Expert guidance for planning modern modular kitchens tailored to your exact floor plan and daily needs.',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/service-detail9.png',
    fallback: '/src/assets/images/minimalist_cabinets_1790510338268.jpg',
  },
  {
    id: 7,
    title: 'Modular Kitchen Design',
    excerpt: 'Our modular kitchen design service focuses on creating stylish, ergonomic, and long-lasting cooking spaces.',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/service-detail1-1.png',
    fallback: '/src/assets/images/hero_modular_kitchen_1790510314763.jpg',
  },
  {
    id: 8,
    title: 'Custom Storage Solutions',
    excerpt: 'Innovative storage systems crafted to improve organization, efficiency, and clutter-free living.',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/service-detail2.png',
    fallback: '/src/assets/images/luxury_penthouse_kitchen_1790510349448.jpg',
  },
  {
    id: 9,
    title: 'Luxury Kitchen Renovation',
    excerpt: 'Transform outdated kitchens into sophisticated modern spaces with premium materials and turnkey execution.',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/service-detail3.png',
    fallback: '/src/assets/images/island_kitchen_suite_1790510326928.jpg',
  },
];

export const ServicesSlider: React.FC<ServicesSliderProps> = ({ onSelectService, onOpenContact }) => {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const maxIndex = SERVICES_DATA.length - visibleCount;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleServices = SERVICES_DATA.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#16191c] text-white relative overflow-hidden">
      
      {/* Decorative background leaf */}
      <div className="absolute top-0 right-0 w-36 h-72 opacity-10 pointer-events-none">
        <svg viewBox="0 0 138 297" fill="none" className="w-full h-full text-white">
          <path d="M0 0C60 40 120 120 138 297H0V0Z" fill="currentColor"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#2c3237]">
          <div className="space-y-3 max-w-2xl">
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <span className="text-xs font-bold tracking-[0.2em] text-[#e8242d] uppercase">
                OUR SERVICES
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.2]">
                Crafted Modular Kitchen Solutions for{' '}
                <span className="text-[#c4121a] italic">Contemporary Living</span>
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="space-y-4 max-w-md">
            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <p className="text-xs sm:text-sm text-[#cbd4c5] font-light leading-relaxed">
                We create luxury modular kitchen and interior solutions that combine elegant aesthetics, 
                intelligent functionality, and premium craftsmanship.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenContact}
                  className="ekit_creative_button px-5 py-2.5 rounded-full bg-[#c4121a] hover:bg-[#dc1822] text-white text-xs font-semibold tracking-wider transition flex items-center gap-2 cursor-pointer group shadow-md"
                >
                  <span className="relative z-10">View All Services</span>
                  <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Slider Arrow Controls */}
                <div className="flex items-center gap-2 ml-auto">
                  <button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    aria-label="Previous services"
                    className="w-8 h-8 rounded-full border border-[#394046] flex items-center justify-center hover:bg-[#262c31] disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={startIndex >= maxIndex}
                    aria-label="Next services"
                    className="w-8 h-8 rounded-full border border-[#394046] flex items-center justify-center hover:bg-[#262c31] disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Services Cards Slider / Grid with fadeInUp */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleServices.map((service, idx) => (
            <AnimateOnScroll key={service.id} animation="fadeInUp" delay={idx * 150}>
              <article className="bg-[#1f2428] border border-[#30373e] rounded-2xl overflow-hidden hover:border-[#c4121a]/70 transition-all duration-300 flex flex-col group h-full">
                {/* Image with hover scale */}
                <div className="h-60 sm:h-64 overflow-hidden bg-[#181b1e] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = service.fallback;
                    }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif-title text-xl font-bold text-white group-hover:text-[#e8242d] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#cad1d8] leading-relaxed">
                      {service.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#2d343b] flex items-center justify-between">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#e8242d] transition-colors cursor-pointer"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom Callout Bar */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <div className="bg-[#1c2024] border border-[#2f363c] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#c4121a] text-white flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm text-[#d4dcce]">
                <span>Let’s Create Your Dream Kitchen Together. </span>
                <button
                  onClick={onOpenContact}
                  className="font-bold underline text-white hover:text-[#e8242d] transition-colors cursor-pointer ml-1"
                >
                  Get In Touch Today!
                </button>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="px-5 py-2.5 rounded-full bg-[#2b3137] hover:bg-[#c4121a] text-white text-xs font-semibold tracking-wider transition cursor-pointer shrink-0"
            >
              Start A Conversation
            </button>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};
