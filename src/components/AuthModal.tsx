import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ShieldCheck, GraduationCap, Microscope, Award, Stethoscope, BookOpen } from 'lucide-react';
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
      desc: 'Undergraduate microbiology (2nd Year focus)',
      icon: GraduationCap,
      perks: 'Includes: Notes + Slide Decks, Videos, Question Bank, Clinical Scenarios, Practical/Viva Tips, & Infographics',
    },
    {
      id: 'neet-pg' as const,
      title: 'NEET-PG / INI-CET Aspirants',
      desc: 'Examination-oriented revision & high-yield MCQs',
      icon: Award,
      perks: 'Includes: Notes + Slide Decks, Videos, Question Bank, & Timed Test Series',
    },
    {
      id: 'md-dnb' as const,
      title: 'MD/DNB Microbiology Students',
      desc: 'Postgraduate learning and practical training',
      icon: Microscope,
      perks: 'Includes: Advanced diagnostic SOPs, CLSI/EUCAST AST benchmarks, and laboratory benchwork',
    },
    {
      id: 'professional' as const,
      title: 'Doctors & Lab Professionals',
      desc: 'Diagnostic and clinical updates & antimicrobial stewardship',
      icon: Stethoscope,
      perks: 'Includes: Real-time AMR bulletins, antibiotic stewardship algorithms, & case consultations',
    }
  ];

  const currentAudienceInfo = audiences.find(a => a.id === selectedAudience) || audiences[0];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden animate-in zoom-in-95 duration-200 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimal Close Button in Top-Right Corner */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Body with Reduced Top Gap */}
        <div className="p-4 sm:p-6 pt-3.5 sm:pt-4">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <Check className="w-6 h-6" />
              </div>
              <h3 id="auth-modal-title" className="text-base sm:text-lg font-bold text-slate-900">
                {mode === 'signup' ? 'Welcome to Infectiometer' : 'Signed in successfully'}
              </h3>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Configuring customized academic workspace for <strong className="text-slate-900">{currentAudienceInfo.title}</strong>...
              </p>
            </div>
          ) : (
            <>
              {/* Tab Selector: Sign Up vs Log In */}
              <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-lg text-xs font-bold mb-4 sm:mb-5">
                <button
                  type="button"
                  onClick={() => setMode('signup')}
                  className={`py-2 rounded-md transition-colors cursor-pointer text-center ${
                    mode === 'signup' 
                      ? 'bg-white text-slate-900 shadow-2xs' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Create Account
                </button>
                <button
                  type="button"
                  onClick={() => setMode('signin')}
                  className={`py-2 rounded-md transition-colors cursor-pointer text-center ${
                    mode === 'signin' 
                      ? 'bg-white text-slate-900 shadow-2xs' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  Log In
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                {mode === 'signup' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-900 mb-1.5 flex items-center justify-between">
                      <span>Select Your Medical Profile</span>
                      <span className="text-[10px] text-slate-500 font-mono">4 Target Tracks</span>
                    </label>

                    {/* 4 Audience Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                      {audiences.map((aud) => {
                        const Icon = aud.icon;
                        const isSelected = selectedAudience === aud.id;
                        return (
                          <button
                            key={aud.id}
                            type="button"
                            onClick={() => setSelectedAudience(aud.id)}
                            className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer flex items-start gap-2.5 ${
                              isSelected
                                ? 'border-slate-900 bg-slate-50 ring-1 ring-slate-900'
                                : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                            }`}
                          >
                            <div className={`p-1.5 rounded-md shrink-0 ${isSelected ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700'}`}>
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div className="min-w-0">
                              <div className="text-xs font-bold text-slate-900 leading-tight">
                                {aud.title}
                              </div>
                              <div className="text-[10px] text-slate-500 truncate mt-0.5">
                                {aud.desc}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Dynamic Track Offerings Info Box */}
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1 mb-3">
                      <div className="flex items-center gap-1.5 font-bold text-slate-900">
                        <BookOpen className="w-3.5 h-3.5 text-[#FF4F4F] shrink-0" />
                        <span className="truncate">Curriculum Access for {currentAudienceInfo.title}:</span>
                      </div>
                      <p className="leading-relaxed text-slate-600 text-[11px]">
                        {currentAudienceInfo.perks}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Dr. / Student Name"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-none bg-white transition-colors"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="doctor@medical.edu"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-none bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 focus:outline-none bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 text-xs sm:text-sm font-bold text-white bg-[#FF4F4F] hover:bg-[#E03E3E] rounded-lg shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2 active:scale-98"
                >
                  <span className="truncate">
                    {mode === 'signup' 
                      ? `Register as ${currentAudienceInfo.title.split(' ')[0]}` 
                      : 'Sign In to Workspace'}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </form>

              <div className="pt-3 mt-4 border-t border-slate-100 text-center">
                <span className="text-[11px] text-slate-500 flex items-center justify-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                  <span>Academic privacy guaranteed · Aligned with NMC CBME Guidelines</span>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
