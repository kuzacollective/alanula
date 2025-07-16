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
      {/* Lowercase 'a' letter in golden yellow */}
      <path
        d="M25 45C25 35 32 28 42 28C52 28 58 35 58 45V65C58 70 55 72 50 72H45C40 72 38 70 38 65V60H48V65H50V45C50 40 47 38 42 38C37 38 35 40 35 45V65C35 70 32 72 27 72H22C17 72 15 70 15 65V45C15 30 25 20 42 20C59 20 68 30 68 45V50H58V45Z"
        fill="#F5B400"
      />
      
      {/* Rectangular colon (:) in teal green */}
      <rect x="70" y="30" width="10" height="8" rx="1.5" fill="#00C88F" />
      <rect x="70" y="50" width="10" height="8" rx="1.5" fill="#00C88F" />
    </svg>
  );
}