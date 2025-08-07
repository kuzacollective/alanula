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
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-primary))' }}>a</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-secondary))' }}>l</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-accent))' }}>a</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-primary))' }}>n</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-secondary))' }}>u</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-primary))' }}>l</span>
      <span className="alanula-text-logo-letter" style={{ color: 'hsl(var(--logo-secondary))' }}>a</span>
    </div>
  );
}