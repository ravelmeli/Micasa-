import React, { useState } from 'react';
import { ArrowRight, Check, Eye, SlidersHorizontal, Sparkles, Layers } from 'lucide-react';

export interface CollectionItem {
  id: string;
  name: string;
  category: 'island' | 'linear' | 'penthouse' | 'ushape';
  subtitle: string;
  image: string;
  description: string;
  finishes: string[];
  countertop: string;
  fittings: string;
  pricePerMeter: string;
  leadTime: string;
  idealFor: string;
}

const COLLECTIONS: CollectionItem[] = [
  {
    id: '1',
    name: 'Atelier Milano — Îlot & Céramique Flûtée',
    category: 'island',
    subtitle: 'Îlot architectural avec façade cannelée en chêne naturel',
    image: '/src/assets/images/island_kitchen_suite_1790510326928.jpg',
    description: 'Une conception magistrale centrée sur un îlot sculptural. Intègre une table d’hôte prolongée et des gorges d’ouverture discrètes en laiton brossé.',
    finishes: ['Chêne flûté huilé', 'Laque mate velours', 'Gorges laiton champagne'],
    countertop: 'Céramique Marquina 20mm anti-taches',
    fittings: 'Coulisses Blum Legrabox soft-close amorties',
    pricePerMeter: 'À partir de 1 650 € / ml',
    leadTime: '4 à 5 semaines',
    idealFor: 'Espaces ouverts et salons de réception',
  },
  {
    id: '2',
    name: 'Nordic Purist — Linéaire Anthracite & Noyer',
    category: 'linear',
    subtitle: 'Rangement pleine hauteur avec armoire garde-manger dissimulée',
    image: '/src/assets/images/minimalist_cabinets_1790510338268.jpg',
    description: 'Optimisation millimétrée des volumes sans poignée. Façades thermorésistantes traitées par nanotechnologie anti-traces de doigts.',
    finishes: ['Noir mat Fenix NTM®', 'Noyer d’Amérique fil droit', 'Profils aluminium noir'],
    countertop: 'Quartz blanc Statuario ultra-dense',
    fittings: 'Ouverture tactile motorisée Servo-Drive',
    pricePerMeter: 'À partir de 1 450 € / ml',
    leadTime: '3 à 4 semaines',
    idealFor: 'Appartements haussmanniens et lofts urbains',
  },
  {
    id: '3',
    name: 'Grand Penthouse — Marbre & Travertin',
    category: 'penthouse',
    subtitle: 'La quintessence de l’architecture contemporaine',
    image: '/src/assets/images/luxury_penthouse_kitchen_1790510349448.jpg',
    description: 'Une scénographie sur-mesure combinant cave à vin thermo-régulée affleurante, électroménager Miele® encastré et hotte plafonnière invisible.',
    finishes: ['Bronze brossé anodisé', 'Verre fumé Parsol', 'Chêne teinté ébène'],
    countertop: 'Pierre frittée Dekton® 30mm résistant à 300°C',
    fittings: 'Amortisseurs Hettich AvanTech YOU à LED intégrée',
    pricePerMeter: 'À partir de 2 100 € / ml',
    leadTime: '5 à 6 semaines',
    idealFor: 'Villas d’architecte et penthouses d’exception',
  },
  {
    id: '4',
    name: 'Monolithe Calacatta — Suite Royale Home-2',
    category: 'island',
    subtitle: 'Bloc central massif en cascade avec éclairage d’ambiance',
    image: '/src/assets/images/hero_modular_kitchen_1790510314763.jpg',
    description: 'Notre modèle le plus emblématique de la version Home-2. Le marbre se déverse harmonieusement sur les côtés pour créer une véritable pièce d’art contemporaine.',
    finishes: ['Calacatta Gold livre ouvert', 'Noir obsidienne satiné', 'Détails titane'],
    countertop: 'Quartzite naturelle Calacatta poli doux',
    fittings: 'Système d’organisation intérieure sur-mesure en noyer',
    pricePerMeter: 'À partir de 2 400 € / ml',
    leadTime: '4 à 6 semaines',
    idealFor: 'Résidences principales et projets d’architectes',
  },
];

interface CollectionsProps {
  onSelectCollection: (item: CollectionItem) => void;
  onOpenConsultation: () => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectCollection, onOpenConsultation }) => {
  const [filter, setFilter] = useState<'all' | 'island' | 'linear' | 'penthouse'>('all');

  const filtered = filter === 'all' ? COLLECTIONS : COLLECTIONS.filter(c => c.category === filter);

  return (
    <section id="collections" className="py-20 bg-[#faf9f6] text-[#121417]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#e5e1d8]">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#a8824f] uppercase">
              Catalogue Signature Modulux
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#121417]">
              Les Collections Modulaires Home 2
            </h2>
            <p className="text-sm sm:text-base text-[#686f7c] max-w-xl">
              Chaque configuration est modulable selon vos métrages exacts, votre mode de vie culinaire et les teintes de votre intérieur.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#ede8e1] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#121417] text-white shadow-sm'
                  : 'text-[#585f6e] hover:text-[#121417]'
              }`}
            >
              Tous les Agencements
            </button>
            <button
              onClick={() => setFilter('island')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'island'
                  ? 'bg-[#121417] text-white shadow-sm'
                  : 'text-[#585f6e] hover:text-[#121417]'
              }`}
            >
              Îlots Centraux
            </button>
            <button
              onClick={() => setFilter('linear')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'linear'
                  ? 'bg-[#121417] text-white shadow-sm'
                  : 'text-[#585f6e] hover:text-[#121417]'
              }`}
            >
              Linéaire &amp; Minimal
            </button>
            <button
              onClick={() => setFilter('penthouse')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'penthouse'
                  ? 'bg-[#121417] text-white shadow-sm'
                  : 'text-[#585f6e] hover:text-[#121417]'
              }`}
            >
              Lofts &amp; Penthouses
            </button>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#e8e4dc] shadow-sm hover:shadow-xl hover:border-[#c5a880]/60 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Hover zoom */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-[#e0ded8]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[#121417]/85 backdrop-blur-md text-[#c5a880] px-3 py-1 rounded-md text-[11px] font-semibold tracking-wider uppercase border border-[#353b47]">
                  {item.leadTime}
                </div>
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md text-[#121417] px-3 py-1 rounded-md text-xs font-bold shadow-md">
                  {item.pricePerMeter}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#a8824f] uppercase tracking-wider">
                    {item.idealFor}
                  </div>
                  <h3 className="font-serif-display text-2xl font-bold text-[#121417] group-hover:text-[#a8824f] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#6e7582] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Specs Pill-free List */}
                <div className="pt-3 border-t border-[#f0ede6] space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-[#4a5160]">
                    <span className="font-semibold text-[#121417] min-w-20">Finitions :</span>
                    <span>{item.finishes.join(' · ')}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#4a5160]">
                    <span className="font-semibold text-[#121417] min-w-20">Plan de travail :</span>
                    <span>{item.countertop}</span>
                  </div>
                  <div className="flex items-start gap-2 text-[#4a5160]">
                    <span className="font-semibold text-[#121417] min-w-20">Ferronnerie :</span>
                    <span>{item.fittings}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectCollection(item)}
                    className="text-xs font-bold text-[#121417] hover:text-[#a8824f] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Voir la fiche technique complète</span>
                  </button>

                  <button
                    onClick={onOpenConsultation}
                    className="px-4 py-2 rounded-lg bg-[#121417] hover:bg-[#a8824f] text-white text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Demander ce modèle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modular guarantee footer box */}
        <div className="p-6 rounded-2xl bg-[#ede8e1] border border-[#ded8ce] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#121417] text-[#c5a880] flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif-display text-xl font-bold text-[#121417]">
                Vous avez un plan d’architecte ou des dimensions spécifiques ?
              </div>
              <div className="text-xs text-[#5d6473]">
                Nos concepteurs étudient gratuitement votre projet sous 24 heures et créent un rendu 3D personnalisé.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-lg bg-[#c5a880] hover:bg-[#b89566] text-[#0d0f12] text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm cursor-pointer"
          >
            Déposer mes plans pour chiffrage
          </button>
        </div>

      </div>
    </section>
  );
};
