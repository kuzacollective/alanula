import React from 'react';

interface AlanulaIconProps {
  size?: number;
  className?: string;
}

export default function AlanulaIcon({ size = 32, className = "" }: AlanulaIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized 'A' letter in golden yellow */}
      <path
        d="M20 75L35 25H45L60 75H50L47 65H33L30 75H20ZM36 55H44L40 40L36 55Z"
        fill="#F5B400"
      />
      
      {/* Colon (:) in teal green */}
      <circle cx="75" cy="35" r="3.5" fill="#00C88F" />
      <circle cx="75" cy="55" r="3.5" fill="#00C88F" />
    </svg>
  );
}