import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { FlipWords } from '@/components/ui/flip-words';

const HeroSection = () => {
  const words = ['CS Student', 'Product Manager', 'Web3 Builder'];

  return (
    <BackgroundBeamsWithCollision>
      <main className="py-10 pt-16 md:pt-18 md-flex md:shrink-0 pb-10 min-h-screen flex items-start justify-center">
        <div className="flex flex-col items-center justify-center text-center px-4 md:px-0 max-w-4xl mx-auto">
          {/* Image Section - Moved to top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-[300px] h-[300px] relative z-0">
              <img
                src="/shaunsquare.jpg"
                alt="shaun pic"
                className="transform rounded-full w-full h-full object-cover"
                width={300}
                height={300}
              />
            </div>
          </motion.div>

          {/* Text Content - Centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center z-10 relative"
          >
            <h1 className="font-extrabold mb-6">
              {/* span text seperator -- for design*/}
              <span className="text-black text-6xl md:text-8xl block mb-4">
                Hello, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 from-10% via-orange-500 via-30% to-yellow-500 to-90%">
                  Shaun
                </span>
              </span>
              <span className="text-5xl md:text-7xl text-black block">
                I'm a{' '}
                <FlipWords
                  words={words}
                  duration={1500}
                  className="text-5xl md:text-7xl font-extrabold text-red-600 dark:text-red-400"
                />
              </span>
            </h1>
            <p className="text-black pt-8 text-base sm:text-lg mb-8 lg:text-xl max-w-2xl mx-auto relative z-10">
              Scroll down to learn more about me!
            </p>

            {/* Buttons - Centered */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
              <Link
                href="#projects"
                className="px-12 py-3 rounded-full border-solid border-2 border-red-600 hover:bg-yellow-600 transition-colors relative z-10"
              >
                <span className="text-xl text-black">Jump to Projects</span>
              </Link>

              <Link
                href="https://drive.google.com/file/d/1VnJdI9p3lftOvIeUS_YnXy-AaeTvsVqu/view?usp=sharing"
                target="_blank"
                className="px-6 py-3 rounded-full border-solid border-2 border-yellow-600 hover:bg-red-600 transition-colors relative z-10"
              >
                <span className="text-xl text-black">View my Resume</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </BackgroundBeamsWithCollision>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
