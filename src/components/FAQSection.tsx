import React, { useState } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { FAQ_LIST } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-24 bg-white border-t border-[#E9EDF3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAFBFD] border border-[#E9EDF3] text-[11px] sm:text-xs font-bold text-[#FF4D4D] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF8A3D]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#181E28] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-base text-[#64748B] leading-relaxed">
            Everything you need to know about the Infectiometer platform, notes, video lectures, question bank, and examination preparations.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl sm:rounded-2xl border border-[#E9EDF3] bg-[#FAFBFD]/60 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-white transition-colors min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-base font-bold text-[#181E28] pr-2">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-[#E9EDF3] flex items-center justify-center shrink-0 text-[#64748B] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#FF4D4D] border-[#FF4D4D]/30' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-[#E9EDF3]/60 pt-3 bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
