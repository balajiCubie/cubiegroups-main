'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MotionFooter, MotionDiv } from '../shared/motion-components';
import { useTheme } from '../../context/ThemeContext';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Defines the navigation links for the footer.
 * Each object contains a 'name' for display and an 'href' for the link destination.
 */
const businessLinks = [
  { name: 'Technology', href: '/sectors/technology' },
  { name: 'Steel', href: '/sectors/steel' },
  { name: 'Automotive', href: '/sectors/automotive' },
  { name: 'Consumer & Retail', href: '/sectors/consumer-retail' },
  { name: 'Infrastructure', href: '/sectors/infrastructure' },
  { name: 'Financial Services', href: '/sectors/financial-services' },
  { name: 'Aerospace & Defence', href: '/sectors/aerospace-defence' },
  { name: 'Tourism & Travel', href: '/sectors/tourism-travel' },
  { name: 'Telecom & Media', href: '/sectors/telecom-media' },
  { name: 'Trading & Investment', href: '/sectors/trading-investment' },
];

const communityLinks = [
  { name: 'Health', href: '/community/health' },
  { name: 'Education', href: '/community/education' },
  { name: 'Empowerment', href: '/community/empowerment' },
  { name: 'Environment', href: '/community/environment' },
];

const aboutLinks = [
  { name: 'The cubie group', href: '/about/cubie-group' },
  { name: 'cubieGroup\'s', href: '/about/cubie-sons' },
  { name: 'Values and Purpose', href: '/about/values-purpose' },
  { name: 'Leadership', href: '/about/leadership' },
  { name: 'Heritage', href: '/about/heritage' },
  { name: 'Sustainability', href: '/about/sustainability' },
  { name: 'Innovation', href: '/about/innovation' },
  { name: 'Sponsorships', href: '/about/sponsorships' },
  { name: 'Investors', href: '/investors' },
  { name: 'cubie Code of Conduct', href: '/about/code-of-conduct' },
];

const newsroomLinks = [
  { name: 'Careers', href: '/careers' },
  { name: 'Jobs', href: '/careers/jobs' },
];

const legalLinks = [
  { name: 'Equal Opportunity', href: '/equal-opportunity' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Legal Disclaimer', href: '/legal-disclaimer' },
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.397V14.709h-3.848V11.09h3.848V8.413c0-3.816 2.329-5.904 5.737-5.904 1.633 0 3.044.122 3.456.177v3.993h-2.37c-1.867 0-2.233.884-2.233 2.183v2.87h4.46l-.724 3.619h-3.736V24h6.08C23.407 24 24 23.407 24 22.675V1.325C24 .593 23.407 0 22.675 0z' },
  { name: 'LinkedIn', href: '#', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.044-1.852-3.044-1.853 0-2.136 1.445-2.136 2.953v5.66H9.596V9.092h3.416v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.013c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.439H3.555V9.092h3.564v11.359z' },
  { name: 'X/Twitter', href: '#', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.758 11.24H14.68l-5.21-6.693L3.375 21.75H.967l7.244-8.31L0 2.25h7.545l4.637 5.905L18.244 2.25zm-2.88 17.463l-4.773-6.188-3.53-4.557L2.754 2.75H4.87l4.148 5.34 5.21 6.693 4.774 6.188h-2.064z' },
  { name: 'YouTube', href: '#', icon: 'M19.612 5.33C19.4 4.59 18.79 4 18.05 3.78 16.5 3.33 12 3.33 12 3.33s-4.5 0-6.05.45C5.21 4 4.6 4.59 4.388 5.33 3.93 6.88 3.93 12 3.93 12s0 5.12.458 6.67c.212.74.822 1.33 1.562 1.55C7.5 20.67 12 20.67 12 20.67s4.5 0 6.05-.45c.74-.22 1.35-.81 1.562-1.55.458-1.55.458-6.67.458-6.67s0-5.12-.458-6.67zM10.75 15.25V8.75L15.5 12l-4.75 3.25z' },
  { name: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.148-4.77-1.691-4.919-4.919-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.07 4.85-.07zm0 2.163c-3.204 0-3.584.012-4.85.07-2.715.124-3.96 1.42-4.037 4.037-.058 1.265-.07 1.644-.07 4.85s.012 3.584.07 4.85c.077 2.616 1.322 3.913 4.037 4.037 1.265.058 1.644.07 4.85.07s3.584-.012 4.85-.07c2.715-.124 3.96-1.42 4.037-4.037.058-1.265.07-1.644.07-4.85s-.012-3.584-.07-4.85c-.077-2.616-1.322-3.913-4.037-4.037-1.265-.058-1.644-.07-4.85-.07zm0 3.627c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zm0 2.163c1.289 0 2.337 1.048 2.337 2.337s-1.048 2.337-2.337 2.337-2.337-1.048-2.337-2.337 1.048-2.337 2.337-2.337zm6.406-5.613c-.81 0-1.47.659-1.47 1.47s.66 1.47 1.47 1.47c.81 0 1.47-.659 1.47-1.47s-.66-1.47-1.47-1.47z' },
  { name: 'Email', href: '#', icon: 'M22 6.923V17.077C22 18.142 21.142 19 20.077 19H3.923C2.858 19 2 18.142 2 17.077V6.923C2 5.858 2.858 5 3.923 5H20.077C21.142 5 22 5.858 22 6.923zM20.077 7L12 12.5L3.923 7H20.077zM3.923 17L12 11.5L20.077 17H3.923z' },
];

/**
 * Footer component for the Cubie Group's website.
 * Includes navigation, social links, and copyright information.
 * Utilizes Framer Motion for subtle entry animations.
 */

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [gdprConsent, setGdprConsent] = useState(false);
  const [newsletterStatus, setNewsletterStatus] = useState(''); // 'success', 'error', ''

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && gdprConsent) {
      console.log('Newsletter signup:', { email, gdprConsent });
      setNewsletterStatus('success');
      setEmail('');
      setGdprConsent(false);
      setTimeout(() => setNewsletterStatus(''), 3000); // Clear status after 3 seconds
    } else {
      setNewsletterStatus('error');
      setTimeout(() => setNewsletterStatus(''), 3000);
    }
  };

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MotionFooter
      className="bg-background text-foreground relative font-sans border-t border-blue-900/50"
      initial="hidden"
      animate="visible"
      variants={footerVariants}
    >
      {/* Subtle background animation for modular network feel */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1: About & Legal */}
          <MotionDiv variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4 text-neon-blue-gradient">About Cubie Group</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-neon-blue-gradient transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold text-white mt-8 mb-4 text-neon-blue-gradient">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-neon-blue-gradient transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Column 2: Business & Community */}
          <MotionDiv variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4 text-neon-blue-gradient">Our Business</h3>
            <ul className="space-y-2">
              {businessLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-neon-blue-gradient transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold text-white mt-8 mb-4 text-neon-blue-gradient">Community Initiatives</h3>
            <ul className="space-y-2">
              {communityLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-neon-blue-gradient transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </MotionDiv>

          {/* Column 3: Newsroom & Careers */}
          <MotionDiv variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-4 text-neon-blue-gradient">Newsroom</h3>
            <ul className="space-y-2">
              {newsroomLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-neon-blue-gradient transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold text-white mt-8 mb-4 text-neon-blue-gradient">Careers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/careers" className="text-sm text-gray-300 hover:text-neon-blue-gradient transition-colors">
                  Explore Opportunities
                </Link>
              </li>
              <li>
                <Link href="/careers/jobs" className="text-sm text-gray-300 hover:text-neon-blue-gradient transition-colors">
                  Job Listings
                </Link>
              </li>
            </ul>
          </MotionDiv>

          {/* Column 4: Social & Newsletter */}
          <MotionDiv variants={itemVariants} className="lg:col-span-1 flex flex-col items-start lg:items-end">
            <h3 className="text-lg font-bold text-white mb-4 text-neon-blue-gradient">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="text-gray-300 hover:text-neon-blue-gradient transition-colors transform hover:scale-110"
                >
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d={link.icon}></path>
                  </svg>
                </a>
              ))}
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col w-full max-w-xs lg:text-right">
              <p className="text-gray-300 text-sm mb-2">Stay updated with our latest news:</p>
              <input
                type="email"
                placeholder="Enter your email ID"
                aria-label="Email for newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 text-sm rounded-md border border-blue-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-neon-blue-gradient glassmorphism"
                required
              />
              <div className="flex items-center mt-2">
                <input
                  type="checkbox"
                  id="gdprConsent"
                  checked={gdprConsent}
                  onChange={(e) => setGdprConsent(e.target.checked)}
                  className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="gdprConsent" className="ml-2 text-xs text-gray-400">
                  I agree to the privacy policy and terms.
                </label>
              </div>
              <button
                type="submit"
                className="mt-4 px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/30"
              >
                Subscribe
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
              <AnimatePresence>
                {newsletterStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-400 text-xs mt-2"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
                {newsletterStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-400 text-xs mt-2"
                  >
                    Please enter a valid email and accept the terms.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </MotionDiv>
        </div>

        {/* Copyright and Scroll to Top */}
        <div className="mt-12 pt-8 border-t border-gray-700/50 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Cubie Group Private Limited. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className={`mt-4 md:mt-0 px-4 py-2 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-blue-700 transition-all duration-300 flex items-center ${showScrollToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
            Back to Top
          </button>
        </div>
      </div>
    </MotionFooter>
  );
};

export default Footer;
