import React from 'react';

interface ThermometerLogoProps {
  className?: string;
  variant?: 'stacked' | 'horizontal' | 'symbol' | 'image' | 'compact';
  size?: 'sm' | 'md' | 'lg';
}

export const ThermometerLogo: React.FC<ThermometerLogoProps> = ({ 
  className = '', 
  variant = 'stacked',
  size = 'md' 
}) => {
  // If user requests the raw image asset directly
  if (variant === 'image') {
    return (
      <div className={`flex flex-col items-center justify-center ${className}`}>
        <img 
          src="/assets/aistudio/WhatsApp_Image_2026-10-30_at_11.52.41_AM_309d82a0.jpeg" 
          alt="INFECTIOMETER" 
          className={size === 'sm' ? 'h-10 w-auto object-contain' : size === 'lg' ? 'h-18 w-auto object-contain' : 'h-14 w-auto object-contain'}
        />
      </div>
    );
  }

  const svgSizes = {
    sm: { width: 88, height: 22, textClass: 'text-[9px] tracking-[0.1em]', gapClass: 'mt-0.5' },
    md: { width: 108, height: 26, textClass: 'text-[11px] tracking-[0.12em]', gapClass: 'mt-1' },
    lg: { width: 144, height: 34, textClass: 'text-[13px] tracking-[0.14em]', gapClass: 'mt-1.5' },
  };

  const currentSize = svgSizes[size];

  // SVG representation of the thermometer
  const ThermometerSvg = (
    <svg 
      viewBox="0 0 120 32" 
      style={{ width: currentSize.width, height: currentSize.height }}
      className="shrink-0"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer Black Border for Thermometer */}
      <path
        d="M 16 3 A 13 13 0 1 0 16 29 L 105 29 A 13 13 0 0 0 105 3 Z"
        fill="#000000"
      />
      
      {/* Inner Colored Fluid Body */}
      {/* Bulb: Coral-Red #FF4D4D */}
      <circle cx="16" cy="16" r="10.5" fill="#FF4D4D" />
      
      {/* Segment 1 (Left connector & hot fever): Coral-Red */}
      <rect x="16" y="5.5" width="22" height="21" fill="#FF4D4D" />
      
      {/* Segment 2 (Warm orange): #FF8A3D */}
      <rect x="38" y="5.5" width="22" height="21" fill="#FF8A3D" />
      
      {/* Segment 3 (Yellow / Sub-febrile): #FFC861 */}
      <rect x="60" y="5.5" width="22" height="21" fill="#FFC861" />
      
      {/* Segment 4 (Cool cyan / Normal): #7DE8FD with rounded cap */}
      <path
        d="M 82 5.5 L 105 5.5 A 10.5 10.5 0 0 1 105 26.5 L 82 26.5 Z"
        fill="#7DE8FD"
      />

      {/* Thermometer Measurement Tick Marks (Black) */}
      <line x1="32" y1="5.5" x2="32" y2="15" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="39" y1="5.5" x2="39" y2="11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="46" y1="5.5" x2="46" y2="15" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="53" y1="5.5" x2="53" y2="11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="60" y1="5.5" x2="60" y2="15" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="67" y1="5.5" x2="67" y2="11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="74" y1="5.5" x2="74" y2="15" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="81" y1="5.5" x2="81" y2="11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="88" y1="5.5" x2="88" y2="15" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
      <line x1="95" y1="5.5" x2="95" y2="11" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="102" y1="5.5" x2="102" y2="15" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  // If only symbol is needed
  if (variant === 'symbol') {
    return <div className={`inline-flex items-center ${className}`}>{ThermometerSvg}</div>;
  }

  // Horizontal / Compact variant (side-by-side)
  if (variant === 'horizontal' || variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-2.5 ${className}`}>
        {ThermometerSvg}
        <span className="font-heading font-black tracking-tight text-[#181E28] uppercase text-lg sm:text-xl leading-none">
          INFECTIO<span className="text-[#FF4D4D]">METER</span>
        </span>
      </div>
    );
  }

  // STACKED VARIANT (Default: Thermometer on top, Name shifted directly UNDER the logo)
  return (
    <div className={`inline-flex flex-col items-center justify-center text-center ${className}`}>
      {ThermometerSvg}
      <span className={`font-heading font-black ${currentSize.textClass} text-[#181E28] uppercase leading-none select-none text-center ${currentSize.gapClass}`}>
        INFECTIOMETER
      </span>
    </div>
  );
};
