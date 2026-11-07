import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Layers, 
  Microscope, 
  Stethoscope, 
  Bell, 
  GraduationCap, 
  Target,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ThermometerLogo } from './ThermometerLogo';

interface AboutSectionProps {
  onExplore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExplore }) => {
  const pillars = [
    {
      title: 'Learn',
      description: 'Comprehensive microbiology notes aligned with the NMC CBME curriculum.',
      icon: BookOpen,
      badge: 'NMC CBME Aligned',
      badgeColor: 'bg-[#FFE8E8] text-[#FF4D4D] border-[#FFD5D5]',
      iconBg: 'bg-[#FFE8E8] text-[#FF4D4D]',
      accentBorder: 'hover:border-[#FF4D4D]/40'
    },
    {
      title: 'Explore',
      description: 'Infographics, flowcharts, illustrations, and quick revision resources.',
      icon: Layers,
      badge: 'Visual Learning',
      badgeColor: 'bg-[#FFF3E0] text-[#FF8A3D] border-[#FFE0B2]',
      iconBg: 'bg-[#FFF3E0] text-[#FF8A3D]',
      accentBorder: 'hover:border-[#FF8A3D]/40'
    },
    {
      title: 'Diagnose',
      description: 'Practical insights into clinical specimens, culture methods, organism identification, and antimicrobial susceptibility testing.',
      icon: Microscope,
      badge: 'Lab & Clinical',
      badgeColor: 'bg-[#E0F7FA] text-[#0284C7] border-[#B2EBF2]',
      iconBg: 'bg-[#E0F7FA] text-[#0284C7]',
      accentBorder: 'hover:border-[#0284C7]/40'
    },
    {
      title: 'Understand',
      description: 'Clinical correlations, infectious disease case discussions, and diagnostic approaches.',
      icon: Stethoscope,
      badge: 'Case Discussions',
      badgeColor: 'bg-[#EEF2FF] text-[#4F46E5] border-[#C7D2FE]',
      iconBg: 'bg-[#EEF2FF] text-[#4F46E5]',
      accentBorder: 'hover:border-[#4F46E5]/40'
    },
    {
      title: 'Stay Updated/ News alert',
      description: 'Evidence-based resources on antimicrobial resistance, emerging infections, and infection prevention and control.',
      icon: Bell,
      badge: 'Real-time AMR',
      badgeColor: 'bg-[#FEF3C7] text-[#D97706] border-[#FDE68A]',
      iconBg: 'bg-[#FEF3C7] text-[#D97706]',
      accentBorder: 'hover:border-[#D97706]/40'
    },
    {
      title: 'Prepare',
      description: 'High-yield learning materials and practice questions for postgraduate entrance examinations and MBBS examinations',
      icon: GraduationCap,
      badge: 'MBBS & PG Prep',
      badgeColor: 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]',
      iconBg: 'bg-[#ECFDF5] text-[#059669]',
      accentBorder: 'hover:border-[#059669]/40'
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-white border-t border-[#E9EDF3] relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] pointer-events-none -z-0 overflow-hidden">
        <div className="absolute top-0 right-[15%] w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-br from-[#FFE8E8]/60 to-[#FFF3E0]/40 filter blur-3xl" />
        <div className="absolute bottom-0 left-[10%] w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#E0F7FA]/60 to-transparent filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#FAFBFD] border border-[#E9EDF3] text-[11px] sm:text-xs font-bold text-[#FF4D4D] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A3D]" />
            <span>Educational Platform</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#181E28] tracking-tight leading-tight">
            About Infectiometer
          </h2>

          <p className="text-base sm:text-xl font-bold text-[#FF4D4D] tracking-tight leading-snug">
            Making Microbiology Meaningful. Connecting Science to Clinical Practice.
          </p>

          <p className="text-xs sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto pt-1">
            Infectiometer is an educational platform dedicated to Clinical Microbiology and Infectious Diseases, created to make learning, understanding, and applying microbiology easier for medical students, postgraduate aspirants, healthcare professionals, and laboratory practitioners.
          </p>
        </div>

        {/* Narrative Cards: Scope & Goal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-14">
          <div className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-[#FAFBFD] border border-[#E9EDF3] hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-1.5 sm:w-2 h-full absolute left-0 top-0 bg-[#FF4D4D] rounded-l-3xl" />
            <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#FF4D4D] mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF4D4D]" />
              Comprehensive Scope
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-[#181E28] leading-relaxed font-medium">
              From fundamental microbiological concepts to advanced diagnostic techniques, antimicrobial resistance, infection prevention and control, and emerging infectious diseases, Infectiometer brings together knowledge, practical insights, and evidence-based learning resources.
            </p>
          </div>

          <div className="p-5 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-[#FAFBFD] border border-[#E9EDF3] hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-1.5 sm:w-2 h-full absolute left-0 top-0 bg-[#0EA5E9] rounded-l-3xl" />
            <h3 className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#0EA5E9] mb-2 sm:mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
              Our Educational Goal
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-[#181E28] leading-relaxed font-medium">
              Our goal is to bridge the gap between textbook knowledge, laboratory diagnosis, and clinical practice through simplified notes, visual infographics, flowcharts, case-based discussions, practical guides, and self-assessment resources.
            </p>
          </div>
        </div>

        {/* "What you'll find at Infectiometer" Section */}
        <div className="mb-10 sm:mb-14">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-1.5">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#181E28] tracking-tight">
              What you&apos;ll find at Infectiometer:
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Integrated learning modules designed for medical accuracy, conceptual clarity, and clinical mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={idx}
                  className={`p-4 sm:p-6 rounded-2xl bg-white border border-[#E9EDF3] ${pillar.accentBorder} shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group`}
                >
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${pillar.iconBg} flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 sm:py-1 rounded-full border ${pillar.badgeColor}`}>
                        {pillar.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-black text-[#181E28] tracking-tight mb-1.5 group-hover:text-[#FF4D4D] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-[#F1F5F9] flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#181E28]/80 group-hover:text-[#FF4D4D] transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D4D] shrink-0" />
                    <span>Evidence-based resource</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision & Signature Lockup Card */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#181E28] via-[#1E293B] to-[#0F172A] text-white p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden">
          {/* Subtle Ambient Orbs */}
          <div className="absolute top-0 right-0 w-60 sm:w-80 h-60 sm:h-80 rounded-full bg-[#FF4D4D]/15 filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-52 sm:w-72 h-52 sm:h-72 rounded-full bg-[#0EA5E9]/15 filter blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-6">
            
            {/* Vision Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-bold text-[#FF8A3D] uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              <span>Our Vision</span>
            </div>

            {/* Vision Statement */}
            <p className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-relaxed tracking-tight max-w-3xl">
              &ldquo;To make Clinical Microbiology and Infectious Diseases accessible, engaging, practical, and relevant to every healthcare learner.&rdquo;
            </p>

            {/* Signature Wordmark */}
            <div className="pt-3 sm:pt-4 border-t border-white/10 w-full flex flex-col items-center justify-center gap-2.5 sm:gap-3">
              <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-white/95 border border-white/20 shadow-md">
                <ThermometerLogo variant="horizontal" size="sm" />
              </div>

              <p className="text-xs sm:text-base font-bold text-[#FFC861] tracking-wide uppercase">
                Infectiometer — Where Microbiology Meets Clinical Practice.
              </p>
            </div>

            {onExplore && (
              <div className="pt-1">
                <button
                  onClick={onExplore}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF4D4D] hover:bg-[#E83D3D] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-98"
                >
                  <span>Explore Learning Tracks</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};