import React, { useState } from 'react';
import { 
  Check, 
  Sparkles, 
  ArrowRight, 
  FileText, 
  Lightbulb, 
  AlertTriangle,
  Thermometer
} from 'lucide-react';

interface ConceptClearanceProps {
  onOpenSampleNote: () => void;
}

export const ConceptClearance: React.FC<ConceptClearanceProps> = ({ onOpenSampleNote }) => {
  const [activeNoteTab, setActiveNoteTab] = useState<'mechanism' | 'pearls' | 'traps'>('mechanism');

  return (
    <section id="concept-clearance" className="py-24 bg-gradient-to-b from-[#FAFBFD] via-[#FFE8E8]/20 to-[#FAFBFD] border-t border-[#E9EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#FF4D4D]/30 text-xs font-bold text-[#FF4D4D] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Offering 1 · Notes + Slide Deck</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#181E28] tracking-tight">
            Notes + Slide Deck: Complex Concepts Made Crystal Clear
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Curated especially for 2nd Year MBBS students and NEET-PG/INI-CET aspirants. Comprehensive, NMC CBME-aligned microbiology notes paired with downloadable high-yield slide decks.
          </p>
          <div className="pt-1 flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FFE8E8] text-[#FF4D4D] border border-[#FFD5D5]">
              ★ Free Showcase Note & Slide Deck Unlocked Below
            </span>
          </div>
        </div>

        {/* 2-Column Split: Digital Medical Note Interface + Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Sample Digital Medical Notes Interface */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E9EDF3] shadow-soft-hover overflow-hidden transition-all">
              
              {/* Note Header / Meta */}
              <div className="p-5 border-b border-[#E9EDF3] bg-[#FAFBFD]/60 flex flex-wrap items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-[#64748B]">
                    <span className="font-bold text-[#FF4D4D]">Physiology & Pathology Module</span>
                    <span>·</span>
                    <span>Cardiovascular System</span>
                    <span>·</span>
                    <span>Note #28</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#181E28]">
                    Ventricular Action Potential & Ion Kinetics
                  </h3>
                </div>

                {/* Note Interactive Tabs */}
                <div className="flex items-center gap-1 p-1 bg-white border border-[#E9EDF3] rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setActiveNoteTab('mechanism')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeNoteTab === 'mechanism' 
                        ? 'bg-[#FFE8E8] text-[#FF4D4D] font-bold' 
                        : 'text-[#64748B] hover:text-[#181E28]'
                    }`}
                  >
                    Mechanism
                  </button>
                  <button
                    onClick={() => setActiveNoteTab('pearls')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeNoteTab === 'pearls' 
                        ? 'bg-[#FFF3E0] text-[#FF8A3D] font-bold' 
                        : 'text-[#64748B] hover:text-[#181E28]'
                    }`}
                  >
                    Clinical Pearls
                  </button>
                  <button
                    onClick={() => setActiveNoteTab('traps')}
                    className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      activeNoteTab === 'traps' 
                        ? 'bg-[#E0F7FA] text-[#0EA5E9] font-bold' 
                        : 'text-[#64748B] hover:text-[#181E28]'
                    }`}
                  >
                    Exam Traps
                  </button>
                </div>
              </div>

              {/* Note Body View */}
              <div className="p-6 space-y-5">
                
                {activeNoteTab === 'mechanism' && (
                  <div className="space-y-4">
                    <p className="text-sm text-[#181E28] leading-relaxed">
                      Ventricular myocytes display a distinct five-phase action potential with a prominent plateau phase (Phase 2), distinguishing them from pacemaker cells (SA/AV nodes).
                    </p>

                    {/* Step-by-step Structured Phase Cards with Thermometer Colors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#FF4D4D]">Phase 0 · Rapid Upstroke</span>
                          <span className="text-[10px] font-mono text-[#64748B]">-90 to +20 mV</span>
                        </div>
                        <p className="text-xs text-[#64748B]">
                          Rapid opening of voltage-gated fast <strong className="text-[#181E28]">Na⁺ channels</strong> (I_Na). Target of Class I antiarrhythmics (Lidocaine, Flecainide).
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#FF8A3D]">Phase 1 · Early Repol</span>
                          <span className="text-[10px] font-mono text-[#64748B]">+20 to 0 mV</span>
                        </div>
                        <p className="text-xs text-[#64748B]">
                          Inactivation of fast Na⁺ channels with transient outward <strong className="text-[#181E28]">K⁺ efflux</strong> (I_to).
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] space-y-1 sm:col-span-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#D97706]">Phase 2 · Plateau Phase (Hallmark)</span>
                          <span className="text-[10px] font-mono text-[#D97706] font-semibold">Sustained 0 mV</span>
                        </div>
                        <p className="text-xs text-[#64748B]">
                          Inward slow <strong className="text-[#181E28]">Ca²⁺ influx via L-type channels</strong> is dynamically balanced by outward delayed rectifier <strong className="text-[#181E28]">K⁺ efflux</strong>. Triggers calcium-induced calcium release (CICR).
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#0EA5E9]">Phase 3 · Rapid Repol</span>
                          <span className="text-[10px] font-mono text-[#64748B]">0 to -90 mV</span>
                        </div>
                        <p className="text-xs text-[#64748B]">
                          Ca²⁺ channels close; massive outward <strong className="text-[#181E28]">K⁺ efflux</strong> via I_Kr and I_Ks. Class III drugs (Amiodarone) prolong this phase.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#64748B]">Phase 4 · Resting Potential</span>
                          <span className="text-[10px] font-mono text-[#64748B]">-90 mV stable</span>
                        </div>
                        <p className="text-xs text-[#64748B]">
                          High resting K⁺ conductance (I_K1) and Na⁺/K⁺ ATPase restore baseline ionic gradients.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeNoteTab === 'pearls' && (
                  <div className="p-4 rounded-xl bg-[#FFF3E0]/70 border border-[#FF8A3D]/40 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#C2410C]">
                      <Lightbulb className="w-4 h-4 text-[#FF8A3D]" />
                      <span>Clinical Correlation & Pharmacotherapy</span>
                    </div>
                    <ul className="text-xs text-[#181E28] space-y-2 list-disc list-inside">
                      <li><strong>Class IA & Class III agents:</strong> Block Phase 3 K⁺ efflux, causing QT prolongation and predisposing to Torsades de Pointes.</li>
                      <li><strong>Hyperkalemia:</strong> Elevates resting membrane potential closer to threshold, causing peaked T waves, widened QRS, and sine-wave pattern.</li>
                      <li><strong>Hypokalemia:</strong> Increases myocardial excitability, causing flattened T waves, prominent U waves, and ventricular ectopy.</li>
                    </ul>
                  </div>
                )}

                {activeNoteTab === 'traps' && (
                  <div className="p-4 rounded-xl bg-[#FFE8E8]/60 border border-[#FF4D4D]/30 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs font-bold text-[#B91C1C]">
                      <AlertTriangle className="w-4 h-4 text-[#FF4D4D]" />
                      <span>Frequent Exam Pitfalls</span>
                    </div>
                    <p className="text-xs text-[#181E28] leading-relaxed">
                      Do not confuse <strong className="text-[#B91C1C]">Pacemaker action potentials</strong> (SA/AV nodes) with <strong className="text-[#181E28]">Myocyte action potentials</strong>. Pacemaker cells have NO Phase 1 or Phase 2 plateau, and their Phase 0 upstroke is driven by Ca²⁺ influx (not fast Na⁺ channels).
                    </p>
                  </div>
                )}

                {/* Note Footer Action */}
                <div className="pt-3 border-t border-[#E9EDF3] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <FileText className="w-4 h-4 text-[#FF4D4D]" />
                    <span>Includes 3 High-Yield Charts & 1 Interactive Quiz</span>
                  </div>
                  <button
                    onClick={onOpenSampleNote}
                    className="font-bold text-[#FF4D4D] hover:text-[#E83D3D] flex items-center gap-1 cursor-pointer"
                  >
                    <span>Open Full Note</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>
          </div>

          {/* Right: Feature Highlights & CTA */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-[#181E28]">
                Engineered for High-Yield Retention
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Medical school syllabi contain overwhelming volumes of raw text. Infectiometer synthesizes complex textbook mechanisms into logical clinical frameworks.
              </p>
            </div>

            {/* 5 Highlights with Thermometer Palette Icons */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#FFE8E8] text-[#FF4D4D] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#181E28]">Simplified concept explanations</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Step-by-step biological and pathological cascades without unnecessary textbook padding.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#FFF3E0] text-[#FF8A3D] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#181E28]">Structured subject-wise organization</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Organized systematically across pre-clinical, para-clinical, and clinical curricula.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#FEF7E6] text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#181E28]">Important topic highlights</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Dedicated callout badges for verified past exam topics and diagnostic criteria.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#E0F7FA] text-[#0EA5E9] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#181E28]">Revision-friendly content</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Concise summary cards, comparative differential tables, and memory anchors for 24-hour review.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#FFE8E8] text-[#FF4D4D] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#181E28]">Easy-to-follow learning structure</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Progressive disclosures that guide your mind from basic anatomy to bedside therapeutics.</p>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="pt-2">
              <button
                onClick={onOpenSampleNote}
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#FF4D4D] hover:bg-[#E83D3D] rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Concept Notes</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
