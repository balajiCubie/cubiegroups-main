'use client';

import Link from 'next/link';
import { MotionDiv } from './motion-components';

interface InnovationMegaMenuProps {
  isMegaMenuOpen: boolean;
  setIsMegaMenuOpen: (isOpen: boolean) => void;
  itemVariants: any; // Define a more specific type if available
}

const InnovationMegaMenu: React.FC<InnovationMegaMenuProps> = ({
  isMegaMenuOpen,
  setIsMegaMenuOpen,
  itemVariants,
}) => {
  return (
    <MotionDiv
      variants={itemVariants}
      onMouseEnter={() => setIsMegaMenuOpen(true)}
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
  );
};

export default InnovationMegaMenu;
