'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MotionHeader, MotionDiv, MotionButton } from './motion-components';
import { useTheme } from '../context/ThemeContext';
import SearchBar from './SearchBar';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { theme, toggleTheme, isDarkMode } = useTheme();

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MotionHeader
      className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-sm transition-colors duration-300 backdrop-blur-md bg-opacity-80 dark:bg-opacity-80"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-start">
             {/* Cubie Group Logo SVG - Placeholder for a more modular/futuristic design */}
                <svg className="w-8 h-8 text-brand-primary dark:text-brand-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" rx="1" ry="1"></rect>
                  <rect x="14" y="3" width="7" height="7" rx="1" ry="1"></rect>
                  <rect x="3" y="14" width="7" height="7" rx="1" ry="1"></rect>
                  <rect className="dark:text-[#fff]" x="14" y="14" width="7" height="7" rx="1" ry="1"></rect>
                </svg>
            <MotionDiv whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/" className="flex flex-col items-start space-y-0.5">

                <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">CUBIE GROUP</span>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-light tracking-wide">The Modular Future</span>
              </Link>
            </MotionDiv>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {/* Home Link */}
            <MotionDiv variants={itemVariants} className="relative group">
              <Link href="/" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors relative uppercase tracking-wide">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary dark:bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </MotionDiv>


            {/* Blog Link */}
            <MotionDiv variants={itemVariants} className="relative group">
              <Link href="/blog" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors relative uppercase tracking-wide">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary dark:bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </MotionDiv>

            {/* About Link */}
            <MotionDiv variants={itemVariants} className="relative group">
              <Link href="/about" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors relative uppercase tracking-wide">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary dark:bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </MotionDiv>

            {/* Investors Link */}
            <MotionDiv variants={itemVariants} className="relative group">
              <Link href="/investors" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors relative uppercase tracking-wide">
                Investors
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary dark:bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </MotionDiv>

            {/* Companies & Sectors Link */}
            <MotionDiv variants={itemVariants} className="relative group">
              <Link href="/companies-sectors" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors relative uppercase tracking-wide">
                Companies & Sectors
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary dark:bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </MotionDiv>

            {/* Mega Menu for Innovation */}
            <MotionDiv
              variants={itemVariants}
              onMouseEnter={() => setIsMegaMenuOpen(true)} // Reusing isMegaMenuOpen for simplicity, ideally separate state
              onMouseLeave={() => setIsMegaMenuOpen(false)}
              className="relative group"
            >
              <button
                className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors flex items-center relative uppercase tracking-wide"
                aria-expanded={isMegaMenuOpen ? "true" : "false"}
                aria-haspopup="true"
              >
                Innovation
                <svg className="ml-1 h-4 w-4 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: isMegaMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary dark:bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
              {isMegaMenuOpen && (
                <MotionDiv
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 mt-4 w-[36rem] bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 grid grid-cols-2 gap-6 border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {/* Placeholder for Innovation dropdown content */}
                  <div className="flex flex-col space-y-2">
                    <Link href="/innovation/open-challenges" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">Open Challenges</Link>
                    <Link href="/innovation/patents" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">Patents & IP</Link>
                    <Link href="/innovation/milestones" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">Milestones</Link>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Link href="/innovation/collaboration" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">Collaboration</Link>
                    <Link href="/innovation/partner-success" className="text-sm font-medium text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors">Partner Success</Link>
                  </div>
                </MotionDiv>
              )}
            </MotionDiv>
          </div>

          {/* Right-aligned utilities: Language and Dark/Light Mode */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="relative">
              <select
                className="bg-transparent text-gray-700 dark:text-gray-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary dark:focus:ring-brand-secondary appearance-none pr-6 cursor-pointer"
                defaultValue="en"
                aria-label="Select language"
              >
                <option value="en">EN</option>
                <option value="ja">JA</option>
                <option value="de">DE</option>
                <option value="pt">PT</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700 dark:text-gray-200">
                <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>

            {/* Dark/Light Mode Switch */}
            <MotionButton
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Toggle ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8 0 1010.586 10.586z" />
                </svg>
              )}
            </MotionButton>
          </div>

          {/* Mobile Menu Button and Search/Theme Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <SearchBar /> {/* Search bar remains for mobile */}
            <MotionButton
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={`Toggle ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8 0 1010.586 10.586z" />
                </svg>
              )}
            </MotionButton>
            <button
              type="button"
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-primary dark:focus:ring-brand-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              {/* Animated Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <MotionDiv
                  initial={false}
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{
                    closed: { d: "M4 6h16" },
                    open: { d: "M6 18L18 6" },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <MotionDiv
                  initial={false}
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{
                    closed: { d: "M4 12h16" },
                    open: { d: "M6 6L18 18" },
                  }}
                  transition={{ duration: 0.3 }}
                />
                <MotionDiv
                  initial={false}
                  animate={isMenuOpen ? "open" : "closed"}
                  variants={{
                    closed: { d: "M4 18h16" },
                    open: { d: "M6 6L18 18" }, // This line will be hidden or transformed
                  }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <MotionDiv
          className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-800 p-6 shadow-lg border-t border-gray-100 dark:border-gray-700 transition-colors duration-300 overflow-y-auto h-[calc(100vh-4rem)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4" id="mobile-menu">
            {/* Mobile Home Link */}
            <Link href="/" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors flex items-center py-2 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>


            {/* Mobile Companies & Sectors Link */}
            <Link href="/companies-sectors" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors flex items-center py-2 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>
              Companies & Sectors
            </Link>

            {/* Mobile Blog Link */}
            <Link href="/blog" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors flex items-center py-2 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>

            {/* Mobile About Link */}
            <Link href="/about" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors flex items-center py-2 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>

            {/* Mobile Investors Link */}
            <Link href="/investors" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors flex items-center py-2 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>
              Investors
            </Link>

            {/* Mobile Mega Menu for Innovation */}
            <div className="relative w-full">
              <button
                className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors flex items-center w-full justify-between py-2 uppercase tracking-wide"
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)} // Reusing state, ideally separate
                aria-controls="mobile-mega-menu-innovation"
                aria-expanded={isMegaMenuOpen ? "true" : "false"}
              >
                Innovation
                <svg className="ml-1 h-5 w-5 transform transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ transform: isMegaMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isMegaMenuOpen && (
                <MotionDiv
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 pl-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700"
                  id="mobile-mega-menu-innovation"
                >
                  {/* Placeholder for Innovation dropdown content */}
                  <Link href="/innovation/open-challenges" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Open Challenges</Link>
                  <Link href="/innovation/patents" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Patents & IP</Link>
                  <Link href="/innovation/milestones" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Milestones</Link>
                  <Link href="/innovation/collaboration" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Collaboration</Link>
                  <Link href="/innovation/partner-success" className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Partner Success</Link>
                </MotionDiv>
              )}
            </div>

            {/* Mobile Newsroom Link */}
            <Link href="/newsroom" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors flex items-center py-2 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>
              Newsroom
            </Link>

            {/* Mobile Careers Link */}
            <Link href="/careers" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors flex items-center py-2 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>
              Careers
            </Link>

            {/* Mobile Contact Link */}
            <Link href="/contact" className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors flex items-center py-2 uppercase tracking-wide" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>

            {/* Mobile Language and Dark Mode Toggles */}
            <div className="pt-4 mt-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Language</span>
                <select
                  className="bg-transparent text-gray-900 dark:text-white rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-brand-primary dark:focus:ring-brand-secondary appearance-none pr-6 cursor-pointer"
                  defaultValue="en"
                  aria-label="Select language"
                >
                  <option value="en">EN</option>
                  <option value="ja">JA</option>
                  <option value="de">DE</option>
                  <option value="pt">PT</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Dark Mode</span>
                <MotionButton
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-primary dark:focus:ring-brand-secondary transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Toggle ${isDarkMode ? 'light' : 'dark'} mode`}
                >
                  {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8 0 1010.586 10.586z" />
                    </svg>
                  )}
                </MotionButton>
              </div>
            </div>
          </div>
        </MotionDiv>
      )}
    </MotionHeader>
  );
};

export default Header;
