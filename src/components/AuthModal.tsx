import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, Sparkles, GraduationCap, Microscope, Award, Stethoscope } from 'lucide-react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useEscapeKey } from '../hooks/useEscapeKey';

interface AuthModalProps {
  isOpen: boolean;
  initialMode: 'signin' | 'signup';
  initialAudience?: 'mbbs' | 'md-dnb' | 'neet-pg' | 'professional';
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  initialMode, 
  initialAudience = 'mbbs', 
  onClose 
}) => {
  const [mode, setMode] = useState<'signin' | 'signup'>(initialMode);
  const [selectedAudience, setSelectedAudience] = useState<'mbbs' | 'md-dnb' | 'neet-pg' | 'professional'>(initialAudience);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll and handle Escape key on mobile & desktop
  useBodyScrollLock(isOpen);
  useEscapeKey(onClose, isOpen);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  useEffect(() => {
    if (initialAudience) {
      setSelectedAudience(initialAudience);
    }
  }, [initialAudience]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        onClose();
        setSubmitted(false);
      }, 1200);
    }, 600);
  };

  const audiences = [
    {
      id: 'mbbs' as const,
      title: 'MBBS Students',
      desc: 'Undergraduate microbiology learning (2nd Year focus)',
      icon: GraduationCap,
      perks: 'Includes: Notes + Slide Deck, Videos, Question Bank, Clinical Scenarios, Practical/Viva Tips, & Infographics',
      badgeColor: 'border-[#FF4D4D] bg-[#FFE8E8]/50 text-[#FF4D4D]'
    },
    {
      id: 'neet-pg' as const,
      title: 'NEET-PG / INI-CET Aspirants',
      desc: 'Examination-oriented revision & high-yield MCQs',
      icon: Award,
      perks: 'Includes: Notes + Slide Deck, Videos, Question Bank, & Timed Test Series',
      badgeColor: 'border-[#FF8A3D] bg-[#FFF3E0]/50 text-[#FF8A3D]'
    },
    {
      id: 'md-dnb' as const,
      title: 'MD/DNB Microbiology Students',
      desc: 'Postgraduate learning and practical training',
      icon: Microscope,
      perks: 'Includes: Advanced diagnostic SOPs, CLSI/EUCAST AST benchmarks, and laboratory benchwork',
      badgeColor: 'border-[#0EA5E9] bg-[#E0F7FA]/50 text-[#0EA5E9]'
    },
    {
      id: 'professional' as const,
      title: 'Doctors & Lab Professionals',
      desc: 'Diagnostic and clinical updates & antimicrobial stewardship',
      icon: Stethoscope,
      perks: 'Includes: Real-time AMR bulletins, antibiotic stewardship algorithms, & case consultations',
      badgeColor: 'border-[#10B981] bg-[#ECFDF5]/50 text-[#059669]'
    }
  ];

  const currentAudienceInfo = audiences.find(a => a.id === selectedAudience) || audiences[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#181E28]/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl border border-[#E9EDF3] shadow-preview-window overflow-hidden animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button Header: Minimal gap */}
        <div className="pt-3 px-3 sm:px-4 flex items-center justify-end">
          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-[#181E28] rounded-lg hover:bg-[#FAFBFD] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF4D4D]/40"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-0">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FFE8E8] text-[#FF4D4D] flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 id="auth-modal-title" className="text-base sm:text-lg font-bold text-[#181E28]">
                {mode === 'signup' ? 'Welcome to Infectiometer!' : 'Signed in successfully'}
              </h3>
              <p className="text-xs text-[#64748B] max-w-xs mx-auto">
                Preparing your customized track for <strong className="text-[#181E28]">{currentAudienceInfo.title}</strong>...
              </p>
            </div>
          ) : (
            <>
              {/* Tab Selector: Sign Up vs Log In */}
              <div className="grid grid-cols-2 p-1 bg-[#FAFBFD] border border-[#E9EDF3] rounded-xl text-xs font-bold mb-4 sm:mb-5">
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={`py-2 rounded-lg transition-colors cursor-pointer text-center ${
                    mode === 'signup' 
                      ? 'bg-white text-[#181E28] shadow-xs' 
                      : 'text-[#64748B] hover:text-[#181E28]'
                  }`}
                >
                  Create Account
                </button>
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className={`py-2 rounded-lg transition-colors cursor-pointer text-center ${
                    mode === 'signin' 
                      ? 'bg-white text-[#181E28] shadow-xs' 
                      : 'text-[#64748B] hover:text-[#181E28]'
                  }`}
                >
                  Log In
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-bold text-[#181E28] mb-1.5 flex items-center justify-between">
                      <span>Select Your Medical Profile</span>
                      <span className="text-[10px] text-[#FF4D4D] font-bold">4 Major Tracks</span>
                    </label>

                    {/* 4 Audience Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2.5 sm:mb-3">
                      {audiences.map((aud) => {
                        const Icon = aud.icon;
                        const isSelected = selectedAudience === aud.id;
                        return (
                          <button
                            key={aud.id}
                            type="button"
                            onClick={() => setSelectedAudience(aud.id)}
                            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                              isSelected
                                ? `${aud.badgeColor} border-2 shadow-xs`
                                : 'border-[#E9EDF3] bg-[#FAFBFD] hover:bg-white text-[#64748B]'
                            }`}
                          >
                            <div className={`p-1.5 rounded-lg shrink-0 ${isSelected ? 'bg-white/80' : 'bg-white border border-[#E9EDF3]'}`}>
                              <Icon className="w-4 h-4 text-[#181E28]" />
                            </div>
                            <div className="min-w-0">
                              <div className={`text-xs font-bold leading-tight ${isSelected ? 'text-[#181E28]' : 'text-[#334155]'}`}>
                                {aud.title}
                              </div>
                              <div className="text-[10px] text-[#64748B] truncate mt-0.5">
                                {aud.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Dynamic Track Offerings Info Box */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] text-[11px] text-[#64748B] space-y-1 mb-3">
                      <div className="flex items-center gap-1.5 font-bold text-[#181E28]">
                        <Sparkles className="w-3.5 h-3.5 text-[#FF4D4D] shrink-0" />
                        <span className="truncate">Curriculum Access for {currentAudienceInfo.title}:</span>
                      </div>
                      <p className="leading-relaxed text-[#475569] text-[10px] sm:text-[11px]">
                        {currentAudienceInfo.perks}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#181E28] mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. / Student Name"
                        className="w-full px-3.5 py-2.5 text-sm sm:text-xs rounded-xl border border-[#E9EDF3] focus:border-[#FF4D4D] focus:outline-none bg-[#FAFBFD] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-[#181E28] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="doctor@medical.edu"
                    className="w-full px-3.5 py-2.5 text-sm sm:text-xs rounded-xl border border-[#E9EDF3] focus:border-[#FF4D4D] focus:outline-none bg-[#FAFBFD] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#181E28] mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3.5 py-2.5 text-sm sm:text-xs rounded-xl border border-[#E9EDF3] focus:border-[#FF4D4D] focus:outline-none bg-[#FAFBFD] focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs sm:text-sm font-bold text-white bg-[#FF4D4D] hover:bg-[#E83D3D] rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2 active:scale-98"
                >
                  <span className="truncate">
                    {mode === 'signup' 
                      ? `Register as ${currentAudienceInfo.title.split(' ')[0]}` 
                      : 'Sign In to Workspace'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </form>

              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-[#E9EDF3] text-center">
                <span className="text-[10px] sm:text-[11px] text-[#64748B] flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF4D4D] shrink-0" />
                  <span>Academic privacy guaranteed · NMC CBME Aligned</span>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};