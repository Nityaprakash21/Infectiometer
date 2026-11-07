import React from 'react';
import { 
  FileText, 
  Video, 
  HelpCircle, 
  FileCheck, 
  ArrowRight, 
  Lock, 
  CheckCircle2, 
  Thermometer
} from 'lucide-react';

interface HeroPreviewWindowProps {
  onOpenQuickTest?: () => void;
  onOpenSampleNote?: () => void;
}

export const HeroPreviewWindow: React.FC<HeroPreviewWindowProps> = ({ 
  onOpenQuickTest, 
  onOpenSampleNote 
}) => {
  const modules = [
    {
      id: 'notes',
      title: 'Notes + Slide Deck',
      desc: 'NMC CBME-aligned structured notes + presentation decks (.PDF)',
      tag: 'Free Sample',
      tagColor: 'bg-[#FFE8E8] text-[#FF4D4D] border-[#FFD5D5]',
      icon: FileText,
      iconColor: 'text-[#FF4D4D]',
      iconBg: 'bg-[#FFE8E8]',
      action: onOpenSampleNote,
      actionText: 'Preview Note'
    },
    {
      id: 'videos',
      title: 'Video MasterClasses',
      desc: 'Clinical case walkthroughs, lab demos & diagnostic algorithms',
      tag: '2 Free Lectures',
      tagColor: 'bg-[#FFF3E0] text-[#FF8A3D] border-[#FFE0B2]',
      icon: Video,
      iconColor: 'text-[#FF8A3D]',
      iconBg: 'bg-[#FFF3E0]',
      action: undefined,
      actionText: 'Watch Sample'
    },
    {
      id: 'qbank',
      title: 'Clinical Question Bank',
      desc: '2,000+ vignette questions with step-by-step diagnostic rationales',
      tag: 'Active Recall',
      tagColor: 'bg-[#E0F7FA] text-[#0284C7] border-[#B2EBF2]',
      icon: HelpCircle,
      iconColor: 'text-[#0284C7]',
      iconBg: 'bg-[#E0F7FA]',
      action: undefined,
      actionText: 'Sample Vignette'
    },
    {
      id: 'tests',
      title: 'Timed Test Series',
      desc: 'Grand mock simulations, negative marking & PYQ trends',
      tag: 'Diagnostic Sprint',
      tagColor: 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]',
      icon: FileCheck,
      iconColor: 'text-[#059669]',
      iconBg: 'bg-[#ECFDF5]',
      action: onOpenQuickTest,
      actionText: 'Try Mini Test'
    }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Background Soft Pastel Aurora Glows */}
      <div className="absolute -top-6 -left-6 w-48 sm:w-60 h-48 sm:h-60 bg-[#FFE8E8] rounded-full filter blur-3xl opacity-60 pointer-events-none -z-10" />
      <div className="absolute -bottom-6 -right-6 w-52 sm:w-64 h-52 sm:h-64 bg-[#E0F7FA] rounded-full filter blur-3xl opacity-60 pointer-events-none -z-10" />

      {/* Main Software Window Container */}
      <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#E9EDF3] shadow-lg overflow-hidden transition-all">
        
        {/* Window Top Chrome (macOS style + title) */}
        <div className="px-3.5 sm:px-5 py-3 sm:py-3.5 bg-[#FAFBFD] border-b border-[#E9EDF3] flex items-center justify-between gap-2">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFC861] inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#7DE8FD] inline-block" />
          </div>

          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 bg-white border border-[#E9EDF3] rounded-full text-[10px] sm:text-[11px] font-bold text-[#181E28] truncate">
            <Thermometer className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF4D4D] shrink-0" />
            <span className="truncate">Curriculum Overview</span>
          </div>

          <span className="text-[9px] sm:text-[10px] font-bold text-[#64748B] uppercase tracking-wider shrink-0">
            4 Core Pillars
          </span>
        </div>

        {/* Window Content */}
        <div className="p-4 sm:p-6 lg:p-7 space-y-4 sm:space-y-5">
          
          {/* Section Introduction */}
          <div className="flex items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#181E28] tracking-tight">
                What You Get Inside
              </h3>
              <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5">
                Structured learning resources built for 2nd Year MBBS & PG aspirants.
              </p>
            </div>

            <div className="hidden xs:flex sm:flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#10B981] bg-[#ECFDF5] px-2.5 py-1 rounded-full border border-[#A7F3D0] shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>NMC Aligned</span>
            </div>
          </div>

          {/* 4 Minimal Module Cards */}
          <div className="space-y-2.5 sm:space-y-3">
            {modules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.id}
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#FAFBFD] hover:bg-white border border-[#E9EDF3] hover:border-[#CBD5E1] transition-all duration-200 flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 sm:gap-3 group"
                >
                  <div className="flex items-start sm:items-center gap-3 min-w-0">
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${mod.iconBg} ${mod.iconColor} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform mt-0.5 sm:mt-0`}>
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <h4 className="text-xs sm:text-sm font-black text-[#181E28]">
                          {mod.title}
                        </h4>
                        <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${mod.tagColor}`}>
                          {mod.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-[#64748B] truncate mt-0.5">
                        {mod.desc}
                      </p>
                    </div>
                  </div>

                  {mod.action && (
                    <button
                      onClick={mod.action}
                      className="self-end xs:self-auto px-3 py-1.5 rounded-lg bg-white border border-[#E9EDF3] hover:border-[#FF4D4D] text-[11px] font-bold text-[#181E28] hover:text-[#FF4D4D] transition-colors cursor-pointer shrink-0 shadow-2xs flex items-center gap-1 active:scale-95"
                    >
                      <span>{mod.actionText}</span>
                      <ArrowRight className="w-3 h-3 text-[#FF4D4D]" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {/* Minimal Bottom Strip */}
          <div className="pt-2 border-t border-[#F1F5F9] flex flex-wrap items-center justify-between gap-2 text-xs text-[#64748B]">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold">
              <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF4D4D] shrink-0" />
              <span>Full curriculum libraries unlock upon login</span>
            </div>

            <span className="text-[10px] sm:text-[11px] font-bold text-[#059669]">
              ★ Free Hub Open to All
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};