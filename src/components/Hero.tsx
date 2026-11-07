import React from 'react';
import { ArrowRight, CheckCircle, Sparkles, Activity } from 'lucide-react';
import { HeroPreviewWindow } from './HeroPreviewWindow';

interface HeroProps {
  onExploreResources: () => void;
  onExploreTests: () => void;
  onOpenQuickTest: () => void;
  onOpenSampleNote: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreResources,
  onExploreTests,
  onOpenQuickTest,
  onOpenSampleNote
}) => {
  return (
    <section id="hero" className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24 overflow-hidden">
      
      {/* Background Soft Pastel Thermometer Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-80px] left-[10%] w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#FFE8E8] to-[#FFF3E0] filter blur-[70px] sm:blur-[90px] opacity-75" />
        <div className="absolute top-[30px] right-[5%] w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] rounded-full bg-gradient-to-bl from-[#E0F7FA] to-[#FFE8E8] filter blur-[80px] sm:blur-[100px] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split: Left Content + Right Product Preview Window */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10 sm:mb-16">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            
            {/* Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white border border-[#E9EDF3] text-[11px] sm:text-xs font-bold text-[#181E28] shadow-2xs max-w-full">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D] shrink-0 animate-pulse" />
              <span className="truncate">INFECTIOMETER · Clinical Microbiology & Infectious Diseases</span>
              <Sparkles className="w-3.5 h-3.5 text-[#FF8A3D] shrink-0" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-black text-[#181E28] leading-[1.14] tracking-tight break-words">
              Making Microbiology <span className="text-[#FF4D4D]">Meaningful</span>. Connecting <span className="text-[#FF8A3D]">Science</span> to Clinical <span className="text-[#0EA5E9]">Practice</span>.
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed max-w-xl font-normal">
              An educational platform dedicated to making learning and applying clinical microbiology easier for MBBS students (2nd Year focus), NEET-PG/INI-CET aspirants, postgraduates, and doctors.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                onClick={onExploreResources}
                className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#FF4D4D] hover:bg-[#E83D3D] rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Curriculum Overview</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreTests}
                className="w-full sm:w-auto px-6 py-3.5 text-xs sm:text-sm font-bold text-[#181E28] bg-white hover:bg-[#FAFBFD] border border-[#E9EDF3] hover:border-[#FF4D4D]/40 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <Activity className="w-4 h-4 text-[#FF4D4D]" />
                <span>View Learning Tracks</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-3 sm:pt-4 border-t border-[#E9EDF3]/80">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-5 text-xs font-semibold text-[#64748B]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF4D4D] shrink-0" />
                  <span className="text-[#181E28]">Structured Subject-Wise Learning</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#FF8A3D] shrink-0" />
                  <span className="text-[#181E28]">Practice-Focused Preparation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
                  <span className="text-[#181E28]">Progress-Driven Learning</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Product-Interface Composition */}
          <div className="lg:col-span-6 w-full">
            <HeroPreviewWindow 
              onOpenQuickTest={onOpenQuickTest}
              onOpenSampleNote={onOpenSampleNote}
            />
          </div>

        </div>

        {/* Platform Overview Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-7 bg-white/90 backdrop-blur-xs rounded-2xl sm:rounded-3xl border border-[#E9EDF3] shadow-soft-card relative overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF4D4D]" />

          <div className="space-y-0.5 sm:space-y-1 text-center sm:text-left">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#181E28] font-mono tabular-nums">
              4 Audiences
            </div>
            <div className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-tight">
              MBBS, NEET-PG, MD/DNB & Doctors
            </div>
          </div>

          <div className="space-y-0.5 sm:space-y-1 text-center sm:text-left border-l border-[#E9EDF3] pl-3 sm:pl-6">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#FF4D4D] font-mono tabular-nums">
              Notes + Decks
            </div>
            <div className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-tight">
              NMC CBME-Aligned Slides & PDFs
            </div>
          </div>

          <div className="space-y-0.5 sm:space-y-1 text-center sm:text-left border-t md:border-t-0 md:border-l border-[#E9EDF3] pt-2.5 md:pt-0 md:pl-6">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#FF8A3D] font-mono tabular-nums">
              Videos & Mocks
            </div>
            <div className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-tight">
              Lectures & Exam Simulations
            </div>
          </div>

          <div className="space-y-0.5 sm:space-y-1 text-center sm:text-left border-t md:border-t-0 border-l border-[#E9EDF3] pt-2.5 md:pt-0 pl-3 md:pl-6">
            <div className="text-xl sm:text-2xl md:text-3xl font-black text-[#0EA5E9] font-mono tabular-nums">
              Free Hub
            </div>
            <div className="text-[11px] sm:text-xs text-[#64748B] font-medium leading-tight">
              Stories, Blog, News & Image Bank
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};