import React from 'react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { AnimateOnScroll } from './OriginalMotion';

interface BlogHome2Props {
  onViewAllBlogs: () => void;
  onReadArticle: (title: string) => void;
}

const BLOGS_DATA = [
  {
    id: 1,
    title: 'Smart Storage Solutions for Small Modular Kitchens',
    date: 'May 28, 2026',
    category: 'Premium Countertop Solutions',
    excerpt: 'Small modular kitchens can feel challenging when maximizing every square inch of counter space and drawer capacity...',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/blog-img-1.png',
    fallback: '/src/assets/images/island_kitchen_suite_1790510326928.jpg',
  },
  {
    id: 2,
    title: 'Trending Color Combination for Modern Kitchens',
    date: 'May 28, 2026',
    category: 'Modern Kitchen Design',
    excerpt: 'The defining trend for modern kitchen color palettes blends warm naturals, matte olive accents, and organic travertine...',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/blog-img-2.png',
    fallback: '/src/assets/images/minimalist_cabinets_1790510338268.jpg',
  },
  {
    id: 3,
    title: 'Essential Features Every Modular Kitchen Should Have',
    date: 'May 28, 2026',
    category: 'Contemporary Interior Styling',
    excerpt: 'A highly functional modular kitchen depends on ergonomic workflows, soft-close hardware, and thoughtful appliance integration...',
    image: 'https://modulux.wpthemeverse.com/wp-content/uploads/2026/05/blog-img-3.png',
    fallback: '/src/assets/images/hero_modular_kitchen_1790510314763.jpg',
  },
];

export const BlogHome2: React.FC<BlogHome2Props> = ({ onViewAllBlogs, onReadArticle }) => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-[#f0ebe1] text-[#1a1e21] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <AnimateOnScroll animation="fadeInUp" delay={100}>
            <span className="text-xs font-bold tracking-[0.2em] text-[#c4121a] uppercase">
              KITCHEN INSIGHTS
            </span>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={200}>
            <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1a1e21] leading-[1.2]">
              Ideas &amp; Inspiration For <span className="text-[#c4121a] italic font-normal">Modern Kitchen Living</span>
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll animation="fadeInUp" delay={300}>
            <p className="text-xs sm:text-sm text-[#525a62] max-w-xl mx-auto leading-relaxed font-light">
              Discover expert tips, design inspiration, material guides, and practical ideas to help you create a kitchen that looks beautiful and works effortlessly.
            </p>
          </AnimateOnScroll>
        </div>

        {/* 3 Blog Cards with Elementor fadeIn animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS_DATA.map((blog, idx) => (
            <AnimateOnScroll key={blog.id} animation="fadeIn" delay={idx * 150}>
              <article
                className="bg-[#f7f5f0] rounded-2xl overflow-hidden border border-[#ded5c2] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer h-full"
                onClick={() => onReadArticle(blog.title)}
              >
                {/* Image */}
                <div className="h-56 sm:h-64 overflow-hidden bg-[#e0ded8] relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = blog.fallback;
                    }}
                  />
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    
                    {/* Meta items */}
                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-[#767e87]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#c4121a]" />
                        <span>{blog.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5 font-medium text-[#1a1e21]">
                        <Tag className="w-3.5 h-3.5 text-[#c4121a]" />
                        <span>{blog.category}</span>
                      </span>
                    </div>

                    <h3 className="font-serif-title text-xl font-bold text-[#1a1e21] group-hover:text-[#c4121a] transition-colors leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-[#5a626a] leading-relaxed font-light">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#e8dfcf] flex items-center justify-between">
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

        {/* View All Blogs Button */}
        <AnimateOnScroll animation="fadeInUp" delay={200}>
          <div className="text-center pt-4">
            <button
              onClick={onViewAllBlogs}
              className="ekit_creative_button px-7 py-3.5 rounded-full bg-[#1a1e21] hover:bg-[#c4121a] text-white text-xs font-semibold tracking-wider transition-all duration-300 inline-flex items-center gap-2 cursor-pointer shadow-md group"
            >
              <span className="relative z-10">View All Blogs</span>
              <div className="relative z-10 w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
};
