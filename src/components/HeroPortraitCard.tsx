'use client';

import React, { useRef, useEffect } from 'react';
import { HeroScribble } from './Doodles';
import gsap from 'gsap';

export default function HeroPortraitCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Subtle 3D tilt on mousemove
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const card = cardRef.current;
    if (!wrapper || !card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotateY: x * 14,
        rotateX: -y * 14,
        ease: 'power2.out',
        duration: 0.6,
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        ease: 'power2.out',
        duration: 0.8,
      });
    };

    wrapper.addEventListener('mousemove', handleMouseMove);
    wrapper.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      wrapper.removeEventListener('mousemove', handleMouseMove);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: 480,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background Loopy Doodle */}
      <div
        style={{
          position: 'absolute',
          top: -20,
          right: -30,
          width: 320,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <HeroScribble />
      </div>

      {/* Blue Cloud / Glow Beneath */}
      <div
        style={{
          position: 'absolute',
          bottom: -40,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 340,
          height: 180,
          background: 'radial-gradient(ellipse at center, rgba(33, 82, 255, 0.45) 0%, rgba(33, 82, 255, 0.15) 50%, transparent 75%)',
          filter: 'blur(30px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* 3D Tilted Card Container */}
      <div
        ref={cardRef}
        style={{
          position: 'relative',
          width: 340,
          height: 440,
          borderRadius: 36,
          backgroundColor: '#0E131F',
          boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.35), 0 0 40px rgba(33, 82, 255, 0.2)',
          transformStyle: 'preserve-3d',
          zIndex: 1,
          overflow: 'visible',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Subtle grid pattern inside card */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 36,
            overflow: 'hidden',
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            opacity: 0.6,
          }}
        />

        {/* Ambient Top Glow in Card */}
        <div
          style={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: 180,
            height: 180,
            background: 'radial-gradient(circle, rgba(33, 82, 255, 0.5) 0%, transparent 70%)',
            filter: 'blur(25px)',
            borderRadius: '50%',
          }}
        />

        {/* High-Fidelity Developer Vector / Silhouette / Cutout Illustration */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 380,
            height: 480,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        >
          <svg
            viewBox="0 0 380 480"
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="tshirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#F1F5F9" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
              <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FBD7B5" />
                <stop offset="60%" stopColor="#E6B58F" />
                <stop offset="100%" stopColor="#D89D73" />
              </linearGradient>
              <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4A3425" />
                <stop offset="60%" stopColor="#2E1D13" />
                <stop offset="100%" stopColor="#1A0F0A" />
              </linearGradient>
              <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Shoulders & White Crewneck T-Shirt */}
            <path
              d="M 70 480 C 70 380, 110 320, 190 320 C 270 320, 310 380, 310 480 Z"
              fill="url(#tshirtGrad)"
              filter="url(#cardShadow)"
            />
            {/* T-Shirt Collar / Crewneck Ring */}
            <path
              d="M 155 320 C 155 345, 225 345, 225 320 C 215 332, 165 332, 155 320 Z"
              fill="#E2E8F0"
              stroke="#CBD5E1"
              strokeWidth="2"
            />
            {/* T-Shirt chest pocket outline */}
            <path
              d="M 230 365 L 265 365 L 265 405 C 265 415, 230 415, 230 405 Z"
              fill="none"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="3 2"
            />

            {/* Neck */}
            <path
              d="M 165 260 L 165 328 C 175 334, 205 334, 215 328 L 215 260 Z"
              fill="url(#skinGrad)"
            />
            {/* Neck Shadow under chin */}
            <path
              d="M 165 260 C 175 285, 205 285, 215 260 Z"
              fill="#C4885E"
              opacity="0.4"
            />

            {/* Face Shape */}
            <path
              d="M 145 190 C 145 270, 165 295, 190 295 C 215 295, 235 270, 235 190 C 235 140, 225 125, 190 125 C 155 125, 145 140, 145 190 Z"
              fill="url(#skinGrad)"
            />

            {/* Ears */}
            <ellipse cx="143" cy="205" rx="7" ry="12" fill="#E6B58F" />
            <ellipse cx="237" cy="205" rx="7" ry="12" fill="#E6B58F" />

            {/* Eyes */}
            <circle cx="172" cy="195" r="4" fill="#2E1D13" />
            <circle cx="208" cy="195" r="4" fill="#2E1D13" />
            <circle cx="173" cy="193" r="1.5" fill="#FFFFFF" />
            <circle cx="209" cy="193" r="1.5" fill="#FFFFFF" />

            {/* Eyebrows */}
            <path d="M 162 185 Q 172 181 180 185" stroke="#382417" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M 200 185 Q 208 181 218 185" stroke="#382417" strokeWidth="2.5" strokeLinecap="round" />

            {/* Nose */}
            <path d="M 190 192 L 187 215 L 193 215" stroke="#C4885E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

            {/* Warm, Friendly Smile */}
            <path d="M 176 235 Q 190 248 204 235" stroke="#9A5034" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M 180 236 Q 190 244 200 236" fill="#FFFFFF" />

            {/* Stubble / Trimmed Beard Line */}
            <path
              d="M 152 205 C 155 275, 170 290, 190 290 C 210 290, 225 275, 228 205"
              fill="none"
              stroke="#543C2E"
              strokeWidth="2.5"
              strokeDasharray="1.5 3"
              opacity="0.6"
            />

            {/* Stylish Modern Wavy Hair */}
            <path
              d="M 138 175 C 130 140, 145 95, 190 90 C 235 95, 250 140, 242 175 C 248 150, 245 120, 230 105 C 215 90, 165 90, 150 105 C 138 118, 135 145, 138 175 Z"
              fill="url(#hairGrad)"
            />
            <path
              d="M 148 135 C 145 110, 175 100, 190 105 C 215 102, 232 115, 235 135 C 220 120, 205 115, 190 118 C 170 115, 158 122, 148 135 Z"
              fill="#5C3E2C"
            />
          </svg>
        </div>

        {/* Small floating badge on card */}
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            right: -24,
            backgroundColor: '#2152FF',
            color: '#FFFFFF',
            padding: '8px 18px',
            borderRadius: 9999,
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.04em',
            boxShadow: '0 8px 24px rgba(33, 82, 255, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            zIndex: 10,
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22C55E', display: 'inline-block' }}></span>
          Available for Projects
        </div>
      </div>
    </div>
  );
}
