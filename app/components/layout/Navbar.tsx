'use client';

import Link from 'next/link';
import { MotionDiv } from '../shared/motion-components';
import { useState } from 'react';
import InnovationMegaMenu from '../shared/InnovationMegaMenu';

const Navbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
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
        <Link href="/companies" className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-brand-primary dark:hover:text-brand-secondary transition-colors relative uppercase tracking-wide">
          Companies
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary dark:bg-brand-secondary transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </MotionDiv>

      {/* Mega Menu for Innovation */}
      <InnovationMegaMenu
        isMegaMenuOpen={isMegaMenuOpen}
        setIsMegaMenuOpen={setIsMegaMenuOpen}
        itemVariants={itemVariants}
      />
    </div>
  );
};

export default Navbar;
