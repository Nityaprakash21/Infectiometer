import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Brain, 
  Activity, 
  Dna, 
  Microscope, 
  Pill, 
  Bug, 
  Scale, 
  Users, 
  Stethoscope, 
  Scissors, 
  Baby, 
  HeartHandshake,
  BookOpen,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { MEDICAL_SUBJECTS } from '../data/mockData';
import { MedicalSubject } from '../types';

interface MedicalSubjectsProps {
  onSelectSubject: (subject: MedicalSubject) => void;
}

export const MedicalSubjects: React.FC<MedicalSubjectsProps> = ({ onSelectSubject }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'pre-clinical' | 'para-clinical' | 'clinical'>('all');

  const filteredSubjects = activeCategory === 'all' 
    ? MEDICAL_SUBJECTS 
    : MEDICAL_SUBJECTS.filter(s => s.category === activeCategory);

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return Brain;
      case 'Activity': return Activity;
      case 'Dna': return Dna;
      case 'Microscope': return Microscope;
      case 'Pill': return Pill;
      case 'Bug': return Bug;
      case 'Scale': return Scale;
      case 'Users': return Users;
      case 'Stethoscope': return Stethoscope;
      case 'Scissors': return Scissors;
      case 'Baby': return Baby;
      case 'HeartHandshake': return HeartHandshake;
      default: return BookOpen;
    }
  };

  return (
    <section id="subjects" className="py-24 bg-white border-t border-[#E9EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFBFD] border border-[#E9EDF3] text-xs font-bold text-[#FF4D4D]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complete Medical Curriculum</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E28] tracking-tight">
              One Platform. Multiple Medical Disciplines.
            </h2>
            <p className="text-base text-[#64748B] leading-relaxed">
              Every discipline calibrated by high-yield clinical systems and mapped to licensing standards.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1 p-1 bg-[#FAFBFD] border border-[#E9EDF3] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'all' 
                  ? 'bg-white text-[#181E28] shadow-xs' 
                  : 'text-[#64748B] hover:text-[#181E28]'
              }`}
            >
              All (12)
            </button>
            <button
              onClick={() => setActiveCategory('pre-clinical')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'pre-clinical' 
                  ? 'bg-white text-[#181E28] shadow-xs' 
                  : 'text-[#64748B] hover:text-[#181E28]'
              }`}
            >
              Pre-Clinical
            </button>
            <button
              onClick={() => setActiveCategory('para-clinical')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'para-clinical' 
                  ? 'bg-white text-[#181E28] shadow-xs' 
                  : 'text-[#64748B] hover:text-[#181E28]'
              }`}
            >
              Para-Clinical
            </button>
            <button
              onClick={() => setActiveCategory('clinical')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                activeCategory === 'clinical' 
                  ? 'bg-white text-[#181E28] shadow-xs' 
                  : 'text-[#64748B] hover:text-[#181E28]'
              }`}
            >
              Clinical
            </button>
          </div>
        </div>

        {/* 12 Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSubjects.map((sub) => {
            const Icon = getSubjectIcon(sub.icon);
            return (
              <div
                key={sub.id}
                onClick={() => onSelectSubject(sub)}
                className="group p-5 rounded-2xl bg-[#FAFBFD] border border-[#E9EDF3] hover:border-[#FF4D4D]/40 hover:bg-white hover:shadow-soft-hover transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top: Icon + Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl ${sub.color.bg} ${sub.color.text} flex items-center justify-center transition-transform group-hover:scale-105`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] font-mono">
                      {sub.category.replace('-', ' ')}
                    </span>
                  </div>

                  {/* Subject Name */}
                  <h3 className="text-base font-bold text-[#181E28] group-hover:text-[#FF4D4D] transition-colors mb-2">
                    {sub.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#64748B] leading-relaxed line-clamp-2 mb-4">
                    {sub.description}
                  </p>
                </div>

                {/* Resource Stats Bar & Explore Link */}
                <div className="pt-3 border-t border-[#E9EDF3]/80 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-[#64748B] font-mono">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-[#FF4D4D]" />
                      <span>{sub.notesCount} Notes</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <HelpCircle className="w-3 h-3 text-[#FF8A3D]" />
                      <span>{sub.questionsCount} Qs</span>
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <FileCheck className="w-3 h-3 text-[#0EA5E9]" />
                      <span>{sub.testsCount} Mocks</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold text-[#181E28] group-hover:text-[#FF4D4D] transition-colors pt-1">
                    <span>Explore Subject</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
