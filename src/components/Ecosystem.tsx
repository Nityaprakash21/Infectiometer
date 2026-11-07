import React from 'react';
import { BookOpen, ClipboardList, FileCheck, ChartNoAxesCombined, ArrowRight, Sparkles } from 'lucide-react';

interface EcosystemProps {
  onSelectFeature: (featureId: string) => void;
}

export const Ecosystem: React.FC<EcosystemProps> = ({ onSelectFeature }) => {
  const features = [
    {
      id: 'concept-clearance',
      title: 'Concept Clearance Notes',
      description: 'Simplified, structured explanations that help students understand complex medical concepts.',
      icon: BookOpen,
      pastelBg: 'bg-[#FFE8E8]',
      accentColor: 'text-[#FF4D4D]',
      borderColor: 'group-hover:border-[#FF4D4D]/40',
      badge: 'High Yield',
      previewDetails: ['Visual diagnostic flowcharts', 'Exam trap warnings', 'Clinical pearls summary']
    },
    {
      id: 'question-bank',
      title: 'Question Bank',
      description: 'Topic-wise and subject-wise questions designed to strengthen understanding through active practice.',
      icon: ClipboardList,
      pastelBg: 'bg-[#FFF3E0]',
      accentColor: 'text-[#FF8A3D]',
      borderColor: 'group-hover:border-[#FF8A3D]/40',
      badge: 'Active Recall',
      previewDetails: ['Clinical vignette format', 'Distractor rationale', 'Organ system filtering']
    },
    {
      id: 'test-series',
      title: 'Test Series',
      description: 'Structured mock tests and assessments to help students evaluate their preparation.',
      icon: FileCheck,
      pastelBg: 'bg-[#FEF7E6]',
      accentColor: 'text-[#D97706]',
      borderColor: 'group-hover:border-[#FFC861]/60',
      badge: 'Exam Simulation',
      previewDetails: ['Real-time clock countdown', 'Comprehensive grand mocks', 'Previous year questions (PYQs)']
    },
    {
      id: 'performance-analytics',
      title: 'Performance Analytics',
      description: 'Track accuracy, identify weak areas, and understand your learning progress.',
      icon: ChartNoAxesCombined,
      pastelBg: 'bg-[#E0F7FA]',
      accentColor: 'text-[#0EA5E9]',
      borderColor: 'group-hover:border-[#7DE8FD]/80',
      badge: 'Diagnostic AI',
      previewDetails: ['Topic accuracy heatmaps', 'Pacing and time metrics', 'Personalized review recommendations']
    }
  ];

  return (
    <section id="ecosystem" className="py-20 bg-white border-t border-[#E9EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFBFD] border border-[#E9EDF3] text-xs font-bold text-[#FF4D4D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Infectiometer Diagnostic Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E28] tracking-tight">
            Everything You Need to Learn Better
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            One organized ecosystem for conceptual learning, focused practice, and exam preparation.
          </p>
        </div>

        {/* 4-Column Feature Grid (Matched to the Thermometer's 4 Segments) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectFeature(item.id)}
                className={`group p-6 rounded-2xl bg-[#FAFBFD] border border-[#E9EDF3] ${item.borderColor} transition-all duration-200 hover:-translate-y-1 hover:bg-white hover:shadow-soft-hover flex flex-col justify-between cursor-pointer`}
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl ${item.pastelBg} ${item.accentColor} flex items-center justify-center transition-transform group-hover:scale-105`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#64748B] bg-white px-2 py-0.5 rounded-md border border-[#E9EDF3]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#181E28] mb-2 group-hover:text-[#FF4D4D] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Preview Key Points */}
                  <div className="space-y-1.5 pt-4 border-t border-[#E9EDF3]/80">
                    {item.previewDetails.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#181E28]">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.pastelBg.replace('bg-', 'bg-')}`} />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explore Action */}
                <div className="pt-6 mt-6 border-t border-[#E9EDF3]/60 flex items-center justify-between text-xs font-bold text-[#181E28] group-hover:text-[#FF4D4D] transition-colors">
                  <span>Explore Module</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
