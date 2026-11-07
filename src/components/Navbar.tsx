import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
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
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#E9EDF3] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Zone 1: Brand Wordmark */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('hero'); }}
            className="flex items-center shrink-0 group hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#FF4D4D]/50 rounded-lg"
            title="INFECTIOMETER Home"
            aria-label="Infectiometer Home"
          >
            <ThermometerLogo variant="stacked" size="md" />
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#64748B]" aria-label="Primary Navigation">
            <button 
              onClick={() => handleLinkClick('about')} 
              className="hover:text-[#181E28] transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer focus:outline-none focus:text-[#181E28]"
            >
              About
            </button>
            <button 
              onClick={() => handleLinkClick('tracks')} 
              className="hover:text-[#181E28] transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer focus:outline-none focus:text-[#181E28]"
            >
              Who It&apos;s For
            </button>
            <button 
              onClick={() => handleLinkClick('what-you-get')} 
              className="hover:text-[#181E28] transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer focus:outline-none focus:text-[#181E28]"
            >
              What You Get
            </button>
            <button 
              onClick={() => handleLinkClick('free-resources')} 
              className="text-[#059669] font-bold hover:text-[#047857] transition-colors whitespace-nowrap shrink-0 py-1.5 px-3 rounded-lg border border-[#A7F3D0] bg-[#ECFDF5] flex items-center gap-1 cursor-pointer"
            >
              <span>Free Hub</span>
            </button>
            <button 
              onClick={() => handleLinkClick('faq')} 
              className="hover:text-[#181E28] transition-colors whitespace-nowrap shrink-0 py-2 cursor-pointer focus:outline-none focus:text-[#181E28]"
            >
              FAQ
            </button>
          </nav>

          {/* Zone 3: Primary & Secondary Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenAuth('signin')}
              className="px-4 py-2 text-sm font-semibold text-[#181E28] hover:text-[#FF4D4D] transition-colors whitespace-nowrap cursor-pointer rounded-xl hover:bg-[#FAFBFD]"
            >
              Log In
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#FF4D4D] hover:bg-[#E83D3D] rounded-xl shadow-xs hover:shadow-md transition-all active:scale-98 flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Right Controls: Compact CTA + Accessible Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenAuth('signup')}
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#FF4D4D] hover:bg-[#E83D3D] rounded-lg shadow-2xs active:scale-95 transition-all"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-[#64748B] hover:text-[#181E28] hover:bg-[#FAFBFD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF4D4D]/40 transition-colors"
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
            className="lg:hidden border-t border-[#E9EDF3] bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
            role="dialog"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => handleLinkClick('about')}
                className="text-left px-3.5 py-2.5 text-sm font-semibold text-[#181E28] hover:bg-[#FAFBFD] rounded-xl active:bg-[#FFE8E8]/50 transition-colors"
              >
                About Infectiometer
              </button>
              <button
                onClick={() => handleLinkClick('tracks')}
                className="text-left px-3.5 py-2.5 text-sm font-semibold text-[#181E28] hover:bg-[#FAFBFD] rounded-xl active:bg-[#FFE8E8]/50 transition-colors"
              >
                Who It&apos;s For (4 Audiences)
              </button>
              <button
                onClick={() => handleLinkClick('what-you-get')}
                className="text-left px-3.5 py-2.5 text-sm font-semibold text-[#181E28] hover:bg-[#FAFBFD] rounded-xl active:bg-[#FFE8E8]/50 transition-colors"
              >
                What You Get (Core Curriculum)
              </button>
              <button
                onClick={() => handleLinkClick('free-resources')}
                className="text-left px-3.5 py-2.5 text-sm font-bold text-[#059669] bg-[#ECFDF5] hover:bg-[#D1FAE5] rounded-xl transition-colors flex items-center justify-between"
              >
                <span>★ Free Hub (Stories, Blog, News, Images)</span>
                <span className="text-[10px] uppercase tracking-wider bg-white px-2 py-0.5 rounded-full border border-[#A7F3D0]">
                  Open Access
                </span>
              </button>
              <button
                onClick={() => handleLinkClick('faq')}
                className="text-left px-3.5 py-2.5 text-sm font-semibold text-[#181E28] hover:bg-[#FAFBFD] rounded-xl active:bg-[#FFE8E8]/50 transition-colors"
              >
                Frequently Asked Questions
              </button>
            </div>

            <div className="pt-3 border-t border-[#E9EDF3] flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('signin'); }}
                className="w-full py-3 text-sm font-semibold text-[#181E28] bg-[#FAFBFD] hover:bg-[#F1F5F9] border border-[#E9EDF3] rounded-xl text-center transition-colors"
              >
                Log In
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAuth('signup'); }}
                className="w-full py-3 text-sm font-bold text-white bg-[#FF4D4D] hover:bg-[#E83D3D] rounded-xl text-center shadow-xs transition-colors"
              >
                Create Student / Doctor Account
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Drawer Backdrop to dismiss on click outside */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#181E28]/40 backdrop-blur-xs z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};