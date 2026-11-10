import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Microscope, 
  Stethoscope, 
  ArrowRight, 
  Check, 
  Lock
} from 'lucide-react';

interface AudienceTracksSectionProps {
  onSelectTrackForAuth: (audienceId: 'mbbs' | 'md-dnb' | 'neet-pg' | 'professional') => void;
  onExploreNotes: () => void;
  onExploreVideos: () => void;
  onExploreQBank: () => void;
  onExploreTestSeries: () => void;
}

export const AudienceTracksSection: React.FC<AudienceTracksSectionProps> = ({
  onSelectTrackForAuth
}) => {
  const tracks = [
    {
      id: 'mbbs' as const,
      title: 'MBBS Students',
      target: 'Undergraduate Microbiology & Prof Exams',
      focus: '2nd Year Focus',
      icon: GraduationCap,
      description: 'Comprehensive undergraduate curriculum aligned with the NMC CBME syllabus. Designed for conceptual mastery, practical viva voce, and scoring high in university prof exams.',
      offerings: [
        'Notes + Slide Decks (Downloadable .PDF)',
        'Conceptual Video Lectures & Lab Demos',
        'Vignette-Based Clinical Question Bank',
        'Clinical Scenarios & Case Correlations',
        'Practical Tips & Viva Voce Exam Guide',
        'Summary Tables, Flashcards & Infographics'
      ],
      accessNote: 'Paid Track · 1–2 Free Showcase Modules',
      buttonLabel: 'Register as MBBS'
    },
    {
      id: 'neet-pg' as const,
      title: 'NEET-PG / INI-CET',
      target: 'Examination Revision & Rank Boosting',
      focus: 'Entrance Focus',
      icon: Award,
      description: 'High-yield examination revision focused on active recall, high-frequency PYQ trends, image-based clinical questions, and rapid option-elimination strategies.',
      offerings: [
        'High-Yield Notes + Slide Decks (.PDF)',
        'High-Yield Video Crash Lectures & Demos',
        'Vignette-Based Clinical Question Bank',
        'Timed Grand Mock Test Series with Ranks',
        'Previous Year Question (PYQ) Trends',
        'Rapid-Elimination Diagnostic Algorithms'
      ],
      accessNote: 'Paid Track · 1–2 Free Showcase Modules',
      buttonLabel: 'Register as NEET-PG'
    },
    {
      id: 'md-dnb' as const,
      title: 'MD / DNB Microbiology',
      target: 'Postgraduate Diagnostic & Lab Training',
      focus: 'Postgraduate Focus',
      icon: Microscope,
      description: 'Advanced academic residency training covering diagnostic laboratory benchwork, standard operating procedures, phenotypic/genotypic resistance, and clinical consultation.',
      offerings: [
        'Advanced Diagnostic SOPs & Benchwork',
        'CLSI & EUCAST AST Guidelines',
        'Phenotypic & Genotypic Resistance Protocols',
        'Laboratory QC & Biosafety Standards',
        'Specimen Culture & Pathogen Identification',
        'Postgraduate Seminars & Clinical Case Guides'
      ],
      accessNote: 'Advanced Curriculum · Enrolling Trainees',
      buttonLabel: 'Register as MD / DNB'
    },
    {
      id: 'professional' as const,
      title: 'Doctors & Lab Experts',
      target: 'Diagnostic Updates & Clinical Practice',
      focus: 'Clinical Practice',
      icon: Stethoscope,
      description: 'Evidence-based diagnostic protocols, antimicrobial stewardship algorithms, and real-time resistance updates to support bedside clinical decision-making.',
      offerings: [
        'Real-Time AMR Surveillance Bulletins',
        'Antimicrobial Stewardship Protocols',
        'Emerging Pathogen & Outbreak Advisories',
        'Bedside Infectious Disease Case Pearls',
        'Clinical Microbiology Diagnostic Updates',
        'Diagnostic Consultation & Therapy Algorithms'
      ],
      accessNote: 'Professional Clinical Network Access',
      buttonLabel: 'Register as Doctor'
    }
  ];

  return (
    <section id="tracks" className="py-14 sm:py-20 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-white border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider mb-3">
            <span>Target Learning Tracks</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Four Focused Audiences.<br />
            One Unified Microbiology Standard.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mt-3">
            Select your medical profile. Our content is tailored specifically to your stage of training — whether you are preparing for 2nd Year MBBS university examinations, revising for NEET-PG/INI-CET, or managing infectious diseases in clinic.
          </p>
        </div>

        {/* 4 Audience Cards in 1 Parallel Line (Equal Content & Height Across All Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {tracks.map((track) => {
            const Icon = track.icon;
            return (
              <div 
                key={track.id}
                className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 flex flex-col justify-between hover:border-slate-300 transition-all shadow-2xs h-full"
              >
                <div className="flex flex-col flex-1">
                  
                  {/* Top Bar: Icon + Stage Badge (Aligned Height) */}
                  <div className="h-10 flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 text-slate-900 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-slate-800" />
                    </div>

                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
                      {track.focus}
                    </span>
                  </div>

                  {/* Title (Standardized Height across all 4 cards) */}
                  <div className="h-12 flex items-center">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {track.title}
                    </h3>
                  </div>

                  {/* Target Subtitle (Standardized Height across all 4 cards) */}
                  <div className="h-10 flex items-center mb-2">
                    <p className="text-xs font-medium text-[#FF4F4F] leading-tight">
                      {track.target}
                    </p>
                  </div>

                  {/* Description (Standardized Height across all 4 cards) */}
                  <div className="h-20 sm:h-24 flex items-start mb-4 pb-4 border-b border-slate-100 overflow-hidden">
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {track.description}
                    </p>
                  </div>

                  {/* "WHAT WE OFFER:" Section Label (Exactly on the same horizontal baseline) */}
                  <div className="h-6 flex items-center mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 font-mono">
                      What We Offer:
                    </span>
                  </div>

                  {/* Exactly 6 Checklist Items (Each line-height calibrated to align line-for-line) */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {track.offerings.map((item, idx) => (
                      <li 
                        key={idx} 
                        className="h-8 sm:h-9 flex items-center gap-2 text-xs text-slate-700 leading-snug"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate" title={item}>{item}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Bottom CTA Block (Pinned to Bottom on Same Parallel Line) */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5 mt-auto">
                  <div className="h-5 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="truncate">{track.accessNote}</span>
                    <Lock className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
                  </div>

                  <button
                    onClick={() => onSelectTrackForAuth(track.id)}
                    className="w-full h-10 py-2 px-3 rounded-lg text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                  >
                    <span>{track.buttonLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
