"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

interface WordData {
  text: string;
  duration: number;
  delay: number;
  blur: number;
  scale?: number;
}

interface BlurTextAnimationProps {
  text?: string;
  words?: WordData[];
  className?: string;
  fontSize?: string;
  fontFamily?: string;
  textColor?: string;
  animationDelay?: number;
}

export default function BlurTextAnimation({
  text = "Elegant blur animation that brings your words to life with cinematic transitions.",
  words,
  className = "",
  fontSize = "text-4xl md:text-5xl lg:text-6xl",
  fontFamily = "font-['Avenir_Next',_'Avenir',_system-ui,_sans-serif]",
  textColor = "text-white",
  animationDelay = 4000
}: BlurTextAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const resetTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const textWords = useMemo(() => {
    if (words) return words;

    const splitWords = text.split(" ");
    const totalWords = splitWords.length;

    return splitWords.map((word, index) => {
      const progress = index / totalWords;

      // Increased delays to ensure all names are animated
      const exponentialDelay = Math.pow(progress, 0.7) * 3; // Increased from 0.5 to 3

      const baseDelay = index * 0.15; // Increased from 0.06 to 0.15

      const microVariation = (Math.random() - 0.5) * 0.08; // Slightly increased variation

      return {
        text: word,
        duration: 1.8 + Math.cos(index * 0.3) * 0.2, // Slightly faster individual animations
        delay: baseDelay + exponentialDelay + microVariation,
        blur: 12 + Math.floor(Math.random() * 8),
        scale: 0.9 + Math.sin(index * 0.2) * 0.05
      };
    });
  }, [text, words]);

  useEffect(() => {
    const startAnimation = () => {
      setTimeout(() => {
        setIsAnimating(true);
      }, 200);

      let maxTime = 0;
      textWords.forEach(word => {
        const totalTime = word.delay + word.duration;
        maxTime = Math.max(maxTime, totalTime);
      });

      animationTimeoutRef.current = setTimeout(() => {
        setIsAnimating(false);

        resetTimeoutRef.current = setTimeout(() => {
          startAnimation();
        }, animationDelay);
      }, (maxTime + 1) * 1000);
    };

    startAnimation();

    return () => {
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, [textWords, animationDelay]);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="text-center max-w-5xl px-8">
        <p className={`${fontSize} ${fontFamily} font-light leading-relaxed tracking-wide`}>
          {textWords.map((word, index) => {
            // Create gradient effect from white to silver
            const totalWords = textWords.length;
            const progress = index / totalWords;

            // Oscillate between white (255) and silver (192) creating waves
            const waveEffect = Math.sin(progress * Math.PI * 4) * 0.5 + 0.5; // 0 to 1
            const brightness = 192 + (255 - 192) * waveEffect; // 192 to 255
            const rgb = `rgb(${brightness}, ${brightness}, ${brightness})`;

            return (
              <span
                key={index}
                className={`inline-block transition-all ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  color: rgb,
                  transitionDuration: `${word.duration}s`,
                  transitionDelay: `${word.delay}s`,
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  filter: isAnimating
                    ? 'blur(0px) brightness(1)'
                    : `blur(${word.blur}px) brightness(0.6)`,
                  transform: isAnimating
                    ? 'translateY(0) scale(1) rotateX(0deg)'
                    : `translateY(20px) scale(${word.scale || 1}) rotateX(-15deg)`,
                  marginRight: '0.35em',
                  willChange: 'filter, transform, opacity',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  textShadow: isAnimating
                    ? `0 2px 8px rgba(${brightness}, ${brightness}, ${brightness}, 0.1)`
                    : `0 0 40px rgba(${brightness}, ${brightness}, ${brightness}, 0.4)`
                }}
              >
                {word.text}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export function Component() {
  return <BlurTextAnimation />;
}
