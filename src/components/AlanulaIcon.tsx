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
      {/* Large 'a' letter in golden yellow */}
      <path
        d="M25 75V45C25 35 32 28 42 28C52 28 59 35 59 45V75M25 58H59M42 40C46 40 49 43 49 47C49 51 46 54 42 54C38 54 35 51 35 47C35 43 38 40 42 40Z"
        stroke="#F5B400"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Colon (:) in teal green */}
      <circle cx="72" cy="42" r="4" fill="#00C88F" />
      <circle cx="72" cy="58" r="4" fill="#00C88F" />
    </svg>
  );
}