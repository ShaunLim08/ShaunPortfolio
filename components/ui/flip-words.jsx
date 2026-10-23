'use client';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const FlipWords = ({ words = [], duration = 2400, className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration);

    return () => clearInterval(timer);
  }, [words, duration]);

  if (!words || words.length === 0) return null;

  const currentWord = words[index];

  return (
    <span
      className={cn(
        'inline-flex items-baseline justify-center relative overflow-visible align-baseline mx-1',
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentWord}
          initial={{
            opacity: 0,
            y: 14,
            filter: 'blur(6px)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          exit={{
            opacity: 0,
            y: -14,
            filter: 'blur(6px)',
          }}
          transition={{
            duration: 0.38,
            ease: [0.16, 1, 0.3, 1], // Smooth spring-like cubic bezier
          }}
          className="inline-block whitespace-nowrap will-change-transform select-none"
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
