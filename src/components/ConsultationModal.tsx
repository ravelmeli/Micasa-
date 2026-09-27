import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Clock, MapPin, Sparkles, Send } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preFilledSpecs?: {
    layout: string;
    finish: string;
    countertop: string;
    length: number;
    options: string[];
    estimatedPrice: number;
  } | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preFilledSpecs,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [meetingType, setMeetingType] = useState<'showroom' | 'visio' | 'home'>('showroom');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#151821] border border-[#2e3444] rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-white relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1e232e] text-[#8e95a5] hover:text-white flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif-display text-3xl font-medium text-white">
              Demande d&apos;Étude 3D Confirmée
            </h3>
            <p className="text-sm text-[#9da4b4] max-w-md mx-auto leading-relaxed">
              Merci {name}. Votre architecte-concepteur dédié prendra contact avec vous sous 24h ouvrées pour préparer vos plans et échantillons.
            </p>
            <div className="p-4 rounded-xl bg-[#0f1217] border border-[#252b38] text-xs text-[#c5a880] max-w-sm mx-auto">
              Un dossier récapitulatif avec nos recommandations techniques a été envoyé à : <strong>{email}</strong>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-lg bg-[#c5a880] text-[#0d0f12] text-xs font-bold uppercase tracking-wider transition cursor-pointer"
            >
              Retour au site
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#c5a880] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Rendez-vous Conseil &amp; Modélisation 3D</span>
              </span>
              <h3 className="font-serif-display text-3xl font-medium text-white">
                Réservez Votre Étude Gratuite
              </h3>
              <p className="text-xs text-[#8c93a4]">
                Nos architectes d’intérieur conçoivent vos plans d’implantation 3D et votre estimation détaillée sans aucun engagement.
              </p>
            </div>

            {/* If specs are prefilled */}
            {preFilledSpecs && (
              <div className="p-3.5 rounded-xl bg-[#0e1117] border border-[#c5a880]/30 text-xs space-y-1">
                <div className="text-[#c5a880] font-semibold flex items-center justify-between">
                  <span>Configuration importée du simulateur :</span>
                  <span className="font-mono font-bold">{preFilledSpecs.estimatedPrice.toLocaleString()} € TTC</span>
                </div>
                <div className="text-[#969cb0] text-[11px]">
                  {preFilledSpecs.layout} • {preFilledSpecs.length}m • {preFilledSpecs.finish.split('(')[0]} • {preFilledSpecs.countertop.split('(')[0]}
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#8c93a4] font-medium block">Nom &amp; Prénom *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="ex: Alexandre Vasseur"
                    className="w-full bg-[#1b202a] border border-[#2b3140] rounded-lg px-3.5 py-2.5 text-white placeholder-[#5d6475] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[#8c93a4] font-medium block">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="ex: 06 12 34 56 78"
                    className="w-full bg-[#1b202a] border border-[#2b3140] rounded-lg px-3.5 py-2.5 text-white placeholder-[#5d6475] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#8c93a4] font-medium block">Adresse Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ex: contact@exemple.fr"
                    className="w-full bg-[#1b202a] border border-[#2b3140] rounded-lg px-3.5 py-2.5 text-white placeholder-[#5d6475] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[#8c93a4] font-medium block">Ville du Projet *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="ex: Paris, Lyon, Genève..."
                    className="w-full bg-[#1b202a] border border-[#2b3140] rounded-lg px-3.5 py-2.5 text-white placeholder-[#5d6475] focus:outline-none focus:border-[#c5a880]"
                  />
                </div>
              </div>

              {/* Meeting Type */}
              <div className="space-y-1.5">
                <label className="text-[#8c93a4] font-medium block">Mode d&apos;Échange Préféré</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMeetingType('showroom')}
                    className={`py-2 px-2 rounded-lg border text-[11px] font-medium transition cursor-pointer ${
                      meetingType === 'showroom'
                        ? 'bg-[#c5a880] text-[#0d0f12] border-[#c5a880] font-bold'
                        : 'bg-[#1b202a] border-[#2b3140] text-[#9198aa]'
                    }`}
                  >
                    En Showroom
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeetingType('visio')}
                    className={`py-2 px-2 rounded-lg border text-[11px] font-medium transition cursor-pointer ${
                      meetingType === 'visio'
                        ? 'bg-[#c5a880] text-[#0d0f12] border-[#c5a880] font-bold'
                        : 'bg-[#1b202a] border-[#2b3140] text-[#9198aa]'
                    }`}
                  >
                    Visioconférence 3D
                  </button>
                  <button
                    type="button"
                    onClick={() => setMeetingType('home')}
                    className={`py-2 px-2 rounded-lg border text-[11px] font-medium transition cursor-pointer ${
                      meetingType === 'home'
                        ? 'bg-[#c5a880] text-[#0d0f12] border-[#c5a880] font-bold'
                        : 'bg-[#1b202a] border-[#2b3140] text-[#9198aa]'
                    }`}
                  >
                    À Domicile (Laser)
                  </button>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[#8c93a4] font-medium block">Date souhaitée</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#1b202a] border border-[#2b3140] rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-[#c5a880]"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded bg-[#c5a880] hover:bg-[#d4b78e] text-[#0d0f12] text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-[#c5a880]/15 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirmer Mon Rendez-vous avec un Architecte</span>
                </button>
              </div>

              <div className="text-[10px] text-[#6b7280] text-center">
                Vos informations restent strictement confidentielles et ne seront jamais partagées à des tiers.
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
