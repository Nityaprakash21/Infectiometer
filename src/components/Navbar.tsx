import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { ThermometerLogo } from './ThermometerLogo';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';
import { useEscapeKey } from '../hooks/useEscapeKey';

interface NavbarProps {
  onOpenAuth: (mode: 'signin' | 'signup') => void;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuth, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scrolling when the mobile drawer is open
  useBodyScrollLock(mobileMenuOpen);
  // Allow closing mobile drawer with Escape key
  useEscapeKey(() => setMobileMenuOpen(false), mobileMenuOpen);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Zone 1: Brand Wordmark (Authentic Logo with Text Below) */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }}
            className="flex items-center shrink-0 group hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#FF4F4F]/40 rounded-lg py-1"
            title="INFECTIOMETER Home"
            aria-label="Infectiometer Home"
          >
            <ThermometerLogo size="md" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600" aria-label="Primary Navigation">
            <button 
              onClick={() => handleLinkClick('about')} 
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer focus:outline-none focus:text-slate-900"
            >
              About
            </button>
            <button 
              onClick={() => handleLinkClick('tracks')} 
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer focus:outline-none focus:text-slate-900"
            >
              Who It&apos;s For
            </button>
            <button 
              onClick={() => handleLinkClick('what-you-get')} 
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer focus:outline-none focus:text-slate-900"
            >
              Curriculum
            </button>
            <button 
              onClick={() => handleLinkClick('free-resources')} 
              className="text-emerald-700 font-bold hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 py-1.5 px-3 rounded-md border border-emerald-200 bg-emerald-50 flex items-center gap-1 cursor-pointer"
            >
              <span>Free Hub</span>
            </button>
            <button 
              onClick={() => handleLinkClick('faq')} 
              className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer focus:outline-none focus:text-slate-900"
            >
              FAQ
            </button>
          </nav>

          {/* Zone 3: Primary & Secondary Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenAuth('signin')}
              className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors whitespace-nowrap cursor-pointer rounded-lg hover:bg-slate-100"
            >
              Log In
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#FF4F4F] hover:bg-[#E03E3E] rounded-lg shadow-sm hover:shadow transition-all active:scale-98 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: Compact CTA + Accessible Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#FF4F4F] hover:bg-[#E03E3E] rounded-md shadow-2xs active:scale-95 transition-all"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4F4F]/40 transition-colors"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
            role="dialog"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => handleLinkClick('about')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                About Infectiometer
              </button>
              <button
                onClick={() => handleLinkClick('tracks')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                Who It&apos;s For (4 Audiences)
              </button>
              <button
                onClick={() => handleLinkClick('what-you-get')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                Curriculum (What You Get)
              </button>
              <button
                onClick={() => handleLinkClick('free-resources')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 transition-colors flex items-center justify-between"
              >
                <span>Free Open-Access Hub</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">Free</span>
              </button>
              <button
                onClick={() => handleLinkClick('faq')}
                className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                FAQ & Support
              </button>
            </div>

            <div className="pt-3 border-t border-slate-200 space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('signin'); }}
                className="w-full py-2.5 rounded-lg border border-slate-300 text-center text-xs font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Log In to Existing Account
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }}
                className="w-full py-2.5 rounded-lg bg-[#FF4F4F] hover:bg-[#E03E3E] text-white text-xs font-bold transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <span>Register Portal Account</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-2xs lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};
