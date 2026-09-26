'use client';

import React from 'react';

// Loopy decorative spring / coil (used in CTA section & hero)
export function SpringCoil({ className = '', style = {} }: Readonly<{ className?: string; style?: React.CSSProperties }>) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ width: '100%', height: 'auto', ...style }}
    >
      <path
        d="M 20 60 C 20 20, 60 20, 60 60 C 60 100, 20 100, 20 60 C 20 10, 80 10, 80 60 C 80 110, 40 110, 40 60 C 40 5, 110 5, 110 60 C 110 115, 70 115, 70 60 C 70 0, 140 0, 140 60 C 140 120, 100 120, 100 60 C 100 -5, 175 -5, 175 60 C 175 125, 135 125, 135 60 C 135 -10, 195 20, 195 60"
        stroke="#4361EE"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Loopy abstract scribble behind hero portrait
export function HeroScribble({ className = '', style = {} }: Readonly<{ className?: string; style?: React.CSSProperties }>) {
  return (
    <svg
      viewBox="0 0 350 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M 40 120 C 10 240, 20 380, 80 400 C 140 420, 310 410, 330 330 C 350 250, 310 140, 260 90 C 210 40, 90 30, 60 90 C 30 150, 70 290, 120 340 C 170 390, 280 370, 310 300 C 340 230, 280 110, 220 70"
        stroke="#4361EE"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 3"
        opacity="0.75"
      />
    </svg>
  );
}

// Curved doodle arrow pointing down-right
export function SquigglyArrow({ className = '', style = {} }: Readonly<{ className?: string; style?: React.CSSProperties }>) {
  return (
    <svg
      width="44"
      height="32"
      viewBox="0 0 54 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <path
        d="M 4 8 C 18 2, 34 8, 38 18 C 42 28, 28 32, 34 32 C 40 32, 50 26, 50 26"
        stroke="#1E293B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 42 32 L 50 26 L 44 20"
        stroke="#1E293B"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hand-drawn Underline Curve for highlighted words
export function CurvedUnderline({ color = '#2152FF', width = 120 }: Readonly<{ color?: string; width?: number }>) {
  return (
    <svg
      width={width}
      height="12"
      viewBox="0 0 140 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', marginTop: '-4px' }}
    >
      <path
        d="M 4 8 C 40 14, 100 12, 136 4"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Starburst / scalloped badge ("I'M READY TO TALK ↗")
export function StarburstBadge({
  size = 140,
  onClick,
}: Readonly<{
  text?: string;
  size?: number;
  onClick?: () => void;
}>) {
  const degrees = [0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345];
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="I am ready to talk, click to open contact"
      style={{
        width: size,
        height: size,
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        background: 'none',
        border: 'none',
        padding: 0,
      }}
      className="starburst-button"
    >
      {/* Scalloped / starburst SVG background */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full animate-spin-slow"
        style={{
          filter: 'drop-shadow(0 10px 20px rgba(33, 82, 255, 0.35))',
        }}
      >
        <path
          d="M 50 0 C 53 7, 57 7, 62 3 C 67 7, 71 8, 75 6 C 79 11, 83 13, 88 12 C 90 18, 93 21, 97 23 C 98 29, 99 33, 100 37 C 98 43, 98 47, 98 52 C 99 58, 97 62, 95 67 C 92 72, 89 75, 86 80 C 81 83, 77 86, 73 90 C 67 91, 63 94, 58 96 C 53 96, 49 98, 44 98 C 39 96, 35 96, 30 94 C 25 91, 21 88, 17 84 C 13 80, 9 76, 7 70 C 4 65, 3 60, 2 55 C 2 49, 3 44, 4 39 C 5 33, 8 28, 11 23 C 15 19, 19 16, 23 12 C 28 10, 32 8, 37 5 C 42 4, 46 2, 50 0 Z"
          fill="#2152FF"
        />
        {/* Repeating decorative scallops */}
        {degrees.map((deg) => (
          <circle
            key={`scallop-${deg}`}
            cx="50"
            cy="6"
            r="4.5"
            fill="#2152FF"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
      </svg>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FFFFFF',
          textAlign: 'center',
          padding: '12px',
          pointerEvents: 'none',
        }}
      >
        <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.08em', lineHeight: 1.2 }}>
          I&apos;M
        </span>
        <span style={{ fontSize: '11px', fontWeight: 900, letterSpacing: '0.04em', lineHeight: 1.15 }}>
          READY TO TALK
        </span>
        <span style={{ fontSize: '18px', fontWeight: 900, marginTop: '2px' }}>↗</span>
      </div>
    </button>
  );
}

// "LET'S ROCK & ROLL" Sticker badge
export function RockAndRollBadge() {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px 20px',
        border: '1.5px dashed #CBD5E1',
        borderRadius: '9999px',
        backgroundColor: '#FFFFFF',
        transform: 'rotate(-8deg)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
      }}
    >
      <span
        style={{
          fontSize: '0.78rem',
          fontWeight: 800,
          letterSpacing: '0.08em',
          color: '#1E293B',
          textTransform: 'uppercase',
        }}
      >
        LET&apos;S ROCK &amp; ROLL
      </span>
    </div>
  );
}
