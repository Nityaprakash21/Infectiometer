import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { ThermometerLogo } from './ThermometerLogo';

interface FinalCTAProps {
  onGetStarted: () => void;
  onExploreResources: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onGetStarted, onExploreResources }) => {
  return (
    <section className="relative py-14 sm:py-20 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Authentic Original Logo */}
        <div className="flex justify-center mb-2">
          <div className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-50 border border-slate-200">
            <ThermometerLogo size="sm" />
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight leading-tight">
          Make Every Study Session Count.
        </h2>

        {/* Supporting description */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
          Gauge your clinical knowledge, master high-yield microbiology concepts, practice realistic patient vignettes, and take control of your medical learning journey with Infectiometer.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onGetStarted}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#FF4F4F] hover:bg-[#E03E3E] rounded-lg shadow-sm hover:shadow transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Started with Infectiometer</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onExploreResources}
            className="w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#FF4F4F]" />
            <span>Explore Curriculum Overview</span>
          </button>
        </div>

        {/* Trust Note */}
        <p className="text-xs text-slate-500 pt-2 font-medium">
          Curated by medical faculty · Aligned with NMC CBME Guidelines · Free Open-Access Hub available to all
        </p>

      </div>
    </section>
  );
};
