import React from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MedicalSubject } from '../types';

interface SubjectDetailModalProps {
  subject: MedicalSubject | null;
  isOpen: boolean;
  onClose: () => void;
  onStartSubject: () => void;
}

export const SubjectDetailModal: React.FC<SubjectDetailModalProps> = ({
  subject,
  isOpen,
  onClose,
  onStartSubject
}) => {
  if (!isOpen || !subject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#181E28]/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl border border-[#E9EDF3] shadow-preview-window overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-[#FAFBFD] border-b border-[#E9EDF3] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${subject.color.bg} ${subject.color.text} flex items-center justify-center font-black text-sm`}>
              {subject.name.substring(0, 2).toUpperCase()}
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">
                {subject.category.replace('-', ' ')}
              </span>
              <h3 className="text-base font-bold text-[#181E28]">
                {subject.name}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#64748B] hover:text-[#181E28] rounded-lg hover:bg-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-sm text-[#181E28] leading-relaxed">
            {subject.description}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] text-center">
              <div className="text-xs text-[#64748B] mb-0.5">Notes</div>
              <div className="text-lg font-black text-[#FF4D4D] font-mono">{subject.notesCount}</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] text-center">
              <div className="text-xs text-[#64748B] mb-0.5">Questions</div>
              <div className="text-lg font-black text-[#FF8A3D] font-mono">{subject.questionsCount}</div>
            </div>
            <div className="p-3 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] text-center">
              <div className="text-xs text-[#64748B] mb-0.5">Mock Tests</div>
              <div className="text-lg font-black text-[#0EA5E9] font-mono">{subject.testsCount}</div>
            </div>
          </div>

          {/* Included Features */}
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-[#181E28]">
              What's Included in {subject.name}:
            </span>
            <div className="space-y-2 text-xs text-[#181E28]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D4D]" />
                <span>Organ system and topic-wise structured concept clearance modules.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D4D]" />
                <span>Full vignette clinical question banks with step-by-step distractor rationales.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF4D4D]" />
                <span>Tagged previous year examination questions (PYQs) with frequency ratings.</span>
              </div>
            </div>
          </div>

          {/* CTA in Infectiometer Coral-Red */}
          <div className="pt-2 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-[#64748B] hover:text-[#181E28] cursor-pointer"
            >
              Back
            </button>
            <button
              onClick={() => {
                onClose();
                onStartSubject();
              }}
              className="px-5 py-2.5 text-xs font-bold text-white bg-[#FF4D4D] hover:bg-[#E83D3D] rounded-xl flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <span>Explore All {subject.name} Resources</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
