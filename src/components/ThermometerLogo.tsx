import React from 'react';

interface ThermometerLogoProps {
  className?: string;
  variant?: 'stacked' | 'horizontal' | 'symbol' | 'image' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Authentic INFECTIOMETER Brand Logo
 * Text is placed strictly BELOW the thermometer, exactly matching the original authentic logo artwork.
 */
export const ThermometerLogo: React.FC<ThermometerLogoProps> = ({ 
  className = '', 
  variant = 'stacked',
  size = 'md' 
}) => {
  // Height classes for the authentic stacked logo (Thermometer on top, INFECTIOMETER text below)
  // Source asset aspect ratio is ~4.14 : 1 (522px wide by 126px high)
  const sizeClasses = {
    sm: 'h-7 sm:h-8 w-auto',
    md: 'h-9 sm:h-11 w-auto',
    lg: 'h-12 sm:h-14 w-auto',
    xl: 'h-16 sm:h-20 w-auto',
  };

  // If only the thermometer symbol without text is requested
  if (variant === 'symbol') {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <svg 
          viewBox="0 0 520 80" 
          className="h-6 sm:h-7 w-auto overflow-visible shrink-0"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer Black Border for Medical Thermometer */}
          <path
            d="M 101.4 15 L 485 15 A 21 21 0 0 1 485 57 L 101.4 57 A 50 50 0 1 1 101.4 15 Z"
            fill="#000000"
          />
          <clipPath id="original-logo-symbol-clip">
            <path d="M 97.4 21 L 485 21 A 15 15 0 0 1 485 51 L 97.4 51 A 44 44 0 1 1 97.4 21 Z" />
          </clipPath>
          <g clipPath="url(#original-logo-symbol-clip)">
            <circle cx="56" cy="36" r="44" fill="#FF4F4F" />
            <rect x="56" y="21" width="156" height="30" fill="#FF4F4F" />
            <rect x="212" y="21" width="62" height="30" fill="#FF9046" />
            <rect x="274" y="21" width="62" height="30" fill="#FFC876" />
            <path d="M 336 21 L 485 21 A 15 15 0 0 1 485 51 L 336 51 Z" fill="#9FECFE" />
          </g>
          {/* Graduation lines along bottom pointing UP */}
          <line x1="150" y1="51" x2="150" y2="21" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
          <line x1="212" y1="51" x2="212" y2="21" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
          <line x1="274" y1="51" x2="274" y2="21" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
          <line x1="336" y1="51" x2="336" y2="21" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
          <line x1="398" y1="51" x2="398" y2="21" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
          <line x1="460" y1="51" x2="460" y2="21" stroke="#000000" strokeWidth="3.2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }

  // Standard representation: Text placed strictly BELOW the thermometer, exactly matching the original logo
  return (
    <div className={`inline-flex flex-col items-center justify-center shrink-0 ${className}`}>
      <img 
        src="/assets/infectiometer-original-logo-transparent.png" 
        alt="INFECTIOMETER" 
        className={`${sizeClasses[size] || sizeClasses.md} object-contain shrink-0 select-none drop-shadow-2xs`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
