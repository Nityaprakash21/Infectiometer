import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Microscope, 
  Stethoscope, 
  ArrowRight, 
  Sparkles, 
  Lock
} from 'lucide-react';
import { TARGET_AUDIENCES } from '../data/mockData';
import { AudienceId } from '../types';

interface AudienceTracksSectionProps {
  onSelectTrackForAuth: (audienceId: 'mbbs' | 'md-dnb' | 'neet-pg' | 'professional') => void;
  onExploreNotes: () => void;
  onExploreVideos: () => void;
  onExploreQBank: () => void;
  onExploreTestSeries: () => void;
}

export const AudienceTracksSection: React.FC<AudienceTracksSectionProps> = ({
  onSelectTrackForAuth,
  onExploreNotes
}) => {
  const [activeAudienceId, setActiveAudienceId] = useState<AudienceId>('mbbs');

  const activeAudience = TARGET_AUDIENCES.find(a => a.id === activeAudienceId) || TARGET_AUDIENCES[0];

  const getAudienceIcon = (id: AudienceId) => {
    switch (id) {
      case 'mbbs': return GraduationCap;
      case 'neet-pg': return Award;
      case 'md-dnb': return Microscope;
      case 'professional': return Stethoscope;
      default: return GraduationCap;
    }
  };

  return (
    <section id="tracks" className="py-14 sm:py-20 md:py-24 bg-[#FAFBFD] border-t border-[#E9EDF3] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[550px] pointer-events-none -z-0">
        <div className="absolute top-12 left-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#FFE8E8]/50 filter blur-[70px] sm:blur-[90px]" />
        <div className="absolute bottom-12 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#FFF3E0]/50 filter blur-[70px] sm:blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white border border-[#E9EDF3] text-[11px] sm:text-xs font-bold text-[#FF4D4D] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A3D]" />
            <span>4 Major Target Audiences</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#181E28] tracking-tight leading-tight">
            Tailored Microbiology Learning Tracks
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Choose your academic stage. Whether you are an undergraduate studying 2nd year MBBS or an entrance exam aspirant, your curriculum is precision-crafted for clinical mastery.
          </p>

          <div className="pt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-semibold text-[#64748B]">
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-white border border-[#E9EDF3] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              Paid Comprehensive Tracks
            </span>
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#FFE8E8] text-[#FF4D4D] border border-[#FFD5D5] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#FF4D4D]" />
              1–2 Free Showcase Items to Explore
            </span>
          </div>
        </div>

        {/* 4 Audience Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 mb-8 sm:mb-10">
          {TARGET_AUDIENCES.map((audience) => {
            const Icon = getAudienceIcon(audience.id);
            const isActive = activeAudienceId === audience.id;
            return (
              <button
                key={audience.id}
                onClick={() => setActiveAudienceId(audience.id)}
                className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isActive
                    ? 'bg-white border-2 border-[#FF4D4D] shadow-md scale-[1.01]'
                    : 'bg-white/80 hover:bg-white border-[#E9EDF3] hover:border-[#CBD5E1] shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-[#FFE8E8] text-[#FF4D4D]' : 'bg-[#FAFBFD] text-[#64748B] group-hover:text-[#181E28]'
                    }`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      isActive ? 'bg-[#FFE8E8] text-[#FF4D4D] border-[#FFD5D5]' : 'bg-[#FAFBFD] text-[#64748B] border-[#E9EDF3]'
                    }`}>
                      {audience.badge}
                    </span>
                  </div>

                  <h3 className={`text-sm sm:text-base font-black tracking-tight ${isActive ? 'text-[#181E28]' : 'text-[#334155]'}`}>
                    {audience.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5 sm:mt-1 leading-snug line-clamp-2">
                    {audience.subtitle}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 mt-2.5 sm:mt-3 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] sm:text-[11px] font-bold">
                  <span className={isActive ? 'text-[#FF4D4D]' : 'text-[#64748B]'}>
                    {audience.isPrimaryFocus ? 'Core Track' : 'Specialized'}
                  </span>
                  <span className={`transition-transform ${isActive ? 'translate-x-1 text-[#FF4D4D]' : 'text-[#94A3B8]'}`}>
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Active Track Showcase Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9EDF3] p-4 sm:p-7 lg:p-10 shadow-sm relative overflow-hidden">
          {/* Top Accent Ribbon */}
          <div 
            className="h-1.5 sm:h-2 w-full absolute top-0 left-0" 
            style={{ backgroundColor: activeAudience.accentColor }} 
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left Column: Track Info */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="space-y-2 sm:space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold"
                  style={{ backgroundColor: `${activeAudience.accentColor}15`, color: activeAudience.accentColor }}>
                  <span>{activeAudience.badge}</span>
                  {activeAudience.targetYear && (
                    <span className="text-[10px] opacity-80">· {activeAudience.targetYear}</span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#181E28] tracking-tight">
                  {activeAudience.title}
                </h3>

                <p className="text-sm sm:text-base font-bold text-[#FF4D4D]">
                  {activeAudience.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {activeAudience.focus}
                </p>
              </div>

              {/* Pricing & Free Showcase Notice */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAFBFD] border border-[#E9EDF3] space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#181E28]">Subscription Plan</span>
                  <span className="px-2 py-0.5 rounded-full bg-[#FFE8E8] text-[#FF4D4D] text-[10px]">
                    Paid Source
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-[#64748B] leading-relaxed">
                  Full curriculum includes all modules. <strong className="text-[#181E28]">1–2 free showcase items</strong> are unlocked for immediate exploration without payment.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 pt-1">
                <button
                  onClick={() => onSelectTrackForAuth(activeAudience.id)}
                  className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-bold text-white bg-[#FF4D4D] hover:bg-[#E83D3D] rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <span>Register as {activeAudience.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onExploreNotes}
                  className="w-full sm:w-auto px-4 py-3 text-xs sm:text-sm font-bold text-[#181E28] hover:text-[#FF4D4D] bg-[#FAFBFD] hover:bg-white border border-[#E9EDF3] rounded-xl transition-colors cursor-pointer text-center"
                >
                  Explore Free Showcase
                </button>
              </div>
            </div>

            {/* Right Column: Offerings Checklist */}
            <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-2.5 sm:pb-3">
                <h4 className="text-xs sm:text-sm font-extrabold text-[#181E28] uppercase tracking-wider">
                  What We Offer For {activeAudience.title}:
                </h4>
                <span className="text-[11px] sm:text-xs font-semibold text-[#64748B]">
                  {activeAudience.offerings.length} Core Modules
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
                {activeAudience.offerings.map((offering) => (
                  <div
                    key={offering.number}
                    className={`p-3.5 sm:p-4 rounded-xl border transition-all ${
                      offering.isFreeShowcase
                        ? 'bg-[#FAFBFD] border-[#FF4D4D]/30 shadow-2xs'
                        : 'bg-white border-[#E9EDF3]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-md bg-[#181E28] text-white text-[10px] font-black flex items-center justify-center shrink-0">
                          {offering.number}
                        </span>
                        <h5 className="text-xs font-black text-[#181E28]">
                          {offering.title}
                        </h5>
                      </div>

                      {offering.isFreeShowcase ? (
                        <span className="text-[9px] sm:text-[10px] font-black px-2 py-0.5 rounded-full bg-[#FFE8E8] text-[#FF4D4D] border border-[#FFD5D5] shrink-0">
                          Free Sample
                        </span>
                      ) : (
                        <span className="text-[10px] font-semibold text-[#94A3B8] flex items-center gap-0.5 shrink-0">
                          <Lock className="w-2.5 h-2.5" />
                          <span>Enrolled</span>
                        </span>
                      )}
                    </div>

                    <p className="text-[11px] text-[#64748B] leading-relaxed pl-7">
                      {offering.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Quick Navigation Shortcut */}
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAFBFD] border border-[#E9EDF3] mt-3 sm:mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 text-xs">
                <span className="font-bold text-[#181E28] flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#FF4D4D] shrink-0" />
                  <span>Full Curriculum Details Available Upon Login</span>
                </span>
                <button 
                  onClick={onExploreNotes} 
                  className="w-full sm:w-auto px-3.5 py-2 rounded-lg bg-white border border-[#E9EDF3] text-xs font-bold text-[#181E28] hover:text-[#FF4D4D] hover:border-[#FF4D4D] transition-colors cursor-pointer flex items-center justify-center gap-1 shadow-2xs active:scale-95"
                >
                  <span>Explore What You Get Overview</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};