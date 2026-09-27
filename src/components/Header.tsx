import React, { useState } from 'react';
import {
  Phone,
  Mail,
  Clock,
  Instagram,
  Linkedin,
  Search,
  Menu,
  X,
  ChevronDown,
  Calendar,
  Sparkles,
  MapPin,
  ArrowRight
} from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onNavigateSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { label: 'Accueil', id: 'hero', badge: 'Home 2' },
    { label: 'Collections', id: 'collections' },
    { label: 'Configurateur 3D', id: 'configurator', highlight: true },
    { label: 'Savoir-Faire', id: 'craftsmanship' },
    { label: 'Réalisations', id: 'portfolio' },
    { label: 'Témoignages', id: 'testimonials' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#121417]/95 backdrop-blur-md border-b border-[#2a2d34] text-white">
      {/* Top Announcement & Contact Bar */}
      <div className="hidden lg:block bg-[#0b0d0f] border-b border-[#1f2229] py-2 px-6 text-xs text-[#a0a5b1]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>+33 (0)1 42 68 55 00</span>
            </span>
            <span className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>contact@modulux-atelier.com</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Showroom : Lun - Sam 9h30 - 19h00</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1 text-[#c5a880] font-medium">
              <Sparkles className="w-3 h-3" />
              <span>Garantie Allemande 15 Ans Blum® &amp; Hettich®</span>
            </span>
            <span className="text-[#3b404d]">•</span>
            <div className="flex items-center gap-3 text-[#a0a5b1]">
              <a href="#" aria-label="Instagram" className="hover:text-[#c5a880] transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#c5a880] transition-colors"><Linkedin className="w-3.5 h-3.5" /></a>
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-[#1e222a] text-[#c5a880] border border-[#2d323e]">FR / EUR</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Brand Wordmark (Single element) */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); onNavigateSection('hero'); }}
          className="group flex flex-col cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <span className="font-serif-display text-2xl sm:text-3xl font-semibold tracking-wider text-white group-hover:text-[#c5a880] transition-colors">
              MODULUX
            </span>
            <span className="text-[10px] tracking-widest uppercase bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/40 px-1.5 py-0.5 rounded font-mono font-medium">
              HOME 2
            </span>
          </div>
          <span className="text-[9px] tracking-[0.25em] uppercase text-[#8d929f] font-light">
            Cuisines Modulaires &amp; Architecture
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#d4d7e0]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigateSection(link.id)}
              className={`hover:text-[#c5a880] transition-colors relative py-1 cursor-pointer flex items-center gap-1.5 ${
                link.highlight ? 'text-[#c5a880] font-semibold' : ''
              }`}
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#20252e] text-[#c5a880] border border-[#303643]">
                  {link.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons & Search */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Recherche"
            className="w-9 h-9 rounded-full bg-[#1b1e24] hover:bg-[#252a33] text-[#d4d7e0] hover:text-white flex items-center justify-center border border-[#2b303a] transition cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#c5a880] hover:bg-[#d6b991] text-[#0d0f12] text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-[#c5a880]/10 hover:shadow-lg hover:shadow-[#c5a880]/20 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Étude 3D Gratuite</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
            className="lg:hidden w-10 h-10 rounded-lg bg-[#1b1e24] border border-[#2b303a] text-white flex items-center justify-center hover:bg-[#262c37] transition cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Expandable Search Overlay */}
      {searchOpen && (
        <div className="bg-[#171a20] border-t border-b border-[#282d38] px-4 py-3 animate-in fade-in duration-200">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <Search className="w-4 h-4 text-[#c5a880]" />
            <input
              type="text"
              placeholder="Rechercher une collection (ex: Îlot Central, Quartz Calacatta, Bois Fumé, Meubles Hauteur)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-white placeholder-[#787f8f] focus:outline-none"
              autoFocus
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-xs text-[#8d929f] hover:text-white"
              >
                Effacer
              </button>
            )}
            <button
              onClick={() => setSearchOpen(false)}
              className="text-xs px-2.5 py-1 bg-[#262b36] hover:bg-[#323947] text-white rounded"
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121417] border-b border-[#282d38] px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigateSection(link.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-medium text-[#d4d7e0] hover:bg-[#1b1f27] hover:text-[#c5a880] flex items-center justify-between"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded bg-[#20252e] text-[#c5a880] border border-[#303643]">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#232731] space-y-3">
            <button
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded bg-[#c5a880] text-[#0d0f12] text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Prendre Rendez-vous / Étude 3D</span>
            </button>
            <div className="text-xs text-[#8d929f] text-center pt-2">
              Showroom Paris : 48 Boulevard Saint-Germain, 75005 Paris
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
