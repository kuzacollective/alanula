import React from 'react';

interface AlanulaIconProps {
  size?: number;
  className?: string;
}

export default function AlanulaIcon({ size = 32, className = "" }: AlanulaIconProps) {
  return (
    <svg
      width={size * 8.75} // Maintain aspect ratio (280/32)
      height={size}
      viewBox="0 0 280 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Letter 'a' - Teal - rounded lowercase 'a' */}
      <path
        d="M18 10C24 10 28 14 28 20C28 26 24 30 18 30C12 30 8 26 8 20C8 14 12 10 18 10ZM18 14C15 14 12 16 12 20C12 24 15 26 18 26C21 26 24 24 24 20C24 16 21 14 18 14ZM24 18V28C24 29 25 30 26 30C27 30 28 29 28 28V18"
        fill="#4ECDC4"
      />
      
      {/* Letter 'l' - Orange - vertical line */}
      <path
        d="M38 8V28C38 29 39 30 40 30C41 30 42 29 42 28V8C42 7 41 6 40 6C39 6 38 7 38 8Z"
        fill="#FF6B35"
      />
      
      {/* Letter 'a' - Yellow - rounded lowercase 'a' */}
      <path
        d="M58 10C64 10 68 14 68 20C68 26 64 30 58 30C52 30 48 26 48 20C48 14 52 10 58 10ZM58 14C55 14 52 16 52 20C52 24 55 26 58 26C61 26 64 24 64 20C64 16 61 14 58 14ZM64 18V28C64 29 65 30 66 30C67 30 68 29 68 28V18"
        fill="#F7DC6F"
      />
      
      {/* Letter 'n' - Dark Teal - lowercase 'n' */}
      <path
        d="M78 12V28C78 29 79 30 80 30C81 30 82 29 82 28V20C82 17 84 15 87 15C90 15 92 17 92 20V28C92 29 93 30 94 30C95 30 96 29 96 28V20C96 14 92 10 87 10C84 10 81 11 80 12C79 11 78 11 78 12Z"
        fill="#2C7873"
      />
      
      {/* Letter 'u' - Medium Teal - lowercase 'u' */}
      <path
        d="M106 12V22C106 26 109 30 114 30C119 30 122 26 122 22V12C122 11 121 10 120 10C119 10 118 11 118 12V22C118 24 117 26 114 26C111 26 110 24 110 22V12C110 11 109 10 108 10C107 10 106 11 106 12ZM118 12V28C118 29 119 30 120 30C121 30 122 29 122 28V12"
        fill="#45B7B8"
      />
      
      {/* Letter 'l' - Darker Teal - vertical line */}
      <path
        d="M132 8V28C132 29 133 30 134 30C135 30 136 29 136 28V8C136 7 135 6 134 6C133 6 132 7 132 8Z"
        fill="#26A0A7"
      />
      
      {/* Letter 'a' - Dark Teal - rounded lowercase 'a' */}
      <path
        d="M158 10C164 10 168 14 168 20C168 26 164 30 158 30C152 30 148 26 148 20C148 14 152 10 158 10ZM158 14C155 14 152 16 152 20C152 24 155 26 158 26C161 26 164 24 164 20C164 16 161 14 158 14ZM164 18V28C164 29 165 30 166 30C167 30 168 29 168 28V18"
        fill="#1B6B73"
      />
    </svg>
  );
}