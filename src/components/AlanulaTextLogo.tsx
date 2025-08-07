import React from 'react';

interface AlanulaTextLogoProps {
  size?: number;
  className?: string;
}

export default function AlanulaTextLogo({ size = 32, className = "" }: AlanulaTextLogoProps) {
  const width = size * 8.75; // Maintain aspect ratio (280/32)
  
  return (
    <svg
      width={width}
      height={size}
      viewBox="0 0 280 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Alanula"
    >
      {/* Letter 'a' - Teal */}
      <path
        d="M16 8C22 8 26 12 26 18C26 24 22 28 16 28C10 28 6 24 6 18C6 12 10 8 16 8ZM16 12C13 12 10 14 10 18C10 22 13 24 16 24C19 24 22 22 22 18C22 14 19 12 16 12ZM22 16V26C22 27 23 28 24 28C25 28 26 27 26 26V16"
        fill="#4ECDC4"
        stroke="#2E464A"
        strokeWidth="1"
      />
      
      {/* Letter 'l' - Orange */}
      <path
        d="M36 6V26C36 27 37 28 38 28C39 28 40 27 40 26V6C40 5 39 4 38 4C37 4 36 5 36 6Z"
        fill="#FF6B35"
        stroke="#2E464A"
        strokeWidth="1"
      />
      
      {/* Letter 'a' - Yellow */}
      <path
        d="M56 8C62 8 66 12 66 18C66 24 62 28 56 28C50 28 46 24 46 18C46 12 50 8 56 8ZM56 12C53 12 50 14 50 18C50 22 53 24 56 24C59 24 62 22 62 18C62 14 59 12 56 12ZM62 16V26C62 27 63 28 64 28C65 28 66 27 66 26V16"
        fill="#F7DC6F"
        stroke="#2E464A"
        strokeWidth="1"
      />
      
      {/* Letter 'n' - Teal */}
      <path
        d="M76 10V26C76 27 77 28 78 28C79 28 80 27 80 26V18C80 15 82 13 85 13C88 13 90 15 90 18V26C90 27 91 28 92 28C93 28 94 27 94 26V18C94 12 90 8 85 8C82 8 79 9 78 10C77 9 76 9 76 10Z"
        fill="#4ECDC4"
        stroke="#2E464A"
        strokeWidth="1"
      />
      
      {/* Letter 'u' - Teal */}
      <path
        d="M104 10V20C104 24 107 28 112 28C117 28 120 24 120 20V10C120 9 119 8 118 8C117 8 116 9 116 10V20C116 22 115 24 112 24C109 24 108 22 108 20V10C108 9 107 8 106 8C105 8 104 9 104 10ZM116 10V26C116 27 117 28 118 28C119 28 120 27 120 26V10"
        fill="#4ECDC4"
        stroke="#2E464A"
        strokeWidth="1"
      />
      
      {/* Letter 'l' - Teal */}
      <path
        d="M130 6V26C130 27 131 28 132 28C133 28 134 27 134 26V6C134 5 133 4 132 4C131 4 130 5 130 6Z"
        fill="#4ECDC4"
        stroke="#2E464A"
        strokeWidth="1"
      />
      
      {/* Letter 'a' - Teal */}
      <path
        d="M156 8C162 8 166 12 166 18C166 24 162 28 156 28C150 28 146 24 146 18C146 12 150 8 156 8ZM156 12C153 12 150 14 150 18C150 22 153 24 156 24C159 24 162 22 162 18C162 14 159 12 156 12ZM162 16V26C162 27 163 28 164 28C165 28 166 27 166 26V16"
        fill="#4ECDC4"
        stroke="#2E464A"
        strokeWidth="1"
      />
    </svg>
  );
}