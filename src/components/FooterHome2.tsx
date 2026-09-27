import React, { useState } from 'react';
import { ArrowUp, Mail, MapPin, Phone, Clock, ArrowRight, Check } from 'lucide-react';

interface FooterHome2Props {
  onNavigate: (sectionId: string) => void;
  onOpenEstimate: () => void;
}

export const FooterHome2: React.FC<FooterHome2Props> = ({ onNavigate, onOpenEstimate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#121417] text-[#cbd2d8] relative overflow-hidden text-xs">
      
      {/* Top CTA Banner */}
      <div className="border-b border-[#24292e] bg-[#171a1d] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <h3 className="font-serif-title text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Transform Your Home with Premium <span className="text-[#c4121a] italic">Modular Kitchen Designs</span>
            </h3>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3 rounded-full bg-[#c4121a] hover:bg-[#dc1822] text-white text-xs font-semibold tracking-wider transition flex items-center gap-2 cursor-pointer group shadow-md"
              >
                <span>View Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="px-6 py-3 rounded-full bg-[#22272c] hover:bg-[#2b3137] text-white border border-[#384048] text-xs font-semibold tracking-wider transition flex items-center gap-2 cursor-pointer group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Rotating Circular "Contact Us Today *" Stamp */}
          <div
            onClick={onOpenEstimate}
            className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center cursor-pointer group shrink-0"
          >
            <svg className="w-full h-full animate-spin-slow text-[#cbd3da]" viewBox="0 0 100 100">
              <path
                id="circlePathFooter"
                d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                fill="none"
              />
              <text className="text-[9px] uppercase font-bold tracking-[2.8px] fill-current">
                <textPath href="#circlePathFooter">
                  Contact Us Today * Contact Us Today *
                </textPath>
              </text>
            </svg>

            <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-[#c4121a] group-hover:bg-[#dc1822] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <ArrowRight className="w-5 h-5 -rotate-45" />
            </div>
          </div>

        </div>
      </div>

      {/* Main 4 Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#c4121a] text-white flex items-center justify-center font-serif font-bold text-base">
                M
              </div>
              <span className="font-serif-title font-bold text-2xl text-white tracking-wide">
                MODULUX
              </span>
            </div>

            <h4 className="font-serif-title text-lg font-bold text-white leading-snug">
              Ready to Design Your Dream Kitchen?
            </h4>

            <p className="text-xs text-[#a0a8b2] leading-relaxed font-light">
              Connect with our design experts for smart layouts, elegant finishes, and innovative storage solutions tailored to your lifestyle and home.
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="space-y-2 pt-1">
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1f2428] border border-[#323940] rounded-full px-4 py-2.5 text-xs text-white placeholder-[#788089] focus:outline-none focus:border-[#c4121a] flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#c4121a] hover:bg-[#dc1822] text-white text-xs font-semibold uppercase tracking-wider transition cursor-pointer shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : 'Send'}
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-[#e8242d]">Thank you! We received your request.</div>
              )}
            </form>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="font-serif-title text-base font-bold text-white">
              Quick Links
            </h5>
            <ul className="space-y-2.5 text-[#a0a8b2]">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition">About us</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition">Our Service</button></li>
              <li><button onClick={() => onNavigate('projects')} className="hover:text-white transition">Projects</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-white transition">Latest Blog</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition">Contact Us</button></li>
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-serif-title text-base font-bold text-white">
              Our Services
            </h5>
            <ul className="space-y-2.5 text-[#a0a8b2]">
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition text-left">Modular Kitchen Design</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition text-left">Custom Storage Solutions</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition text-left">Luxury Kitchen Renovation</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition text-left">Smart Kitchen Accessories</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition text-left">Countertop Solutions</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-white transition text-left">Interior Styling &amp; Finishes</button></li>
            </ul>
          </div>

          {/* Column 4: Contact Informations (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="font-serif-title text-base font-bold text-white">
              Contact Informations
            </h5>
            <div className="space-y-3 text-[#a0a8b2]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#c4121a] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-[#7d858e] uppercase">Call Us on</div>
                  <a href="tel:+18001234567" className="font-semibold text-white hover:text-[#e8242d] transition">
                    +1 (800) 123 4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#c4121a] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-[#7d858e] uppercase">Reach out</div>
                  <a href="mailto:hello@moduluxdesign.com" className="font-semibold text-white hover:text-[#e8242d] transition">
                    hello@moduluxdesign.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c4121a] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-[#7d858e] uppercase">Location</div>
                  <div className="text-white">25 Madison Avenue, New York, USA</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#c4121a] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-[#7d858e] uppercase">Working Hours</div>
                  <div className="text-white">Mon – Fri: 9:00 AM – 6:00 PM</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-[#24292e] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#78818c]">
          <div>
            © 2026 Modulux Modular Kitchen Services. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-[#9aa4b0]">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition">
              Facebook
            </a>
            <span>•</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition">
              Instagram
            </a>
            <span>•</span>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition">
              X / Twitter
            </a>
            <span>•</span>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-white transition">
              YouTube
            </a>
          </div>
        </div>

      </div>

      {/* Floating Back to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-[#1a1e21] text-white hover:bg-[#c4121a] shadow-2xl border border-[#2f363c] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

    </footer>
  );
};
