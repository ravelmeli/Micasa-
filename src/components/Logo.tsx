import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const textColor = variant === 'light' ? '#ffffff' : '#232629';
  const subtextColor = '#c4121a';

  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.25 : 1;

  return (
    <div className={`flex items-center select-none ${className}`} style={{ transform: `scale(${scale})`, transformOrigin: 'left center' }}>
      <svg
        viewBox="0 0 420 120"
        className="h-10 sm:h-12 w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="mRedGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e51c24" />
            <stop offset="50%" stopColor="#c4121a" />
            <stop offset="100%" stopColor="#8f0b11" />
          </linearGradient>
          <linearGradient id="mRedGradient2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#88080e" />
            <stop offset="100%" stopColor="#c4121a" />
          </linearGradient>
          <linearGradient id="charcoalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={variant === 'light' ? '#f0f3f5' : '#33373b'} />
            <stop offset="100%" stopColor={variant === 'light' ? '#d8dde0' : '#1c1e20'} />
          </linearGradient>
        </defs>

        {/* --- GEOMETRIC M ROOFLINE ICON --- */}
        <g id="icon-m-roof">
          {/* Left Wing / Outer Peak */}
          <path
            d="M15 90 L55 28 L72 54 L44 90 Z"
            fill="url(#mRedGradient2)"
          />
          <path
            d="M32 90 L70 32 L86 56 L58 90 Z"
            fill="url(#mRedGradient1)"
          />

          {/* Center Tall Peak */}
          <path
            d="M92 12 L132 75 L120 90 L92 48 L64 90 L52 75 Z"
            fill="url(#mRedGradient1)"
          />
          <path
            d="M92 12 L115 48 L92 84 L69 48 Z"
            fill="url(#mRedGradient2)"
            opacity="0.85"
          />

          {/* Right Symmetrical Wing */}
          <path
            d="M170 90 L130 28 L113 54 L141 90 Z"
            fill="url(#mRedGradient1)"
          />
          <path
            d="M153 90 L115 32 L99 56 L127 90 Z"
            fill="url(#mRedGradient2)"
          />

          {/* Center Arched Doorway */}
          <path
            d="M82 90 L82 72 C82 66 86 62 92 62 C98 62 102 66 102 72 L102 90 Z"
            fill="url(#mRedGradient1)"
          />
        </g>

        {/* --- WORDMARK: ICASA --- */}
        <g id="wordmark-icasa" fill="url(#charcoalGrad)">
          {/* I */}
          <path d="M190 32 H208 V88 H190 Z" />
          
          {/* C */}
          <path d="M255 38 C250 33 242 30 232 30 C217 30 206 41 206 60 C206 79 217 90 232 90 C242 90 250 87 255 82 L249 71 C245 75 240 77 233 77 C224 77 218 70 218 60 C218 50 224 43 233 43 C240 43 245 45 249 49 Z" />

          {/* A */}
          <path d="M272 32 L256 88 H270 L274 74 H291 L295 88 H309 L293 32 H272 Z M282 46 L288 64 H277 Z" />

          {/* S */}
          <path d="M335 44 C331 36 324 30 314 30 C303 30 296 36 296 44 C296 52 302 56 312 59 L318 61 C325 63 328 66 328 71 C328 77 322 81 313 81 C304 81 297 76 294 69 L284 75 C289 85 299 90 313 90 C326 90 339 82 339 70 C339 61 332 56 322 53 L316 51 C310 49 307 47 307 43 C307 38 312 35 318 35 C324 35 328 38 331 42 Z" />

          {/* A */}
          <path d="M352 32 L336 88 H350 L354 74 H371 L375 88 H389 L373 32 H352 Z M362 46 L368 64 H357 Z" />
        </g>

        {/* --- SUBTITLE: B Y   M C G O --- */}
        <text
          x="285"
          y="108"
          fill={subtextColor}
          fontSize="15"
          fontWeight="700"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          letterSpacing="0.45em"
          textAnchor="middle"
        >
          BY MCGO
        </text>
      </svg>
    </div>
  );
};
