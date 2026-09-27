import React from 'react';
import { ArrowRight, MapPin, User } from 'lucide-react';
import { AnimateOnScroll } from './OriginalMotion';

interface ProjectsHome2Props {
  onSelectProject: (title: string) => void;
  onViewAllProjects: () => void;
}

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Minimal Nordic Kitchen',
    client: 'Nordic Kitchen Studio',
    location: 'Copenhagen, Denmark',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/project-detail4.png',
    fallback: '/src/assets/images/island_kitchen_suite_1790510326928.jpg',
  },
  {
    id: 2,
    title: 'Contemporary Open Space Kitchen',
    client: 'Horizon Interior Lab',
    location: 'Sydney, Australia',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/project-detail5.png',
    fallback: '/src/assets/images/hero_modular_kitchen_1790510314763.jpg',
  },
  {
    id: 3,
    title: 'Luxury Urban Kitchen Interior',
    client: 'MetroLiving Studio',
    location: 'Toronto, Canada',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/project-detail6.png',
    fallback: '/src/assets/images/luxury_penthouse_kitchen_1790510349448.jpg',
  },
];

export const ProjectsHome2: React.FC<ProjectsHome2Props> = ({
  onSelectProject,
  onViewAllProjects,
}) => {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#f7f5f0] text-[#1a1e21] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#ded5c2]">
          <div className="space-y-3 max-w-2xl">
            <AnimateOnScroll animation="fadeInUp" delay={100}>
              <span className="text-xs font-bold tracking-[0.2em] text-[#c4121a] uppercase">
                OUR PROJECTS
              </span>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fadeInUp" delay={200}>
              <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1e21] leading-[1.2]">
                Modern Kitchen Spaces Designed To <span className="text-[#c4121a] italic font-normal">Make Everyday Living Better</span>
              </h2>
            </AnimateOnScroll>
          </div>

          <div className="space-y-4 max-w-md">
            <AnimateOnScroll animation="fadeInUp" delay={300}>
              <p className="text-xs sm:text-sm text-[#525a62] font-light leading-relaxed">
                Explore a collection of thoughtfully designed modular kitchens where smart functionality, 
                refined aesthetics, and quality craftsmanship come together.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fadeInUp" delay={400}>
              <button
                onClick={onViewAllProjects}
                className="ekit_creative_button px-6 py-3 rounded-full bg-[#1a1e21] hover:bg-[#c4121a] text-white text-xs font-semibold tracking-wider transition flex items-center gap-2 cursor-pointer group shadow-sm"
              >
                <span className="relative z-10">View All Project</span>
                <div className="relative z-10 w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            </AnimateOnScroll>
          </div>
        </div>

        {/* 3 Projects Grid with original Elementor fadeIn */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj, idx) => (
            <AnimateOnScroll key={proj.id} animation="fadeIn" delay={idx * 150}>
              <article
                className="bg-white rounded-2xl overflow-hidden border border-[#ded5c2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer h-full"
                onClick={() => onSelectProject(proj.title)}
              >
                {/* Image with hover zoom */}
                <div className="h-64 sm:h-72 overflow-hidden bg-[#e0ded8] relative">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = proj.fallback;
                    }}
                  />
                </div>

                {/* Info content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h3 className="font-serif-title text-2xl font-bold text-[#1a1e21] group-hover:text-[#c4121a] transition-colors">
                      {proj.title}
                    </h3>

                    <div className="space-y-1.5 text-xs text-[#6e7769]">
                      <div className="flex items-center gap-2">
                        <User className="w-3.5 h-3.5 text-[#c4121a]" />
                        <span className="text-[#889098]">Projected By:</span>
                        <span className="font-medium text-[#1a1e21]">{proj.client}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#c4121a]" />
                        <span className="text-[#889098]">Location:</span>
                        <span className="font-medium text-[#1a1e21]">{proj.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#f0ede6] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#1a1e21] group-hover:text-[#c4121a] transition-colors flex items-center gap-1.5">
                      <span>Read More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};
