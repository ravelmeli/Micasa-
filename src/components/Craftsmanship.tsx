import React from 'react';
import {
  ShieldCheck,
  CheckCircle,
  Cpu,
  Layers,
  Sparkles,
  Compass,
  Hammer,
  Truck
} from 'lucide-react';

export const Craftsmanship: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#c5a880]" />,
      title: 'Quincaillerie Allemande Blum® & Hettich®',
      description: 'Charnières invisibles à grand angle d’ouverture et coulisses Legrabox testées pour plus de 200 000 ouvertures sans aucun affaissement.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#c5a880]" />,
      title: 'Caissons Hydrofuges Haute Densité',
      description: 'Panneaux de particules de classe E0 sans émissions de COV, traités hydrofuges haute résistance pour prévenir toute déformation due à l’humidité.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#c5a880]" />,
      title: 'Revêtements Nanotech Anti-Traces',
      description: 'Façades Fenix NTM® d’une douceur soyeuse, éliminant les traces de doigts et bénéficiant de micro-réparation thermique en cas de rayure superficielle.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#c5a880]" />,
      title: 'Plans de Travail Frittés & Marbres Rares',
      description: 'Découpes au jet d’eau numérique dans des tranches de Dekton® et de marbres italiens Calacatta, insensibles à la chaleur directe jusqu’à 300°C.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Relevé Laser & Étude 3D',
      desc: 'Prise de cotes millimétrée au laser chez vous et modélisation photoréaliste de votre future cuisine.',
      icon: <Compass className="w-5 h-5 text-[#c5a880]" />,
    },
    {
      step: '02',
      title: 'Nuancier & Échantillons',
      desc: 'Validation des essences de bois, des textures de pierres et des finitions métalliques en showroom.',
      icon: <Layers className="w-5 h-5 text-[#c5a880]" />,
    },
    {
      step: '03',
      title: 'Usinage CNC Numérique',
      desc: 'Fabrication de précision dans nos ateliers avec assemblages invisibles à coupe d’onglet.',
      icon: <Hammer className="w-5 h-5 text-[#c5a880]" />,
    },
    {
      step: '04',
      title: 'Pose & Clé en Main',
      desc: 'Installation intégrale en 48-72h par nos compagnons menuisiers avec raccordements complets.',
      icon: <Truck className="w-5 h-5 text-[#c5a880]" />,
    },
  ];

  return (
    <section id="craftsmanship" className="py-20 bg-[#faf9f6] text-[#121417]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#a8824f] uppercase">
            Exigence &amp; Durabilité
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-medium tracking-tight text-[#121417]">
            Le Savoir-Faire Industriel &amp; Artisanal
          </h2>
          <p className="text-sm sm:text-base text-[#666d7b]">
            Nous refusons les compromis : chaque millimètre est usiné avec les technologies les plus avancées pour offrir une garantie constructeur de 15 ans.
          </p>
        </div>

        {/* 4 Technical Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-[#e8e4db] shadow-sm hover:shadow-md transition-shadow space-y-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#121417] flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="font-serif-display text-lg font-bold text-[#121417] leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#6e7583] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Roadmap */}
        <div className="bg-[#121417] text-white rounded-3xl p-8 sm:p-12 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[#c5a880] uppercase">
              Méthodologie Éprouvée
            </span>
            <h3 className="font-serif-display text-2xl sm:text-4xl font-medium">
              Notre Processus en 4 Étapes Sérénité
            </h3>
            <p className="text-xs sm:text-sm text-[#959cb0]">
              De la première esquisse à la première préparation culinaire, votre chef de projet dédié orchestre chaque détail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((st, i) => (
              <div key={i} className="space-y-3 relative">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#1d222b] border border-[#2d3342] flex items-center justify-center">
                    {st.icon}
                  </div>
                  <span className="font-serif-display text-3xl font-bold text-[#c5a880]/30 tabular-nums">
                    {st.step}
                  </span>
                </div>
                <h4 className="font-semibold text-white text-base">
                  {st.title}
                </h4>
                <p className="text-xs text-[#8d94a6] leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
