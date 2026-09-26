'use client';

import { useEffect, RefObject } from 'react';
import gsap from 'gsap';

export function useGsapHeroAnimation(
  titleRef: RefObject<HTMLElement>,
  badgeRef: RefObject<HTMLElement>,
  contentRef: RefObject<HTMLElement>
) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // Hero headline entrance
      if (titleRef.current) {
        gsap.from(titleRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
        });
      }

      // Content reveal
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          delay: 0.4,
          ease: 'power3.out',
        });
      }

      // Continuous gentle floating on sticker badge
      if (badgeRef.current) {
        gsap.to(badgeRef.current, {
          y: -6,
          rotate: -6,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    });

    return () => ctx.revert();
  }, [titleRef, badgeRef, contentRef]);
}
