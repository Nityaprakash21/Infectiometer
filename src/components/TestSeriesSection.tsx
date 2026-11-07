import React from 'react';
import { 
  Sparkles, 
  Clock, 
  HelpCircle, 
  Play, 
  BarChart3,
  Thermometer
} from 'lucide-react';
import { TEST_SERIES_LIST } from '../data/mockData';
import { TestSeriesItem } from '../types';

interface TestSeriesSectionProps {
  onAttemptTest: (test: TestSeriesItem) => void;
}

export const TestSeriesSection: React.FC<TestSeriesSectionProps> = ({ onAttemptTest }) => {
  return (
    <section id="test-series" className="py-24 bg-gradient-to-b from-[#FAFBFD] via-[#FFE8E8]/15 to-[#FAFBFD] border-t border-[#E9EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#FF4D4D]/30 text-xs font-bold text-[#FF4D4D] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Standardized Mock Testing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E28] tracking-tight">
            Prepare. Practice. Perform.
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Simulate real examination pressures, gauge clinical accuracy, and identify opportunities to improve.
          </p>
        </div>

        {/* 3 Test Series Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TEST_SERIES_LIST.map((test) => (
            <div
              key={test.id}
              className="group bg-white rounded-2xl border border-[#E9EDF3] p-6 hover:shadow-soft-hover hover:border-[#FF4D4D]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Meta Top: Subject + Difficulty */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#64748B] bg-[#FAFBFD] px-2.5 py-1 rounded-lg border border-[#E9EDF3]">
                    {test.category}
                  </span>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md ${
                    test.difficulty === 'High Yield' 
                      ? 'bg-[#FFE8E8] text-[#FF4D4D]' 
                      : test.difficulty === 'Comprehensive' 
                      ? 'bg-[#E0F7FA] text-[#0EA5E9]' 
                      : 'bg-[#FFF3E0] text-[#D97706]'
                  }`}>
                    {test.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#181E28] group-hover:text-[#FF4D4D] transition-colors mb-3 leading-snug">
                  {test.title}
                </h3>

                {/* Test Specs: Questions & Duration */}
                <div className="flex items-center gap-4 text-xs text-[#64748B] mb-5">
                  <div className="flex items-center gap-1.5">
                    <HelpCircle className="w-4 h-4 text-[#FF4D4D]" />
                    <span className="font-bold text-[#181E28] font-mono">{test.questionsCount}</span> Questions
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#FF8A3D]" />
                    <span className="font-bold text-[#181E28] font-mono">{test.durationMinutes}</span> Mins
                  </div>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {test.tags.map((tag, i) => (
                    <span key={i} className="text-[11px] text-[#64748B] bg-[#FAFBFD] px-2 py-0.5 rounded-md border border-[#E9EDF3]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onAttemptTest(test)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#181E28] bg-[#FAFBFD] hover:bg-[#FF4D4D] hover:text-white border border-[#E9EDF3] hover:border-[#FF4D4D] transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:shadow-xs"
              >
                <Play className="w-3.5 h-3.5" />
                <span>Attempt Test</span>
              </button>
            </div>
          ))}
        </div>

        {/* Test Performance Dashboard Widget with Infectiometer Gauges */}
        <div className="bg-white rounded-2xl border border-[#E9EDF3] p-6 sm:p-8 shadow-soft-card">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-[#E9EDF3]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#FF4D4D] mb-1">
                <BarChart3 className="w-4 h-4" />
                <span>Diagnostic Benchmark Evaluation</span>
              </div>
              <h3 className="text-xl font-bold text-[#181E28]">
                Infectiometer Scorecard & Diagnostic Dashboard
              </h3>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-[#64748B]">
              <span>Last Mock: Yesterday</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D4D]" />
              <span className="text-[#FF4D4D] font-bold">Benchmarked</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left 3 Stat Boxes with Thermometer Palette */}
            <div className="md:col-span-5 grid grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-[#FFE8E8]/60 border border-[#FF4D4D]/20">
                <div className="text-xs text-[#64748B] mb-1">Accuracy</div>
                <div className="text-2xl font-black text-[#FF4D4D] font-mono tabular-nums">84.2%</div>
                <div className="text-[11px] text-[#FF4D4D] font-bold mt-1">Above target baseline</div>
              </div>

              <div className="p-4 rounded-xl bg-[#E0F7FA]/70 border border-[#7DE8FD]/40">
                <div className="text-xs text-[#64748B] mb-1">Questions Attempted</div>
                <div className="text-2xl font-black text-[#0EA5E9] font-mono tabular-nums">480 / 500</div>
                <div className="text-[11px] text-[#0EA5E9] font-bold mt-1">96% completion rate</div>
              </div>

              <div className="p-4 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] col-span-2 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#64748B]">Correct Answers</div>
                  <div className="text-xl font-bold text-[#181E28] font-mono tabular-nums">
                    404 <span className="text-xs font-normal text-[#64748B]">/ 480 completed</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#64748B]">Avg Time per MCQ</div>
                  <div className="text-sm font-bold text-[#181E28] font-mono">54 seconds</div>
                </div>
              </div>
            </div>

            {/* Right: Subject-wise Performance Horizontal Bars */}
            <div className="md:col-span-7 space-y-3.5">
              <div className="flex items-center justify-between text-xs font-bold text-[#181E28]">
                <span>Subject-Wise Mastery Breakdown</span>
                <span className="text-[#64748B]">Target: 80%+</span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-[#181E28] mb-1">
                    <span className="font-medium">Infectious Diseases & Microbiology</span>
                    <span className="font-mono font-bold text-[#FF4D4D]">94%</span>
                  </div>
                  <div className="h-2 w-full bg-[#FAFBFD] border border-[#E9EDF3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF4D4D] rounded-full w-[94%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#181E28] mb-1">
                    <span className="font-medium">Pharmacology & Antimicrobials</span>
                    <span className="font-mono font-bold text-[#FF8A3D]">88%</span>
                  </div>
                  <div className="h-2 w-full bg-[#FAFBFD] border border-[#E9EDF3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FF8A3D] rounded-full w-[88%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#181E28] mb-1">
                    <span className="font-medium">Systemic Pathology</span>
                    <span className="font-mono font-bold text-[#D97706]">82%</span>
                  </div>
                  <div className="h-2 w-full bg-[#FAFBFD] border border-[#E9EDF3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#FFC861] rounded-full w-[82%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-[#181E28] mb-1">
                    <span className="font-medium">Internal Medicine & Physiology</span>
                    <span className="font-mono font-bold text-[#0EA5E9]">79%</span>
                  </div>
                  <div className="h-2 w-full bg-[#FAFBFD] border border-[#E9EDF3] rounded-full overflow-hidden">
                    <div className="h-full bg-[#7DE8FD] rounded-full w-[79%]" />
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
