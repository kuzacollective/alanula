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
      {/* Letter 'a' - Teal - Bold */}
      <path
        d="M10 6C10 2 14 -2 22 -2C30 -2 34 2 34 6V26C34 30 30 34 22 34C14 34 10 30 10 26V6ZM16 6V26C16 28 18 30 22 30C26 30 28 28 28 26V6C28 4 26 2 22 2C18 2 16 4 16 6ZM28 14V26C28 30 32 34 38 34C44 34 48 30 48 26V14"
        fill="#4ECDC4"
      />
      
      {/* Letter 'l' - Orange - Bold */}
      <path
        d="M50 -2V26C50 30 54 34 60 34C66 34 70 30 70 26V-2"
        fill="#FF6B35"
      />
      
      {/* Letter 'a' - Yellow - Bold */}
      <path
        d="M72 6C72 2 76 -2 84 -2C92 -2 96 2 96 6V26C96 30 92 34 84 34C76 34 72 30 72 26V6ZM78 6V26C78 28 80 30 84 30C88 30 90 28 90 26V6C90 4 88 2 84 2C80 2 78 4 78 6ZM90 14V26C90 30 94 34 100 34C106 34 110 30 110 26V14"
        fill="#F7DC6F"
      />
      
      {/* Letter 'n' - Dark Teal - Bold */}
      <path
        d="M112 6V26C112 30 116 34 122 34C128 34 132 30 132 26V16C132 10 136 6 142 6C148 6 152 10 152 16V26C152 30 156 34 162 34C168 34 172 30 172 26V16C172 6 166 -2 158 -2C154 -2 150 0 148 2C146 0 142 -2 138 -2C134 -2 130 0 128 2V6C128 4 126 2 124 2C122 2 120 4 120 6H112Z"
        fill="#2C7873"
      />
      
      {/* Letter 'u' - Medium Teal - Bold */}
      <path
        d="M174 6V22C174 26 178 30 184 30C190 30 194 26 194 22V6C194 4 196 2 198 2C200 2 202 4 202 6V22C202 30 196 34 188 34C184 34 180 32 178 30C176 32 172 34 168 34C160 34 154 30 154 22V6C154 4 156 2 158 2C160 2 162 4 162 6V22C162 24 164 26 168 26C172 26 174 24 174 22V6"
        fill="#45B7B8"
      />
      
      {/* Letter 'l' - Darker Teal - Bold */}
      <path
        d="M206 -2V26C206 30 210 34 216 34C222 34 226 30 226 26V-2"
        fill="#26A0A7"
      />
      
      {/* Letter 'a' - Dark Teal - Bold */}
      <path
        d="M228 6C228 2 232 -2 240 -2C248 -2 252 2 252 6V26C252 30 248 34 240 34C232 34 228 30 228 26V6ZM234 6V26C234 28 236 30 240 30C244 30 246 28 246 26V6C246 4 244 2 240 2C236 2 234 4 234 6ZM246 14V26C246 30 250 34 256 34C262 34 266 30 266 26V14"
        fill="#1B6B73"
      />
    </svg>
  );
}