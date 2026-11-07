import React from 'react';
import { Sparkles, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[#FAFBFD] via-[#FAFBFD] to-white border-t border-[#E9EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E9EDF3] text-xs font-bold text-[#FF4D4D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student & Resident Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E28] tracking-tight">
            Learning Experiences That Matter
          </h2>
          <p className="text-base text-[#64748B] leading-relaxed">
            Real feedback from medical undergraduates, licensing candidates, and junior residents using Infectiometer.
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-[#E9EDF3] p-6 shadow-soft-card flex flex-col justify-between hover:shadow-soft-hover transition-all duration-200"
            >
              <div className="space-y-4">
                {/* Quote Icon & Verified Student Label */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-[#FAFBFD] border border-[#E9EDF3] flex items-center justify-center text-[#FF4D4D]">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-[#64748B] bg-[#FAFBFD] px-2 py-0.5 rounded border border-[#E9EDF3]">
                    {t.examFocus}
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-sm text-[#181E28] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="pt-6 mt-6 border-t border-[#E9EDF3]/80 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl ${t.avatarBg} flex items-center justify-center text-xs font-black font-mono shrink-0`}>
                  {t.avatarInitials}
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-[#181E28] truncate">
                    {t.name}
                  </h4>
                  <p className="text-[11px] text-[#64748B] truncate">
                    {t.academicYear}
                  </p>
                  <p className="text-[10px] text-[#64748B]/80 truncate">
                    {t.medicalCollege}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Authenticity */}
        <div className="mt-8 text-center text-xs text-[#64748B]">
          <span>Representative feedback from student cohort evaluations during continuous clinical testing.</span>
        </div>

      </div>
    </section>
  );
};
