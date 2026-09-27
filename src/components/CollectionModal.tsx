import React from 'react';
import { X, CheckCircle2, Sliders, Calendar, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CollectionItem } from './Collections';

interface CollectionModalProps {
  item: CollectionItem | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({ item, onClose, onOpenConsultation }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#141720] border border-[#2d3342] rounded-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-white relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1e232e] text-[#8e95a5] hover:text-white flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#c5a880]">
              Fiche Technique Détaillée • Home-2
            </span>
            <span className="text-[#3c4252]">•</span>
            <span className="text-xs text-[#8a91a0] font-mono">{item.pricePerMeter}</span>
          </div>
          <h3 className="font-serif-display text-2xl sm:text-3xl font-medium text-white">
            {item.name}
          </h3>
          <p className="text-xs text-[#a0a7b7]">{item.subtitle}</p>
        </div>

        <div className="rounded-xl overflow-hidden h-64 sm:h-72 border border-[#2a303e]">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        <p className="text-xs sm:text-sm text-[#a8afbf] leading-relaxed">
          {item.description}
        </p>

        {/* Technical Specifications Matrix */}
        <div className="space-y-3 bg-[#0f1218] p-4 rounded-xl border border-[#232835] text-xs">
          <div className="font-semibold text-[#c5a880] uppercase tracking-wider text-[11px] pb-1 border-b border-[#232835]">
            Spécifications de Fabrication &amp; Matériaux
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div>
              <span className="text-[#757d8e] block font-medium">Finitions de façades :</span>
              <span className="text-white font-medium">{item.finishes.join(', ')}</span>
            </div>
            <div>
              <span className="text-[#757d8e] block font-medium">Plan de travail &amp; Épaisseur :</span>
              <span className="text-white font-medium">{item.countertop}</span>
            </div>
            <div>
              <span className="text-[#757d8e] block font-medium">Quincaillerie &amp; Amortisseurs :</span>
              <span className="text-white font-medium">{item.fittings}</span>
            </div>
            <div>
              <span className="text-[#757d8e] block font-medium">Délai estimé :</span>
              <span className="text-white font-medium">{item.leadTime}</span>
            </div>
          </div>
        </div>

        {/* Benefits badge */}
        <div className="flex items-center gap-3 text-xs text-[#8c94a5] bg-[#1a1f29] p-3 rounded-lg border border-[#272d3b]">
          <ShieldCheck className="w-5 h-5 text-[#c5a880] shrink-0" />
          <span>Garantie constructeur 15 ans incluant charnières, tiroirs et étanchéité des caissons.</span>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#202532] text-xs font-semibold text-[#a8afbf] hover:text-white transition cursor-pointer"
          >
            Fermer
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#c5a880] hover:bg-[#d6b991] text-[#0d0f12] text-xs font-bold uppercase tracking-wider transition cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Planifier l&apos;Étude 3D de ce Modèle</span>
          </button>
        </div>

      </div>
    </div>
  );
};
