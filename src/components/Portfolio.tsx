import React, { useState } from 'react';
import { Eye, MapPin, ArrowRight, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  location: string;
  category: 'villa' | 'apartment' | 'renovation';
  image: string;
  surface: string;
  cabinetry: string;
  countertop: string;
  appliances: string;
  description: string;
}

const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Villa Cap d’Antibes — Îlot Marbre Patagonie',
    location: 'Antibes, Côte d’Azur',
    category: 'villa',
    image: '/src/assets/images/island_kitchen_suite_1790510326928.jpg',
    surface: '42 m²',
    cabinetry: 'Chêne cannelé naturel huilé & profils bronze',
    countertop: 'Quartzite naturelle du Brésil rétroéclairée',
    appliances: 'Gaggenau série 400 & hotte affleurante',
    description: 'Une conception ouverte sur la baie méditerranéenne où l’îlot central de 4 mètres de long devient la pièce maîtresse du salon.',
  },
  {
    id: 'p2',
    title: 'Hôtel Particulier Victor Hugo',
    location: 'Paris 16ème',
    category: 'apartment',
    image: '/src/assets/images/hero_modular_kitchen_1790510314763.jpg',
    surface: '34 m²',
    cabinetry: 'Noir Carbone Fenix NTM & laque satinée',
    countertop: 'Calacatta Gold livre ouvert épaisseur 30mm',
    appliances: 'Miele Generation 7000 en finition Obsidian Black',
    description: 'Restauration complète avec préservation des moulures d’origine et insertion d’un bloc modulaire contemporain minimaliste.',
  },
  {
    id: 'p3',
    title: 'Penthouse Panorama Léman',
    location: 'Genève, Suisse',
    category: 'villa',
    image: '/src/assets/images/luxury_penthouse_kitchen_1790510349448.jpg',
    surface: '55 m²',
    cabinetry: 'Noyer Canaletto sélectionné fil continu',
    countertop: 'Céramique Dekton Laurent effet marbre noir',
    appliances: 'Sub-Zero & Wolf avec cave à vin 120 bouteilles',
    description: 'Agencement majestueux avec armoires toute hauteur dissimulant un espace de préparation secondaire et un bar à cocktails.',
  },
  {
    id: 'p4',
    title: 'Loft Industriel Saint-Germain',
    location: 'Paris 6ème',
    category: 'renovation',
    image: '/src/assets/images/minimalist_cabinets_1790510338268.jpg',
    surface: '28 m²',
    cabinetry: 'Aluminium anodisé mat & verre strié Parsol',
    countertop: 'Inox massif brossé artisanalement',
    appliances: 'Bora Professional 3.0 avec aspiration intégrée',
    description: 'Une cuisine d’atelier pour un chef gastronome amateur combinant robustesse industrielle et finitions haute couture.',
  },
];

interface PortfolioProps {
  onOpenConsultation: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenConsultation }) => {
  const [filter, setFilter] = useState<'all' | 'villa' | 'apartment' | 'renovation'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-[#0d0f12] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#202530]">
          <div className="space-y-3">
            <span className="text-xs font-semibold tracking-widest text-[#c5a880] uppercase">
              Galerie de Réalisations
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-medium tracking-tight text-white">
              Nos Chantiers Récents
            </h2>
            <p className="text-sm sm:text-base text-[#9198a8] max-w-xl">
              Découvrez quelques-uns de nos projets récents livrés chez des particuliers exigeants et des cabinets d’architectes de renom.
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-1.5 p-1 bg-[#181c23] rounded-xl self-start md:self-auto overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition cursor-pointer ${
                filter === 'all' ? 'bg-[#c5a880] text-[#0d0f12] font-bold' : 'text-[#878e9f] hover:text-white'
              }`}
            >
              Tous
            </button>
            <button
              onClick={() => setFilter('villa')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition cursor-pointer ${
                filter === 'villa' ? 'bg-[#c5a880] text-[#0d0f12] font-bold' : 'text-[#878e9f] hover:text-white'
              }`}
            >
              Villas &amp; Propriétés
            </button>
            <button
              onClick={() => setFilter('apartment')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition cursor-pointer ${
                filter === 'apartment' ? 'bg-[#c5a880] text-[#0d0f12] font-bold' : 'text-[#878e9f] hover:text-white'
              }`}
            >
              Appartements Haussmanniens
            </button>
            <button
              onClick={() => setFilter('renovation')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition cursor-pointer ${
                filter === 'renovation' ? 'bg-[#c5a880] text-[#0d0f12] font-bold' : 'text-[#878e9f] hover:text-white'
              }`}
            >
              Lofts &amp; Rénovations
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="group relative rounded-2xl overflow-hidden bg-[#161a22] border border-[#2b3140] hover:border-[#c5a880]/60 transition-all cursor-pointer flex flex-col"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12] via-[#0d0f12]/30 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded bg-[#0d0f12]/80 backdrop-blur-md text-[#c5a880] text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{proj.location}</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="text-xs text-[#a0a7b7] flex items-center gap-2">
                    <span>Superficie : {proj.surface}</span>
                    <span>•</span>
                    <span>{proj.countertop.split('&')[0]}</span>
                  </div>
                  <h3 className="font-serif-display text-2xl font-bold text-white group-hover:text-[#c5a880] transition-colors">
                    {proj.title}
                  </h3>
                </div>
              </div>

              <div className="p-4 bg-[#14171f] flex items-center justify-between text-xs text-[#8c93a4]">
                <span>Cliquer pour afficher les détails architecturaux</span>
                <span className="flex items-center gap-1 text-[#c5a880] font-semibold">
                  <span>Explorer</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#151821] border border-[#2e3545] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-white relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#202532] text-[#939baa] hover:text-white flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c5a880] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {activeProject.location} • Superficie {activeProject.surface}
              </span>
              <h3 className="font-serif-display text-3xl font-medium">
                {activeProject.title}
              </h3>
            </div>

            <div className="rounded-xl overflow-hidden h-64 sm:h-72 border border-[#2b3140]">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[#a8afbf] leading-relaxed">
              {activeProject.description}
            </p>

            {/* Spec Sheet Table */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs p-4 rounded-xl bg-[#0f1218] border border-[#252a38]">
              <div>
                <span className="text-[#788092] block font-semibold mb-0.5">Menuiserie &amp; Caissons :</span>
                <span className="text-white">{activeProject.cabinetry}</span>
              </div>
              <div>
                <span className="text-[#788092] block font-semibold mb-0.5">Plan de travail &amp; Crédence :</span>
                <span className="text-white">{activeProject.countertop}</span>
              </div>
              <div>
                <span className="text-[#788092] block font-semibold mb-0.5">Parc électroménager :</span>
                <span className="text-white">{activeProject.appliances}</span>
              </div>
              <div>
                <span className="text-[#788092] block font-semibold mb-0.5">Délai d&apos;exécution :</span>
                <span className="text-[#c5a880] font-bold">4 semaines de fabrication + 3 jours de pose</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                onClick={() => setActiveProject(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#202532] text-xs font-semibold text-[#a8afbf] hover:text-white transition cursor-pointer"
              >
                Fermer
              </button>
              <button
                onClick={() => {
                  setActiveProject(null);
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#c5a880] hover:bg-[#d6b991] text-[#0d0f12] text-xs font-bold uppercase tracking-wider transition cursor-pointer"
              >
                Demander un projet similaire
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
