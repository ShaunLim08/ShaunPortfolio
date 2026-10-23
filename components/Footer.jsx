import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-white dark:bg-[#080808] py-8 transition-colors duration-150 font-mono text-xs uppercase">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-black dark:text-[#A3A3A3]">
        <div className="flex items-center gap-2 font-bold">
          <span className="w-2.5 h-2.5 bg-[#FF3B00] inline-block"></span>
          <span className="text-black dark:text-white">Shaun's Personal Site</span>
        </div>

        <div className="flex items-center gap-6">
          <p>Copyright &copy; All rights reserved</p>
          <button
            onClick={scrollToTop}
            className="h-8 px-3 border border-black dark:border-white bg-white dark:bg-[#080808] text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-1 font-bold"
            aria-label="Scroll back to top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
