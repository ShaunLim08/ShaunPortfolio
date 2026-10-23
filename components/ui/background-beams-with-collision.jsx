'use client';
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const BackgroundBeamsWithCollision = ({ children, className }) => {
  // Pre-configured beams with responsive spreads and staggered timings
  const beams = useMemo(
    () => [
      {
        initialX: '8%',
        duration: 5.5,
        delay: 0.5,
        repeatDelay: 3.5,
        height: 'h-16',
        color: 'from-amber-400 via-orange-500 to-rose-500',
      },
      {
        initialX: '24%',
        duration: 4.2,
        delay: 2.1,
        repeatDelay: 4.2,
        height: 'h-24',
        color: 'from-orange-400 via-rose-500 to-red-600',
      },
      {
        initialX: '42%',
        duration: 6.0,
        delay: 1.0,
        repeatDelay: 5.0,
        height: 'h-14',
        color: 'from-yellow-400 via-amber-500 to-orange-500',
      },
      {
        initialX: '60%',
        duration: 4.8,
        delay: 3.0,
        repeatDelay: 3.8,
        height: 'h-28',
        color: 'from-rose-400 via-red-500 to-amber-500',
      },
      {
        initialX: '76%',
        duration: 5.8,
        delay: 1.8,
        repeatDelay: 4.5,
        height: 'h-20',
        color: 'from-amber-500 via-orange-500 to-red-500',
      },
      {
        initialX: '92%',
        duration: 4.5,
        delay: 0.8,
        repeatDelay: 5.2,
        height: 'h-16',
        color: 'from-orange-400 via-rose-500 to-yellow-500',
      },
    ],
    []
  );

  return (
    <div
      className={cn(
        'relative flex w-full min-h-screen items-center justify-center overflow-hidden bg-white dark:bg-neutral-950 transition-colors',
        className
      )}
    >
      {/* Ambient background glow & subtle dot matrix */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(rgba(249, 115, 22, 0.12) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-orange-400/15 via-red-500/10 to-transparent blur-3xl rounded-full" />

      {/* GPU-accelerated collision beams */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {beams.map((beam, index) => (
          <CollisionBeam key={`beam-${index}`} beam={beam} />
        ))}
      </div>

      {/* Bottom collision horizon line */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-800 to-transparent shadow-[0_0_12px_rgba(249,115,22,0.25)]" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};

const CollisionBeam = React.memo(({ beam }) => {
  const { initialX, duration, delay, repeatDelay, height, color } = beam;
  const cycleTotal = duration + repeatDelay;
  const impactDelay = delay + duration - 0.15;

  // Statically generate particle vectors once per beam to avoid rerender computation
  const particles = useMemo(
    () => [
      { x: -28, y: -22, size: 'w-1.5 h-1.5', delay: 0 },
      { x: -14, y: -38, size: 'w-1 h-1', delay: 0.05 },
      { x: 0, y: -45, size: 'w-1.5 h-1.5', delay: 0.02 },
      { x: 16, y: -36, size: 'w-1 h-1', delay: 0.06 },
      { x: 26, y: -24, size: 'w-1.5 h-1.5', delay: 0.03 },
    ],
    []
  );

  return (
    <div
      className="absolute top-0 bottom-0 pointer-events-none"
      style={{ left: initialX }}
    >
      {/* Descending Light Beam */}
      <motion.div
        initial={{ y: '-15vh', opacity: 0 }}
        animate={{
          y: ['-15vh', '98vh'],
          opacity: [0, 0.9, 0.9, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatDelay,
          ease: 'linear',
        }}
        className={cn(
          'absolute -top-12 -translate-x-1/2 w-[2px] rounded-full bg-gradient-to-t will-change-transform shadow-[0_0_10px_rgba(249,115,22,0.6)]',
          height,
          color
        )}
      >
        {/* Glowing Beam Head */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffedd5,0_0_16px_#f97316]" />
      </motion.div>

      {/* Impact Ripple & Particle Burst (Synchronized mathematically to beam landing) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        {/* Ground Flash & Ripple */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.4, 1.8],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 0.7,
            delay: impactDelay,
            repeat: Infinity,
            repeatDelay: cycleTotal - 0.7,
            ease: 'easeOut',
          }}
          className="absolute -top-1 -left-6 w-12 h-3 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500 blur-sm will-change-transform"
        />

        {/* Expanding Ring */}
        <motion.div
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{
            scale: [0.2, 2.2],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 0.8,
            delay: impactDelay,
            repeat: Infinity,
            repeatDelay: cycleTotal - 0.8,
            ease: 'easeOut',
          }}
          className="absolute -top-2 -left-5 w-10 h-4 rounded-full border border-orange-400/80 will-change-transform"
        />

        {/* Sparks */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
            animate={{
              x: [0, p.x],
              y: [0, p.y],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.2],
            }}
            transition={{
              duration: 0.65,
              delay: impactDelay + p.delay,
              repeat: Infinity,
              repeatDelay: cycleTotal - 0.65,
              ease: 'easeOut',
            }}
            className={cn(
              'absolute -top-1 -left-0.5 rounded-full bg-gradient-to-t from-orange-500 to-yellow-300 will-change-transform',
              p.size
            )}
          />
        ))}
      </div>
    </div>
  );
});

CollisionBeam.displayName = 'CollisionBeam';
