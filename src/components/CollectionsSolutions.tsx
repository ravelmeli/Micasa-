import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimateOnScroll } from './OriginalMotion';

interface CollectionsSolutionsProps {
  onSelectSolution: (title: string) => void;
}

const SOLUTIONS = [
  {
    badge: 'Scandinavian',
    title: 'Scandinavian Kitchen',
    description: 'Minimal Scandinavian-inspired modular kitchen with clean lines, warm textures, and efficient storage.',
    tags: ['Open Concept', 'Matte Olive', 'Smart Pull-Outs', 'Premium Marble'],
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/solution1.png',
    fallback: '/src/assets/images/island_kitchen_suite_1790510326928.jpg',
  },
  {
    badge: 'Luxury',
    title: 'Contemporary Luxury Kitchen',
    description: 'Elegant modern kitchen featuring premium finishes, integrated lighting, and refined architectural details.',
    tags: ['Contemporary', 'Walnut & Black', 'Ambient LED', 'Built-In Quartz'],
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/solution2.png',
    fallback: '/src/assets/images/hero_modular_kitchen_1790510314763.jpg',
  },
  {
    badge: 'Urban',
    title: 'Smart Urban Kitchen',
    description: 'Compact kitchen designed for urban homes with intelligent storage and seamless cooking workflow.',
    tags: ['L-Shaped', 'Matte White', 'Tall Units', 'Granite'],
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/solution3.png',
    fallback: '/src/assets/images/minimalist_cabinets_1790510338268.jpg',
  },
  {
    badge: 'Classic',
    title: 'Modern Classic Kitchen',
    description: 'Timeless kitchen design blending classic elegance with modern functionality and everyday comfort.',
    tags: ['U-Shaped', 'Oak & Cream', 'Soft-Close Drawers', 'Natural Stone'],
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/solution4.png',
    fallback: '/src/assets/images/luxury_penthouse_kitchen_1790510349448.jpg',
  },
];

export const CollectionsSolutions: React.FC<CollectionsSolutionsProps> = ({ onSelectSolution }) => {
  return (
    <section id="collections" className="py-20 lg:py-28 bg-[#f0ebe1] text-[#1a1e21] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <span className="text-xs font-bold tracking-[0.2em] text-[#c4121a] uppercase">
              MODULAR KITCHEN COLLECTIONS
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1e21] leading-[1.2]">
              Smart &amp; Stylish Modular Kitchen <span className="text-[#c4121a] italic font-normal">Solutions For Every Home</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <p className="text-xs sm:text-sm text-[#525a62] max-w-xl mx-auto leading-relaxed font-light">
              From smart layouts to premium finishes, we design and build modular kitchens that are stylish, 
              functional, and made for modern living.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 4 Cards Grid with fadeInUp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTIONS.map((sol, idx) => (
            <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 150}>
              <div
                className="bg-[#f7f5f0] rounded-2xl overflow-hidden border border-[#ded5c2] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group cursor-pointer h-full"
                onClick={() => onSelectSolution(sol.title)}
              >
                {/* Image & Absolute Category Badge */}
                <div className="relative h-60 sm:h-72 overflow-hidden bg-[#e0ded8]">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = sol.fallback;
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-[#1a1e21]/90 backdrop-blur-md text-[#f7f5f0] px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider">
                    {sol.badge}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <h3 className="font-serif-title text-2xl font-bold text-[#1a1e21] group-hover:text-[#c4121a] transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5a626a] leading-relaxed font-light">
                      {sol.description}
                    </p>
                  </div>

                  {/* Tags Bar */}
                  <div className="pt-4 border-t border-[#e2d8c5]">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-[#444a51]">
                      {sol.tags.map((tag, i) => (
                        <div key={i} className="flex items-center gap-1.5 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c4121a]" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Clickable Read More CTA */}
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#1a1e21] group-hover:text-[#c4121a] transition-colors">
                    <span>Explore this collection</span>
                    <div className="w-6 h-6 rounded-full bg-[#ede7da] flex items-center justify-center group-hover:bg-[#c4121a] group-hover:text-white transition-colors">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};
