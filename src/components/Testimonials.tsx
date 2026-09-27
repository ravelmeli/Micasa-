import React from 'react';
import { Star, Quote, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: 'Laurent & Éléonore de Montmirail',
      role: 'Propriétaires à Neuilly-sur-Seine',
      context: 'Rénovation complète d’une cuisine de 38 m²',
      text: '« La précision d’assemblage des caissons et la qualité de coupe du Dekton sont remarquables. Nos invités sont systématiquement ébahis par l’îlot monobloc et l’absence totale de poignée apparente. Un investissement pérenne. »',
      rating: 5,
    },
    {
      name: 'Claire Vaudreuil',
      role: 'Architecte DPLG — Studio Vaudreuil Architecture',
      context: 'Collaboration sur 6 résidences privées en Île-de-France',
      text: '« Modulux est notre partenaire de référence pour nos chantiers d’exception. Leurs tolérances d’usinage sont au millimètre près, et la quincaillerie Blum assure une fluidité d’ouverture inégalée même sur des façades de 2,80m de haut. »',
      rating: 5,
    },
    {
      name: 'Alexandre Mercier',
      role: 'Chef Propriétaire & Gastronome, Lyon',
      context: 'Cuisine semi-professionnelle résidentielle',
      text: '« En tant que chef, l’ergonomie du triangle d’activité et la résistance thermique des surfaces étaient primordiales. Modulux a su concevoir un espace où l’art culinaire le plus exigeant s’exprime sans aucune contrainte. »',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#faf9f6] text-[#121417]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#a8824f] uppercase">
            Avis &amp; Confiance
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-medium tracking-tight text-[#121417]">
            Ce que disent nos clients &amp; architectes
          </h2>
          <p className="text-sm sm:text-base text-[#686f7d]">
            Plus de 2 850 réalisations livrées en France, Suisse et Belgique avec un taux de satisfaction certifié de 99,4%.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-[#e8e4db] shadow-sm flex flex-col justify-between space-y-6 hover:shadow-lg transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#c5a880] gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c5a880]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#dfd9ce]" />
                </div>
                <p className="text-xs sm:text-sm text-[#4b5260] leading-relaxed italic">
                  {rev.text}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f2eee7] space-y-1 text-xs">
                <div className="font-bold text-[#121417] text-sm">
                  {rev.name}
                </div>
                <div className="text-[#a8824f] font-medium">
                  {rev.role}
                </div>
                <div className="text-[#787f8f] text-[11px]">
                  {rev.context}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
