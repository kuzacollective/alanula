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
      <span className="alanula-text-logo-letter" style={{ color: '#4ECDC4' }}>a</span>
      <span className="alanula-text-logo-letter" style={{ color: '#FF6B35' }}>l</span>
      <span className="alanula-text-logo-letter" style={{ color: '#F7DC6F' }}>a</span>
      <span className="alanula-text-logo-letter" style={{ color: '#4ECDC4' }}>n</span>
      <span className="alanula-text-logo-letter" style={{ color: '#4ECDC4' }}>u</span>
      <span className="alanula-text-logo-letter" style={{ color: '#4ECDC4' }}>l</span>
      <span className="alanula-text-logo-letter" style={{ color: '#4ECDC4' }}>a</span>
    </div>
  );
}