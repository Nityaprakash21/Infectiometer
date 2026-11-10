import React from 'react';
import { 
  FileText, 
  Video, 
  HelpCircle, 
  FileCheck, 
  Lock, 
  ArrowRight, 
  Eye, 
  Download,
  Play,
  CheckCircle2
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
  const pillars = [
    {
      id: 'notes',
      number: '01',
      title: 'Notes + Slide Deck',
      subtitle: 'Structured Notes & Visual Decks (.PDF)',
      icon: FileText,
      description: 'Comprehensive, structured notes aligned with the NMC CBME curriculum. Every topic includes visual diagnostic algorithms, common exam traps, and downloadable lecture slide decks for rapid review before rounds and exams.',
      freeShowcase: {
        title: 'Gram-Negative Bacilli Differentiation (MacConkey & TSI Analysis)',
        tag: 'Free Showcase Note',
        actionLabel: 'Preview Free Note & Slides',
        onAction: onOpenSampleNote,
        icon: Download
      },
      lockedSummary: '50+ Complete Subject-Wise Notes & Slide Decks available upon login.'
    },
    {
      id: 'videos',
      number: '02',
      title: 'Video Lectures',
      subtitle: 'Clinical MasterClasses & Diagnostic Demonstrations',
      icon: Video,
      description: 'Clinical case walkthroughs, syndrome differentials, and laboratory benchwork algorithm demonstrations taught step-by-step by experienced medical educators.',
      freeShowcase: {
        title: 'Approach to Infective Endocarditis & Blood Culture Protocols (18 Min)',
        tag: 'Free Showcase Lecture',
        actionLabel: 'Watch Free Video Lecture',
        onAction: onOpenSampleVideo,
        icon: Play
      },
      lockedSummary: '40+ Hours of High-Yield Clinical MasterClasses available upon login.'
    },
    {
      id: 'qbank',
      number: '03',
      title: 'Question Bank',
      subtitle: '2,000+ Vignettes with Complete Distractor Rationales',
      icon: HelpCircle,
      description: 'Case vignettes mirroring current university prof exams and NEET-PG / INI-CET patterns. Every question features an exhaustive diagnostic explanation of why the correct answer is right and why distractors are wrong.',
      freeShowcase: {
        title: '3 High-Yield Sample Clinical Vignettes with Distractor Rationales',
        tag: 'Free Sample Questions',
        actionLabel: 'Try 3 Sample Questions',
        onAction: onOpenSampleTest,
        icon: Eye
      },
      lockedSummary: '2,000+ Vignette Question Bank with weakness tracking available upon login.'
    },
    {
      id: 'tests',
      number: '04',
      title: 'Test Series',
      subtitle: 'Timed Grand Mocks & PYQ Trend Sprints',
      icon: FileCheck,
      description: 'Exam-simulated mock assessments with real-time countdown clocks, negative marking simulation, and percentile rank calculations to evaluate exam temperament and pace.',
      freeShowcase: {
        title: 'Mini Diagnostic Benchmark Assessment (3-Minute Sprint)',
        tag: 'Free Showcase Test',
        actionLabel: 'Take Free Diagnostic Mock',
        onAction: onOpenSampleTest,
        icon: Play
      },
      lockedSummary: 'Full-Length Grand Mock Test Series & PYQ Sprints available upon login.'
    }
  ];

  return (
    <section id="what-you-get" className="py-14 sm:py-20 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
            <span>Curriculum Overview</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            What You Get on Infectiometer
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-2">
            A transparent overview of our four core learning deliverables for 2nd Year MBBS students and NEET-PG/INI-CET aspirants. Preview the free showcase modules freely, or log in to unlock full curriculum access.
          </p>

          <div className="pt-2 text-xs font-medium text-slate-500 flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            <span>Complete libraries unlock upon registration · 1–2 showcase modules free for everyone</span>
          </div>
        </div>

        {/* 4 Pillars Grid (2x2 on tablet/desktop, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const ActionIcon = pillar.freeShowcase.icon;
            return (
              <div 
                key={pillar.id}
                className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs"
              >
                <div>
                  {/* Pillar Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
                        <Icon className="w-5 h-5 text-slate-800" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#FF4F4F]">
                          Pillar {pillar.number}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 leading-tight">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-slate-400 font-semibold">
                      Paid Module
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {pillar.description}
                  </p>

                  {/* Free Showcase Box */}
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 mb-5 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                        {pillar.freeShowcase.tag}
                      </span>
                      <span className="text-[11px] text-emerald-700 font-semibold">
                        Free to Preview
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-900 leading-snug">
                      {pillar.freeShowcase.title}
                    </p>

                    <button
                      onClick={pillar.freeShowcase.onAction}
                      className="w-full sm:w-auto px-3.5 py-2 text-xs font-bold text-[#FF4F4F] hover:text-white bg-white hover:bg-[#FF4F4F] border border-red-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                    >
                      <ActionIcon className="w-3.5 h-3.5 shrink-0" />
                      <span>{pillar.freeShowcase.actionLabel}</span>
                    </button>
                  </div>
                </div>

                {/* Locked Full Library Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5 min-w-0 pr-2">
                    <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate text-[11px] text-slate-600">{pillar.lockedSummary}</span>
                  </div>

                  <button
                    onClick={() => onOpenAuth('signup')}
                    className="text-xs font-bold text-slate-900 hover:text-[#FF4F4F] whitespace-nowrap cursor-pointer hover:underline shrink-0"
                  >
                    Unlock on Login →
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
