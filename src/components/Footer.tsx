import React, { useState } from 'react';
import { Mail, MapPin, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { ThermometerLogo } from './ThermometerLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenAuth: (mode: 'signin' | 'signup') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAuth }) => {
  const [activeNotice, setActiveNotice] = useState<string | null>(null);

  return (
    <footer className="bg-white border-t border-[#E9EDF3] text-[#64748B] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Main 4/5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 mb-10 sm:mb-12">
          
          {/* Col 1: Platform Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-start">
              <ThermometerLogo variant="stacked" size="md" className="items-start text-left" />
            </div>

            <p className="text-xs text-[#64748B] leading-relaxed max-w-sm">
              Infectiometer is the dedicated Clinical Microbiology and Infectious Diseases learning platform. Bridging the gap between textbook science, laboratory diagnosis, and bedside clinical practice for medical students and clinicians.
            </p>

            <div className="pt-1 text-[11px] text-[#64748B] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
              <span>Aligned with NMC CBME Guidelines & NEET-PG / INI-CET Blueprint.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#181E28]">
              Platform
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('hero')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  About Infectiometer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('tracks')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  Who It&apos;s For (4 Audiences)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('what-you-get')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  What You Get (Curriculum)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('free-resources')} 
                  className="text-[#059669] font-bold hover:text-[#047857] transition-colors cursor-pointer text-left flex items-center gap-1"
                >
                  <span>Free Open-Access Hub</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('faq')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  FAQ & Support
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Offerings */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#181E28]">
              Core Curriculum
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('what-you-get')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  Notes + Slide Deck (.PDF)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('what-you-get')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  Video MasterClasses
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('what-you-get')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  2,000+ Vignette Q-Bank
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('what-you-get')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  Timed Test Series & Mocks
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenAuth('signup')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer flex items-center gap-1 font-bold text-[#FF4D4D] text-left"
                >
                  <span>Portal Registration</span>
                  <ArrowUpRight className="w-3 h-3 text-[#FF4D4D]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Focus Audiences */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#181E28]">
              Target Audiences
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('tracks')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  MBBS Students (2nd Year)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('tracks')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  NEET-PG / INI-CET Aspirants
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('tracks')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  MD/DNB Microbiology Students
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('tracks')} 
                  className="hover:text-[#181E28] transition-colors cursor-pointer text-left"
                >
                  Doctors & Lab Professionals
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Contact Strip */}
        <div className="py-6 border-t border-b border-[#E9EDF3] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#64748B]">
          <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-3 sm:gap-6">
            <a 
              href="mailto:academic-support@infectiometer.edu" 
              className="flex items-center gap-1.5 hover:text-[#181E28] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF4D4D] shrink-0" />
              <span className="break-all">academic-support@infectiometer.edu</span>
            </a>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#FF8A3D] shrink-0" />
              <span>Infectiometer Academic Desk</span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
              <span>New Delhi & Worldwide Medical Ed</span>
            </span>
          </div>
          <div className="text-[11px] text-[#64748B]">
            Medical Colleges & Institutional Licensing Available
          </div>
        </div>

        {/* Notice Drawer / Banner if clicked */}
        {activeNotice && (
          <div className="mt-4 p-3 rounded-xl bg-[#FAFBFD] border border-[#E9EDF3] text-xs text-[#181E28] flex items-center justify-between">
            <span>{activeNotice}</span>
            <button 
              onClick={() => setActiveNotice(null)}
              className="text-[#64748B] hover:text-[#181E28] font-bold ml-2 cursor-pointer"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Bottom Strip: Copyright & Legal */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#64748B] text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Infectiometer — Where Microbiology Meets Clinical Practice. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button 
              onClick={() => setActiveNotice("Infectiometer Privacy Policy: We safeguard student educational records and never sell personal learner data.")} 
              className="hover:text-[#181E28] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveNotice("Infectiometer Terms: Academic educational resource intended for examination preparation and clinical microbiology guidance.")} 
              className="hover:text-[#181E28] transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <button 
              onClick={() => setActiveNotice("Academic Honor Code: Infectiometer adheres to strict medical educational honesty and ethical diagnostic standards.")} 
              className="hover:text-[#181E28] transition-colors cursor-pointer"
            >
              Honor Code
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
