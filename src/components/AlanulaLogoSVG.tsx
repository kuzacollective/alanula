import React from 'react';

interface AlanulaLogoSVGProps {
  size?: number;
  className?: string;
  variant?: 'full' | 'icon' | 'text';
}

export default function AlanulaLogoSVG({ 
  size = 32, 
  className = "",
  variant = 'full'
}: AlanulaLogoSVGProps) {
  
  // Calculate dimensions based on variant
  const getViewBox = () => {
    switch (variant) {
      case 'icon':
        return "0 0 40 40";
      case 'text':
        return "0 0 200 40";
      case 'full':
      default:
        return "0 0 240 40";
    }
  };

  const getWidth = () => {
    switch (variant) {
      case 'icon':
        return size;
      case 'text':
        return size * 5;
      case 'full':
      default:
        return size * 6;
    }
  };

  return (
    <svg
      width={getWidth()}
      height={size}
      viewBox={getViewBox()}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Alanula Logo"
    >
      {/* Icon/Symbol part */}
      {(variant === 'full' || variant === 'icon') && (
        <g>
          {/* Circular background */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="url(#primaryGradient)"
            stroke="url(#accentGradient)"
            strokeWidth="2"
          />
          
          {/* Stylized 'A' symbol */}
          <path
            d="M12 28L20 12L28 28M15 24H25"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Small accent dot */}
          <circle
            cx="20"
            cy="15"
            r="2"
            fill="white"
          />
        </g>
      )}
      
      {/* Text part */}
      {(variant === 'full' || variant === 'text') && (
        <g transform={variant === 'text' ? 'translate(0, 0)' : 'translate(50, 0)'}>
          {/* "alanula" text */}
          <text
            x="0"
            y="28"
            fontFamily="Poppins, sans-serif"
            fontSize="24"
            fontWeight="700"
            fill="url(#textGradient)"
            letterSpacing="-0.5px"
          >
            alanula
          </text>
          
          {/* Tagline */}
          <text
            x="0"
            y="38"
            fontFamily="Inter, sans-serif"
            fontSize="8"
            fontWeight="400"
            fill="currentColor"
            opacity="0.7"
          >
            local pros • trusted service
          </text>
        </g>
      )}
      
      {/* Gradients */}
      <defs>
        <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(44, 95%, 48%)" />
          <stop offset="100%" stopColor="hsl(44, 95%, 42%)" />
        </linearGradient>
        
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(166, 100%, 39%)" />
          <stop offset="100%" stopColor="hsl(166, 100%, 35%)" />
        </linearGradient>
        
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(44, 95%, 48%)" />
          <stop offset="50%" stopColor="hsl(166, 100%, 39%)" />
          <stop offset="100%" stopColor="hsl(44, 95%, 48%)" />
        </linearGradient>
      </defs>
    </svg>
  );
}