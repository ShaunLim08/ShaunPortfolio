'use client';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { label: '[01] ABOUT', href: '#aboutMe' },
    { label: '[02] PROJECTS', href: '#projects' },
    { label: '[03] WRITING', href: '#publications' },
    { label: '[04] CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white dark:bg-[#080808] border-b-2 border-black dark:border-white transition-colors duration-150">
      <div className="w-full px-4 sm:px-6 md:px-10 h-16 sm:h-18 flex justify-between items-center">
        {/* Brand Label & Live Status */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="#"
            className="font-mono text-sm sm:text-base font-bold tracking-tight text-black dark:text-white uppercase flex items-center gap-2 hover:text-[#FF3B00] dark:hover:text-[#FF3B00] transition-colors"
          >
            <span className="w-3 h-3 bg-[#FF3B00] inline-block"></span>
            <span>SHAUN_LIM</span>
          </Link>

          {/* Architectural Status Tag */}
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider border border-black dark:border-[#333333] text-black dark:text-[#A3A3A3] bg-neutral-50 dark:bg-[#121212]">
            <span className="w-1.5 h-1.5 bg-[#FF3B00] inline-block animate-pulse"></span>
            <span>STATUS: OPEN_TO_ROLES</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs font-semibold uppercase tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black dark:text-[#E5E5E5] hover:text-[#FF3B00] dark:hover:text-[#FF3B00] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: Theme Toggle & Resume */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Light / Dark Mode Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="h-9 px-3 border border-black dark:border-white bg-white dark:bg-[#080808] text-black dark:text-white font-mono text-xs uppercase font-semibold flex items-center gap-1.5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
              aria-label="Toggle visual theme"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#FF3B00]" />
                  <span className="hidden sm:inline">LIGHT</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">DARK</span>
                </>
              )}
            </button>
          )}

          {/* Resume CTA */}
          <Link
            href="https://drive.google.com/file/d/11Q86K030dLMm5wEkbtX0BTpLpAhlaJeT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 px-4 bg-black text-white dark:bg-white dark:text-black font-mono text-xs uppercase font-bold border border-black dark:border-white flex items-center gap-1.5 hover:bg-[#FF3B00] hover:border-[#FF3B00] dark:hover:bg-[#FF3B00] dark:hover:border-[#FF3B00] dark:hover:text-white transition-colors"
          >
            <span>RESUME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden h-9 w-9 border border-black dark:border-white text-black dark:text-white flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden border-t-2 border-black dark:border-white bg-white dark:bg-[#080808] px-4 py-4">
          <div className="flex flex-col gap-2 font-mono text-xs uppercase font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="py-2.5 px-3 border-b border-neutral-200 dark:border-neutral-800 text-black dark:text-white hover:text-[#FF3B00]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
