import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { AnimateOnScroll } from './OriginalMotion';

interface MaterialsSectionProps {
  onOpenContact: () => void;
}

const MATERIALS_ITEMS = [
  {
    icon: '🪨',
    title: 'Quartz Countertops',
    description: 'Durable and elegant surfaces designed to withstand everyday cooking while adding a clean, refined aesthetic.',
  },
  {
    icon: '✨',
    title: 'Acrylic Cabinet Finishes',
    description: 'Smooth, sleek, and modern cabinet finishes that create a refined look while offering easy maintenance.',
  },
  {
    icon: '🪵',
    title: 'Natural Wood Textures',
    description: 'Warm wood tones and natural textures that bring timeless character, depth, and a welcoming atmosphere.',
  },
  {
    icon: '💡',
    title: 'Under-Cabinet Lighting',
    description: 'Thoughtfully placed lighting that brightens your work areas, improves functionality, and creates cozy ambient glow.',
  },
  {
    icon: '🪟',
    title: 'Designer Glass Panels',
    description: 'Elegant glass details that add openness and sophistication while bringing a brighter, more airy feel to cabinetry.',
  },
  {
    icon: '🗄️',
    title: 'Smart Storage Accessories',
    description: 'Cleverly designed storage solutions that maximize available space, keep essentials organized, and eliminate clutter.',
  },
];

export const MaterialsSection: React.FC<MaterialsSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="materials" className="py-20 lg:py-28 bg-[#16191c] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#2c3237]">
          <div className="space-y-3 max-w-2xl">
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <span className="text-xs font-bold tracking-[0.2em] text-[#e8242d] uppercase">
                OUR MATERIAL COLLECTIONS
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-white leading-[1.2]">
                Premium Materials For <span className="text-[#c4121a] italic font-normal">Beautiful Kitchens</span>
              </h2>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <p className="text-xs sm:text-sm text-[#cad1d8] font-light leading-relaxed max-w-md">
              Explore our carefully selected range of premium materials, elegant finishes, 
              and smart solutions designed to create stylish, durable, and functional modular kitchens.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 6 Materials Grid with fadeInUp */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MATERIALS_ITEMS.map((item, idx) => (
            <AnimateOnScroll key={idx} animation="fadeInUp" delay={idx * 100}>
              <div className="bg-[#1f2428] p-6 rounded-2xl border border-[#30373e] hover:border-[#c4121a] transition-all duration-300 space-y-3 group h-full">
                <div className="w-12 h-12 rounded-xl bg-[#16191c] flex items-center justify-center text-xl shadow-inner group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-serif-title text-xl font-bold text-white group-hover:text-[#e8242d] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#cad1d8] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Ready to Upgrade? Banner */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <div className="bg-[#1c2024] border border-[#2f363c] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Banner Left Image */}
              <div className="lg:col-span-5 h-64 sm:h-80 lg:h-full min-h-[300px] overflow-hidden bg-[#16191c]">
                <img
                  src="https://modulux.wpthemeverse.com/wp-content/uploads/2026/08/upgrade-img.png"
                  alt="Upgrade Kitchen Materials"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/src/assets/images/island_kitchen_suite_1790510326928.jpg';
                  }}
                />
              </div>

              {/* Banner Right Copy */}
              <div className="lg:col-span-7 p-6 sm:p-10 space-y-5">
                <span className="text-xs font-bold tracking-[0.2em] text-[#e8242d] uppercase">
                  READY TO UPGRADE?
                </span>
                <h3 className="font-serif-title text-2xl sm:text-4xl font-normal text-white leading-tight">
                  Bring Premium Materials Into <span className="text-[#c4121a] italic">Your Dream Kitchen</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#cbd4c5] font-light leading-relaxed max-w-xl">
                  Explore our curated materials and finishes, and let’s create a kitchen that perfectly 
                  matches your style, space, and everyday needs.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={onOpenContact}
                    className="ekit_creative_button px-6 py-3 rounded-full bg-[#c4121a] hover:bg-[#dc1822] text-white text-xs font-semibold tracking-wider transition flex items-center gap-2 cursor-pointer group shadow-md"
                  >
                    <span className="relative z-10">Explore Materials</span>
                    <div className="relative z-10 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>

                  <a
                    href="tel:+18001234567"
                    className="flex items-center gap-2.5 text-xs text-white hover:text-[#e8242d] transition"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#16191c] flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5 text-[#c4121a]" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#9baa94] uppercase font-normal">Call Us</div>
                      <div className="font-bold">+1 (800) 123 4567</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};
