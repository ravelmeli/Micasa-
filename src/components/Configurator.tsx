import React, { useState, useMemo } from 'react';
import {
  Sliders,
  Sparkles,
  Calculator,
  CheckCircle2,
  Layers,
  ArrowRight,
  Download,
  Info
} from 'lucide-react';

interface ConfiguratorProps {
  onPreFillConsultation: (specs: {
    layout: string;
    finish: string;
    countertop: string;
    length: number;
    options: string[];
    estimatedPrice: number;
  }) => void;
}

export const Configurator: React.FC<ConfiguratorProps> = ({ onPreFillConsultation }) => {
  const [layout, setLayout] = useState<'island' | 'linear' | 'lshape' | 'ushape'>('island');
  const [length, setLength] = useState<number>(5.5);
  const [finish, setFinish] = useState<'carbon' | 'oak' | 'walnut' | 'lacquer'>('carbon');
  const [countertop, setCountertop] = useState<'dekton' | 'calacatta' | 'quartz' | 'granite'>('dekton');
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    'led',
    'servodrive'
  ]);
  const [quoteSuccess, setQuoteSuccess] = useState(false);

  const layoutNames: Record<string, { label: string; desc: string; baseMultiplier: number }> = {
    island: { label: 'Îlot Central & Façade', desc: 'Bloc scénographique central avec linéaire technique', baseMultiplier: 1.25 },
    linear: { label: 'Linéaire Épuré', desc: 'Implantation murale compacte et pleine hauteur', baseMultiplier: 1.0 },
    lshape: { label: 'Implantation en L', desc: 'Disposition ergonomique idéale pour l’espace repas', baseMultiplier: 1.15 },
    ushape: { label: 'Configuration en U', desc: 'Immense surface de préparation et rangements d’angle', baseMultiplier: 1.35 },
  };

  const finishNames: Record<string, { label: string; pricePerMeter: number; color: string }> = {
    carbon: { label: 'Noir Carbone Fenix® (Nanotech Anti-traces)', pricePerMeter: 1650, color: '#1a1b1e' },
    oak: { label: 'Chêne Naturel Flûté Cannelé', pricePerMeter: 1850, color: '#a68051' },
    walnut: { label: 'Noyer d’Amérique Fil Droit', pricePerMeter: 1950, color: '#684a36' },
    lacquer: { label: 'Laque Velours Blanc Albâtre', pricePerMeter: 1550, color: '#f0ede6' },
  };

  const countertopNames: Record<string, { label: string; pricePerMeter: number; desc: string }> = {
    dekton: { label: 'Céramique Dekton® Sintered (300°C)', pricePerMeter: 650, desc: 'Résistance extrême aux chocs et rayures' },
    calacatta: { label: 'Marbre d’Italie Calacatta Gold', pricePerMeter: 950, desc: 'Veinage doré noble et poli velours' },
    quartz: { label: 'Quartz Blanc Statuario Ultra-Compact', pricePerMeter: 550, desc: 'Non poreux, idéal pour usage intensif' },
    granite: { label: 'Granit Zimbabwé Noir Flammé Brossé', pricePerMeter: 700, desc: 'Toucher cuir naturel minéral' },
  };

  const optionalAddons = [
    { id: 'pantry', name: 'Armoire Garde-Manger Escamotable Pocket Door', price: 1850 },
    { id: 'led', name: 'Canaux LED Architecturaux 2700K Intégrés', price: 750 },
    { id: 'servodrive', name: 'Ouverture Motorisée Blum® Servo-Drive', price: 1200 },
    { id: 'wine', name: 'Module Cave à Vin Encastrée Double Température', price: 2450 },
  ];

  const toggleOption = (id: string) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== id));
    } else {
      setSelectedOptions([...selectedOptions, id]);
    }
  };

  const calculatedTotals = useMemo(() => {
    const layoutMult = layoutNames[layout].baseMultiplier;
    const cabinetryCost = Math.round(length * finishNames[finish].pricePerMeter * layoutMult);
    const countertopCost = Math.round(length * countertopNames[countertop].pricePerMeter);
    const optionsCost = selectedOptions.reduce((acc, curr) => {
      const match = optionalAddons.find(o => o.id === curr);
      return acc + (match ? match.price : 0);
    }, 0);
    const installationCost = Math.round((cabinetryCost + countertopCost) * 0.12); // 12% pose artisanale
    const total = cabinetryCost + countertopCost + optionsCost + installationCost;

    return {
      cabinetryCost,
      countertopCost,
      optionsCost,
      installationCost,
      total,
    };
  }, [layout, length, finish, countertop, selectedOptions]);

  const handleSendToConsultation = () => {
    onPreFillConsultation({
      layout: layoutNames[layout].label,
      finish: finishNames[finish].label,
      countertop: countertopNames[countertop].label,
      length,
      options: selectedOptions.map(id => optionalAddons.find(o => o.id === id)?.name || id),
      estimatedPrice: calculatedTotals.total,
    });
    setQuoteSuccess(true);
    setTimeout(() => setQuoteSuccess(false), 3000);
  };

  return (
    <section id="configurator" className="py-20 bg-[#121417] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#c5a880]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold tracking-widest text-[#c5a880] uppercase">
            Outil Interactif Exclusif
          </span>
          <h2 className="font-serif-display text-3xl sm:text-5xl font-medium tracking-tight text-white">
            Simulateur &amp; Configurateur de Cuisine 3D
          </h2>
          <p className="text-sm sm:text-base text-[#9fa5b4]">
            Personnalisez vos matériaux, la longueur de votre linéaire et vos équipements pour obtenir une estimation instantanée certifiée atelier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-[#181c24] p-6 sm:p-8 rounded-2xl border border-[#2b3140]">
            
            {/* Step 1: Layout */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#c5a880] uppercase tracking-wider flex items-center justify-between">
                <span>01. Choisissez la Configuration Spatiale</span>
                <span className="text-[#8e95a5] font-normal normal-case">{layoutNames[layout].desc}</span>
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {(['island', 'linear', 'lshape', 'ushape'] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setLayout(key)}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                      layout === key
                        ? 'bg-[#c5a880] text-[#0d0f12] border-[#c5a880] shadow-md shadow-[#c5a880]/20'
                        : 'bg-[#1e232e] text-[#c2c7d4] border-[#2e3444] hover:border-[#414a5e]'
                    }`}
                  >
                    <div className="font-bold">{layoutNames[key].label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Linear Meters Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#c5a880] uppercase tracking-wider">
                  02. Longueur Linéaire Totale
                </span>
                <span className="font-serif-display text-xl font-bold text-white tabular-nums">
                  {length.toFixed(1)} mètres linéaires
                </span>
              </div>
              <input
                type="range"
                min="2.5"
                max="10.0"
                step="0.5"
                value={length}
                onChange={(e) => setLength(parseFloat(e.target.value))}
                className="w-full accent-[#c5a880] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#7d8495]">
                <span>2.5m (Studio / Appartement)</span>
                <span>5.5m (Moyenne Villa)</span>
                <span>10.0m (Grand Domaine)</span>
              </div>
            </div>

            {/* Step 3: Cabinet Finish */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#c5a880] uppercase tracking-wider block">
                03. Finition des Façades &amp; Caissons Hydrofuges
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(['carbon', 'oak', 'walnut', 'lacquer'] as const).map((key) => {
                  const fin = finishNames[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setFinish(key)}
                      className={`p-3.5 rounded-xl border flex items-center gap-3 text-left transition-all cursor-pointer ${
                        finish === key
                          ? 'bg-[#232936] text-white border-[#c5a880]'
                          : 'bg-[#1e232e] text-[#a4aab8] border-[#2e3444] hover:border-[#3c4458]'
                      }`}
                    >
                      <div
                        className="w-5 h-5 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: fin.color }}
                      />
                      <div className="text-xs">
                        <div className="font-semibold text-white">{fin.label}</div>
                        <div className="text-[11px] text-[#7f8697]">{fin.pricePerMeter} € / mètre</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Countertop Material */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#c5a880] uppercase tracking-wider block">
                04. Plan de Travail Minéral Massif
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(['dekton', 'calacatta', 'quartz', 'granite'] as const).map((key) => {
                  const ct = countertopNames[key];
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCountertop(key)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        countertop === key
                          ? 'bg-[#232936] text-white border-[#c5a880]'
                          : 'bg-[#1e232e] text-[#a4aab8] border-[#2e3444] hover:border-[#3c4458]'
                      }`}
                    >
                      <div className="text-xs font-semibold text-white">{ct.label}</div>
                      <div className="text-[11px] text-[#7f8697]">{ct.desc}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: High-End Architectural Addons */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#c5a880] uppercase tracking-wider block">
                05. Équipements de Confort &amp; Domotique
              </label>
              <div className="space-y-2">
                {optionalAddons.map((addon) => {
                  const active = selectedOptions.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleOption(addon.id)}
                      className={`w-full p-3 rounded-xl border flex items-center justify-between text-left text-xs transition-all cursor-pointer ${
                        active
                          ? 'bg-[#232936] border-[#c5a880] text-white'
                          : 'bg-[#1e232e] border-[#2e3444] text-[#8e95a5]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            active ? 'bg-[#c5a880] border-[#c5a880] text-[#0d0f12]' : 'border-[#4e5567]'
                          }`}
                        >
                          {active && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span className="font-medium text-white">{addon.name}</span>
                      </div>
                      <span className="font-semibold text-[#c5a880] tabular-nums">+{addon.price} €</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Quotation Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-[#171b22] p-6 sm:p-8 rounded-2xl border border-[#2e3444] shadow-2xl space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-[#292f3d]">
              <div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#c5a880]">
                  Devis Estimatif Certifié
                </span>
                <h3 className="font-serif-display text-2xl font-bold text-white">
                  Récapitulatif Configuration
                </h3>
              </div>
              <Calculator className="w-6 h-6 text-[#c5a880]" />
            </div>

            {/* Breakdown */}
            <div className="space-y-3.5 text-xs text-[#a9b0bf]">
              <div className="flex justify-between py-1 border-b border-[#222733]">
                <span>Caissons &amp; Façades ({length}m × {layoutNames[layout].label})</span>
                <span className="font-semibold text-white tabular-nums">
                  {calculatedTotals.cabinetryCost.toLocaleString()} €
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#222733]">
                <span>Plan de travail ({countertopNames[countertop].label.split('(')[0]})</span>
                <span className="font-semibold text-white tabular-nums">
                  {calculatedTotals.countertopCost.toLocaleString()} €
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#222733]">
                <span>Équipements &amp; Confort ({selectedOptions.length} sél.)</span>
                <span className="font-semibold text-white tabular-nums">
                  {calculatedTotals.optionsCost.toLocaleString()} €
                </span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#222733]">
                <span>Pose par Maître Menuisier Compagnon (12%)</span>
                <span className="font-semibold text-white tabular-nums">
                  {calculatedTotals.installationCost.toLocaleString()} €
                </span>
              </div>
            </div>

            {/* Total Price */}
            <div className="p-4 rounded-xl bg-[#0f1217] border border-[#2f3546] space-y-1">
              <div className="text-[11px] text-[#868d9e] uppercase tracking-wider">
                Investissement Clé en Main Estimé (TTC)
              </div>
              <div className="font-serif-display text-3xl sm:text-4xl font-bold text-[#c5a880] tabular-nums">
                {calculatedTotals.total.toLocaleString()} €
              </div>
              <div className="text-[10px] text-[#6b7280]">
                Inclut la prise de cotes au laser 3D, la livraison sous 4 semaines et la garantie 15 ans.
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleSendToConsultation}
                className="w-full py-3.5 rounded bg-[#c5a880] hover:bg-[#d4b78e] text-[#0d0f12] text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#c5a880]/15 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Transmettre cette Configuration à l&apos;Atelier</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {quoteSuccess && (
                <div className="p-2.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 text-xs text-center animate-in fade-in">
                  Vos spécifications ont été pré-remplies dans le formulaire de rendez-vous !
                </div>
              )}
            </div>

            {/* Invariants & Trust Note */}
            <div className="flex items-start gap-2.5 text-[11px] text-[#7a8192] pt-2">
              <Info className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
              <span>
                Étude 3D gratuite avec plans de coupe techniques offerte lors de votre premier rendez-vous en showroom.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
