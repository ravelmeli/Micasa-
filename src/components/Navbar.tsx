import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenEstimate: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-[#f7f5f0]/95 backdrop-blur-md border-b border-[#e5dfd5] text-[#1c1f22] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('home');
          }}
          className="flex items-center group cursor-pointer"
        >
          <Logo variant="dark" size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#232629]">
          
          {/* Home Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('home')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-[#c4121a] transition-colors py-2 cursor-pointer font-semibold text-[#c4121a]">
              <span>Home</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {activeDropdown === 'home' && (
              <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-[#e5dfd5] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-bold text-[#c4121a] uppercase tracking-wider">
                  Home Page 2 (Current)
                </div>
                <a
                  href="#home"
                  onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
                  className="block px-4 py-2 text-xs font-semibold text-[#c4121a] bg-[#f9e9ea]"
                >
                  Home – Image (Active)
                </a>
                <a
                  href="#video"
                  onClick={(e) => { e.preventDefault(); onNavigate('video'); }}
                  className="block px-4 py-2 text-xs text-[#52565b] hover:text-[#c4121a] hover:bg-[#faf7f5]"
                >
                  Home – Video
                </a>
                <a
                  href="#collections"
                  onClick={(e) => { e.preventDefault(); onNavigate('collections'); }}
                  className="block px-4 py-2 text-xs text-[#52565b] hover:text-[#c4121a] hover:bg-[#faf7f5]"
                >
                  Home – Slider
                </a>
                <div className="my-1 border-t border-[#f0ede6]" />
                <div className="px-3 py-1.5 text-[10px] font-bold text-[#8d9298] uppercase tracking-wider">
                  Home Page 1
                </div>
                <span className="block px-4 py-1.5 text-xs text-[#9a9fa5]">Home 1 – Showcase</span>
              </div>
            )}
          </div>

          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); onNavigate('about'); }}
            className="hover:text-[#c4121a] transition-colors py-2"
          >
            About us
          </a>

          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); onNavigate('services'); }}
            className="hover:text-[#c4121a] transition-colors py-2"
          >
            Service
          </a>

          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); onNavigate('projects'); }}
            className="hover:text-[#c4121a] transition-colors py-2"
          >
            Projects
          </a>

          <a
            href="#materials"
            onClick={(e) => { e.preventDefault(); onNavigate('materials'); }}
            className="hover:text-[#c4121a] transition-colors py-2"
          >
            Materials
          </a>

          <a
            href="#blog"
            onClick={(e) => { e.preventDefault(); onNavigate('blog'); }}
            className="hover:text-[#c4121a] transition-colors py-2"
          >
            Blog
          </a>

          <a
            href="#faq"
            onClick={(e) => { e.preventDefault(); onNavigate('faq'); }}
            className="hover:text-[#c4121a] transition-colors py-2"
          >
            FAQs
          </a>

          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}
            className="hover:text-[#c4121a] transition-colors py-2"
          >
            Contact Us
          </a>
        </nav>

        {/* Right CTA Button ("Get Free Estimate") in Brand Red */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenEstimate}
            className="ekit_creative_button hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#c4121a] hover:bg-[#dc1822] text-white text-xs font-semibold tracking-wider transition-all duration-300 shadow-md shadow-[#c4121a]/20 active:scale-95 cursor-pointer group"
          >
            <span className="relative z-10">Get Free Estimate</span>
            <div className="relative z-10 w-5 h-5 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors">
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2 rounded-lg bg-[#eee8dd] hover:bg-[#e4dcce] text-[#222528] transition cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f7f5f0] border-t border-[#e2dcd1] px-6 py-5 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <button
              onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm font-semibold text-[#c4121a]"
            >
              Home (Home 2)
            </button>
            <button
              onClick={() => { onNavigate('about'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm text-[#464a4f]"
            >
              About Us
            </button>
            <button
              onClick={() => { onNavigate('services'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm text-[#464a4f]"
            >
              Our Services
            </button>
            <button
              onClick={() => { onNavigate('collections'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm text-[#464a4f]"
            >
              Kitchen Collections
            </button>
            <button
              onClick={() => { onNavigate('materials'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm text-[#464a4f]"
            >
              Materials &amp; Finishes
            </button>
            <button
              onClick={() => { onNavigate('projects'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm text-[#464a4f]"
            >
              Our Projects
            </button>
            <button
              onClick={() => { onNavigate('testimonials'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm text-[#464a4f]"
            >
              Testimonials
            </button>
            <button
              onClick={() => { onNavigate('faq'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm text-[#464a4f]"
            >
              FAQs
            </button>
            <button
              onClick={() => { onNavigate('blog'); setMobileMenuOpen(false); }}
              className="w-full text-left py-2 text-sm text-[#464a4f]"
            >
              Kitchen Insights / Blog
            </button>
          </div>

          <div className="pt-3 border-t border-[#e2dcd1]">
            <button
              onClick={() => { onOpenEstimate(); setMobileMenuOpen(false); }}
              className="w-full py-3 rounded-full bg-[#c4121a] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
