import React, { useState } from 'react';
import { X, BookOpen, Bookmark, Share2, Check, Lightbulb, AlertTriangle, ArrowRight, Microscope } from 'lucide-react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useEscapeKey } from '../hooks/useEscapeKey';

interface NoteReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuickTest?: () => void;
}

export const NoteReaderModal: React.FC<NoteReaderModalProps> = ({ isOpen, onClose, onOpenQuickTest }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  // Lock body scroll and enable escape key
  useBodyScrollLock(isOpen);
  useEscapeKey(onClose, isOpen);

  if (!isOpen) return null;

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="note-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[90vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
              <Microscope className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] sm:text-[11px] font-mono font-bold text-[#FF4F4F] uppercase tracking-wider block truncate">
                Study Note · Module #142 · NMC CBME PE-6.1
              </span>
              <h3 id="note-modal-title" className="text-xs sm:text-base font-bold text-slate-900 truncate">
                Gram-Negative Bacilli: Enterobacterales vs Non-Fermenters
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className="p-1.5 sm:p-2 text-slate-500 hover:text-slate-900 rounded-md hover:bg-white transition-colors cursor-pointer"
              title={bookmarked ? 'Saved to bookmarks' : 'Bookmark note'}
              aria-label="Bookmark note"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-[#FF4F4F] text-[#FF4F4F]' : ''}`} />
            </button>
            <button
              onClick={handleCopy}
              className="p-1.5 sm:p-2 text-slate-500 hover:text-slate-900 rounded-md hover:bg-white transition-colors cursor-pointer"
              title="Share / copy note link"
              aria-label="Share note link"
            >
              {copied ? <Check className="w-4 h-4 text-[#FF4F4F]" /> : <Share2 className="w-4 h-4 text-slate-500" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-slate-400 hover:text-slate-700 rounded-md hover:bg-white transition-colors cursor-pointer"
              aria-label="Close note"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-8 overflow-y-auto space-y-5 sm:space-y-6 text-xs sm:text-sm text-slate-800 leading-relaxed">
          
          {/* Quick Summary Pill Bar */}
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 grid grid-cols-1 xs:grid-cols-3 gap-3 text-xs">
            <div className="space-y-0.5">
              <span className="text-slate-500 text-[11px]">Discipline:</span>
              <p className="font-bold text-slate-900">Clinical Microbiology & Diagnostics</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-slate-500 text-[11px]">Significance:</span>
              <p className="font-bold text-[#FF4F4F]">High-Yield (NMC CBME PE-6.1)</p>
            </div>
            <div className="space-y-0.5">
              <span className="text-slate-500 text-[11px]">Read Duration:</span>
              <p className="font-bold text-slate-700">4 Minutes</p>
            </div>
          </div>

          {/* Section 1 */}
          <div className="space-y-2">
            <h4 className="text-sm sm:text-base font-bold text-slate-900">
              1. The Primary Algorithmic Branch Point: MacConkey & Oxidase
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm">
              When Gram-negative bacilli grow on clinical culture plates, diagnostic lab workflow immediately tests two properties:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <h5 className="font-bold text-slate-900 mb-1 text-xs sm:text-sm">Lactose Fermenters (Pink Colonies on MacConkey)</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Organisms that ferment lactose lower the agar pH below 6.8, precipitating bile salts and turning neutral red indicator bright pink. Primary agents: <strong>Escherichia coli</strong> (flat dry pink colonies) and <strong>Klebsiella pneumoniae</strong> (mucoid pink colonies).
                </p>
              </div>

              <div className="p-3 rounded-lg bg-white border border-slate-200">
                <h5 className="font-bold text-slate-900 mb-1 text-xs sm:text-sm">Non-Lactose Fermenters (Pale / Colorless Colonies)</h5>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Organisms that utilize peptones instead of lactose produce alkaline byproducts, leaving colonies colorless/pale. Primary agents: <strong>Salmonella, Shigella, Proteus</strong> (Enterobacterales), and <strong>Pseudomonas aeruginosa</strong> (Non-fermenter).
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Phase Breakdown Table */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                2. Standard Diagnostic Differentiation Matrix
              </h4>
              <span className="text-[10px] text-slate-400 block sm:hidden">Swipe table →</span>
            </div>
            
            <div className="overflow-x-auto border border-slate-200 rounded-lg no-scrollbar">
              <table className="w-full text-left text-xs border-collapse min-w-[540px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600">
                    <th className="p-2.5 sm:p-3 font-bold">Organism</th>
                    <th className="p-2.5 sm:p-3 font-bold">MacConkey Agar</th>
                    <th className="p-2.5 sm:p-3 font-bold">Oxidase</th>
                    <th className="p-2.5 sm:p-3 font-bold">TSI Reaction</th>
                    <th className="p-2.5 sm:p-3 font-bold">Motility & Key Trait</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-2.5 sm:p-3 font-bold text-[#FF4F4F]">E. coli</td>
                    <td className="p-2.5 sm:p-3 text-slate-900">Pink (Lactose +)</td>
                    <td className="p-2.5 sm:p-3 text-slate-600">Negative (-)</td>
                    <td className="p-2.5 sm:p-3 text-slate-900">A/A + Gas (Acid slant/butt)</td>
                    <td className="p-2.5 sm:p-3 text-slate-600">Motile · Indole positive</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 sm:p-3 font-bold text-amber-700">K. pneumoniae</td>
                    <td className="p-2.5 sm:p-3 text-slate-900">Mucoid Pink (Lactose +)</td>
                    <td className="p-2.5 sm:p-3 text-slate-600">Negative (-)</td>
                    <td className="p-2.5 sm:p-3 text-slate-900">A/A + Abundant Gas</td>
                    <td className="p-2.5 sm:p-3 text-slate-600">Non-motile · Capsule (+)</td>
                  </tr>
                  <tr className="bg-slate-50/60">
                    <td className="p-2.5 sm:p-3 font-bold text-slate-900">Proteus mirabilis</td>
                    <td className="p-2.5 sm:p-3 text-slate-900">Pale (Lactose -)</td>
                    <td className="p-2.5 sm:p-3 text-slate-600">Negative (-)</td>
                    <td className="p-2.5 sm:p-3 text-slate-900">K/A + H2S (Black butt)</td>
                    <td className="p-2.5 sm:p-3 text-slate-600">Swarming · Urease (+)</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 sm:p-3 font-bold text-[#0284C7]">P. aeruginosa</td>
                    <td className="p-2.5 sm:p-3 text-slate-900">Pale (Non-fermenter)</td>
                    <td className="p-2.5 sm:p-3 font-bold text-emerald-600">Positive (+)</td>
                    <td className="p-2.5 sm:p-3 text-slate-900">K/K (Alkaline/Alkaline)</td>
                    <td className="p-2.5 sm:p-3 text-slate-600">Pyocyanin · Fruity odor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* High Yield Pearl Callout Box */}
          <div className="p-3.5 sm:p-4 rounded-lg bg-amber-50 border border-amber-200 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Infectiometer Clinical Diagnostic Pearl</span>
            </div>
            <p className="text-xs text-amber-950 leading-relaxed font-normal">
              <strong>Enterobacterales</strong> are always <em>Oxidase negative</em>, ferment glucose, and reduce nitrates to nitrites. If a Gram-negative bacillus is <em>Oxidase positive</em> and does not ferment carbohydrates in Hugh-Leifson OF medium, it is a non-fermenting bacillus — most frequently <strong>Pseudomonas aeruginosa</strong>.
            </p>
          </div>

          {/* Exam Trap */}
          <div className="p-3.5 sm:p-4 rounded-lg bg-red-50/70 border border-red-200 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-red-900">
              <AlertTriangle className="w-4 h-4 text-[#FF4F4F] shrink-0" />
              <span>High-Yield Examination Pitfall</span>
            </div>
            <p className="text-xs text-red-950 leading-relaxed font-normal">
              Never confuse <strong>Proteus</strong> with <strong>Salmonella</strong> on TSI agar: both produce H2S (black precipitate). However, Proteus is rapid <em>urease positive</em> and swarms on blood agar, whereas Salmonella is <em>urease negative</em> and produces systemic enteric fever or gastroenteritis.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Source: Ananthanarayan & Paniker&apos;s Textbook of Microbiology · CLSI AST Guidelines
          </span>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
            {onOpenQuickTest && (
              <button
                onClick={() => { onClose(); onOpenQuickTest(); }}
                className="flex-1 sm:flex-none px-4 py-2 text-xs font-bold text-white bg-[#FF4F4F] hover:bg-[#E03E3E] rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow-sm transition-colors"
              >
                <span>Test This Concept</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
