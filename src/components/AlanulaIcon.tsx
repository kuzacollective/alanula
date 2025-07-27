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
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Letter 'a' - Teal */}
      <path
        d="M15 35C15 25 22 18 30 18C38 18 45 25 45 35V40C45 50 38 57 30 57C22 57 15 50 15 40V35ZM30 28C26 28 25 31 25 35C25 39 26 42 30 42C34 42 35 39 35 35C35 31 34 28 30 28Z"
        fill="#4ECDC4"
      />
      
      {/* Letter 'l' - Orange */}
      <path
        d="M50 15V55C50 57 52 58 54 58C56 58 58 57 58 55V15C58 13 56 12 54 12C52 12 50 13 50 15Z"
        fill="#FF6B35"
      />
      
      {/* Letter 'a' - Yellow */}
      <path
        d="M70 35C70 25 77 18 85 18C93 18 100 25 100 35V40C100 50 93 57 85 57C77 57 70 50 70 40V35ZM85 28C81 28 80 31 80 35C80 39 81 42 85 42C89 42 90 39 90 35C90 31 89 28 85 28Z"
        fill="#F7DC6F"
      />
      
      {/* Letter 'n' - Dark Teal */}
      <path
        d="M105 20V55C105 57 107 58 109 58C111 58 113 57 113 55V35C113 31 116 28 120 28C124 28 127 31 127 35V55C127 57 129 58 131 58C133 58 135 57 135 55V35C135 25 128 18 120 18C116 18 112 20 110 23C108 20 106 20 105 20Z"
        fill="#2C7873"
      />
      
      {/* Letter 'u' - Medium Teal */}
      <path
        d="M140 20V40C140 50 147 57 155 57C163 57 170 50 170 40V20C170 18 168 17 166 17C164 17 162 18 162 20V40C162 44 159 47 155 47C151 47 148 44 148 40V20C148 18 146 17 144 17C142 17 140 18 140 20Z"
        fill="#45B7B8"
      />
      
      {/* Letter 'l' - Darker Teal */}
      <path
        d="M175 15V55C175 57 177 58 179 58C181 58 183 57 183 55V15C183 13 181 12 179 12C177 12 175 13 175 15Z"
        fill="#26A0A7"
      />
      
      {/* Letter 'a' - Dark Teal */}
      <path
        d="M195 35C195 25 202 18 210 18C218 18 225 25 225 35V40C225 50 218 57 210 57C202 57 195 50 195 40V35ZM210 28C206 28 205 31 205 35C205 39 206 42 210 42C214 42 215 39 215 35C215 31 214 28 210 28Z"
        fill="#1B6B73"
      />
    </svg>
  );
}