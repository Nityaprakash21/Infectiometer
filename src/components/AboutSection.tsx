import React from 'react';
import { 
  BookOpen, 
  Layers, 
  Microscope, 
  Stethoscope, 
  Bell, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { ThermometerLogo } from './ThermometerLogo';

interface AboutSectionProps {
  onExplore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExplore }) => {
  const pillars = [
    {
      num: '01',
      title: 'Learn',
      description: 'Comprehensive microbiology notes aligned with the NMC CBME curriculum.',
      icon: BookOpen,
      scope: 'Curriculum Notes'
    },
    {
      num: '02',
      title: 'Explore',
      description: 'Infographics, flowcharts, illustrations, and quick revision resources.',
      icon: Layers,
      scope: 'Visual Flowcharts'
    },
    {
      num: '03',
      title: 'Diagnose',
      description: 'Practical insights into clinical specimens, culture methods, organism identification, and antimicrobial susceptibility testing.',
      icon: Microscope,
      scope: 'Laboratory Benchwork'
    },
    {
      num: '04',
      title: 'Understand',
      description: 'Clinical correlations, infectious disease case discussions, and diagnostic approaches.',
      icon: Stethoscope,
      scope: 'Bedside Medicine'
    },
    {
      num: '05',
      title: 'Stay Updated/ News alert',
      description: 'Evidence-based resources on antimicrobial resistance, emerging infections, and infection prevention and control.',
      icon: Bell,
      scope: 'AMR & Stewardship'
    },
    {
      num: '06',
      title: 'Prepare',
      description: 'High-yield learning materials and practice questions for postgraduate entrance examinations and MBBS examinations',
      icon: GraduationCap,
      scope: 'Exam Readiness'
    }
  ];

  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-4">
            <span>About Infectiometer</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 tracking-tight leading-tight">
            Making Microbiology Meaningful.<br />
            <span className="text-[#FF4F4F]">Connecting Science</span> to Clinical Practice.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-4">
            Infectiometer is an educational platform dedicated to Clinical Microbiology and Infectious Diseases, created to make learning, understanding, and applying microbiology easier for medical students, postgraduate aspirants, healthcare professionals, and laboratory practitioners.
          </p>
        </div>

        {/* Narrative Cards: Scope & Goal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14 sm:mb-18">
          <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 relative">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF4F4F] block mb-2">
              Comprehensive Scope
            </span>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
              From fundamental microbiological concepts to advanced diagnostic techniques, antimicrobial resistance, infection prevention and control, and emerging infectious diseases, Infectiometer brings together knowledge, practical insights, and evidence-based learning resources.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 relative">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block mb-2">
              Our Educational Goal
            </span>
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
              Our goal is to bridge the gap between textbook knowledge, laboratory diagnosis, and clinical practice through simplified notes, visual infographics, flowcharts, case-based discussions, practical guides, and self-assessment resources.
            </p>
          </div>
        </div>

        {/* "What you'll find at Infectiometer" Section */}
        <div className="mb-14 sm:mb-18">
          <div className="mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
              What you&apos;ll find at Infectiometer:
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Integrated learning modules designed for medical accuracy, conceptual clarity, and clinical mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={pillar.num}
                  className="p-5 sm:p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-center shrink-0 border border-slate-200">
                        <Icon className="w-5 h-5 text-slate-800" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {pillar.num}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900 mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{pillar.scope}</span>
                    <span className="text-slate-400 font-mono">Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision & Signature Lockup Card */}
        <div className="rounded-xl bg-slate-900 text-white p-8 sm:p-12 lg:p-14 border border-slate-800 shadow-md">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono font-semibold text-slate-300 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Our Vision</span>
            </div>

            <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-relaxed tracking-tight">
              &ldquo;To make Clinical Microbiology and Infectious Diseases accessible, engaging, practical, and relevant to every healthcare learner.&rdquo;
            </p>

            <div className="pt-6 border-t border-slate-800 flex flex-col items-center justify-center gap-3">
              <div className="px-4 py-2 rounded-lg bg-white inline-flex items-center justify-center">
                <ThermometerLogo size="sm" />
              </div>

              <p className="text-xs sm:text-sm font-bold text-slate-300 tracking-wide uppercase">
                Infectiometer — Where Microbiology Meets Clinical Practice.
              </p>
            </div>

            {onExplore && (
              <div className="pt-2">
                <button
                  onClick={onExplore}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#FF4F4F] hover:bg-[#E03E3E] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-colors cursor-pointer"
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
