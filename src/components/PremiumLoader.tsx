import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { useBodyScrollLock } from '../hooks/useBodyScrollLock';

interface PremiumLoaderProps {
  onComplete: () => void;
  minDurationMs?: number;
}

export const PremiumLoader: React.FC<PremiumLoaderProps> = ({ 
  onComplete, 
  minDurationMs = 1500 
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
      // Non-linear easing for realistic calibration feel (ease-out-cubic)
      const rawRatio = Math.min(elapsed / minDurationMs, 1);
      // Easing curve: 1 - Math.pow(1 - rawRatio, 2.5)
      const easedRatio = 1 - Math.pow(1 - rawRatio, 2.5);
      const currentPct = Math.round(easedRatio * 100);

      setProgress(currentPct);

      if (rawRatio < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        // Brief pause at 100% before smooth fade-out
        setTimeout(() => {
          setIsExiting(true);
          // Wait for CSS transition (650ms) to complete before unmounting
          setTimeout(() => {
            onComplete();
          }, 650);
        }, 220);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [minDurationMs, onComplete]);

  // Dynamic clinical status messages based on calibration progress
  const getStatusMessage = (pct: number) => {
    if (pct < 25) return 'Calibrating clinical diagnostic modules...';
    if (pct < 55) return 'Loading NMC CBME curriculum & slide decks...';
    if (pct < 80) return 'Indexing 2,000+ vignette questions & rationales...';
    if (pct < 98) return 'Preparing clinical microbiology workspace...';
    return 'Diagnostic environment ready.';
  };

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAFBFD] transition-all duration-700 ease-out select-none ${
        isExiting 
          ? 'opacity-0 scale-[1.03] pointer-events-none filter blur-xs' 
          : 'opacity-100 scale-100'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading Infectiometer Platform"
    >
      {/* Background Soft Ambient Light Spheres (Medical Spectrum) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-gradient-to-br from-[#FFE8E8]/70 via-[#FFF3E0]/50 to-transparent filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#E0F7FA]/70 filter blur-3xl opacity-60" />
      </div>

      {/* Main Centered Stage */}
      <div className="w-full max-w-md px-6 flex flex-col items-center text-center space-y-6 sm:space-y-7 relative z-10">
        
        {/* Animated Thermometer Logo with Liquid Surge */}
        <div className="relative flex items-center justify-center">
          
          {/* Subtle pulse ring around bulb */}
          <div className="absolute -left-2 sm:-left-3 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FF4D4D]/20 animate-ping pointer-events-none" />
          
          {/* High-Precision Scaled Medical Thermometer SVG */}
          <svg 
            viewBox="0 0 180 48" 
            className="w-56 sm:w-72 h-auto drop-shadow-md overflow-visible"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              {/* Thermometer Spectrum Gradient */}
              <linearGradient id="loader-thermometer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF4D4D" />
                <stop offset="32%" stopColor="#FF8A3D" />
                <stop offset="65%" stopColor="#FFC861" />
                <stop offset="100%" stopColor="#7DE8FD" />
              </linearGradient>

              {/* Liquid fill clip path synced with progress % */}
              <clipPath id="loader-mercury-fill-clip">
                <rect 
                  x="0" 
                  y="0" 
                  width={Math.max(38, (progress / 100) * 180)} 
                  height="48" 
                  rx="24"
                />
              </clipPath>
            </defs>

            {/* Outer Protective Thermometer Housing (Dark Glass) */}
            <path
              d="M 24 5 A 19 19 0 1 0 24 43 L 156 43 A 19 19 0 0 0 156 5 Z"
              fill="#181E28"
            />

            {/* Empty Channel Track (Inner background) */}
            <path
              d="M 24 8 A 16 16 0 1 0 24 40 L 156 40 A 16 16 0 0 0 156 8 Z"
              fill="#263143"
            />

            {/* Active Calibrating Liquid Fill (Clipped by current progress) */}
            <g clipPath="url(#loader-mercury-fill-clip)">
              {/* Bulb Base */}
              <circle cx="24" cy="24" r="16" fill="#FF4D4D" />

              {/* Segment 1: Coral Red (Fever peak) */}
              <rect x="24" y="8" width="34" height="32" fill="#FF4D4D" />

              {/* Segment 2: Warm Orange */}
              <rect x="58" y="8" width="34" height="32" fill="#FF8A3D" />

              {/* Segment 3: Amber Yellow (Sub-febrile) */}
              <rect x="92" y="8" width="34" height="32" fill="#FFC861" />

              {/* Segment 4: Cyan (Normal) */}
              <path
                d="M 126 8 L 156 8 A 16 16 0 0 1 156 40 L 126 40 Z"
                fill="#7DE8FD"
              />

              {/* Fluid shine reflection */}
              <line x1="24" y1="12" x2="152" y2="12" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.4" strokeLinecap="round" />
            </g>

            {/* Leading Edge Spark Beacon */}
            {progress > 5 && progress < 98 && (
              <circle 
                cx={Math.min(160, Math.max(38, (progress / 100) * 180))} 
                cy="24" 
                r="3.5" 
                fill="#FFFFFF" 
                className="filter drop-shadow-[0_0_6px_#FFFFFF]"
              />
            )}

            {/* Measurement Graduation Lines / Tick Marks */}
            <line x1="48" y1="8" x2="48" y2="20" stroke="#181E28" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="59" y1="8" x2="59" y2="15" stroke="#181E28" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="70" y1="8" x2="70" y2="20" stroke="#181E28" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="81" y1="8" x2="81" y2="15" stroke="#181E28" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="92" y1="8" x2="92" y2="20" stroke="#181E28" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="103" y1="8" x2="103" y2="15" stroke="#181E28" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="114" y1="8" x2="114" y2="20" stroke="#181E28" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="125" y1="8" x2="125" y2="15" stroke="#181E28" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="136" y1="8" x2="136" y2="20" stroke="#181E28" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="147" y1="8" x2="147" y2="15" stroke="#181E28" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>

        {/* Wordmark & Medical Tagline */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-center gap-1">
            <span className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-[#181E28] uppercase">
              INFECTIO<span className="text-[#FF4D4D]">METER</span>
            </span>
          </div>

          <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#64748B]">
            <Sparkles className="w-3 h-3 text-[#FF8A3D]" />
            <span>Clinical Microbiology & Infectious Diseases</span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-[#181E28]/80 italic pt-0.5">
            &ldquo;Where Microbiology Meets Clinical Practice.&rdquo;
          </p>
        </div>

        {/* Precision Progress Metric & Bar */}
        <div className="w-full max-w-xs space-y-2 pt-2">
          
          {/* Header Row: Status & Live Percentage */}
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[11px] text-[#64748B] font-sans font-medium truncate max-w-[200px] text-left">
              {getStatusMessage(progress)}
            </span>
            <span className="font-bold text-[#FF4D4D] tabular-nums shrink-0 ml-2">
              {progress}%
            </span>
          </div>

          {/* Micro Progress Track */}
          <div className="h-1.5 w-full bg-[#E9EDF3] rounded-full overflow-hidden p-0.5 shadow-inner">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-[#FF4D4D] via-[#FF8A3D] to-[#7DE8FD] transition-all duration-150 ease-out shadow-[0_0_8px_rgba(255,77,77,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Security & Accreditation Micro-pill */}
          <div className="pt-2 flex items-center justify-center gap-1.5 text-[10px] text-[#94A3B8]">
            <ShieldCheck className="w-3 h-3 text-[#10B981]" />
            <span>NMC CBME Aligned · Academic Platform</span>
          </div>
        </div>

      </div>
    </div>
  );
};
