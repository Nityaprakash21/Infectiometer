import React, { useState } from 'react';
import { 
  FileText, 
  Video, 
  HelpCircle, 
  FileCheck, 
  Sparkles, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Eye, 
  ShieldCheck
} from 'lucide-react';

interface WhatYouGetSectionProps {
  onOpenSampleNote: () => void;
  onOpenSampleVideo: () => void;
  onOpenSampleTest: () => void;
  onOpenAuth: (mode?: 'signin' | 'signup') => void;
}

export const WhatYouGetSection: React.FC<WhatYouGetSectionProps> = ({
  onOpenSampleNote,
  onOpenSampleVideo,
  onOpenSampleTest,
  onOpenAuth
}) => {
  const [activeTab, setActiveTab] = useState<'notes' | 'videos' | 'qbank' | 'tests'>('notes');

  const corePillars = [
    {
      id: 'notes' as const,
      title: 'Notes + Slide Deck',
      subtitle: 'Structured Notes & Visual Decks',
      icon: FileText,
      badge: 'Core Offering 1',
      freeItemTitle: 'Sample Note: Cardiac Electrophysiology & Gram-Negative Algorithm',
      stats: '50+ High-Yield Notes · Complete Slide Decks (.PDF)',
      color: '#FF4D4D',
      bgLight: 'bg-[#FFE8E8]',
      accentBorder: 'border-[#FF4D4D]/30',
      description: 'Comprehensive, structured notes aligned with the NMC CBME curriculum. Every topic includes visual diagnostic flowcharts, common exam traps, and downloadable presentation slide decks for fast recall.',
      deliverables: [
        'Organ-system based Clinical Microbiology & Infectious Disease notes',
        'Downloadable slide decks for rapid 24-hour university & PG exam review',
        'Visual clinical pearls, differential diagnosis tables, and laboratory algorithms',
        'Exam trap alerts warning against frequently chosen distractors'
      ],
      sampleActionText: 'Preview Free Sample Note',
      onSampleClick: onOpenSampleNote,
      loginUnlockText: 'Full 50+ Notes & Slide Deck Library'
    },
    {
      id: 'videos' as const,
      title: 'Videos',
      subtitle: 'Conceptual MasterClasses',
      icon: Video,
      badge: 'Core Offering 2',
      freeItemTitle: '2 Free MasterClasses: Gram-Negative Algorithms & AMR Demystified',
      stats: '40+ Hours of Video · Expert Faculty',
      color: '#FF8A3D',
      bgLight: 'bg-[#FFF3E0]',
      accentBorder: 'border-[#FF8A3D]/30',
      description: 'Clinical case walkthroughs, laboratory algorithm demonstrations, and high-yield crash lectures taught by medical educators. Designed specifically for 2nd Year MBBS and NEET-PG entrance aspirants.',
      deliverables: [
        'Step-by-step diagnostic algorithms for bacteria, viruses, fungi, and parasites',
        'Phenotypic and molecular antimicrobial resistance (ESBL, CRE, MRSA) breakdowns',
        'Laboratory benchwork video walkthroughs & AST interpretation standards',
        'Synced annotated slide decks provided with every lecture'
      ],
      sampleActionText: 'Watch Free Showcase Lecture',
      onSampleClick: onOpenSampleVideo,
      loginUnlockText: 'Full Video MasterClass Series'
    },
    {
      id: 'qbank' as const,
      title: 'Question Bank',
      subtitle: 'Clinical Vignette Practice',
      icon: HelpCircle,
      badge: 'Core Offering 3',
      freeItemTitle: 'Sample Practice Vignette with Distractor Elimination',
      stats: '2,000+ Vignette Questions · Detailed Rationales',
      color: '#0EA5E9',
      bgLight: 'bg-[#E0F7FA]',
      accentBorder: 'border-[#0EA5E9]/30',
      description: 'Active recall clinical scenarios mirroring current university and PG entrance patterns. Every question features an exhaustive diagnostic breakdown explaining why the correct answer is right and why distractors are wrong.',
      deliverables: [
        'Vignette-heavy clinical scenarios teaching bedside pathogen identification',
        'Granular distractor analysis explaining the pathology of incorrect options',
        'Organ-system, subject, and difficulty filtering (Beginner to High-Yield)',
        'Personalized diagnostic accuracy tracking & weak-spot analytics'
      ],
      sampleActionText: 'Preview Sample Question',
      onSampleClick: () => onOpenAuth('signup'),
      loginUnlockText: 'Full 2,000+ Vignette Question Bank'
    },
    {
      id: 'tests' as const,
      title: 'Test Series',
      subtitle: 'Timed Mocks & PYQs',
      icon: FileCheck,
      badge: 'Core Offering 4',
      freeItemTitle: 'Free Diagnostic Sprint Mock (3-Minute Test)',
      stats: 'Timed Grand Mocks · All-India Percentile',
      color: '#10B981',
      bgLight: 'bg-[#ECFDF5]',
      accentBorder: 'border-[#10B981]/30',
      description: 'Structured mock assessments with real-time countdown clocks and negative marking simulation to evaluate exam temperament and pace for 2nd Year MBBS exams and NEET-PG/INI-CET entrance.',
      deliverables: [
        'Full-length NEET-PG and INI-CET simulation grand mocks',
        '2nd Year MBBS university curriculum assessment sprints',
        'Previous year question (PYQ) trend analysis and high-frequency topics',
        'Subject-wise performance heatmaps and pacing metrics'
      ],
      sampleActionText: 'Start Free Sample Test',
      onSampleClick: onOpenSampleTest,
      loginUnlockText: 'Complete Timed Mock Test Series'
    }
  ];

  const currentPillar = corePillars.find(p => p.id === activeTab) || corePillars[0];
  const Icon = currentPillar.icon;

  return (
    <section id="what-you-get" className="py-14 sm:py-20 md:py-24 bg-white border-t border-[#E9EDF3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFBFD] border border-[#E9EDF3] text-[11px] sm:text-xs font-bold text-[#FF4D4D] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A3D]" />
            <span>Platform Curriculum Overview</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#181E28] tracking-tight leading-tight">
            What You Will Get on Infectiometer
          </h2>

          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            A minimal, organized look at our four core learning resources. Preview sample showcase materials freely below, or log in to unlock full access across your medical curriculum.
          </p>

          <div className="pt-1 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-semibold text-[#64748B]">
            <span className="flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-[#FF4D4D] shrink-0" />
              <span>Full curriculum details & complete libraries available upon login</span>
            </span>
          </div>
        </div>

        {/* 4 Core Pillars Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {corePillars.map((pillar) => {
            const PIcon = pillar.icon;
            const isSelected = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border text-left transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-[#FAFBFD] border-2 border-[#181E28] shadow-md scale-[1.01]'
                    : 'bg-white hover:bg-[#FAFBFD] border-[#E9EDF3] hover:border-[#CBD5E1] shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                    <div 
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                    >
                      <PIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>

                    <span className="text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAFBFD] border border-[#E9EDF3] text-[#64748B]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-black text-[#181E28] tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] mt-0.5 font-medium">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-3 mt-3 sm:mt-4 border-t border-[#F1F5F9] flex items-center justify-between text-[10px] sm:text-[11px] font-bold">
                  <span className={isSelected ? 'text-[#FF4D4D]' : 'text-[#64748B]'}>
                    {isSelected ? 'Viewing Overview' : 'Click to View'}
                  </span>
                  <span className={`transition-transform ${isSelected ? 'translate-x-1 text-[#FF4D4D]' : 'text-[#94A3B8]'}`}>
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Core Offering Detailed Overview Card */}
        <div className="bg-[#FAFBFD] rounded-2xl sm:rounded-3xl border border-[#E9EDF3] p-4 sm:p-7 lg:p-10 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            
            {/* Left Column: Description & Deliverables */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="space-y-1.5 sm:space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-bold"
                  style={{ backgroundColor: `${currentPillar.color}15`, color: currentPillar.color }}>
                  <Icon className="w-3.5 h-3.5" />
                  <span>{currentPillar.badge} Overview</span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#181E28] tracking-tight">
                  {currentPillar.title}
                </h3>

                <p className="text-xs sm:text-sm lg:text-base text-[#64748B] leading-relaxed">
                  {currentPillar.description}
                </p>
              </div>

              {/* What You Will Get Checklist */}
              <div className="space-y-2 pt-1 sm:pt-2">
                <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#181E28]">
                  Included in This Core Resource:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {currentPillar.deliverables.map((item, idx) => (
                    <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-white border border-[#E9EDF3] flex items-start gap-2.5 text-xs text-[#334155]">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[11px] sm:text-xs text-[#64748B] flex items-center gap-1.5 pt-1">
                <ShieldCheck className="w-4 h-4 text-[#FF4D4D] shrink-0" />
                <span>Curated for 2nd Year MBBS & NEET-PG / INI-CET Aspirants</span>
              </div>
            </div>

            {/* Right Column: Free Showcase Preview & Login Lock Box */}
            <div className="lg:col-span-5 space-y-3.5 sm:space-y-4">
              
              {/* Box 1: Free Showcase Sample */}
              <div className="bg-white rounded-xl sm:rounded-2xl border border-[#FF4D4D]/30 p-4 sm:p-5 shadow-2xs space-y-2.5 sm:space-y-3 relative overflow-hidden">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FFE8E8] text-[#FF4D4D] border border-[#FFD5D5] shrink-0">
                    Free Showcase Sample
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#10B981] shrink-0">
                    Unlocked for Everyone
                  </span>
                </div>

                <div>
                  <h5 className="text-xs sm:text-sm font-black text-[#181E28]">
                    {currentPillar.freeItemTitle}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-[#64748B] mt-1">
                    Try this interactive sample without logging in to see our structured presentation style.
                  </p>
                </div>

                <button
                  onClick={currentPillar.onSampleClick}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FAFBFD] hover:bg-white border border-[#E9EDF3] hover:border-[#FF4D4D] text-xs font-bold text-[#181E28] hover:text-[#FF4D4D] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs active:scale-95"
                >
                  <Eye className="w-3.5 h-3.5 text-[#FF4D4D] shrink-0" />
                  <span>{currentPillar.sampleActionText}</span>
                </button>
              </div>

              {/* Box 2: Full Details Locked Upon Login */}
              <div className="bg-gradient-to-br from-[#181E28] to-[#0F172A] rounded-xl sm:rounded-2xl p-4 sm:p-5 text-white shadow-md space-y-3 sm:space-y-4 relative overflow-hidden">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#FFC861]">
                    <Lock className="w-3.5 h-3.5 shrink-0" />
                    <span>Details Available Upon Login</span>
                  </div>
                  <span className="text-[10px] font-semibold text-white/60 shrink-0">
                    Student & Doctor Portal
                  </span>
                </div>

                <div className="space-y-1">
                  <h5 className="text-xs sm:text-sm font-bold text-white">
                    Unlock {currentPillar.loginUnlockText}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-white/70 leading-relaxed">
                    Log in to your account or register to access complete organ-system modules, downloadable slide decks, video streams, question sets, and mock performance analytics.
                  </p>
                </div>

                <div className="pt-1 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => onOpenAuth('signin')}
                    className="w-full sm:flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors cursor-pointer text-center active:scale-95"
                  >
                    Log In to Access
                  </button>

                  <button
                    onClick={() => onOpenAuth('signup')}
                    className="w-full sm:flex-1 py-2.5 rounded-xl bg-[#FF4D4D] hover:bg-[#E83D3D] text-white text-xs font-bold transition-colors cursor-pointer shadow-sm text-center flex items-center justify-center gap-1 active:scale-95"
                  >
                    <span>Create Free Account</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
