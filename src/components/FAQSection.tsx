import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_LIST } from '../data/mockData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white border border-slate-200 text-xs font-semibold text-slate-700 uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-slate-500" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academic & Platform Inquiries
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Essential information regarding the Infectiometer curriculum, note formats, video lectures, question bank rationales, and examination preparation.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_LIST.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-lg border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors min-h-[44px]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 pr-2">
                    {item.question}
                  </span>
                  <div className={`w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center shrink-0 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-slate-900' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-white">
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
