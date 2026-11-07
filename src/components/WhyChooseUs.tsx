import React from 'react';
import { 
  Sparkles, 
  Check, 
  BrainCircuit, 
  Thermometer
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const highlights = [
    {
      title: 'Structured learning resources',
      desc: 'Systematically categorized by organ systems and disciplines for frictionless study.'
    },
    {
      title: 'Concept-focused preparation',
      desc: 'Deep pathophysiology foundations that prevent rote memorization mistakes.'
    },
    {
      title: 'Organized question practice',
      desc: 'Active recall clinical cases with distractor elimination rationales.'
    },
    {
      title: 'Flexible revision',
      desc: 'Save custom high-yield blocks and review pearls 48 hours before examination.'
    },
    {
      title: 'Performance-based improvement',
      desc: 'Clear, diagnostic insight into exactly which sub-topics you are leaking marks in.'
    },
    {
      title: 'Easy-to-use learning experience',
      desc: 'Distraction-free light interface designed specifically for long study sessions.'
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-white border-t border-[#E9EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFBFD] border border-[#E9EDF3] text-xs font-bold text-[#FF4D4D]">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A3D]" />
            <span>Built by Doctors & Educators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E28] tracking-tight">
            Designed Around How Medical Students Learn
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Medical education requires sustained cognitive stamina and deep conceptual recall. Infectiometer is engineered to support how human memory consolidates clinical knowledge.
          </p>
        </div>

        {/* Balanced Split Layout: Left Feature List + Right Premium Dashboard Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: 6 Highlights Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] hover:border-[#FF4D4D]/30 hover:bg-white transition-all space-y-2 group shadow-2xs"
              >
                <div className="w-7 h-7 rounded-lg bg-white border border-[#E9EDF3] group-hover:border-[#FF4D4D]/40 text-[#FF4D4D] flex items-center justify-center shadow-xs">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-[#181E28]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Premium Study Dashboard Visual with Thermometer Motif */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAFBFD] rounded-2xl border border-[#E9EDF3] p-6 shadow-soft-card space-y-5">
              
              {/* Top Header of the preview dashboard */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E9EDF3]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#FFE8E8] text-[#FF4D4D] flex items-center justify-center">
                    <Thermometer className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#181E28]">Infectiometer Spaced Repetition Engine</div>
                    <div className="text-[11px] text-[#64748B]">Active Diagnostic Recall Intervals (Ebbinghaus Curve)</div>
                  </div>
                </div>
                <span className="text-[11px] font-bold text-[#FF4D4D] bg-[#FFE8E8] px-2 py-0.5 rounded-md font-mono">
                  Calibrated
                </span>
              </div>

              {/* Active Cards Due for Today */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-[#64748B]">
                  <span className="font-bold text-[#181E28]">Daily Clinical Review Queue</span>
                  <span className="font-mono">34 Concepts Due</span>
                </div>

                <div className="space-y-2">
                  <div className="p-3 bg-white rounded-xl border border-[#E9EDF3] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF4D4D]" />
                      <div>
                        <div className="text-xs font-bold text-[#181E28]">Sepsis Pathways & Antimicrobial Stewardship</div>
                        <div className="text-[10px] text-[#64748B]">Infectious Diseases · Next Review: +4 Days</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#FF4D4D] font-mono">94% Mastery</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#E9EDF3] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF8A3D]" />
                      <div>
                        <div className="text-xs font-bold text-[#181E28]">Autonomic Receptors: α1, α2, β1, β2, β3</div>
                        <div className="text-[10px] text-[#64748B]">Pharmacology · Next Review: +7 Days</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#FF8A3D] font-mono">92% Mastery</span>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#E9EDF3] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0EA5E9]" />
                      <div>
                        <div className="text-xs font-bold text-[#181E28]">Renal Tubular Transport & Electrolyte Dynamics</div>
                        <div className="text-[10px] text-[#64748B]">Renal Physiology · Flagged for review today</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#0EA5E9] font-mono">Review Due</span>
                  </div>
                </div>
              </div>

              {/* Weekly Study Time Efficiency with Thermometer Bars */}
              <div className="p-4 bg-white rounded-xl border border-[#E9EDF3] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#181E28]">Weekly Diagnostic Study Cadence</span>
                  <span className="text-[11px] font-bold text-[#FF4D4D]">18.5 hrs active time</span>
                </div>
                
                <div className="grid grid-cols-7 gap-1.5 pt-2 text-center text-[10px] font-mono text-[#64748B]">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                    const colors = ['bg-[#FF4D4D]', 'bg-[#FF8A3D]', 'bg-[#FFC861]', 'bg-[#7DE8FD]', 'bg-[#FF4D4D]', 'bg-[#FF8A3D]', 'bg-[#7DE8FD]'];
                    return (
                      <div key={day} className="space-y-1">
                        <div className="h-16 bg-[#FAFBFD] border border-[#E9EDF3] rounded-lg relative flex items-end p-1">
                          <div 
                            className={`w-full rounded-sm transition-all ${colors[i]}`}
                            style={{ height: `${[65, 80, 45, 90, 75, 100, 60][i]}%` }}
                          />
                        </div>
                        <div>{day}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
