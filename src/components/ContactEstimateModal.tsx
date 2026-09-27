import React, { useState } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, MapPin } from 'lucide-react';

interface ContactEstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string | null;
}

export const ContactEstimateModal: React.FC<ContactEstimateModalProps> = ({
  isOpen,
  onClose,
  serviceTitle,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [kitchenLayout, setKitchenLayout] = useState('L-Shaped');
  const [budget, setBudget] = useState('$15,000 - $30,000');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#f7f5f0] text-[#1a1e21] border border-[#ded5c2] rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-200 shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#f0ebe1] text-[#5e6670] hover:text-[#1a1e21] flex items-center justify-center transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#c4121a]/15 text-[#c4121a] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif-title text-3xl font-bold text-[#1a1e21]">
              Estimate Request Received!
            </h3>
            <p className="text-sm text-[#5a626a] max-w-md mx-auto leading-relaxed">
              Thank you, {name}. One of our senior modular kitchen architects will review your project details and send an itemized 3D plan &amp; quote to <strong>{email}</strong> within 24 hours.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-[#1a1e21] text-white text-xs font-bold uppercase tracking-wider transition hover:bg-[#c4121a] cursor-pointer"
            >
              Back to Website
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#c4121a]">
                MODULUX DESIGN STUDIO
              </span>
              <h3 className="font-serif-title text-3xl font-bold text-[#1a1e21]">
                Get Your Free Kitchen Estimate
              </h3>
              <p className="text-xs text-[#6a717a]">
                {serviceTitle
                  ? `Inquiring about: ${serviceTitle}`
                  : 'Tell us about your space, dimensions, and preferred styles for a custom quote.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#4e555d] font-semibold block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-white border border-[#ded5c2] rounded-xl px-3.5 py-2.5 text-[#1a1e21] placeholder-[#9ca3af] focus:outline-none focus:border-[#c4121a]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[#4e555d] font-semibold block">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 019-2834"
                    className="w-full bg-white border border-[#ded5c2] rounded-xl px-3.5 py-2.5 text-[#1a1e21] placeholder-[#9ca3af] focus:outline-none focus:border-[#c4121a]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[#4e555d] font-semibold block">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-white border border-[#ded5c2] rounded-xl px-3.5 py-2.5 text-[#1a1e21] placeholder-[#9ca3af] focus:outline-none focus:border-[#c4121a]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#4e555d] font-semibold block">Preferred Layout</label>
                  <select
                    value={kitchenLayout}
                    onChange={(e) => setKitchenLayout(e.target.value)}
                    className="w-full bg-white border border-[#ded5c2] rounded-xl px-3.5 py-2.5 text-[#1a1e21] focus:outline-none focus:border-[#c4121a]"
                  >
                    <option value="Island Concept">Island Concept Suite</option>
                    <option value="L-Shaped">L-Shaped Kitchen</option>
                    <option value="U-Shaped">U-Shaped Kitchen</option>
                    <option value="Parallel / Galley">Parallel / Galley Kitchen</option>
                    <option value="Straight Linear">Straight Linear Wall</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#4e555d] font-semibold block">Estimated Budget</label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-white border border-[#ded5c2] rounded-xl px-3.5 py-2.5 text-[#1a1e21] focus:outline-none focus:border-[#c4121a]"
                  >
                    <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                    <option value="$20,000 - $40,000">$20,000 - $40,000</option>
                    <option value="$40,000 - $70,000">$40,000 - $70,000</option>
                    <option value="$70,000+">$70,000+ (Ultra Luxury)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[#4e555d] font-semibold block">Project Notes (Optional)</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share room dimensions, appliances or finishes you like..."
                  className="w-full bg-white border border-[#ded5c2] rounded-xl px-3.5 py-2.5 text-[#1a1e21] placeholder-[#9ca3af] focus:outline-none focus:border-[#c4121a]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1a1e21] hover:bg-[#c4121a] text-white text-xs font-bold uppercase tracking-wider transition shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit My Estimate Request</span>
                </button>
              </div>

              <div className="text-[11px] text-[#788089] text-center pt-1">
                🔒 No obligation • Complimentary 3D rendering included
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
