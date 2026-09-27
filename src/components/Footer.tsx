import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowRight, Check } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (id: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenConsultation }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 3500);
  };

  return (
    <footer className="bg-[#0b0d10] text-[#a6adb9] border-t border-[#1e222b] text-xs">
      {/* Upper Footer: Newsletter & Manifesto */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1b1f28]">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-display text-2xl font-bold tracking-wider text-white">
                MODULUX
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30 px-1.5 py-0.5 rounded">
                HOME 2
              </span>
            </div>
            <p className="text-xs text-[#7e8595] max-w-md leading-relaxed">
              Maison d’ingénierie et d’ébénisterie modulaire dédiée aux cuisines contemporaines d’exception. 
              Conçues sur-mesure pour magnifier chaque instant de vie culinaire.
            </p>
            <div className="flex items-center gap-4 text-[#8a91a0] pt-2">
              <a href="#" aria-label="Instagram" className="hover:text-[#c5a880] transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-[#c5a880] transition-colors"><Linkedin className="w-4 h-4" /></a>
              <span className="text-[11px] text-[#555b68]">• Membre de la Guilde Européenne de l&apos;Agencement</span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <h4 className="font-serif-display text-lg text-white font-medium">
              Abonnement à la Gazette Architecturale Modulux
            </h4>
            <p className="text-xs text-[#7e8595]">
              Recevez trimestriellement nos cahiers de tendances, études de cas de projets d’architectes et innovations en matériaux nobles.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Votre adresse email professionnelle..."
                className="bg-[#151820] border border-[#272d3a] rounded-lg px-3.5 py-2.5 text-white placeholder-[#5d6474] text-xs focus:outline-none focus:border-[#c5a880] flex-1"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-[#c5a880] hover:bg-[#d6b991] text-[#0d0f12] font-bold text-xs uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-1.5 shrink-0"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-950" />
                    <span>Inscrit !</span>
                  </>
                ) : (
                  <>
                    <span>S&apos;inscrire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* 4 Columns Links & Showrooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h5 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Collections &amp; Modèles
            </h5>
            <ul className="space-y-2 text-[#7f8696]">
              <li>
                <button onClick={() => onNavigateSection('collections')} className="hover:text-white transition">
                  Atelier Milano (Îlot Cannelé)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collections')} className="hover:text-white transition">
                  Nordic Purist (Linéaire Noyer)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collections')} className="hover:text-white transition">
                  Grand Penthouse Dekton®
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('collections')} className="hover:text-white transition">
                  Monolithe Calacatta Home-2
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('configurator')} className="hover:text-[#c5a880] transition font-medium">
                  Configurateur &amp; Devis 3D →
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Matières &amp; Ingénierie
            </h5>
            <ul className="space-y-2 text-[#7f8696]">
              <li>Charnières &amp; Coulisses Blum®</li>
              <li>Surfaces Minérales Dekton® &amp; Marbres</li>
              <li>Panneaux Hydrofuges E0 Sans COV</li>
              <li>Finitions Nanotech Fenix NTM®</li>
              <li>Éclairages LED Architecturaux 2700K</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Nos Salons &amp; Showrooms
            </h5>
            <div className="space-y-2.5 text-[#7f8696]">
              <div>
                <strong className="text-white block">Paris Rive Gauche</strong>
                <span>48 Boulevard Saint-Germain, 75005 Paris</span>
              </div>
              <div>
                <strong className="text-white block">Genève Centre</strong>
                <span>12 Rue du Rhône, 1204 Genève</span>
              </div>
              <div>
                <strong className="text-white block">Bruxelles Louise</strong>
                <span>84 Avenue Louise, 1050 Bruxelles</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Service Architectes &amp; Particuliers
            </h5>
            <div className="space-y-2 text-[#7f8696]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
                <span className="text-white">+33 (0)1 42 68 55 00</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>devis@modulux-atelier.com</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-2 rounded bg-[#1c212c] hover:bg-[#282e3c] text-[#c5a880] border border-[#2e3546] font-semibold text-[11px] tracking-wider uppercase transition cursor-pointer"
                >
                  Prendre Rendez-vous 3D
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#181c24] flex flex-col sm:flex-row items-center justify-between gap-4 text-[#5e6575] text-[11px]">
          <div>
            © {new Date().getFullYear()} MODULUX Modular Architecture. Reproduction intégrale fidèle de Modulux Home-2.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition">Politique de Confidentialité</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Conditions Générales de Vente</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition">Garantie 15 Ans Blum®</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
