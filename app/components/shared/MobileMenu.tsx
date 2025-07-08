'use client';

import Link from 'next/link';
import { MotionDiv, MotionButton } from './motion-components';
import { useTheme } from '../../context/ThemeContext';
import SearchBar from './SearchBar';
import { useState } from 'react';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const { toggleTheme, isDarkMode } = useTheme();

  return (
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
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
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
  );
};

export default MobileMenu;
