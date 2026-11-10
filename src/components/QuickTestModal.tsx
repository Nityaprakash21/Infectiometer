import React, { useState, useEffect } from 'react';
import { X, Clock, CheckCircle2, XCircle, ArrowRight, RotateCcw, Award, Stethoscope } from 'lucide-react';
import { TestSeriesItem } from '../types';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useEscapeKey } from '../hooks/useEscapeKey';

interface QuickTestModalProps {
  isOpen: boolean;
  testItem?: TestSeriesItem | null;
  onClose: () => void;
}

const MINI_TEST_QUESTIONS = [
  {
    id: 1,
    subject: 'Systematic Bacteriology',
    topic: 'Enterobacterales · Urease & Motility Kinetics',
    prompt: 'A 45-year-old male with recurrent renal calculi presents with high fever, dysuria, and right flank pain. Urine culture grows Gram-negative bacilli displaying characteristic swarming motility on sheep blood agar and a positive urease test with rapid alkalinization of the medium. Which pathogen is most likely responsible?',
    options: [
      { id: 'A', text: 'Escherichia coli (Lactose fermenter, indole positive)' },
      { id: 'B', text: 'Proteus mirabilis (Swarming motility, urease positive)' },
      { id: 'C', text: 'Klebsiella pneumoniae (Mucoid capsule, non-motile)' },
      { id: 'D', text: 'Pseudomonas aeruginosa (Non-fermenter, pyocyanin producer)' }
    ],
    correctId: 'B',
    pearl: 'Proteus species produce copious urease, splitting urea into ammonia and CO2. This raises urinary pH (>7.2), precipitating magnesium ammonium phosphate (struvite/staghorn calculi). On non-inhibitory solid media, it exhibits periodic waves of swarming.'
  },
  {
    id: 2,
    subject: 'Antimicrobial Pharmacology',
    topic: 'Ribosomal Subunits · Atypical Pneumonia Coverage',
    prompt: 'A 28-year-old medical resident presents with low-grade fever, dry cough, and bilateral interstitial infiltrates on chest radiograph. Sputum Gram stain shows numerous neutrophils but no predominant bacterial morphotypes. Cold agglutinin titers are elevated. The patient is prescribed a macrolide that reversibly binds to the 50S ribosomal subunit to inhibit translocation. Which agent is this?',
    options: [
      { id: 'A', text: 'Azithromycin (Macrolide, binds 50S subunit)' },
      { id: 'B', text: 'Gentamicin (Aminoglycoside, binds 30S subunit)' },
      { id: 'C', text: 'Doxycycline (Tetracycline, binds 30S subunit)' },
      { id: 'D', text: 'Ciprofloxacin (Fluoroquinolone, inhibits DNA gyrase)' }
    ],
    correctId: 'A',
    pearl: 'Mycoplasma pneumoniae lacks a peptidoglycan cell wall (inherently resistant to beta-lactams). First-line therapies are macrolides (Azithromycin) or tetracyclines, which inhibit protein synthesis. Macrolides target the 23S rRNA of the 50S ribosomal subunit.'
  },
  {
    id: 3,
    subject: 'Clinical Microbiology',
    topic: 'Gram-Positive Cocci · Catalase & Coagulase Cascades',
    prompt: 'A 30-year-old intravenous drug user presents with fever, a new regurgitant heart murmur, and Osler nodes. Transthoracic echocardiography reveals a 1.2 cm vegetation on the tricuspid valve. Peripheral blood cultures rapidly grow Gram-positive cocci in grape-like clusters that are catalase-positive and clot rabbit plasma (coagulase-positive). What is the causative pathogen?',
    options: [
      { id: 'A', text: 'Streptococcus pneumoniae (Catalase negative, optochin sensitive)' },
      { id: 'B', text: 'Staphylococcus aureus (Catalase & Coagulase positive)' },
      { id: 'C', text: 'Staphylococcus epidermidis (Catalase positive, coagulase negative)' },
      { id: 'D', text: 'Enterococcus faecalis (PYR positive, bile esculin positive)' }
    ],
    correctId: 'B',
    pearl: 'Staphylococcus aureus is the leading cause of acute infective endocarditis in IV drug users (most commonly affecting the tricuspid valve). Catalase distinguishes Staphylococci (+) from Streptococci (-), and free/bound coagulase differentiates virulent S. aureus from coagulase-negative staphylococci (CoNS).'
  }
];

export const QuickTestModal: React.FC<QuickTestModalProps> = ({ isOpen, testItem, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(180);

  // Lock body scroll and enable closing via Escape key on all viewports
  useBodyScrollLock(isOpen);
  useEscapeKey(onClose, isOpen);

  useEffect(() => {
    if (!isOpen) {
      setCurrentIdx(0);
      setAnswers({});
      setIsFinished(false);
      setSecondsRemaining(180);
      return;
    }

    if (isFinished) return;

    const interval = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, isFinished]);

  if (!isOpen) return null;

  const currentQ = MINI_TEST_QUESTIONS[currentIdx];
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (optId: string) => {
    if (isFinished) return;
    setAnswers({ ...answers, [currentQ.id]: optId });
  };

  const calculateScore = () => {
    let correct = 0;
    MINI_TEST_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctId) correct++;
    });
    return {
      correct,
      total: MINI_TEST_QUESTIONS.length,
      percentage: Math.round((correct / MINI_TEST_QUESTIONS.length) * 100)
    };
  };

  const score = calculateScore();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-test-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
              <Stethoscope className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h3 id="quick-test-title" className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                {testItem ? testItem.title : 'Infectiometer Diagnostic Sprint'}
              </h3>
              <p className="text-[11px] text-slate-500 truncate">
                Timed Standardized Assessment · 3 Clinical Questions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {!isFinished && (
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-300 rounded-md text-xs font-mono font-bold text-slate-900 shadow-2xs">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{formatTime(secondsRemaining)}</span>
              </div>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close assessment"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-5 flex-1">
          {isFinished ? (
            /* Results View */
            <div className="space-y-5">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">
                  Assessment Completed
                </h4>
                <div className="text-3xl font-black text-slate-900 font-mono tabular-nums">
                  {score.correct} / {score.total} Correct ({score.percentage}%)
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {score.percentage >= 66 
                    ? 'Superb clinical diagnostic reasoning! You demonstrated mastery of bacterial enzymatic identification and antimicrobial mechanisms.'
                    : 'Good clinical effort! Review the diagnostic rationales below to solidify your understanding of high-yield NMC CBME & NEET-PG concepts.'}
                </p>
              </div>

              {/* Review of Questions */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Detailed Clinical Rationales
                </h5>
                {MINI_TEST_QUESTIONS.map((q, idx) => {
                  const userAns = answers[q.id];
                  const isCorrect = userAns === q.correctId;
                  return (
                    <div key={q.id} className="p-4 rounded-lg border border-slate-200 bg-white space-y-2 text-xs">
                      <div className="flex flex-wrap items-center justify-between gap-1.5">
                        <span className="font-bold text-slate-900">
                          Q{idx + 1}: {q.topic}
                        </span>
                        <span className={`inline-flex items-center gap-1 font-semibold text-[11px] px-2 py-0.5 rounded ${
                          isCorrect ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'
                        }`}>
                          {isCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                          <span>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                        </span>
                      </div>
                      <p className="text-slate-700 leading-relaxed">{q.prompt}</p>
                      <div className="p-3 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                        <strong className="text-slate-900">Correct Answer: Option {q.correctId}. </strong>
                        {q.pearl}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col-reverse sm:flex-row justify-end gap-2.5 pt-2">
                <button
                  onClick={() => {
                    setIsFinished(false);
                    setAnswers({});
                    setCurrentIdx(0);
                    setSecondsRemaining(180);
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Test</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors"
                >
                  Close Assessment
                </button>
              </div>
            </div>
          ) : (
            /* Active Test View */
            <div className="space-y-4">
              {/* Question Navigation Tracker */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  {MINI_TEST_QUESTIONS.map((q, idx) => (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIdx(idx)}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-md text-xs font-bold font-mono transition-colors cursor-pointer flex items-center justify-center ${
                        currentIdx === idx 
                          ? 'bg-slate-900 text-white shadow-2xs' 
                          : answers[q.id] 
                          ? 'bg-slate-200 text-slate-800' 
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                      }`}
                      aria-label={`Jump to Question ${idx + 1}`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {currentQ.subject} · {currentQ.topic}
                </span>
              </div>

              {/* Question Prompt */}
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold text-[#FF4F4F] uppercase tracking-wider">
                  Question {currentIdx + 1} of {MINI_TEST_QUESTIONS.length}
                </span>
                <p className="text-sm font-semibold text-slate-900 leading-relaxed">
                  {currentQ.prompt}
                </p>
              </div>

              {/* 4 Options */}
              <div className="space-y-2">
                {currentQ.options.map((opt) => {
                  const isSelected = answers[currentQ.id] === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt.id)}
                      className={`w-full min-h-[44px] p-3 rounded-lg border text-left text-xs sm:text-sm transition-all flex items-start gap-3 cursor-pointer ${
                        isSelected 
                          ? 'border-slate-900 bg-slate-50 font-semibold text-slate-900 ring-1 ring-slate-900' 
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded text-xs font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? 'bg-slate-900 text-white' : 'bg-slate-100 border border-slate-300 text-slate-600'
                      }`}>
                        {opt.id}
                      </span>
                      <span className="leading-relaxed pt-0.5">{opt.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Actions */}
              <div className="pt-3 border-t border-slate-200 flex items-center justify-between gap-3">
                <button
                  disabled={currentIdx === 0}
                  onClick={() => setCurrentIdx(currentIdx - 1)}
                  className="px-3 sm:px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 disabled:opacity-40 cursor-pointer min-h-[40px] flex items-center justify-center"
                >
                  Previous
                </button>

                {currentIdx < MINI_TEST_QUESTIONS.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx(currentIdx + 1)}
                    className="px-4 sm:px-5 py-2 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg flex items-center gap-1.5 cursor-pointer min-h-[40px]"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setIsFinished(true)}
                    className="px-4 sm:px-5 py-2 text-xs font-bold text-white bg-[#FF4F4F] hover:bg-[#E03E3E] rounded-lg flex items-center gap-1.5 cursor-pointer min-h-[40px]"
                  >
                    <span>Submit Assessment</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
