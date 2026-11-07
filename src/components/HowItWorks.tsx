import React from 'react';
import { Sparkles, Compass, BookOpen, Layers, Award, Thermometer } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Subject',
      description: 'Explore your medical subjects and available resources across all clinical phases.',
      icon: Compass,
      bgColor: 'bg-[#FFE8E8]',
      textColor: 'text-[#FF4D4D]',
      borderColor: 'border-[#FF4D4D]/30'
    },
    {
      number: '02',
      title: 'Understand Concepts',
      description: 'Study structured notes and concept explanations with high-yield clinical pearls.',
      icon: BookOpen,
      bgColor: 'bg-[#FFF3E0]',
      textColor: 'text-[#FF8A3D]',
      borderColor: 'border-[#FF8A3D]/30'
    },
    {
      number: '03',
      title: 'Practice Questions',
      description: 'Strengthen your understanding through vignette-based active question banks.',
      icon: Layers,
      bgColor: 'bg-[#FEF7E6]',
      textColor: 'text-[#D97706]',
      borderColor: 'border-[#FFC861]/40'
    },
    {
      number: '04',
      title: 'Gauge Your Mastery',
      description: 'Take timed mock assessments and calibrate your Infectiometer accuracy scores.',
      icon: Award,
      bgColor: 'bg-[#E0F7FA]',
      textColor: 'text-[#0EA5E9]',
      borderColor: 'border-[#7DE8FD]/50'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#FAFBFD] via-white to-[#FAFBFD] border-t border-[#E9EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E9EDF3] text-xs font-bold text-[#FF4D4D]">
            <Thermometer className="w-3.5 h-3.5 text-[#FF4D4D]" />
            <span>Structured Study Cadence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E28] tracking-tight">
            Your Learning Journey, Simplified.
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            A cohesive 4-phase cadence mapped to the Infectiometer thermometer spectrum to turn reading into diagnostic reflex.
          </p>
        </div>

        {/* 4-Step Horizontal Process with Connected Thermometer Timeline */}
        <div className="relative">
          {/* Subtle connecting thermometer spectrum line across desktop */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-[3px] bg-infectio-gradient rounded-full -z-0 opacity-70" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Step Circular Indicator */}
                  <div className={`w-16 h-16 rounded-2xl ${step.bgColor} ${step.borderColor} border flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform bg-white`}>
                    <Icon className={`w-7 h-7 ${step.textColor}`} />
                  </div>

                  {/* Step Index Badge */}
                  <div className={`inline-block text-xs font-mono font-bold ${step.textColor} bg-white px-2.5 py-0.5 rounded-full border border-[#E9EDF3] mb-3 shadow-2xs`}>
                    Step {step.number}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-[#181E28] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-xs">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
