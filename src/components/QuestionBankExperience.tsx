import React, { useState } from 'react';
import { 
  Sparkles, 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  Check, 
  Thermometer
} from 'lucide-react';
import { SAMPLE_VIGNETTE_QUESTION } from '../data/mockData';

interface QuestionBankProps {
  onExploreQBank: () => void;
}

export const QuestionBankExperience: React.FC<QuestionBankProps> = ({ onExploreQBank }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(true);
  const [showFullExplanation, setShowFullExplanation] = useState<boolean>(true);

  const question = SAMPLE_VIGNETTE_QUESTION;

  const handleSelectOption = (optionId: string) => {
    if (hasSubmitted) return;
    setSelectedOptionId(optionId);
    setHasSubmitted(true);
  };

  const handleReset = () => {
    setSelectedOptionId(null);
    setHasSubmitted(false);
  };

  return (
    <section id="question-bank" className="py-24 bg-white border-t border-[#E9EDF3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFBFD] border border-[#FF4D4D]/30 text-xs font-bold text-[#FF4D4D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Active Recall Question Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#181E28] tracking-tight">
            Practice With Purpose
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Turn theoretical knowledge into practical confidence with an authentic, structured question bank.
          </p>
        </div>

        {/* 2-Column Split: Interactive Question Interface + Feature List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Realistic Interactive Question Interface */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-[#E9EDF3] shadow-soft-hover overflow-hidden">
              
              {/* Question Navigation & Meta Top Bar */}
              <div className="p-4 bg-[#FAFBFD] border-b border-[#E9EDF3] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#181E28] font-mono">Q 18 / 50</span>
                  <span className="text-[#CBD5E1]">|</span>
                  <span className="text-xs text-[#64748B]">{question.subject}</span>
                  <span className="text-[#CBD5E1]">·</span>
                  <span className="text-xs font-bold text-[#FF4D4D]">{question.topic}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold bg-[#FFF3E0] text-[#D97706] border border-[#FFC861]/40 px-2 py-0.5 rounded-md">
                    {question.difficulty}
                  </span>
                  <button
                    onClick={() => setIsBookmarked(!isBookmarked)}
                    className="p-1.5 text-[#64748B] hover:text-[#FF4D4D] transition-colors rounded-lg hover:bg-white cursor-pointer"
                    title={isBookmarked ? 'Bookmarked' : 'Bookmark question'}
                  >
                    <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-[#FF4D4D] text-[#FF4D4D]' : ''}`} />
                  </button>
                  <button
                    onClick={handleReset}
                    className="p-1.5 text-[#64748B] hover:text-[#181E28] transition-colors rounded-lg hover:bg-white cursor-pointer"
                    title="Reset answer"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Progress Bar with Thermometer Gradient */}
              <div className="h-1.5 w-full bg-[#FAFBFD]">
                <div className="h-full bg-infectio-gradient w-[36%]" />
              </div>

              {/* Question Body */}
              <div className="p-6 space-y-6">
                
                {/* Clinical Vignette */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                    Clinical Case Vignette
                  </span>
                  <p className="text-sm text-[#181E28] font-medium leading-relaxed">
                    {question.vignette}
                  </p>
                  <p className="text-sm font-bold text-[#181E28] pt-1">
                    Which coronary artery is most likely occluded?
                  </p>
                </div>

                {/* 4 Answer Options */}
                <div className="space-y-2.5">
                  {question.options.map((opt) => {
                    const isSelected = selectedOptionId === opt.id;
                    const isCorrect = opt.id === question.correctOptionId;
                    
                    let optionStyle = 'border-[#E9EDF3] bg-[#FAFBFD] hover:bg-white hover:border-[#FF4D4D]/50 text-[#181E28]';
                    
                    if (hasSubmitted) {
                      if (isCorrect) {
                        optionStyle = 'border-[#FF4D4D] bg-[#FFE8E8]/70 text-[#181E28] font-bold';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'border-[#CBD5E1] bg-[#F1F5F9] text-[#64748B] font-medium line-through';
                      } else {
                        optionStyle = 'border-[#E9EDF3] bg-white opacity-60 text-[#64748B]';
                      }
                    }

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(opt.id)}
                        disabled={hasSubmitted}
                        className={`w-full p-3.5 rounded-xl border text-left transition-all duration-150 flex items-start justify-between gap-3 cursor-pointer ${optionStyle}`}
                      >
                        <div className="flex items-start gap-3">
                          <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                            hasSubmitted && isCorrect 
                              ? 'bg-[#FF4D4D] text-white' 
                              : hasSubmitted && isSelected && !isCorrect
                              ? 'bg-[#64748B] text-white'
                              : 'bg-white border border-[#E9EDF3] text-[#181E28]'
                          }`}>
                            {opt.id}
                          </span>
                          <span className="text-xs sm:text-sm mt-0.5">{opt.text}</span>
                        </div>

                        {hasSubmitted && (
                          <div className="shrink-0 mt-0.5">
                            {isCorrect ? (
                              <CheckCircle2 className="w-4 h-4 text-[#FF4D4D]" />
                            ) : isSelected ? (
                              <XCircle className="w-4 h-4 text-[#64748B]" />
                            ) : null}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Drawer (Shows when user clicks any option) */}
                {hasSubmitted && (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] space-y-3 transition-all animate-in fade-in duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {selectedOptionId === question.correctOptionId ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#B91C1C] bg-[#FFE8E8] px-2.5 py-1 rounded-md">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4D4D]" />
                            <span>Correct Choice Selected</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#181E28] bg-[#F1F5F9] px-2.5 py-1 rounded-md">
                            <XCircle className="w-3.5 h-3.5 text-[#64748B]" />
                            <span>Review Clinical Rationale Below</span>
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#64748B] font-mono">89% Community Accuracy</span>
                    </div>

                    {/* High Yield Key Point Box with Thermometer Orange Accent */}
                    <div className="p-3 bg-white rounded-lg border border-[#FF8A3D]/40 text-xs">
                      <strong className="text-[#C2410C] font-bold block mb-1">
                        Infectiometer Clinical Takeaway:
                      </strong>
                      <p className="text-[#181E28] leading-relaxed">
                        {question.highYieldKeyPoint}
                      </p>
                    </div>

                    {/* Detailed Option Explanation */}
                    {showFullExplanation && (
                      <div className="space-y-2 pt-2 text-xs text-[#64748B] leading-relaxed border-t border-[#E9EDF3]">
                        <p className="text-[#181E28]">
                          <strong className="text-[#181E28]">Pathophysiology: </strong>
                          {question.overallExplanation}
                        </p>
                        <p className="text-[11px] text-[#64748B] italic">
                          Reference: {question.references}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {!hasSubmitted && (
                  <div className="p-3 rounded-xl bg-[#FAFBFD] border border-dashed border-[#E9EDF3] text-center text-xs text-[#64748B]">
                    Click any option above to test your active clinical reasoning and unlock the explanation.
                  </div>
                )}

              </div>

            </div>
          </div>

          {/* Right: Feature Highlights & CTA */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-extrabold text-[#181E28]">
                Active Clinical Reasoning, Not Rote Memory
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed">
                Standard questions test isolated keywords. Infectiometer trains you to dissect realistic patient presentations, gauge clinical severity, eliminate distractors, and recognize patterns.
              </p>
            </div>

            {/* User Prompt Specific Feature Highlights */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#FFE8E8] text-[#FF4D4D] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#181E28]">Topic-wise questions</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Drill down into specific pathology, physiology, and pharmacological sub-topics.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#FFF3E0] text-[#FF8A3D] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#181E28]">Subject-wise filtering</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Filter by pre-clinical foundations, para-clinical sciences, or clinical clerkships.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#FEF7E6] text-[#D97706] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#181E28]">Detailed explanations</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Exhaustive rationale for why the right answer is correct and why every distractor is wrong.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#E0F7FA] text-[#0EA5E9] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#181E28]">Practice and revision modes</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Switch between timed exam simulation mode and untimed learning tutor mode.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-[#FFE8E8] text-[#FF4D4D] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#181E28]">Question bookmarking</h4>
                  <p className="text-xs text-[#64748B] mt-0.5">Tag questions with custom flags like "Review before exam" or "Tricky distractor".</p>
                </div>
              </div>
            </div>

            {/* CTA in Infectiometer Coral-Red */}
            <div className="pt-2">
              <button
                onClick={onExploreQBank}
                className="px-6 py-3.5 text-sm font-bold text-white bg-[#FF4D4D] hover:bg-[#E83D3D] rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Question Bank</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
