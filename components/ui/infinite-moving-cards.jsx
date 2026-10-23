'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

export const InfiniteMovingCards = ({
  items = [],
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}) => {
  const durationMap = {
    fast: '25s',
    normal: '40s',
    slow: '65s',
  };

  const animationDuration = durationMap[speed] || '40s';
  const animationDirection = direction === 'left' ? 'forwards' : 'reverse';
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className={cn(
        'scroller relative z-20 max-w-full overflow-hidden border-y-2 border-black dark:border-white py-6 bg-neutral-100 dark:bg-[#101010]',
        className
      )}
      style={{
        '--animation-duration': animationDuration,
        '--animation-direction': animationDirection,
      }}
    >
      <ul
        className={cn(
          'flex min-w-full shrink-0 gap-6 w-max flex-nowrap will-change-transform animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {duplicatedItems.map((item, idx) => (
          <PublicationCard
            key={`${item.title || item.name}-${idx}`}
            item={item}
            index={(idx % items.length) + 1}
          />
        ))}
      </ul>
    </div>
  );
};

const PublicationCard = ({ item, index }) => {
  const [imgError, setImgError] = useState(false);

  const resolvedImage = item.image
    ? item.image.startsWith('public/')
      ? item.image.replace(/^public\//, '/')
      : item.image
    : null;

  return (
    <li className="w-[320px] sm:w-[400px] flex-shrink-0 border-2 border-black dark:border-white bg-white dark:bg-[#0E0E0E] flex flex-col justify-between">
      <Link
        href={item.link || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full group"
      >
        {/* 16:9 Image Window with 0px sharp border */}
        <div className="relative aspect-video w-full overflow-hidden bg-black border-b-2 border-black dark:border-white">
          {!imgError && resolvedImage ? (
            <img
              src={resolvedImage}
              alt={item.title || item.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="h-full w-full object-cover filter contrast-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-black text-white font-mono text-xs">
              [ NO_MEDIA_PREVIEW ]
            </div>
          )}

          {/* Top Label */}
          <div className="absolute top-2 left-2 bg-black text-white font-mono text-[10px] font-bold px-2 py-0.5 border border-white/20">
            ARTICLE // #{index.toString().padStart(2, '0')}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 font-mono flex flex-col justify-between">
          <div>
            <div className="text-[11px] uppercase font-bold text-[#FF3B00] mb-1.5">
              AUTHOR: {item.name || 'SHAUN LIM'}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-black dark:text-white font-normal leading-snug mb-3 group-hover:text-[#FF3B00] transition-colors line-clamp-2">
              {item.title}
            </h3>

            <p className="text-xs text-black dark:text-[#CCCCCC] line-clamp-3 leading-relaxed mb-4">
              "{item.quote}"
            </p>
          </div>

          <div className="pt-3 border-t border-black dark:border-neutral-800 flex items-center justify-between text-xs font-bold text-black dark:text-white group-hover:text-[#FF3B00] transition-colors">
            <span>[ READ_PUBLICATION ]</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </li>
  );
};
