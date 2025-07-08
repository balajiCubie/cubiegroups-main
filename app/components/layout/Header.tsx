'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MotionHeader, MotionDiv, MotionButton } from '../shared/motion-components';
import { useTheme } from '../../context/ThemeContext';
import SearchBar from '../shared/SearchBar';
import Navbar from './Navbar';
import MobileMenu from '../shared/MobileMenu';


const Header = () => {
  const { toggleTheme, isDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <Navbar />

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
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      )}
    </MotionHeader>
  );
};

export default Header;
