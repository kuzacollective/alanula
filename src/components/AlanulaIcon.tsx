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
      {/* Letter 'a' - Teal */}
      <path
        d="M8 20C8 14 12 10 18 10C24 10 28 14 28 20V22C28 28 24 32 18 32C12 32 8 28 8 22V20ZM18 16C15 16 14 17.5 14 20C14 22.5 15 24 18 24C21 24 22 22.5 22 20C22 17.5 21 16 18 16Z"
        fill="#4ECDC4"
      />
      
      {/* Letter 'l' - Orange */}
      <path
        d="M32 6V28C32 30 33 31 35 31C37 31 38 30 38 28V6C38 4 37 3 35 3C33 3 32 4 32 6Z"
        fill="#FF6B35"
      />
      
      {/* Letter 'a' - Yellow */}
      <path
        d="M48 20C48 14 52 10 58 10C64 10 68 14 68 20V22C68 28 64 32 58 32C52 32 48 28 48 22V20ZM58 16C55 16 54 17.5 54 20C54 22.5 55 24 58 24C61 24 62 22.5 62 20C62 17.5 61 16 58 16Z"
        fill="#F7DC6F"
      />
      
      {/* Letter 'n' - Dark Teal */}
      <path
        d="M76 12V28C76 30 77 31 79 31C81 31 82 30 82 28V20C82 17.5 84 16 87 16C90 16 92 17.5 92 20V28C92 30 93 31 95 31C97 31 98 30 98 28V20C98 14 94 10 87 10C84 10 81 11 80 13C78 11 77 12 76 12Z"
        fill="#2C7873"
      />
      
      {/* Letter 'u' - Medium Teal */}
      <path
        d="M106 12V22C106 28 110 32 116 32C122 32 126 28 126 22V12C126 10 125 9 123 9C121 9 120 10 120 12V22C120 24.5 119 26 116 26C113 26 112 24.5 112 22V12C112 10 111 9 109 9C107 9 106 10 106 12Z"
        fill="#45B7B8"
      />
      
      {/* Letter 'l' - Darker Teal */}
      <path
        d="M134 6V28C134 30 135 31 137 31C139 31 140 30 140 28V6C140 4 139 3 137 3C135 3 134 4 134 6Z"
        fill="#26A0A7"
      />
      
      {/* Letter 'a' - Dark Teal */}
      <path
        d="M148 20C148 14 152 10 158 10C164 10 168 14 168 20V22C168 28 164 32 158 32C152 32 148 28 148 22V20ZM158 16C155 16 154 17.5 154 20C154 22.5 155 24 158 24C161 24 162 22.5 162 20C162 17.5 161 16 158 16Z"
        fill="#1B6B73"
      />
    </svg>
  );
}