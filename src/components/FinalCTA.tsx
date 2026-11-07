import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ThermometerLogo } from './ThermometerLogo';

interface FinalCTAProps {
  onGetStarted: () => void;
  onExploreResources: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onGetStarted, onExploreResources }) => {
  return (
    <section className="relative py-14 sm:py-20 md:py-24 bg-gradient-to-br from-[#FFE8E8]/60 via-[#FFF3E0]/50 to-[#E0F7FA]/40 border-t border-[#E9EDF3] overflow-hidden">
      
      {/* Delicate pastel glow spheres matching thermometer colors */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-white/70 rounded-full filter blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-[#FFE8E8]/70 rounded-full filter blur-2xl pointer-events-none -z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4 sm:space-y-6">
        
        {/* Thermometer Logo Lockup in Final CTA */}
        <div className="flex justify-center mb-1 sm:mb-2">
          <div className="inline-flex items-center gap-3 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-2xl bg-white/95 border border-[#E9EDF3] shadow-2xs">
            <ThermometerLogo variant="compact" size="md" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#181E28] tracking-tight leading-tight">
          Make Every Study Session Count.
        </h2>

        {/* Supporting description */}
        <p className="text-sm sm:text-base lg:text-lg text-[#64748B] max-w-2xl mx-auto leading-relaxed">
          Gauge your clinical knowledge, master high-yield microbiology concepts, practice realistic cases, and take control of your medical learning journey with Infectiometer.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 sm:pt-3">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#FF4D4D] hover:bg-[#E83D3D] rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
          >
            <span>Get Started with Infectiometer</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreResources}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-bold text-[#181E28] bg-white hover:bg-[#FAFBFD] border border-[#E9EDF3] rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
          >
            <BookOpen className="w-4 h-4 text-[#FF4D4D]" />
            <span>Explore Curriculum Overview</span>
          </button>
        </div>

        {/* Subtle trust note */}
        <p className="text-[11px] sm:text-xs text-[#64748B] pt-2">
          Free hub open to all · NMC CBME aligned · No credit card required to preview
        </p>

      </div>
    </section>
  );
};
