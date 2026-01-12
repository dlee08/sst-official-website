"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

interface WordData {
  text: string;
  duration: number;
  delay: number;
  blur: number;
  scale?: number;
  color?: string;
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

  const textWords: WordData[] = useMemo(() => {
    if (words) return words;

    const splitWords = text.split(" ");
    const totalWords = splitWords.length;

    return splitWords.map((word, index) => {
      const progress = index / totalWords;

      // Deterministic delays - no randomness for consistency
      const exponentialDelay = Math.pow(progress, 0.7) * 3;
      const baseDelay = index * 0.15;

      return {
        text: word,
        duration: 1.8,
        delay: baseDelay + exponentialDelay,
        blur: 15,
        scale: 0.95
      };
    });
  }, [text, words]);

  useEffect(() => {
    // Only fade in once, never fade out
    setTimeout(() => {
      setIsAnimating(true);
    }, 200);

    return () => {
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, [textWords]);

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="text-center max-w-5xl px-8">
        <p className={`${fontSize} ${fontFamily} font-light leading-relaxed tracking-wide`}>
          {textWords.map((word, index) => {
            // Use custom color if provided, otherwise calculate gradient
            let rgb = word.color;
            if (!rgb) {
              const totalWords = textWords.length;
              const progress = index / totalWords;
              const waveEffect = Math.sin(progress * Math.PI * 4) * 0.5 + 0.5;
              const brightness = 192 + (255 - 192) * waveEffect;
              rgb = `rgb(${brightness}, ${brightness}, ${brightness})`;
            }

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
                    ? `0 2px 8px rgba(255, 255, 255, 0.1)`
                    : `0 0 40px rgba(255, 255, 255, 0.4)`
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
