import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const HeroSection = () => {
  const words = ['Web3 Builder', 'Product Manager', 'Community Builder'];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <section className="w-full border-b-2 border-black dark:border-white py-14 sm:py-20 lg:py-24 bg-white dark:bg-[#080808] transition-colors duration-150">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Asymmetrical 2-Column Broadsheet Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column (65% / 7.5 cols): Editorial Typography & Action */}
          <div className="lg:col-span-7 flex flex-col justify-start text-left">
            {/* Architectural Index Tag */}
            <div className="font-mono text-xs uppercase tracking-widest text-black dark:text-[#A3A3A3] mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#FF3B00] inline-block"></span>
              <span>INDEX // PERS_PORTFOLIO_2026</span>
            </div>

            {/* Massive Editorial Headline */}
            <h1 className="tracking-tight text-black dark:text-white mb-6">
              <span className="font-serif text-6xl sm:text-8xl md:text-9xl block leading-[0.92] italic font-normal">
                Hello, I'm
              </span>
              <span className="font-serif text-6xl sm:text-8xl md:text-9xl block leading-[0.95] font-normal mt-1">
                Shaun
              </span>
            </h1>

            {/* Rotating Role in Strict Monospace */}
            <div className="font-mono text-lg sm:text-2xl md:text-3xl text-black dark:text-white font-bold my-4 flex flex-wrap items-baseline gap-2">
              <span className="text-black dark:text-[#A3A3A3] font-normal">I'm a</span>
              <span className="border border-black dark:border-white px-3 py-1 bg-neutral-100 dark:bg-[#141414] text-[#FF3B00] inline-block tracking-tight">
                [ {words[wordIndex]} ]
              </span>
            </div>

            {/* Preserved Tagline */}
            <p className="font-mono text-sm sm:text-base text-black dark:text-[#D4D4D4] pt-4 mb-8 max-w-lg leading-relaxed">
              Scroll down to learn more about me!
            </p>

            {/* Sharp Rectangular Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="#projects"
                className="brutalist-btn px-6 py-3.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black dark:border-white"
              >
                <span>Jump to Projects</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#FF3B00]" />
              </Link>

              <Link
                href="https://drive.google.com/file/d/17C3VP7rZ9hzt5CyhxSZaEKTC4-fWwTHB/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="brutalist-btn-outline px-6 py-3.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black dark:border-white"
              >
                <span>View my Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column (35% / 5 cols): Stark Square Image & Technical Spec Sheet */}
          <div className="lg:col-span-5 flex flex-col items-start w-full">
            {/* Square Portrait with 2px Solid Border */}
            <div className="w-full aspect-square max-w-[380px] border-2 border-black dark:border-white bg-neutral-100 dark:bg-[#121212] overflow-hidden relative">
              <img
                src="/shaunsquare.jpg"
                alt="Shaun Lim"
                className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-2 left-2 bg-black text-white dark:bg-white dark:text-black font-mono text-[10px] uppercase font-bold px-2 py-0.5">
                FIG. 01 // OPERATOR
              </div>
            </div>

            {/* Technical Ledger Table */}
            <div className="w-full max-w-[380px] border-x-2 border-b-2 border-black dark:border-white bg-neutral-50 dark:bg-[#121212] font-mono text-xs uppercase">
              <div className="flex justify-between p-2.5 border-b border-black dark:border-neutral-800">
                <span className="text-black dark:text-[#888888]">OPERATOR:</span>
                <span className="font-bold text-black dark:text-white">SHAUN LIM</span>
              </div>
              <div className="flex justify-between p-2.5 border-b border-black dark:border-neutral-800">
                <span className="text-black dark:text-[#888888]">PRIMARY_ROLE:</span>
                <span className="font-bold text-black dark:text-white">PRODUCT & DEV</span>
              </div>
              <div className="flex justify-between p-2.5 border-b border-black dark:border-neutral-800">
                <span className="text-black dark:text-[#888888]">ECOSYSTEM:</span>
                <span className="font-bold text-[#FF3B00]">WEB3 / FINTECH</span>
              </div>
              <div className="flex justify-between p-2.5">
                <span className="text-black dark:text-[#888888]">STATUS:</span>
                <span className="font-bold text-black dark:text-white">AVAILABLE_2026</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
