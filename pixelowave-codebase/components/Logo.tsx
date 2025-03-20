import React from 'react';

export const Logo = ({ className = '', size = 40 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(37, 99, 235)" />
          <stop offset="100%" stopColor="rgb(147, 51, 234)" />
        </linearGradient>
      </defs>

      {/* Main circular frame */}
      <circle cx="50" cy="50" r="40" stroke="url(#gradient)" strokeWidth="3" fill="none" />

      {/* Orange Connecting Curve Line (Now behind the dots) */}
      <path
        d="M20 50 Q35 40 35 40 T50 60 T65 30 T80 50"
        stroke="rgb(255, 165, 0)" /* Orange color */
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />

      {/* Pixel dots forming a wave (Placed after the path so they appear in front) */}
      <circle cx="20" cy="50" r="4" fill="url(#gradient)" />
      <circle cx="35" cy="40" r="4" fill="url(#gradient)" />
      <circle cx="50" cy="60" r="4" fill="url(#gradient)" />
      <circle cx="65" cy="30" r="4" fill="url(#gradient)" />
      <circle cx="80" cy="50" r="4" fill="url(#gradient)" />
    </svg>
  );
};
