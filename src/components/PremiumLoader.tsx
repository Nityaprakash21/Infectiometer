import React, { useState, useEffect } from 'react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

interface PremiumLoaderProps {
  onComplete: () => void;
  minDurationMs?: number;
}

export const PremiumLoader: React.FC<PremiumLoaderProps> = ({ 
  onComplete, 
  minDurationMs = 1100 
}) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Lock body scrolling while loader is visible
  useBodyScrollLock(true);

  useEffect(() => {
    const startTime = performance.now();
    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawRatio = Math.min(elapsed / minDurationMs, 1);
      const easedRatio = 1 - Math.pow(1 - rawRatio, 2.5);
      const currentPct = Math.round(easedRatio * 100);

      setProgress(currentPct);

      if (rawRatio < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            onComplete();
          }, 500);
        }, 150);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [minDurationMs, onComplete]);

  // Fluid calibration position across the original thermometer shape (0 to 500px)
  const liquidFillWidth = Math.max(38, 12 + (progress / 100) * 488);

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-50 transition-all duration-500 ease-out select-none ${
        isExiting 
          ? 'opacity-0 scale-[1.02] pointer-events-none filter blur-xs' 
          : 'opacity-100 scale-100'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Infectiometer Platform"
    >
      {/* Main Centered Stage */}
      <div className="w-full max-w-lg px-6 flex flex-col items-center text-center space-y-4 sm:space-y-5 relative z-10">
        
        {/* Unified Brand Lockup: Animated Thermometer with Text directly below */}
        <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-2.5">
          
          {/* Authentic Scaled Medical Thermometer SVG from Original Logo */}
          <div className="relative flex items-center justify-center">
            <svg 
              viewBox="0 0 520 112" 
              className="w-64 sm:w-80 md:w-92 h-auto drop-shadow-sm overflow-visible"
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <defs>
                {/* Liquid fill clip path synced with calibration progress % */}
                <clipPath id="loader-mercury-fill-clip">
                  <rect 
                    x="0" 
                    y="0" 
                    width={liquidFillWidth} 
                    height="112" 
                  />
                </clipPath>

                {/* Inner channel boundary for clean containment */}
                <clipPath id="loader-inner-channel-clip">
                  <path d="M 97.4 41 L 485 41 A 15 15 0 0 1 485 71 L 97.4 71 A 44 44 0 1 1 97.4 41 Z" />
                </clipPath>
              </defs>

              {/* Outer Black Border for Medical Thermometer (Bulb + Stem) */}
              <path
                d="M 101.4 35 L 485 35 A 21 21 0 0 1 485 77 L 101.4 77 A 50 50 0 1 1 101.4 35 Z"
                fill="#000000"
              />

              {/* Empty Channel Background */}
              <path
                d="M 97.4 41 L 485 41 A 15 15 0 0 1 485 71 L 97.4 71 A 44 44 0 1 1 97.4 41 Z"
                fill="#0F172A"
              />

              {/* Active Calibrating Liquid Fill (Clipped by current progress & inner channel) */}
              <g clipPath="url(#loader-inner-channel-clip)">
                <g clipPath="url(#loader-mercury-fill-clip)">
                  {/* Bulb Base & Segment 1: Red (#FF4F4F) */}
                  <circle cx="56" cy="56" r="44" fill="#FF4F4F" />
                  <rect x="56" y="41" width="156" height="30" fill="#FF4F4F" />

                  {/* Segment 2: Orange (#FF9046) */}
                  <rect x="212" y="41" width="62" height="30" fill="#FF9046" />

                  {/* Segment 3: Yellow / Sub-febrile (#FFC876) */}
                  <rect x="274" y="41" width="62" height="30" fill="#FFC876" />

                  {/* Segment 4: Cyan / Normal (#9FECFE) */}
                  <path d="M 336 41 L 485 41 A 15 15 0 0 1 485 71 L 336 71 Z" fill="#9FECFE" />

                  {/* Fluid shine reflection */}
                  <line x1="56" y1="46" x2="480" y2="46" stroke="#FFFFFF" strokeWidth="1.8" strokeOpacity="0.4" strokeLinecap="round" />
                </g>
              </g>

              {/* Leading Edge Spark Beacon */}
              {progress > 4 && progress < 99 && (
                <circle 
                  cx={Math.min(488, liquidFillWidth)} 
                  cy="56" 
                  r="4.5" 
                  fill="#FFFFFF" 
                  className="filter drop-shadow-[0_0_6px_#FFFFFF]"
                />
              )}

              {/* Measurement Graduation Lines / Tick Marks along BOTTOM edge pointing UP (Original Logo Design) */}
              {/* Major Ticks */}
              <line x1="150" y1="71" x2="150" y2="41" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
              <line x1="212" y1="71" x2="212" y2="41" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
              <line x1="274" y1="71" x2="274" y2="41" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
              <line x1="336" y1="71" x2="336" y2="41" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
              <line x1="398" y1="71" x2="398" y2="41" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
              <line x1="460" y1="71" x2="460" y2="41" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />

              {/* Minor Ticks */}
              <line x1="162.4" y1="71" x2="162.4" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="174.8" y1="71" x2="174.8" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="187.2" y1="71" x2="187.2" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="199.6" y1="71" x2="199.6" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />

              <line x1="224.4" y1="71" x2="224.4" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="236.8" y1="71" x2="236.8" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="249.2" y1="71" x2="249.2" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="261.6" y1="71" x2="261.6" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />

              <line x1="286.4" y1="71" x2="286.4" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="298.8" y1="71" x2="298.8" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="311.2" y1="71" x2="311.2" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="323.6" y1="71" x2="323.6" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />

              <line x1="348.4" y1="71" x2="348.4" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="360.8" y1="71" x2="360.8" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="373.2" y1="71" x2="373.2" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="385.6" y1="71" x2="385.6" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />

              <line x1="410.4" y1="71" x2="410.4" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="422.8" y1="71" x2="422.8" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="435.2" y1="71" x2="435.2" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="447.6" y1="71" x2="447.6" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />

              <line x1="472.4" y1="71" x2="472.4" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="484.8" y1="71" x2="484.8" y2="56" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </div>

          {/* Wordmark strictly below thermometer */}
          <span className="font-heading font-black text-2xl sm:text-3xl tracking-[0.09em] text-[#000000] uppercase leading-none select-none">
            INFECTIOMETER
          </span>
        </div>

        {/* Clinical Subtitle & Tagline */}
        <div className="space-y-1">
          <div className="text-xs font-semibold tracking-wider uppercase text-slate-500">
            <span>Clinical Microbiology & Infectious Diseases</span>
          </div>

          <p className="text-xs sm:text-sm font-medium text-slate-600 italic">
            &ldquo;Where Microbiology Meets Clinical Practice.&rdquo;
          </p>
        </div>

      </div>
    </div>
  );
};
