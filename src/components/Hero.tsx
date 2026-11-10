import React from 'react';
import { ArrowRight, BookOpen, Video, HelpCircle, FileCheck, Lock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreResources: () => void;
  onExploreTracks: () => void;
  onOpenQuickTest: () => void;
  onOpenSampleNote: () => void;
  onOpenSampleVideo?: () => void;
  onOpenAuth: (mode?: 'signin' | 'signup', audience?: 'mbbs' | 'md-dnb' | 'neet-pg' | 'professional') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreResources,
  onExploreTracks,
  onOpenQuickTest,
  onOpenSampleNote,
  onOpenSampleVideo,
  onOpenAuth
}) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Centered Header */}
        <div className="max-w-3xl mx-auto text-center space-y-5 sm:space-y-6">
          
          {/* Institutional Specialty Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-[#FF4F4F]" />
            <span>Clinical Microbiology & Infectious Diseases</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Making Microbiology Meaningful.<br className="hidden sm:inline" />
            <span className="text-[#FF4F4F]">Connecting Science</span> to Clinical Practice.
          </h1>

          {/* Concise, Human Mission Summary */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            An educational platform built to bridge textbook science, diagnostic laboratory benchwork, and bedside patient care. Structured for MBBS 2nd Year undergraduates, NEET-PG/INI-CET aspirants, postgraduates, and clinicians.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onOpenAuth('signup')}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-[#FF4F4F] hover:bg-[#E03E3E] rounded-lg shadow-sm hover:shadow transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Started — Select Your Track</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onExploreResources}
              className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all shadow-2xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Curriculum Overview</span>
            </button>
          </div>

          {/* Key Platform Pillars Subtitle */}
          <p className="text-xs text-slate-500 pt-1">
            Free showcase modules available below · Complete subject-wise libraries unlock upon login
          </p>
        </div>

        {/* Minimal 4-Pillar Curriculum Overview Rack */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-slate-100">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
              Curriculum Deliverables Overview
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Pillar 1: Notes */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-2xs">
                    <BookOpen className="w-4 h-4 text-[#FF4F4F]" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    Paid Module
                  </span>
                </div>
                <h2 className="text-base font-bold text-slate-900 mb-1">
                  Notes + Slide Decks
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-yield organ system notes aligned with the NMC CBME curriculum. Accompanied by downloadable lecture slides (.PDF).
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={onOpenSampleNote}
                  className="text-xs font-bold text-[#FF4F4F] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Preview Free Note</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span title="Full library unlocks on login">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                </span>
              </div>
            </div>

            {/* Pillar 2: Videos */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-2xs">
                    <Video className="w-4 h-4 text-[#FF4F4F]" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    Paid Module
                  </span>
                </div>
                <h2 className="text-base font-bold text-slate-900 mb-1">
                  Video Lectures
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Step-by-step clinical case walkthroughs, syndrome differentials, and laboratory diagnostic algorithm demonstrations.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={onOpenSampleVideo || onOpenSampleNote}
                  className="text-xs font-bold text-[#FF4F4F] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Watch Free Lecture</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span title="Full library unlocks on login">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                </span>
              </div>
            </div>

            {/* Pillar 3: Q-Bank */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-2xs">
                    <HelpCircle className="w-4 h-4 text-[#FF4F4F]" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    Paid Module
                  </span>
                </div>
                <h2 className="text-base font-bold text-slate-900 mb-1">
                  Question Bank
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  2,000+ vignette questions mirroring university and PG entrance examinations with exhaustive distractor rationales.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={onOpenQuickTest}
                  className="text-xs font-bold text-[#FF4F4F] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Try 3 Sample Qs</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span title="Full library unlocks on login">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                </span>
              </div>
            </div>

            {/* Pillar 4: Test Series */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-2xs">
                    <FileCheck className="w-4 h-4 text-[#FF4F4F]" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                    Paid Module
                  </span>
                </div>
                <h2 className="text-base font-bold text-slate-900 mb-1">
                  Timed Test Series
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Timed grand mock tests with negative marking, exam pace calibration, and comparative percentile ranking.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  onClick={onOpenQuickTest}
                  className="text-xs font-bold text-[#FF4F4F] hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Mini Diagnostic Test</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <span title="Full library unlocks on login">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
