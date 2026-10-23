'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

const EmailSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('slim12252@gmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <section className="w-full border-b-2 border-black dark:border-white py-16 sm:py-24 bg-neutral-50 dark:bg-[#0A0A0A] transition-colors duration-150" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        
        {/* Section Index Marker */}
        <div className="font-mono text-xs uppercase tracking-widest text-[#FF3B00] mb-3 font-bold flex items-center gap-2">
          <span>// SECTION_05</span>
          <span className="w-8 h-[2px] bg-[#FF3B00] inline-block"></span>
          <span>COMMUNICATION_DISPATCH</span>
        </div>

        {/* Monolithic Contact Panel */}
        <div className="border-2 border-black dark:border-white bg-white dark:bg-[#080808]">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-black dark:divide-white items-stretch">
            
            {/* Left Column (7 cols): Heading, Copy & Social Links */}
            <div className="lg:col-span-7 p-6 sm:p-10 md:p-12 flex flex-col justify-between">
              <div>
                <h2 className="font-serif text-5xl sm:text-7xl font-normal text-black dark:text-white leading-tight mb-6">
                  Let's Connect
                </h2>

                <p className="font-mono text-sm sm:text-base text-black dark:text-[#E0E0E0] mb-8 max-w-xl leading-relaxed text-justify">
                  I'm currently looking for new opportunities, my inbox is always
                  open. Do hit me up if you have any questions or just want to say
                  hi! I'll try my best to get back to you!
                </p>

                <h4 className="font-mono text-xs uppercase tracking-widest font-bold text-[#FF3B00] mb-4">
                  Let's get in touch!
                </h4>

                {/* Sharp Rectangular Social Links */}
                <div className="flex flex-wrap gap-2.5 font-mono text-xs uppercase font-bold">
                  <Link
                    href="https://github.com/ShaunLim08"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutalist-btn-outline px-4 py-2.5 flex items-center gap-2 border-2 border-black dark:border-white"
                  >
                    <FaGithub className="text-sm" />
                    <span>GITHUB</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/shaun-lim-bb563b222/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutalist-btn-outline px-4 py-2.5 flex items-center gap-2 border-2 border-black dark:border-white"
                  >
                    <FaLinkedin className="text-sm" />
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="https://www.instagram.com/_shaun_shaun_shaun_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutalist-btn-outline px-4 py-2.5 flex items-center gap-2 border-2 border-black dark:border-white"
                  >
                    <FaInstagram className="text-sm" />
                    <span>INSTAGRAM</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-black dark:border-neutral-800 font-mono text-[11px] text-black dark:text-[#888888] uppercase">
                LOC: KUALA LUMPUR, MALAYSIA // UTC+8
              </div>
            </div>

            {/* Right Column (5 cols): Direct Email Dispatch Block */}
            <div className="lg:col-span-5 p-6 sm:p-10 md:p-12 bg-neutral-50 dark:bg-[#0E0E0E] flex flex-col justify-between font-mono">
              <div>
                <div className="text-xs uppercase font-bold text-black dark:text-[#888888] mb-2 flex justify-between">
                  <span>DISPATCH_TERMINAL</span>
                  <span>[ DIRECT_INBOX ]</span>
                </div>

                <div className="p-4 border-2 border-black dark:border-white bg-white dark:bg-[#080808] my-6">
                  <div className="text-[11px] uppercase font-bold text-[#FF3B00] mb-1">
                    TARGET_EMAIL:
                  </div>
                  <div className="text-sm sm:text-base font-bold text-black dark:text-white break-all">
                    slim12252@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <button
                  onClick={handleCopy}
                  className="brutalist-btn w-full py-3.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black dark:border-white"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#FF3B00]" />
                      <span>COPIED_TO_CLIPBOARD</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>COPY_EMAIL_ADDRESS</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:slim12252@gmail.com"
                  className="brutalist-btn-outline w-full py-3.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2 border-2 border-black dark:border-white"
                >
                  <span>SEND_MESSAGE_DIRECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default EmailSection;