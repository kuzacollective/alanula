import React from 'react';

interface AlanulaTextLogoProps {
  size?: number;
  className?: string;
}

export default function AlanulaTextLogo({ size = 32, className = "" }: AlanulaTextLogoProps) {
  const fontSize = size;
  
  return (
    <div
      className={`flex items-center font-poppins font-bold ${className}`}
      style={{ fontSize: `${fontSize}px` }}
      role="img"
      aria-label="Alanula"
    >
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-teal))' }}>a</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-orange))' }}>l</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-yellow))' }}>a</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-teal))' }}>n</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-teal))' }}>u</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-teal))' }}>l</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-teal))' }}>a</span>
    </div>
  );
}